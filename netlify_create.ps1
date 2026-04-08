$ErrorActionPreference = 'Stop'
Set-Location 'C:\Curso\Despachante'
$siteName = 'duraodespachante-' + ([guid]::NewGuid().ToString('N').Substring(0,16))
Write-Host "SITE_NAME:$siteName"
$payload = @{team_id = '69bad45f6fc8ca009d4c1a8c'; body = @{name = $siteName}} | ConvertTo-Json -Depth 4 -Compress
$payload | Set-Content -Path .\netlify_payload.json -Encoding UTF8
& netlify api createSiteInTeam --data $payload --debug
