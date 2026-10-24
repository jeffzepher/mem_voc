"""Build supplementary libraries from a pinned KyleBing JSONL snapshot.

Usage: python tools/build_exam_libraries.py ../exam-source
The source directory contains 四级.jsonl, 六级.jsonl, 雅思.jsonl, 托福.jsonl,
commit.txt and LICENSE. Source order is retained; default data is never rebuilt.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(sys.argv[1])
POS = {'n': 'noun', 'v': 'verb', 'vt': 'verb', 'vi': 'verb',
       'adj': 'adjective', 'adv': 'adverb', 'prep': 'preposition', 'conj': 'conjunction'}

def read(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))

def write(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

default_path = ROOT / 'data/toefl-common.json'
default = read(default_path)
default['name'] = '默认词库'
excluded = {w['en'].lower() for words in default['wordSets'].values() for w in words}
catalog = {'format': 'vocabulary-catalog', 'version': 1, 'defaultDataset': default['id'],
           'datasets': [{'id': default['id'], 'name': default['name'], 'file': './toefl-common.json'}]}
revision = (SOURCE / 'commit.txt').read_text(encoding='utf-8-sig').strip()
for exam, slug in [('四级', 'cet4'), ('六级', 'cet6'), ('雅思', 'ielts'), ('托福', 'toefl')]:
    candidates = []
    seen = set(excluded)
    for line in (SOURCE / f'{exam}.jsonl').read_text(encoding='utf-8-sig').splitlines():
        row = json.loads(line)
        word = row['headWord'].strip().lower()
        # Single words only; phrases and malformed source entries are excluded.
        if word in seen or not re.fullmatch(r'[a-z]+(?:-[a-z]+)*', word):
            continue
        content = row['content']['word']['content']
        translations = content.get('trans', [])
        first = next((t for t in translations if t.get('pos', '').rstrip('.') in POS and t.get('tranCn', '').strip()), None)
        if first is None:
            continue
        kind = POS[first['pos'].rstrip('.')]
        meanings = list(dict.fromkeys(t['tranCn'].strip() for t in translations
                      if POS.get(t.get('pos', '').rstrip('.')) == kind and t.get('tranCn', '').strip()))
        cn = '；'.join(meanings)
        if not re.search(r'[\u4e00-\u9fff]', cn):
            continue
        sentences = content.get('sentence', {}).get('sentences', [])
        example = next((s['sContent'].strip() for s in sentences
                       if re.search(r'\b' + re.escape(word) + r'\b', s.get('sContent', ''), re.I)
                       and not re.search(r'<|>|\.\.\.|…', s.get('sContent', ''))), '')
        candidates.append((kind, {'en': word, 'cn': cn, 'example': example}))
        seen.add(word)
    adjectives = {w['en'] for w in default['wordSets'].get('adjective', [])}
    adjectives.update(w['en'] for kind, w in candidates if kind == 'adjective')
    sets = {}
    for kind, word in candidates:
        en = word['en']
        roots = {en[:-2], en[:-3] + 'y', en[:-1] + 'e'} if en.endswith('ly') else set()
        # These adverbs have lexical meanings not captured by a mechanical -ly rule.
        exceptions = {'hardly', 'nearly', 'barely', 'scarcely', 'lately', 'shortly', 'fairly', 'highly', 'mostly', 'namely', 'largely', 'virtually', 'actually', 'literally'}
        if kind == 'adverb' and en not in exceptions and roots & adjectives:
            continue
        sets.setdefault(kind, []).append(word)
    # The quiz requires at least four words and four distinct answer meanings per POS.
    sets = {kind: words for kind, words in sets.items() if len({w['cn'] for w in words}) >= 4}
    ident, name = f'{slug}-extra', f'{exam}新增词库'
    data = {'format': 'vocabulary-dataset', 'version': 1, 'id': ident, 'name': name,
            'source': {'repository': 'https://github.com/KyleBing/english-vocabulary',
                       'revision': revision, 'path': f'full_line_jsonl/full/正序/{exam}.jsonl',
                       'license': 'BSD-3-Clause'}, 'wordSets': sets}
    write(ROOT / f'data/{ident}.json', data)
    catalog['datasets'].append({'id': ident, 'name': name, 'file': f'./{ident}.json'})
    print(name, sum(map(len, sets.values())), {k: len(v) for k, v in sets.items()})
write(default_path, default)
write(ROOT / 'data/catalog.json', catalog)
(ROOT / 'data/EXAM-SOURCE-LICENSE.txt').write_text((SOURCE / 'LICENSE').read_text(encoding='utf-8-sig'), encoding='utf-8')
