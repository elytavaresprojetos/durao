import json
with open('sites.json', 'r', encoding='utf-16') as f:
    sites = json.load(f)
print(f'Total sites: {len(sites)}')
for i, s in enumerate(sites):
    print(f'{i+1}. {s["name"]} - {s["url"]} - ID: {s["id"]}')
