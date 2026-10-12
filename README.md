# 📖 Kâfkef Not (@kafkefnot) · Dil Öğrenme Defterleri E-Ticaret Mağazası

[![License: MIT](https://img.shields.io/badge/License-MIT-burgundy.svg)](LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%99%A5-7b1633.svg)](https://github.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/)

Arapça ve dil öğrenme süreçlerini kolaylaştırmak, keyifli ve sistematik hale getirmek için özel olarak tasarlanan **Kâfkef Not** markasının modern, estetik ve dönüşüm odaklı açık kaynak e-ticaret web sitesi.

Tasarım dili, popüler kırtasiye & ajanda markası **Fobinote (fobinote.com)** standartlarında hazırlanmış olup; sağdan sola açılan özel defter ergonomisi, dinamik kampanya motoru ve yerleşik **Satıcı Yönetim Paneli** içerir.

---

## 🌟 Öne Çıkan Özellikler

### 1. 📚 Markaya Özel Arapça Dil Defteri Düzeni
- **Sağdan Sola (RTL) Açılan Ciltleme:** Arap alfabesinin doğal akışına uygun özel tasarım.
- **Gerçek Ürün Fotoğrafları:** Çiçek ve kuş motifli lüks sert kapak, şamdanlı lifestyle kompozisyonlar ve *"Büyük Hayaller İçin Küçük Bir Defter"* iç sayfa görselleri.
- **120 gsm Lüks Kağıt:** Dolma kalem, divit ve mürekkepli kalemlerle arkaya geçirmeyen sayfalar.
- **Pedagojik Tablolar:** Kelime, cümle, dilbilgisi ve pratik alanları.

### 2. 🎁 Otomatik Kampanya & Sepet Motoru
- **Satıştaki Ürün:** *Arapça İlk Adım Defteri* — **240 TL**.
- **3 Defter Kampanyası:** 3 ve üzeri defter alana **Kargo BEDAVA**.
- **5 Defter Kampanyası:** 5 defter alana **1 Defter HEDİYE (0 TL)** + **Kargo BEDAVA**.
- **Dinamik İlerleme Çubuğu:** Sepetteki adetlere göre kargo bedava ve hediye defter baremlerini anlık gösterir.
- **Kupon Kodu Desteği:** `KAFKEF10` (%10) ve `HOSGELDIN` (%15) indirim kuponları.

### 3. ⏳ "Çok Yakında Sizinle" Gelecek Ürünler
- *Arapça Kelime Defteri (Mu'cem Notu)*
- *Sarf & Nahiv Gramer Defteri*
- *90 Günlük Arapça Çalışma Ajandası*
- *Birbirinden Güzel Kâfkef Arapça Sticker Kitapları (16 Yaprak)*
- Çıktığında müşterilerin ön talep bırakabileceği *"Haber Ver"* sistemi.

### 4. ⚙️ Dahili Satıcı & Yönetim Paneli (Admin Portal)
- Kod yazmadan mağazaya **yeni defter veya sticker ekleme formu** (Ad, Fiyat, Kategori, Görsel, Açıklama, Satış Durumu).
- Yayındaki defterleri tek tıkla **"Satışta"** veya **"Çok Yakında"** moduna alma veya silme.
- Gelen müşteri siparişlerini listeleme ekranı (Müşteri Adı, Telefon, Adres, Tutar, Tarih).
- LocalStorage ile tamamen tarayıcıda kalıcı ve gerçek zamanlı senkronizasyon.

---

## 🚀 30 Saniyede Canlıya Alma (Ücretsiz Yayınlama Rehberi)

Bu proje sıfır bağımlılıkla (Zero Dependencies) geliştirilmiştir. Derleme veya sunucu kurulumu gerektirmez.

### Yöntem A: GitHub & GitHub Pages (Önerilen)
1. [GitHub.com](https://github.com)'a giriş yapın ve **New Repository** (Yeni Depo) butonuna tıklayın.
2. Depo adını `kafkef-not` olarak belirleyin ve **Public** seçin.
3. Proje klasöründeki dosyaları (`index.html`, `style.css`, `app.js`, `assets`, `LICENSE`, `README.md`) sürükleyip GitHub'a yükleyin.
4. Depo ayarlarından **Settings > Pages** sekmesine gidin.
5. **Source** kısmını **Deploy from a branch (main / root)** olarak seçin ve kaydedin.
6. **Siteniz 1 dakika içinde `https://kullaniciadiniz.github.io/kafkef-not/` adresinde tüm dünyanın erişimine açılacaktır!**

### Yöntem B: Netlify Drop (Tek Sürüklemeyle 10 Saniye)
1. [app.netlify.com/drop](https://app.netlify.com/drop) adresini açın.
2. Bilgisayarınızdaki `kafkef-not` klasörünü açılan kutuya sürükleyip bırakın.
3. Siteniz saniyeler içinde ücretsiz bir `.netlify.app` adresiyle canlıya geçer!

---

## 💻 Yerel Geliştirme ve Çalıştırma

### Tarayıcıda Doğrudan Açma:
`index.html` dosyasına çift tıklayarak hemen çalıştırabilirsiniz.

### PowerShell Yerel Sunucusu:
```powershell
powershell -ExecutionPolicy Bypass -File "start_server.ps1"
```
Otomatik olarak `http://localhost:8080` adresinde açılır.

---

## 📁 Proje Dosya Yapısı

```
kafkef-not/
├── index.html              # Ana mağaza vitrini, sepet çekmecesi, modallar
├── style.css               # Fobinote tarzı renkler, animasyonlar, responsive stiller
├── app.js                  # Kampanya algoritması, sepet motoru, satıcı paneli mantığı
├── start_server.ps1        # Yerel PowerShell web sunucusu
├── LICENSE                 # MIT Açık Kaynak Lisansı
├── README.md               # Detaylı proje kılavuzu
├── .gitignore              # Git tarafından yoksayılacak dosyalar
├── .github/
│   └── workflows/
│       └── deploy.yml      # Otomatik GitHub Pages dağıtım otomasyonu
└── assets/                 # Gerçek ürün fotoğrafları ve görseller
    ├── defter_kapak_kus.jpg
    ├── defter_on_yuz.jpg
    ├── defter_ic_sayfa.jpg
    └── defter_samdan_1.jpg
```

---

## 🤝 Katkıda Bulunma (Contributing)

Açık kaynak katkılarınızı memnuniyetle kabul ediyoruz!
1. Projeyi Fork'layın (`Fork` butonuna tıklayın)
2. Yeni özellik dalınızı oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni defter şablonu eklendi'`)
4. Dalınıza push edin (`git push origin feature/YeniOzellik`)
5. Bir Pull Request açın.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) kapsamında açık kaynak olarak yayınlanmıştır.

---

## 🔗 Marka & İletişim
- **Instagram:** [@kafkefnot](https://www.instagram.com/kafkefnot/)
- **Marka:** Kâfkef Not · Dil Öğrenme Defterleri
