import json
import urllib.request
import urllib.error
import uuid

token = 'nfc_ramQKVzwG6Z9ExPt1yzmA2AAqg5UbZNy1f79'
team = 'elytavaresprojetos'
site = 'duraodespachante-' + uuid.uuid4().hex[:16]
print('SITE_NAME:' + site)
url = 'https://api.netlify.com/api/v1/' + team + '/sites'
headers = {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json',
}
data = json.dumps({'name': site}).encode('utf-8')
req = urllib.request.Request(url, data=data, headers=headers)
try:
    resp = urllib.request.urlopen(req)
    print(resp.read().decode('utf-8'))
except urllib.error.HTTPError as e:
    print('STATUS', e.code)
    print(e.read().decode('utf-8'))
