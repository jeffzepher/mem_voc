# 词库维护说明

首页已经拆分为：

- `index.html`：页面结构。
- `style.css`：页面样式。
- `app.js`：答题、错题、计时和备份逻辑。
- `data/catalog.json`：词库清单与默认词库。
- `data/toefl-common.json`：现有全部单词、中文释义、例句和历史词序。

## 更换词库

现有词库显示名称为“默认词库”，ID 仍为 `toefl-common`，原学习记录继续沿用。
清单还包含“四级新增词库”“六级新增词库”“雅思新增词库”“托福新增词库”。
各新增词库均按英文拼写（忽略大小写、跨词性）排除默认词库中的全部词条；新增词库之间允许重合，可独立备考。
词条在同一词库内仅归入来源提供的首个受支持词性。常规可由已收录形容词推导的 `-ly` 副词会过滤，特殊词义副词保留。
每类不足四种释义时不纳入四选一练习；短语不纳入单词词库。例句取自来源中包含该词的完整例句，无合适例句时留空。

新增词表来源：[KyleBing/english-vocabulary](https://github.com/KyleBing/english-vocabulary)，
版本及原文件路径记录在每个 JSON 的 `source` 中，许可证见 `data/EXAM-SOURCE-LICENSE.txt`。
这是公开备考词表的补充集合，不代表考试官方唯一词汇范围。
生成方式：`python tools/build_exam_libraries.py ../exam-source`，输入目录需包含四份原始 JSONL、commit.txt 和 LICENSE。

1. 复制 `data/toefl-common.json` 为新的 JSON 文件。
2. 修改 `id`、`name` 和 `wordSets`。完全不同的一批词应使用新的 `id`，例如 `academic-2027`；只校对原词库则保留原 ID。
3. 在 `data/catalog.json` 的 `datasets` 中添加文件，`file` 相对于清单文件。例如 `./academic-2027.json`。
4. 将 `defaultDataset` 改为新词库 ID 即可更换默认词库。多个条目时，点击“选择词库 ▾”会显示下拉菜单，选择后自动加载该词库及对应记录。

不要改 `app.js` 或 `index.html` 中的数据；它们不再包含词条。

## 词库 JSON 格式

```json
{
  "format": "vocabulary-dataset",
  "version": 1,
  "id": "example-nouns",
  "name": "示例名词词库",
  "wordSets": {
    "noun": [
      { "en": "apple", "cn": "苹果", "example": "I ate an apple." },
      { "en": "river", "cn": "河流", "example": "We crossed the river." },
      { "en": "method", "cn": "方法", "example": "This method saves time." },
      { "en": "courage", "cn": "勇气", "example": "She showed great courage." }
    ]
  }
}
```

支持 `verb`、`noun`、`adjective`、`adverb`、`preposition`、`conjunction`。
每类至少四个不重复的英文词条，至少四种不同释义，以供生成四个选项。
词类内的数组顺序就是题目顺序。保留词条已有的其他字段也可以。
`previousWordOrders` 为旧记录迁移使用，维护默认词库时请保留。

## GitHub Pages 和本地使用

- GitHub Pages：通过同站点相对路径加载清单和词库，不请求 GitHub API，也不需要 token。
- 本地双击 `index.html`：首次点击“选择词库 ▾”→“从本地文件添加”，选择 `data/toefl-common.json`。已添加过的词库会出现在下拉菜单中，以后可以自动切换，不必重复选文件。
- 本地 HTTP 预览：在本目录运行 `python -m http.server 8000`，打开 `http://localhost:8000`，即可自动读取清单。
- 上传或复制网页时，必须一起包含 `app.js`、`style.css` 和 `data/` 文件夹。

## 学习备份保持兼容

“选择词库 JSON”只选择题目数据；“恢复备份”继续恢复学习记录，两种文件不能混用。
默认 `toefl-common` 沿用旧版存储键，之前的进度、普通错题与永久错题无需重新开始。
旧版 `vocab-practice-backup` v1 JSON 仍可恢复；新版导出维持原格式并附带可选 `datasetId` 和按英文保存的词序。
同一词库重新排列或增删词条时，新版进度按英文匹配，不按新的题号错配。
旧版没有保存完整词序的备份需要配套原词库或其历史词序才能准确恢复。
不同词库的记录独立保存；恢复备份前，请先选择备份对应的词库。
主题、短语页和句子页的数据文件不在此次拆分范围内。

## 检查

```text
node verify-json-loading.cjs
node verify-vocabulary-picker.cjs
node verify-options.cjs
node verify-page.cjs
node verify-permanent.cjs
node verify-phrasal.cjs
```
