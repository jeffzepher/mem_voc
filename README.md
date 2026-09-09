# Mem Words

邮箱登录后背单词，自动同步动词/名词练习进度、选项顺序、错题本、昵称和声音设置。沿用原单页应用与内置词库，页面通过 GitHub Pages 托管，账号由 Supabase Auth 管理。

## 本地运行

需要 Node.js 22 或更新版本。

```sh
npm ci
```

复制 `config.example.json` 为 `config.local.json`，填写项目 URL 和 `sb_publishable_` 开头的前端 key。然后：

```sh
npm test
npm run build
npm run preview
```

打开 http://127.0.0.1:4173/mem_voc/ 。不要直接双击源码 `index.html`；浏览器脚本及配置由构建生成。`config.local.json`、`.env*`、`node_modules/` 和 `dist/` 均不进入 Git。当前工作区已配置本地的 Mem Words 项目。

## GitHub Pages 部署

目标仓库：https://github.com/jeffzepher/mem_voc

实际网站：https://jeffzepher.github.io/mem_voc/

1. 在仓库 **Settings → Secrets and variables → Actions → New repository secret** 添加 `SUPABASE_URL` 和 `SUPABASE_PUBLISHABLE_KEY`，值来自本地配置或 Supabase Connect 面板。
2. 在 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 将变更合入 `main`，或在 Actions 手动运行 **Deploy Mem Words to GitHub Pages**。
4. 工作流执行依赖安装、测试、构建，仅上传 `dist/`，随后部署 Pages。PR 的构建使用虚拟公开配置，不部署。

GitHub Secrets 只避免配置实际值进入源码历史。构建后的项目 URL 和 publishable key 必须提供给浏览器，因此仍然可见。用户数据权限由 Auth + RLS 决定。不得把数据库密码、`sb_secret_` key 或旧 `service_role` key 放入前端配置、仓库或 Pages 产物。本版无需管理密钥。

参考：[Supabase API keys](https://supabase.com/docs/guides/getting-started/api-keys)、[GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## Supabase 设置

当前项目为 **Mem Words**。迁移 `supabase/migrations/20260909082413_account_learning_sync.sql` 已应用到当前项目；不要在此项目重复执行。新建空项目时再通过 SQL Editor 执行迁移，或使用 Supabase CLI 的迁移流程。已有同名表的项目必须先检查结构，不能直接覆盖。

三张表均已启用 RLS，`authenticated` 仅能 SELECT / INSERT / UPDATE 本人的记录，无 DELETE 权限，游客无访问权限。数据库通过外键关联 `auth.users`，并在更新时生成服务端时间。资料不存储密码，也不复制 Auth 邮箱。

在 **Authentication → URL Configuration** 配置：

- Site URL：`https://jeffzepher.github.io/mem_voc/`
- Redirect URLs：`https://jeffzepher.github.io/mem_voc/` 和 `https://jeffzepher.github.io/mem_voc/index.html`
- 本地验证邮件流程时，可临时添加 `http://127.0.0.1:4173/mem_voc/` 和 `http://127.0.0.1:4173/mem_voc/index.html`。

`github.com/...` 是代码仓库，不能用作登录回跳地址。回跳页面与原页面相同，无需单独路由。浏览器端使用 Supabase 的 implicit flow，验证与重设链接可在其他设备打开；SDK 接收链接中的会话，`PASSWORD_RECOVERY` 事件只开放新密码表单。

在 **Authentication → Sign In / Providers → Email** 开启邮箱登录和邮箱确认。首版注册/新密码要求至少 8 个字符；可在 Supabase 配置更强的密码规则。

正式开放注册前，请在 **Authentication → Email → SMTP Settings** 配置自己的邮件发送服务，并验证发件域名。Supabase 默认邮件服务受收件人和发送额度限制，不能作为面向所有用户的正式邮件服务。SMTP 密码只存 Supabase 设置，不放到这个项目里。实际收信、垃圾邮件分发和验证/重设链接仍需使用你能接收邮件的测试账号验收。

参考：[SMTP](https://supabase.com/docs/guides/auth/auth-smtp)、[回跳 URL](https://supabase.com/docs/guides/auth/redirect-urls)。

## 保存和兼容行为

- 每个账号、每个词类单独保存快照；正常操作立即保存到本机待同步队列，短暂合并后串行上传。不同设备以最后成功写入为准。重新登录/刷新读取云端，首版不做实时推送或多设备自动合并。
- 快照版本 4 保存当前题目顺序、选项、答案、索引、模式和压缩的普通练习/错题状态。内置词库仍随页面发布，不复制到每个用户的数据库记录。
- 云端读取失败保持练习锁定，提供重试，不把空白状态写入数据库。网络恢复、切到后台、手动重试及每 15 秒都会尝试上传待同步记录。
- 退出后保留按账号隔离的未同步队列，以便本人重新登录时恢复；其他账号不会读取或上传它。未同步时关闭页面会提示。浏览器清除站点数据仍会移除尚未上传的记录。
- 首次登录检测旧版 Cookie，只在明确选择导入后迁移尚无云端记录的词类。采用 insert-only 避免覆盖另一个设备刚创建的云端记录。旧 Cookie 不删除；不同域名/不同浏览器的 Cookie 无法读取。
- 重置只影响当前词类。复习答对移除错题，返回普通练习不会重新添加已复习完成的历史错题。

## 验证

`npm test` 覆盖账号切换期间的异步响应、邮箱回跳路径、密码重设门禁、读取失败不写空数据、串行同步/离线重试、快照恢复、旧 Cookie 导入、错题回归、快捷键和使用真实 PostgreSQL 引擎的 RLS 测试。

`node scripts/check-cloud.mjs` 使用本地公开配置执行只读检查：邮箱提供商配置与三张表的游客访问拒绝。不会注册账号或发送邮件。

已在目标 Supabase 项目内用临时测试用户和模拟 JWT 身份验证本人读写、跨账号拒绝、修改归属拒绝和游客拒绝；所有测试夹具均在事务中回滚。此检查不能替代真实邮件和两台浏览器登录验收。

Supabase advisor 未报告业务表权限问题；项目仍有一项可选设置提示：[泄露密码保护未启用](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection)。是否可启用取决于项目套餐。
