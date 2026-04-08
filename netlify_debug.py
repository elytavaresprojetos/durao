import json
path = r'C:\Users\ElyTavaresSantos\AppData\Roaming\npm\node_modules\netlify-cli\node_modules\@netlify\open-api\dist\swagger.json'
with open(path, 'r', encoding='utf-8') as f:
    s = json.load(f)
print('basePath=', s.get('basePath'))
print('host=', s.get('host'))
print('schemes=', s.get('schemes'))
print('has_path', '/{account_slug}/sites' in s.get('paths', {}))
print('path_keys', list(s.get('paths', {}).keys())[:10])
