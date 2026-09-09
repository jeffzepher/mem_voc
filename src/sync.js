// A queue belongs to exactly one auth session. Never change its user ID.
export class SyncQueue {
  constructor({ userId, storage, namespace, write, onStatus = () => {}, delay = 450 }) {
    Object.assign(this, { userId, storage, write, onStatus, delay });
    this.key = `${namespace}:pending:${userId}`;
    this.pending = {};
    this.closed = false;
    this.running = null;
    this.timer = null;
    this.storageOK = true;
    try {
      const raw = storage.getItem(this.key);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.version !== 1 || !parsed.items || typeof parsed.items !== 'object' || Array.isArray(parsed.items)) throw new Error('待同步记录格式损坏');
        this.pending = parsed.items;
      }
    } catch (error) {
      // Corrupt data must block loading rather than silently erase pending work.
      throw new Error(`无法读取本机待同步记录：${error.message}`);
    }
  }
  persist() {
    try {
      this.storage.setItem(this.key, JSON.stringify({ version: 1, items: this.pending }));
      this.storageOK = true;
    } catch { this.storageOK = false; }
  }
  status(value) {
    if (!this.closed) this.onStatus(this.storageOK ? value : '本机存储不可用，请保持页面打开并同步');
  }
  enqueue(key, item) {
    if (this.closed) return;
    this.pending[key] = structuredClone(item);
    this.persist();
    this.status('未同步');
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.flush(), this.delay);
  }
  flush() {
    if (this.closed) return Promise.resolve();
    clearTimeout(this.timer);
    if (this.running) return this.running;
    this.running = this.drain().finally(() => { this.running = null; });
    return this.running;
  }
  async drain() {
    while (!this.closed && Object.keys(this.pending).length) {
      const key = Object.keys(this.pending)[0];
      const item = this.pending[key];
      this.status('正在同步…');
      try {
        await this.write(item, this.userId);
        if (this.closed) return;
        // Edits made while the request was running must not be discarded.
        if (this.pending[key] === item) delete this.pending[key];
        this.persist();
      } catch {
        this.status('未同步 · 网络恢复后重试');
        return;
      }
    }
    this.status('已同步');
  }
  close() {
    this.closed = true;
    clearTimeout(this.timer);
  }
}
