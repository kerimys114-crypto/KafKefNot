# Kâfkef Not (@kafkefnot) - Yerel Web Sunucusu Başlatıcı
$port = 8080
$path = $PSScriptRoot

Write-Host "==========================================================" -ForegroundColor Green
Write-Host "  KAFKEF NOT (@kafkefnot) - Dil Öğrenme Defterleri Mağazası" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "Sunucu Baslatiliyor: http://localhost:$port" -ForegroundColor Cyan
Write-Host "Dizin: $path" -ForegroundColor Gray
Write-Host "Durdurmak icin: Ctrl + C tuslarina basiniz." -ForegroundColor Gray
Write-Host "----------------------------------------------------------"

# Otomatik olarak varsayılan tarayıcıda aç
Start-Process "http://localhost:$port"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
} catch {
    Write-Host "Port $port kullanilamadi veya erisim engellendi. index.html dogrudan tarayicida aciliyor..." -ForegroundColor Yellow
    Start-Process "$path\index.html"
    exit
}

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $localPath = $request.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrEmpty($localPath)) {
        $localPath = "index.html"
    }

    $filePath = Join-Path $path $localPath

    if (Test-Path $filePath -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        
        switch ($ext) {
            ".html" { $response.ContentType = "text/html; charset=utf-8" }
            ".css"  { $response.ContentType = "text/css; charset=utf-8" }
            ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
            ".json" { $response.ContentType = "application/json; charset=utf-8" }
            ".svg"  { $response.ContentType = "image/svg+xml" }
            ".png"  { $response.ContentType = "image/png" }
            ".jpg"  { $response.ContentType = "image/jpeg" }
            ".webp" { $response.ContentType = "image/webp" }
            default { $response.ContentType = "application/octet-stream" }
        }

        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
        $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 - Dosya Bulunamadi")
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
    }

    $response.OutputStream.Close()
}
