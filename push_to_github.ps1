# Kâfkef Not (@kafkefnot) - GitHub'a Otomatik Yükleme Betiği
param(
    [string]$RepoUrl
)

$git = "C:\Users\kiyas\.gemini\antigravity\scratch\tools\mingit\cmd\git.exe"
$repoPath = $PSScriptRoot

Set-Location $repoPath

Write-Host "==========================================================" -ForegroundColor Green
Write-Host "  KAFKEF NOT - GITHUB ACIK KAYNAK YUKLEYICI" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Green

if ([string]::IsNullOrWhiteSpace($RepoUrl)) {
    $RepoUrl = Read-Host "Lutfen GitHub deponuzun linkini yapistiriniz (Orn: https://github.com/kullaniciadi/kafkef-not.git)"
}

if ([string]::IsNullOrWhiteSpace($RepoUrl)) {
    Write-Host "Hata: GitHub depo linki girilmedi." -ForegroundColor Red
    exit
}

# Remote ekle veya guncelle
& $git remote remove origin 2>$null
& $git remote add origin $RepoUrl

Write-Host "Depo baglandi: $RepoUrl" -ForegroundColor Cyan
Write-Host "Dosyalar GitHub'a yukleniyor (main dali)..." -ForegroundColor Yellow

& $git branch -M main
& $git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "TEBRIKLER! Projeniz basariyla GitHub'da yayinlandi! 🎉" -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
} else {
    Write-Host "Yukleme sirasinda kimlik dogrulama istendi veya yetki hatasi olustu." -ForegroundColor Yellow
}
