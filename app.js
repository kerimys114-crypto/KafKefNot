// Kâfkef Not (@kafkefnot) - E-Commerce Engine & Secure Admin Management System

// 1. DEFAULT PRODUCT DATABASE (Orijinal Ürünler - Sahte Veri Yok)
const DEFAULT_PRODUCTS = [
  {
    id: 'kafkef-ilk-adim-defteri',
    title: 'Arapça İlk Adım Defteri',
    subtitle: 'Kelime · Cümle · Dilbilgisi · Pratik',
    category: 'defter',
    price: 240,
    oldPrice: 290,
    status: 'active', // ŞU ANDA SATIŞTA
    badges: ['Şu Anda Satışta', '3 Adete Kargo Bedava', '5 Adete 1 Hediye!'],
    image: 'assets/defter_kapak_kus.jpg',
    gallery: [
      'assets/defter_kapak_kus.jpg',
      'assets/defter_on_yuz.jpg',
      'assets/defter_ic_sayfa.jpg',
      'assets/defter_samdan_1.jpg'
    ],
    arabicLetter: 'ق ك',
    arabicSub: 'اللُّغَةُ العَرَبِيَّة',
    desc: 'Büyük Hayaller İçin Küçük Bir Defter (دفتر صغير لأحلام كبيرة). Sağdan sola açılan ergonomik cilt yapısı, kelime, cümle, dilbilgisi ve pratik alanları ile Arapça öğreniminde başucu eseriniz. Dolma kalemle arkaya sızdırmayan yüksek gramajlı lüks fildişi kağıt.',
    features: ['Sağdan Sola Özel Ciltleme', 'Kelime · Cümle · Dilbilgisi Şablonları', '120 gsm Mürekkep Geçirmez Kağıt', 'Özel Çiçek & Kuş Motifli Lüks Sert Kapak']
  },
  {
    id: 'kafkef-kelime-defteri',
    title: 'Arapça Kelime Defteri · Mu\'cem Notu',
    subtitle: 'Kök-Vezin Tablolu · Sağdan Sola',
    category: 'defter',
    price: 240,
    oldPrice: null,
    status: 'upcoming', // ÇOK YAKINDA SİZİNLE
    badges: ['Çok Yakında Sizinle', 'Ön Talep Açık'],
    image: 'assets/defter_on_yuz.jpg',
    gallery: ['assets/defter_on_yuz.jpg'],
    arabicLetter: 'ق',
    arabicSub: 'المُعْجَم الشَّامِل',
    desc: 'Fa-Ayn-Lam sülasi kök harfleri, mazi-muzari fiil çekimleri ve cem\'i/çoğul sütunları ile Arapça kelime haznenizi zirveye taşıyacak özel kelime defterimiz çok yakında sizlerle buluşuyor.',
    features: ['Sülasi Kök Tablosu', 'Mazi-Muzari-Masdar Düzeni', '120 gsm Kağıt', '160 Sayfa']
  },
  {
    id: 'kafkef-sarf-nahiv-defteri',
    title: 'Sarf & Nahiv Gramer Defteri',
    subtitle: 'İrab Tahlil Tabloları & Kurallar',
    category: 'sarf',
    price: 240,
    oldPrice: null,
    status: 'upcoming', // ÇOK YAKINDA SİZİNLE
    badges: ['Çok Yakında Sizinle', 'Gramer Serisi'],
    image: 'assets/defter_samdan_1.jpg',
    gallery: ['assets/defter_samdan_1.jpg'],
    arabicLetter: 'ك',
    arabicSub: 'الصَّرْف وَالنَّحْو',
    desc: 'İlahiyat, hazırlık ve medrese öğrencileri için cümle tahlilini (fail, mef\'ul, mübteda, haber) kolaylaştıran özel gramer defterimiz çok yakında stoklarda.',
    features: ['İrab Tahlil Cetveli', 'Fiil Çekim Şemaları', 'Sert Kapak', '144 Sayfa']
  },
  {
    id: 'kafkef-dil-ajandasi',
    title: '90 Günlük Arapça Çalışma Ajandası',
    subtitle: 'Hedef & Alışkanlık Takipçisi',
    category: 'ajanda',
    price: 260,
    oldPrice: null,
    status: 'upcoming', // ÇOK YAKINDA SİZİNLE
    badges: ['Çok Yakında Sizinle', 'Planlayıcı'],
    image: 'assets/defter_ic_sayfa.jpg',
    gallery: ['assets/defter_ic_sayfa.jpg'],
    arabicLetter: 'ط',
    arabicSub: 'المُفَكِّرَة',
    desc: 'Arapça ezberlerinizi ve günlük çalışma sürelerinizi disipline sokacak 90 günlük rehber ajandanız çok yakında sizlerle.',
    features: ['Tarihsiz Süresiz Kullanım', 'Pomodoro Takipçisi', 'Ezber Çizelgesi']
  },
  {
    id: 'kafkef-sticker-book',
    title: 'Kâfkef Arapça Sticker Book · 16 Yaprak',
    subtitle: 'Birbirinden Güzel Etiketler & Ayraçlar',
    category: 'sticker',
    price: 150,
    oldPrice: null,
    status: 'upcoming', // ÇOK YAKINDA SİZİNLE
    badges: ['Çok Yakında Sizinle', 'Birbirinden Güzel Stickerlar'],
    image: 'assets/defter_ic_sayfa.jpg',
    gallery: ['assets/defter_ic_sayfa.jpg'],
    arabicLetter: 'ن',
    arabicSub: 'المُلْصَقَات الجَمِيلَة',
    desc: 'Birbirinden güzel Arapça çıkartmalar, motivasyon sözleri (Mâşâallâh, Bârekallâh), seviye etiketleri ve renkli konu ayraçlarıyla defterlerinizi süsleyecek sticker kitabımız çok yakında sizlerle!',
    features: ['16 Dolu Sayfa', '400+ Lüks Çıkartma', 'Suya Dayanıklı Mat Kaplama']
  }
];

// Initialize Products in LocalStorage
function getStoredProducts() {
  const stored = localStorage.getItem('kafkef_products_v3');
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { }
  }
  localStorage.setItem('kafkef_products_v3', JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS;
}

let PRODUCTS = getStoredProducts();

// Orders Storage
function getStoredOrders() {
  const stored = localStorage.getItem('kafkef_orders');
  return stored ? JSON.parse(stored) : [];
}

let ORDERS = getStoredOrders();

// CART & WISHLIST
let cart = JSON.parse(localStorage.getItem('kafkef_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('kafkef_wishlist') || '[]');
let appliedCoupon = null;

const COUPONS = {
  'KAFKEF10': 0.10,
  'HOSGELDIN': 0.15
};

const SHIPPING_FEE = 45;

function saveCart() {
  localStorage.setItem('kafkef_cart', JSON.stringify(cart));
  updateCartUI();
}

// 2. KAMPANYA HESAPLAMA MOTORU (3 ALANA KARGO BEDAVA, 5 ALANA 1 HEDİYE + KARGO BEDAVA)
function calculateCartTotals() {
  let subtotal = 0;
  let totalNotebookQty = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    totalNotebookQty += item.quantity;
  });

  // Kampanya kuralları:
  // 1. 3 veya daha fazla defter -> Kargo BEDAVA
  // 2. 5 defter alan müşteriye -> 1 defter HEDİYE (0 TL) ve kargo BEDAVA
  let freeGiftCount = Math.floor(totalNotebookQty / 5);
  let giftDiscount = freeGiftCount * 240; // Hediye edilen defter bedeli

  let isFreeShipping = totalNotebookQty >= 3;
  let shipping = (isFreeShipping || subtotal === 0) ? 0 : SHIPPING_FEE;

  // Kupon indirimi
  let couponDiscount = 0;
  if (appliedCoupon && COUPONS[appliedCoupon]) {
    couponDiscount = (subtotal - giftDiscount) * COUPONS[appliedCoupon];
  }

  let finalSubtotal = subtotal - giftDiscount - couponDiscount;
  let total = finalSubtotal + shipping;

  return {
    subtotal,
    totalNotebookQty,
    freeGiftCount,
    giftDiscount,
    couponDiscount,
    isFreeShipping,
    shipping,
    total,
    finalSubtotal
  };
}

// 3. STOREFRONT PRODUCT RENDER (SAHTE YORUMSUZ, TERTEMİZ DÜZEN)
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let list = PRODUCTS;
  if (filter === 'active') {
    list = PRODUCTS.filter(p => p.status === 'active');
  } else if (filter === 'upcoming') {
    list = PRODUCTS.filter(p => p.status === 'upcoming');
  }

  grid.innerHTML = list.map(product => {
    const isWishlisted = wishlist.includes(product.id);
    const isActive = product.status === 'active';

    return `
      <article class="product-card ${isActive ? 'product-card-active' : 'product-card-upcoming'}" data-id="${product.id}">
        <div class="card-top-badges">
          ${product.badges.map(b => `
            <span class="badge-tag ${b.includes('Satışta') ? 'badge-active-live' : b.includes('Yakında') ? 'badge-upcoming-pill' : 'badge-sale'}">
              ${b}
            </span>
          `).join('')}
        </div>

        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}')" aria-label="Favorilere ekle">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? '#3e000d' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>

        <!-- Product Image Container -->
        <div class="product-real-img-wrap" onclick="openQuickView('${product.id}')" style="cursor:pointer">
          <img src="${product.image}" alt="${product.title}" class="product-real-img" loading="lazy">
          ${!isActive ? `
            <div class="upcoming-overlay">
              <span class="upcoming-ribbon">ÇOK YAKINDA SİZİNLE</span>
            </div>
          ` : ''}
        </div>

        <div style="margin-bottom:8px">
          <span style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.5px">
            ${isActive ? '✓ Stokta Var · Aynı Gün Kargo' : '⏳ Çok Yakında Sizinle'}
          </span>
        </div>

        <a href="#quickview" onclick="openQuickView('${product.id}');return false;" class="card-product-title">
          ${product.title}
        </a>
        <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">${product.subtitle}</div>

        <div class="card-features-list">
          ${product.features.slice(0, 3).map(f => `<span>✓ ${f}</span>`).join('')}
        </div>

        <div class="card-footer">
          <div class="price-box">
            ${product.oldPrice ? `<span class="old-price">${product.oldPrice} TL</span>` : ''}
            <span class="current-price">${product.price} TL</span>
          </div>

          <div class="card-btn-group">
            <button class="quick-view-btn" onclick="openQuickView('${product.id}')" title="İçini İncele">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            ${isActive ? `
              <button class="add-cart-btn" onclick="addToCart('${product.id}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                Sepete Ekle
              </button>
            ` : `
              <button class="notify-btn" onclick="notifyMeUpcoming('${product.title}')">
                Haber Ver
              </button>
            `}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// 4. CART & CAMPAIGN LOGIC
function addToCart(productId, qty = 1) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  if (prod.status === 'upcoming') {
    notifyMeUpcoming(prod.title);
    return;
  }

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: prod.id,
      title: prod.title,
      price: prod.price,
      image: prod.image,
      quantity: qty
    });
  }

  saveCart();
  openCartDrawer();
  triggerStickyNotification(`✓ "${prod.title}" sepete eklendi!`);
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

function updateCartUI() {
  const countBadge = document.getElementById('cartBadge');
  const itemsContainer = document.getElementById('cartItemsList');
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (countBadge) {
    countBadge.textContent = totalCount;
    countBadge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  const totals = calculateCartTotals();

  // Campaign Progress Bar (3 alana kargo bedava, 5 alana 1 hediye)
  const shippingTrack = document.getElementById('shippingProgressFill');
  const shippingText = document.getElementById('shippingProgressText');
  if (shippingTrack && shippingText) {
    let qty = totals.totalNotebookQty;

    if (qty === 0) {
      shippingTrack.style.width = '0%';
      shippingText.innerHTML = `Sepetiniz boş. <strong>3 defter alana kargo bedava, 5 defter alana 1 hediye!</strong>`;
    } else if (qty < 3) {
      let needed = 3 - qty;
      let pct = Math.round((qty / 3) * 50);
      shippingTrack.style.width = `${pct}%`;
      shippingText.innerHTML = `📦 Kargo Bedava için <strong>${needed} defter daha</strong> ekleyin!`;
    } else if (qty < 5) {
      let needed = 5 - qty;
      let pct = 60 + ((qty - 3) * 15);
      shippingTrack.style.width = `${pct}%`;
      shippingText.innerHTML = `🎉 <strong>Kargo BEDAVA!</strong> 🎁 <strong>1 Defter HEDİYE</strong> için <strong>${needed} defter daha</strong> ekleyin!`;
    } else {
      shippingTrack.style.width = '100%';
      shippingText.innerHTML = `🌟 <strong>MÜKEMMEL FIRSAT!</strong> ${totals.freeGiftCount} adet Defter HEDİYE + Kargo BEDAVA!`;
    }
  }

  // Items Render
  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align:center;padding:50px 20px;color:var(--text-muted)">
          <div style="font-size:48px;margin-bottom:12px">📚</div>
          <p style="font-weight:700;font-size:16px;color:var(--primary)">Sepetiniz henüz boş.</p>
          <p style="font-size:13px;margin-top:6px">Arapça İlk Adım Defteri'ni hemen sepetinize ekleyerek kampanyalardan yararlanabilirsiniz.</p>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item-img" style="object-fit:cover">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-variant">240 TL · 120 gsm Lüks Kağıt</div>
            <div class="cart-item-pricing" style="margin-top:6px">
              <div class="qty-controls">
                <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">−</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
              </div>
              <span class="cart-item-price">${(item.price * item.quantity).toFixed(0)} TL</span>
            </div>
          </div>
        </div>
      `).join('');

      // Hediye defter rozeti
      if (totals.freeGiftCount > 0) {
        itemsContainer.innerHTML += `
          <div style="background:#e9f8ee;border:1px dashed #167144;border-radius:10px;padding:12px;display:flex;align-items:center;gap:12px;margin-top:8px">
            <span style="font-size:24px">🎁</span>
            <div>
              <strong style="color:#167144;font-size:13px">${totals.freeGiftCount} Adet Defter Hediye Edildi!</strong>
              <div style="font-size:11px;color:#2e7d32">5 Adet Defter Kampanyası kapsamında 0 TL olarak faturanızdan düşüldü.</div>
            </div>
          </div>
        `;
      }
    }
  }

  // Summary
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountVal = document.getElementById('cartDiscountVal');
  const shippingVal = document.getElementById('cartShippingVal');
  const totalEl = document.getElementById('cartTotal');

  if (subtotalEl) subtotalEl.textContent = `${totals.subtotal.toFixed(0)} TL`;
  if (shippingVal) shippingVal.textContent = totals.shipping === 0 ? 'ÜCRETSİZ' : `${totals.shipping} TL`;

  if (discountRow && discountVal) {
    let totalDiscount = totals.giftDiscount + totals.couponDiscount;
    if (totalDiscount > 0) {
      discountRow.style.display = 'flex';
      discountVal.textContent = `-${totalDiscount.toFixed(0)} TL ${totals.freeGiftCount > 0 ? `(${totals.freeGiftCount} Defter Hediye)` : ''}`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (totalEl) totalEl.textContent = `${totals.total.toFixed(0)} TL`;
}

// 5. NOTIFY UPCOMING MODAL
function notifyMeUpcoming(prodName) {
  const emailOrPhone = prompt(`"${prodName}" çok yakında satışa çıkacaktır!\n\nSatışa çıktığı ilk gün indirimli olarak haberdar olmak için lütfen telefon numaranızı veya e-posta adresinizi giriniz:`);
  if (emailOrPhone) {
    alert(`Teşekkür ederiz! "${prodName}" satışa çıktığında ${emailOrPhone} adresine ilk bildirim gönderilecektir.`);
  }
}

// 6. QUICK VIEW MODAL
function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  const isActive = prod.status === 'active';

  content.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1.2fr;gap:30px;padding:30px">
      <div>
        <img id="mainQuickImg" src="${prod.image}" alt="${prod.title}" style="width:100%;height:320px;object-fit:cover;border-radius:12px;box-shadow:var(--shadow-md);margin-bottom:12px">
        <div style="display:flex;gap:8px;overflow-x:auto">
          ${prod.gallery.map(img => `
            <img src="${img}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer;border:2px solid transparent" onclick="document.getElementById('mainQuickImg').src='${img}'" class="hover:border-primary">
          `).join('')}
        </div>
      </div>
      <div>
        <div style="display:flex;gap:6px;margin-bottom:10px">
          ${prod.badges.map(b => `<span class="badge-tag ${b.includes('Satışta') ? 'badge-active-live' : 'badge-upcoming-pill'}">${b}</span>`).join('')}
        </div>
        <h2 style="font-size:22px;color:var(--primary);margin-bottom:4px">${prod.title}</h2>
        <div style="font-size:13px;color:var(--text-muted);margin-bottom:14px">${prod.subtitle}</div>

        <p style="font-size:13.5px;color:var(--text-main);line-height:1.6;margin-bottom:16px">${prod.desc}</p>
        
        <div style="background:var(--bg-warm);padding:14px;border-radius:10px;border:1px solid var(--border-color);margin-bottom:18px">
          <div style="font-size:12px;font-weight:700;color:var(--primary);margin-bottom:6px">KÂFKEF ÖZEL DETAYLARI:</div>
          <ul style="font-size:12.5px;color:var(--text-muted);list-style:inside disc">
            ${prod.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">
          <div>
            ${prod.oldPrice ? `<span style="font-size:14px;color:#9ca3af;text-decoration:line-through">${prod.oldPrice} TL</span> ` : ''}
            <span style="font-size:26px;font-weight:900;color:var(--primary)">${prod.price} TL</span>
          </div>
          ${isActive ? `
            <span style="font-size:12px;color:#167144;background:#e9f8ee;padding:6px 12px;border-radius:8px;font-weight:700">✓ Stokta Var · Hemen Al</span>
          ` : `
            <span style="font-size:12px;color:#92400e;background:#fef3c7;padding:6px 12px;border-radius:8px;font-weight:700">⏳ Çok Yakında Sizinle</span>
          `}
        </div>

        ${isActive ? `
          <button class="checkout-btn" onclick="addToCart('${prod.id}');closeQuickView();">
            🛒 Hemen Sepete Ekle
          </button>
        ` : `
          <button class="btn-primary" style="width:100%;justify-content:center" onclick="notifyMeUpcoming('${prod.title}');closeQuickView();">
            🔔 Satışa Çıktığında Haber Ver
          </button>
        `}
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// 7. GÜVENLİ YÖNETİCİ GİRİŞİ SİSTEMİ (ADMIN AUTH)
let isAdminLoggedIn = localStorage.getItem('kafkef_admin_auth') === 'true';

function updateAdminUI() {
  const bar = document.getElementById('adminActiveBar');
  if (bar) {
    bar.style.display = isAdminLoggedIn ? 'flex' : 'none';
  }
}

function openAdminAccess() {
  if (isAdminLoggedIn) {
    openAdminModal();
  } else {
    openAdminLoginModal();
  }
}

function openAdminLoginModal() {
  const modal = document.getElementById('adminLoginModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('adminPassInput')?.focus(), 100);
  }
}

function closeAdminLoginModal() {
  const modal = document.getElementById('adminLoginModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    const input = document.getElementById('adminPassInput');
    if (input) input.value = '';
  }
}

function checkAdminPassword(e) {
  e.preventDefault();
  const input = document.getElementById('adminPassInput');
  const pass = input ? input.value.trim() : '';

  // Default Admin Password: kafkef2026
  if (pass === 'kafkef2026') {
    isAdminLoggedIn = true;
    localStorage.setItem('kafkef_admin_auth', 'true');
    closeAdminLoginModal();
    updateAdminUI();
    openAdminModal();
    triggerStickyNotification('🔐 Yönetici girişi başarılı!');
  } else {
    alert('Hatalı yönetici şifresi! Lütfen tekrar deneyiniz.');
    if (input) input.select();
  }
}

function logoutAdmin() {
  isAdminLoggedIn = false;
  localStorage.removeItem('kafkef_admin_auth');
  updateAdminUI();
  closeAdminModal();
  triggerStickyNotification('Yönetici oturumu kapatıldı.');
}

// 8. YÖNETİCİ İŞLEMLERİ PANELİ
function openAdminModal() {
  if (!isAdminLoggedIn) {
    openAdminLoginModal();
    return;
  }
  const modal = document.getElementById('adminModal');
  if (modal) {
    renderAdminProductsList();
    renderAdminOrdersList();
    if (typeof renderWalletUI === 'function') {
      renderWalletUI();
    }
    if (typeof populateSiteContentForm === 'function') {
      populateSiteContentForm();
    }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeAdminModal() {
  const modal = document.getElementById('adminModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleAddProduct(e) {
  e.preventDefault();
  const title = document.getElementById('admTitle').value.trim();
  const subtitle = document.getElementById('admSubtitle').value.trim();
  const price = Number(document.getElementById('admPrice').value);
  const status = document.getElementById('admStatus').value; // active or upcoming
  const category = document.getElementById('admCategory').value;
  const image = document.getElementById('admImage').value.trim() || 'assets/defter_kapak_kus.jpg';
  const desc = document.getElementById('admDesc').value.trim();

  const newId = 'kafkef-custom-' + Date.now();
  const newProd = {
    id: newId,
    title,
    subtitle,
    category,
    price,
    oldPrice: null,
    status,
    badges: status === 'active' ? ['Satışta'] : ['Çok Yakında Sizinle'],
    image,
    gallery: [image],
    arabicLetter: 'ق ك',
    arabicSub: 'كِتَاب جَدِيد',
    desc,
    features: ['Sağdan Sola Cilt', '120 gsm Kağıt', 'Kâfkef Özel Tasarımı']
  };

  PRODUCTS.unshift(newProd);
  localStorage.setItem('kafkef_products_v3', JSON.stringify(PRODUCTS));

  alert(`🎉 "${title}" başarıyla mağazanıza eklendi!`);
  document.getElementById('adminProductForm').reset();
  renderAdminProductsList();
  renderProducts();
}

function toggleProductStatus(prodId) {
  const p = PRODUCTS.find(item => item.id === prodId);
  if (!p) return;

  p.status = p.status === 'active' ? 'upcoming' : 'active';
  p.badges = p.status === 'active' 
    ? ['Şu Anda Satışta', '3 Adete Kargo Bedava'] 
    : ['Çok Yakında Sizinle', 'Ön Talep Açık'];

  localStorage.setItem('kafkef_products_v3', JSON.stringify(PRODUCTS));
  renderAdminProductsList();
  renderProducts();
  triggerStickyNotification(`Durum güncellendi: "${p.title}" -> ${p.status === 'active' ? 'SATIŞTA' : 'ÇOK YAKINDA'}`);
}

function deleteProduct(prodId) {
  if (!confirm('Bu defteri mağazadan kaldırmak istediğinize emin misiniz?')) return;
  PRODUCTS = PRODUCTS.filter(p => p.id !== prodId);
  localStorage.setItem('kafkef_products_v3', JSON.stringify(PRODUCTS));
  renderAdminProductsList();
  renderProducts();
}

function renderAdminProductsList() {
  const listEl = document.getElementById('adminProductsTableBody');
  if (!listEl) return;

  listEl.innerHTML = PRODUCTS.map(p => `
    <tr style="border-bottom:1px solid var(--border-light)">
      <td style="padding:10px">
        <img src="${p.image}" style="width:40px;height:50px;object-fit:cover;border-radius:4px">
      </td>
      <td style="padding:10px;font-weight:700">${p.title}</td>
      <td style="padding:10px">${p.price} TL</td>
      <td style="padding:10px">
        <span class="badge-tag ${p.status === 'active' ? 'badge-active-live' : 'badge-upcoming-pill'}">
          ${p.status === 'active' ? 'Satışta' : 'Çok Yakında'}
        </span>
      </td>
      <td style="padding:10px;text-align:right">
        <button onclick="openEditProductModal('${p.id}')" style="background:var(--primary);color:#fff;border:none;padding:5px 10px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;margin-right:4px">
          ✏️ Düzenle
        </button>
        <button onclick="toggleProductStatus('${p.id}')" style="background:#f7ebef;color:var(--primary);border:none;padding:5px 8px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;margin-right:4px">
          ${p.status === 'active' ? 'Çok Yakında Yap' : 'Satışa Aç'}
        </button>
        <button onclick="deleteProduct('${p.id}')" style="background:#fee2e2;color:#b91c1c;border:none;padding:5px 8px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer">
          Sil
        </button>
      </td>
    </tr>
  `).join('');
}

function openEditProductModal(prodId) {
  const prod = PRODUCTS.find(p => p.id === prodId);
  if (!prod) return;

  document.getElementById('editProdId').value = prod.id;
  document.getElementById('editProdTitle').value = prod.title;
  document.getElementById('editProdPrice').value = prod.price;
  document.getElementById('editProdOldPrice').value = prod.oldPrice || '';
  document.getElementById('editProdStatus').value = prod.status;
  document.getElementById('editProdSubtitle').value = prod.subtitle || '';
  document.getElementById('editProdImage').value = prod.image || '';
  document.getElementById('editProdDesc').value = prod.desc || '';

  const modal = document.getElementById('editProductModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeEditProductModal() {
  const modal = document.getElementById('editProductModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleSaveEditProduct(e) {
  e.preventDefault();
  const id = document.getElementById('editProdId').value;
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) return;

  const title = document.getElementById('editProdTitle').value.trim();
  const price = Number(document.getElementById('editProdPrice').value);
  const oldPriceVal = document.getElementById('editProdOldPrice').value.trim();
  const oldPrice = oldPriceVal ? Number(oldPriceVal) : null;
  const status = document.getElementById('editProdStatus').value;
  const subtitle = document.getElementById('editProdSubtitle').value.trim();
  const image = document.getElementById('editProdImage').value.trim() || prod.image;
  const desc = document.getElementById('editProdDesc').value.trim();

  prod.title = title;
  prod.price = price;
  prod.oldPrice = oldPrice;
  prod.status = status;
  prod.subtitle = subtitle;
  prod.image = image;
  if (!prod.gallery || prod.gallery.length === 0) prod.gallery = [image];
  else prod.gallery[0] = image;
  prod.desc = desc;
  prod.badges = status === 'active' ? ['Şu Anda Satışta', '3 Adete Kargo Bedava', '5 Adete 1 Hediye!'] : ['Çok Yakında Sizinle', 'Ön Talep Açık'];

  localStorage.setItem('kafkef_products_v3', JSON.stringify(PRODUCTS));
  renderAdminProductsList();
  renderProducts();
  closeEditProductModal();
  triggerStickyNotification(`✅ "${title}" defteri başarıyla güncellendi!`);
}

function handleDeleteFromEditModal() {
  const id = document.getElementById('editProdId').value;
  if (confirm('Bu defteri mağazadan tamamen silmek istediğinize emin misiniz?')) {
    deleteProduct(id);
    closeEditProductModal();
  }
}

function renderAdminOrdersList() {
  const listEl = document.getElementById('adminOrdersTableBody');
  if (!listEl) return;

  if (ORDERS.length === 0) {
    listEl.innerHTML = `<tr><td colspan="7" style="padding:20px;text-align:center;color:var(--text-muted)">Henüz müşteri siparişi bulunmuyor.</td></tr>`;
    return;
  }

  listEl.innerHTML = ORDERS.map(o => `
    <tr style="border-bottom:1px solid var(--border-light);font-size:12px">
      <td style="padding:8px"><strong>${o.code}</strong></td>
      <td style="padding:8px">${o.customerName}<br><small>${o.phone}</small></td>
      <td style="padding:8px">${o.qty} Defter</td>
      <td style="padding:8px;font-weight:700;color:var(--primary)">${o.total} TL</td>
      <td style="padding:8px">${o.date}</td>
      <td style="padding:8px">
        <select onchange="updateOrderStatus('${o.code}', this.value)" style="padding:4px 6px;border-radius:6px;font-size:11px;font-weight:700;border:1px solid var(--border-color);background:#fff;cursor:pointer">
          <option value="Hazırlanıyor" ${o.status === 'Hazırlanıyor' ? 'selected' : ''}>🟡 Hazırlanıyor</option>
          <option value="Kargoya Verildi" ${o.status === 'Kargoya Verildi' ? 'selected' : ''}>🚚 Kargoya Verildi</option>
          <option value="Teslim Edildi" ${o.status === 'Teslim Edildi' ? 'selected' : ''}>✅ Teslim Edildi</option>
          <option value="İptal Edildi" ${o.status === 'İptal Edildi' ? 'selected' : ''}>❌ İptal Edildi</option>
        </select>
      </td>
      <td style="padding:8px;text-align:right">
        <button onclick="deleteOrder('${o.code}')" style="background:#fee2e2;color:#b91c1c;border:none;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:700;cursor:pointer">
          Sil
        </button>
      </td>
    </tr>
  `).join('');
}

function updateOrderStatus(code, newStatus) {
  const order = ORDERS.find(o => o.code === code);
  if (order) {
    order.status = newStatus;
    localStorage.setItem('kafkef_orders', JSON.stringify(ORDERS));
    triggerStickyNotification(`Sipariş ${code} durumu: ${newStatus}`);
  }
}

function deleteOrder(code) {
  if (confirm(`${code} numaralı siparişi silmek istediğinize emin misiniz?`)) {
    ORDERS = ORDERS.filter(o => o.code !== code);
    localStorage.setItem('kafkef_orders', JSON.stringify(ORDERS));
    renderAdminOrdersList();
    triggerStickyNotification(`Sipariş ${code} silindi.`);
  }
}

// 9. CHECKOUT & SİPARİŞ ENTEGRASYONU (HAVUZ VE IBAN BAĞLANTISI)
function completeCheckoutOrder(e) {
  e.preventDefault();
  const totals = calculateCartTotals();
  const name = document.getElementById('coName').value.trim();
  const phone = document.getElementById('coPhone').value.trim();
  const address = document.getElementById('coAddress').value.trim();

  const payRadio = document.querySelector('input[name="payMethod"]:checked');
  const payMethod = payRadio ? payRadio.value : 'iban';
  const payLabel = payMethod === 'iban' ? 'Havale & FAST (Havuz IBAN)' : (payMethod === 'card' ? 'Kart (Güvenli Havuz)' : 'Kapıda Ödeme');

  const orderNumber = 'KF-' + Math.floor(100000 + Math.random() * 900000);
  const now = new Date().toLocaleDateString('tr-TR');
  const orderAmount = Number(totals.total.toFixed(0));

  const newOrder = {
    code: orderNumber,
    customerName: name,
    phone,
    address,
    qty: totals.totalNotebookQty,
    giftCount: totals.freeGiftCount,
    total: orderAmount,
    date: now,
    paymentMethod: payLabel,
    status: 'Hazırlanıyor'
  };

  ORDERS.unshift(newOrder);
  localStorage.setItem('kafkef_orders', JSON.stringify(ORDERS));

  // PARAYI MAĞAZA HAVUZUNA (KASAYA) AKTAR
  recordWalletTransaction({
    id: 'TX-' + Date.now(),
    type: 'order_income',
    amount: orderAmount,
    title: `Sipariş #${orderNumber} (${name})`,
    method: payLabel,
    status: 'Havuzda (Hazır)',
    date: now
  });

  const ibanCfg = getIbanSettings();
  const container = document.getElementById('checkoutModalContent');
  if (container) {
    container.innerHTML = `
      <div style="text-align:center;padding:30px 16px">
        <div style="width:64px;height:64px;border-radius:50%;background:#e9f8ee;color:#167144;display:flex;align-items:center;justify-content:center;font-size:32px;margin:0 auto 14px">✓</div>
        <h2 style="color:var(--primary);font-size:22px;margin-bottom:6px">Siparişiniz Başarıyla Alındı! 🎉</h2>
        <p style="font-size:13px;color:var(--text-muted);margin-bottom:16px">Kâfkef Not defterleriniz özenle hazırlanıp en kısa sürede kargoya verilecektir.</p>
        
        <div style="background:var(--bg-warm);border:1px solid var(--border-color);border-radius:10px;padding:16px;max-width:420px;margin:0 auto 20px;text-align:left">
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px">
            <span>Sipariş Kodu:</span>
            <strong>${orderNumber}</strong>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px">
            <span>Toplam Tutar:</span>
            <strong style="color:var(--primary);font-size:15px">${orderAmount} TL</strong>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px">
            <span>Ödeme Şekli:</span>
            <span>${payLabel}</span>
          </div>
          ${totals.freeGiftCount > 0 ? `
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;color:#167144">
              <span>Hediye Defter:</span>
              <strong>${totals.freeGiftCount} Adet Hediye Edildi!</strong>
            </div>
          ` : ''}
          <div style="display:flex;justify-content:space-between;font-size:13px">
            <span>Kargo:</span>
            <span style="color:#167144;font-weight:700">Ücretsiz Kargo</span>
          </div>
        </div>

        ${payMethod === 'iban' ? `
          <div style="background:#fff;border:1px dashed var(--border-color);border-radius:10px;padding:14px;max-width:420px;margin:0 auto 20px;text-align:left;font-size:12.5px">
            <div style="font-weight:700;color:var(--primary);margin-bottom:6px">🏦 FAST / Havale Yapılacak Havuz Hesabı:</div>
            <div style="margin-bottom:3px"><strong>Banka:</strong> ${ibanCfg.bankName}</div>
            <div style="margin-bottom:3px"><strong>Alıcı:</strong> ${ibanCfg.holderName}</div>
            <div style="background:var(--bg-warm);padding:8px;border-radius:6px;margin:6px 0;display:flex;align-items:center;justify-content:space-between">
              <span style="font-family:monospace;font-weight:700;font-size:12px;color:var(--primary)">${ibanCfg.ibanNo}</span>
              <button type="button" onclick="copyIbanToClipboard()" class="copy-pill-btn">Kopyala</button>
            </div>
            <div style="font-size:11px;color:var(--text-muted)">
              📌 Açıklama alanına <strong>${orderNumber}</strong> yazarak <strong>${orderAmount} TL</strong> transfer ediniz. Paranız Kâfkef Not havuzuna geçtiğinde siparişiniz anında sevk edilir.
            </div>
          </div>
        ` : ''}

        <button class="btn-primary" onclick="cart=[];saveCart();closeCheckoutModal();location.reload();">
          Tamamla & Alışverişe Dön
        </button>
      </div>
    `;
  }
}

// 10. GENERAL UTILS
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function openCheckoutModal() {
  if (cart.length === 0) {
    alert('Sepetiniz boş! Lütfen önce ürün ekleyin.');
    return;
  }
  closeCartDrawer();
  updateCheckoutIbanDisplay();
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function applyCoupon() {
  const input = document.getElementById('couponCodeInput');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (COUPONS[code]) {
    appliedCoupon = code;
    saveCart();
    alert(`🎉 '${code}' indirim kuponu uygulandı!`);
  } else {
    alert(`Geçersiz kupon kodu.`);
  }
}

function toggleWishlist(productId) {
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
  } else {
    wishlist.push(productId);
  }
  localStorage.setItem('kafkef_wishlist', JSON.stringify(wishlist));
  renderProducts();
}

function triggerStickyNotification(msg) {
  let toast = document.getElementById('cartToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cartToast';
    toast.style.cssText = `
      position: fixed;
      top: 60px;
      right: 20px;
      background: #3e000d;
      color: #fff;
      padding: 12px 20px;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(62,0,13,0.3);
      font-size: 13px;
      font-weight: 600;
      z-index: 1000;
      transform: translateY(-20px);
      opacity: 0;
      transition: all 0.3s;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.transform = 'translateY(-20px)';
    toast.style.opacity = '0';
  }, 2500);
}

// 11. INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  updateAdminUI();

  // Announcement ticker
  const announcementTrack = document.getElementById('announcementTrack');
  if (announcementTrack) {
    let currentIdx = 0;
    setInterval(() => {
      currentIdx = (currentIdx + 1) % 3;
      announcementTrack.style.transform = `translateY(-${currentIdx * 38}px)`;
    }, 4000);
  }

  // Filter Tabs
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProducts(tab.dataset.category);
    });
  });

  // Sticky Buy Bar
  const heroSection = document.querySelector('.hero-section');
  const stickyBuyBar = document.getElementById('stickyBuyBar');
  if (heroSection && stickyBuyBar) {
    window.addEventListener('scroll', () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom <= 0) {
        stickyBuyBar.classList.add('visible');
      } else {
        stickyBuyBar.classList.remove('visible');
      }
    });
  }

  // IBAN & Cüzdan Başlatma
  updateCheckoutIbanDisplay();
  renderWalletUI();

  // Site Metinleri ve Canlı Değişiklikleri Uygula
  if (typeof applySiteContent === 'function') {
    applySiteContent();
  }
});

// 12. IBAN & HAVUZ (KASA) YÖNETİM SİSTEMİ
const DEFAULT_IBAN_SETTINGS = {
  bankName: 'Ziraat Bankası',
  holderName: 'Kâfkef Not · Kerim Yılmaz',
  ibanNo: 'TR12 0001 0000 0000 0000 0000 00'
};

const DEFAULT_WALLET_TXS = [
  {
    id: 'TX-101',
    type: 'order_income',
    amount: 480,
    title: 'Sipariş #KF-829104 (Hatice Y.)',
    method: 'FAST / IBAN',
    status: 'Havuzda (Hazır)',
    date: '10.10.2026 14:22'
  },
  {
    id: 'TX-102',
    type: 'order_income',
    amount: 960,
    title: 'Sipariş #KF-512093 (Muhammed B.)',
    method: 'Kart Havuzu',
    status: 'Havuzda (Hazır)',
    date: '11.10.2026 18:05'
  }
];

function getIbanSettings() {
  const stored = localStorage.getItem('kafkef_iban_settings');
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { }
  }
  return DEFAULT_IBAN_SETTINGS;
}

function getWalletTransactions() {
  const stored = localStorage.getItem('kafkef_wallet_txs');
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { }
  }
  localStorage.setItem('kafkef_wallet_txs', JSON.stringify(DEFAULT_WALLET_TXS));
  return DEFAULT_WALLET_TXS;
}

function recordWalletTransaction(tx) {
  const txs = getWalletTransactions();
  txs.unshift(tx);
  localStorage.setItem('kafkef_wallet_txs', JSON.stringify(txs));
  if (typeof renderWalletUI === 'function') {
    renderWalletUI();
  }
}

function getWalletStats() {
  const txs = getWalletTransactions();
  let totalEarned = 0;
  let totalWithdrawn = 0;

  txs.forEach(t => {
    if (t.type === 'order_income') {
      totalEarned += Number(t.amount);
    } else if (t.type === 'payout') {
      totalWithdrawn += Number(t.amount);
    }
  });

  const availableBalance = Math.max(0, totalEarned - totalWithdrawn);
  return { totalEarned, totalWithdrawn, availableBalance };
}

function handleSaveIbanSettings(e) {
  e.preventDefault();
  const bankName = document.getElementById('cfgBankName').value.trim();
  const holderName = document.getElementById('cfgHolderName').value.trim();
  const ibanNo = document.getElementById('cfgIbanNo').value.trim();

  const settings = { bankName, holderName, ibanNo };
  localStorage.setItem('kafkef_iban_settings', JSON.stringify(settings));

  updateCheckoutIbanDisplay();
  renderWalletUI();
  alert('✅ IBAN ve banka hesap bilgileriniz başarıyla güncellendi! Müşteri ödeme ekranında ve para çekme alanında artık bu bilgiler geçerlidir.');
}

function setPayoutAmountQuick(val) {
  const stats = getWalletStats();
  const input = document.getElementById('payoutAmountInput');
  if (!input) return;

  if (val === 'all') {
    input.value = stats.availableBalance;
  } else {
    input.value = Math.min(Number(val), stats.availableBalance);
  }
}

function handleRequestPayout(e) {
  e.preventDefault();
  const stats = getWalletStats();
  const input = document.getElementById('payoutAmountInput');
  const amount = Number(input ? input.value : 0);
  const ibanSettings = getIbanSettings();

  if (amount <= 0) {
    alert('Lütfen geçerli bir tutar giriniz.');
    return;
  }

  if (amount > stats.availableBalance) {
    alert(`Çekilmek istenen tutar (${amount} TL) kullanılabilir havuz bakiyenizden (${stats.availableBalance} TL) fazla olamaz!`);
    return;
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString('tr-TR') + ' ' + now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });

  const payoutTx = {
    id: 'TX-' + Date.now(),
    type: 'payout',
    amount: amount,
    title: `IBAN Transferi (${ibanSettings.bankName} - FAST)`,
    method: ibanSettings.ibanNo,
    status: 'Aktarıldı (Hesapta)',
    date: dateStr
  };

  recordWalletTransaction(payoutTx);
  if (input) input.value = '';

  alert(`🎉 TRANSFER BAŞARILI!\n\n${amount.toLocaleString('tr-TR')} TL tutarındaki havuz bakiyeniz:\n${ibanSettings.holderName} adına kayıtlı\n${ibanSettings.ibanNo} (${ibanSettings.bankName})\nhesabınıza FAST ile başarıyla aktarıldı!`);
}

function renderWalletUI() {
  const stats = getWalletStats();
  const ibanSettings = getIbanSettings();
  const txs = getWalletTransactions();

  const availEl = document.getElementById('walletAvailableBalance');
  const earnedEl = document.getElementById('walletTotalEarned');
  const withdrawnEl = document.getElementById('walletTotalWithdrawn');

  if (availEl) availEl.textContent = stats.availableBalance.toLocaleString('tr-TR') + ' TL';
  if (earnedEl) earnedEl.textContent = stats.totalEarned.toLocaleString('tr-TR') + ' TL';
  if (withdrawnEl) withdrawnEl.textContent = stats.totalWithdrawn.toLocaleString('tr-TR') + ' TL';

  const cfgBank = document.getElementById('cfgBankName');
  const cfgHolder = document.getElementById('cfgHolderName');
  const cfgIban = document.getElementById('cfgIbanNo');

  if (cfgBank && !cfgBank.value) cfgBank.value = ibanSettings.bankName;
  if (cfgHolder && !cfgHolder.value) cfgHolder.value = ibanSettings.holderName;
  if (cfgIban && !cfgIban.value) cfgIban.value = ibanSettings.ibanNo;

  const payoutTargetEl = document.getElementById('payoutTargetIban');
  if (payoutTargetEl) {
    payoutTargetEl.textContent = `${ibanSettings.bankName} - ${ibanSettings.ibanNo} (${ibanSettings.holderName})`;
  }

  const bodyEl = document.getElementById('walletTransactionsBody');
  if (bodyEl) {
    if (txs.length === 0) {
      bodyEl.innerHTML = `<tr><td colspan="5" style="padding:16px;text-align:center;color:var(--text-muted)">Henüz kasa hareketi bulunmuyor.</td></tr>`;
      return;
    }

    bodyEl.innerHTML = txs.map(t => {
      const isIncome = t.type === 'order_income';
      return `
        <tr style="border-bottom:1px solid var(--border-light)">
          <td style="padding:10px;font-size:11.5px;color:var(--text-muted)">${t.date}</td>
          <td style="padding:10px">
            <span class="${isIncome ? 'wallet-badge-income' : 'wallet-badge-payout'}">
              ${isIncome ? '➕ Gelir' : '⚡ IBAN Çekim'}
            </span>
          </td>
          <td style="padding:10px;font-weight:800;color:${isIncome ? '#167144' : '#92400e'}">
            ${isIncome ? '+' : '-'}${Number(t.amount).toLocaleString('tr-TR')} TL
          </td>
          <td style="padding:10px;font-size:12px">
            <strong>${t.title}</strong><br>
            <small style="color:var(--text-muted)">${t.method}</small>
          </td>
          <td style="padding:10px">
            <span style="font-size:11px;font-weight:700;color:${isIncome ? '#167144' : '#2563eb'}">${t.status}</span>
          </td>
        </tr>
      `;
    }).join('');
  }
}

function updateCheckoutIbanDisplay() {
  const settings = getIbanSettings();
  const bankEl = document.getElementById('coBankName');
  const holderEl = document.getElementById('coHolderName');
  const displayEl = document.getElementById('coIbanDisplay');

  if (bankEl) bankEl.textContent = settings.bankName;
  if (holderEl) holderEl.textContent = settings.holderName;
  if (displayEl) displayEl.textContent = settings.ibanNo;
}

function copyIbanToClipboard() {
  const settings = getIbanSettings();
  if (navigator.clipboard) {
    navigator.clipboard.writeText(settings.ibanNo).then(() => {
      alert(`📋 IBAN kopyalandı:\n${settings.ibanNo}`);
    }).catch(() => {
      prompt('IBAN numarasını kopyalayabilirsiniz:', settings.ibanNo);
    });
  } else {
    prompt('IBAN numarasını kopyalayabilirsiniz:', settings.ibanNo);
  }
}

function toggleCheckoutPayment(method) {
  const ibanBox = document.getElementById('checkoutIbanBox');
  const cardBox = document.getElementById('checkoutCardBox');
  if (ibanBox) ibanBox.style.display = method === 'iban' ? 'block' : 'none';
  if (cardBox) cardBox.style.display = method === 'card' ? 'block' : 'none';
}

// 13. SİTE METİNLERİ & CANLI DÜZENLEYİCİ (HER ŞEYİ DEĞİŞTİRME / SİLME)
const DEFAULT_SITE_CONTENT = {
  announce1: '🎉 <strong>3 Defter Alana KARGO BEDAVA!</strong> • <strong>5 Defter Alana 1 Defter HEDİYE</strong> + Kargo Bedava!',
  announce2: '📖 <strong>Arapça İlk Adım Defteri</strong> Satışta! Sadece <strong>240 TL</strong> (Aynı Gün Kargo)',
  announce3: '✨ <strong>Sticker Kitaplarımız & Yeni Defterlerimiz</strong> Çok Yakında Sizinle!',
  heroBadge: '✦ ŞU ANDA SATIŞTA · KÂFKEF NOT',
  heroTitle: 'Arapça İlk Adım <span>Defteri</span>',
  heroDesc: '<strong>Kelime · Cümle · Dilbilgisi · Pratik</strong><br>Arapça\'nın sağdan sola doğal yazım yönüne göre özel olarak tasarlandı. Masanızda ilham verecek zarif kapak, 120 gsm dolma kalemle arkaya geçirmeyen kaliteli kağıt.',
  instagramUrl: 'https://www.instagram.com/kafkefnot/',
  whatsappPhone: '0555 123 45 67'
};

function getSiteContent() {
  const stored = localStorage.getItem('kafkef_site_content_v1');
  if (stored) {
    try { return { ...DEFAULT_SITE_CONTENT, ...JSON.parse(stored) }; } catch (e) { }
  }
  return DEFAULT_SITE_CONTENT;
}

function populateSiteContentForm() {
  const cfg = getSiteContent();
  const f1 = document.getElementById('cfgAnnounce1');
  const f2 = document.getElementById('cfgAnnounce2');
  const f3 = document.getElementById('cfgAnnounce3');
  const fb = document.getElementById('cfgHeroBadge');
  const ft = document.getElementById('cfgHeroTitle');
  const fd = document.getElementById('cfgHeroDesc');
  const fi = document.getElementById('cfgInstagramUrl');
  const fw = document.getElementById('cfgWhatsappPhone');

  if (f1) f1.value = cfg.announce1;
  if (f2) f2.value = cfg.announce2;
  if (f3) f3.value = cfg.announce3;
  if (fb) fb.value = cfg.heroBadge;
  if (ft) ft.value = cfg.heroTitle;
  if (fd) fd.value = cfg.heroDesc;
  if (fi) fi.value = cfg.instagramUrl;
  if (fw) fw.value = cfg.whatsappPhone;
}

function handleSaveSiteContent(e) {
  e.preventDefault();
  const newCfg = {
    announce1: document.getElementById('cfgAnnounce1').value.trim() || DEFAULT_SITE_CONTENT.announce1,
    announce2: document.getElementById('cfgAnnounce2').value.trim() || DEFAULT_SITE_CONTENT.announce2,
    announce3: document.getElementById('cfgAnnounce3').value.trim() || DEFAULT_SITE_CONTENT.announce3,
    heroBadge: document.getElementById('cfgHeroBadge').value.trim() || DEFAULT_SITE_CONTENT.heroBadge,
    heroTitle: document.getElementById('cfgHeroTitle').value.trim() || DEFAULT_SITE_CONTENT.heroTitle,
    heroDesc: document.getElementById('cfgHeroDesc').value.trim() || DEFAULT_SITE_CONTENT.heroDesc,
    instagramUrl: document.getElementById('cfgInstagramUrl').value.trim() || DEFAULT_SITE_CONTENT.instagramUrl,
    whatsappPhone: document.getElementById('cfgWhatsappPhone').value.trim() || DEFAULT_SITE_CONTENT.whatsappPhone
  };

  localStorage.setItem('kafkef_site_content_v1', JSON.stringify(newCfg));
  applySiteContent();
  alert('✅ Tüm site metinleri ve ayarları başarıyla güncellendi!');
}

function handleResetSiteContent() {
  if (confirm('Tüm site metinlerini orijinal varsayılan ayarlara döndürmek istediğinize emin misiniz?')) {
    localStorage.removeItem('kafkef_site_content_v1');
    localStorage.removeItem('kafkef_live_edits');
    applySiteContent();
    populateSiteContentForm();
    alert('🔄 Site metinleri orijinal haline döndürüldü.');
    location.reload();
  }
}

function applySiteContent() {
  const cfg = getSiteContent();

  const elA1 = document.querySelector('[data-live-edit="announcement1"]');
  const elA2 = document.querySelector('[data-live-edit="announcement2"]');
  const elA3 = document.querySelector('[data-live-edit="announcement3"]');
  const elHB = document.querySelector('[data-live-edit="heroSub"]');
  const elHT = document.querySelector('[data-live-edit="heroTitle"]');
  const elHD = document.querySelector('[data-live-edit="heroDesc"]');

  if (elA1) elA1.innerHTML = cfg.announce1;
  if (elA2) elA2.innerHTML = cfg.announce2;
  if (elA3) elA3.innerHTML = cfg.announce3;
  if (elHB) elHB.innerHTML = cfg.heroBadge;
  if (elHT) elHT.innerHTML = cfg.heroTitle;
  if (elHD) elHD.innerHTML = cfg.heroDesc;

  // Canlı görsel düzenlemeleri uygula
  applyLiveEdits();
}

// CANLI GÖRSEL METİN DÜZENLEYİCİ (WIX / WORD TARZI TIKLA-YAZ)
let isLiveEditMode = false;

function toggleLiveEditMode() {
  isLiveEditMode = !isLiveEditMode;
  const btn = document.getElementById('btnLiveEditToggle');
  const toolbar = document.getElementById('liveEditToolbar');
  const editableNodes = document.querySelectorAll('[data-live-edit]');

  if (btn) {
    btn.textContent = isLiveEditMode ? '✏️ Canlı Yazı Düzenleme: AÇIK' : '✏️ Canlı Yazı Düzenleme: KAPALI';
    btn.style.background = isLiveEditMode ? '#167144' : '#ffd3dc';
    btn.style.color = isLiveEditMode ? '#fff' : '#3e000d';
  }

  if (toolbar) {
    toolbar.style.display = isLiveEditMode ? 'flex' : 'none';
  }

  editableNodes.forEach(node => {
    node.contentEditable = isLiveEditMode ? 'true' : 'false';
  });

  if (isLiveEditMode) {
    triggerStickyNotification('✏️ Canlı Düzenleme Açık! Metinlerin üzerine tıklayıp doğrudan değiştirebilirsiniz.');
  }
}

function saveLiveEdits() {
  const editableNodes = document.querySelectorAll('[data-live-edit]');
  const edits = {};
  editableNodes.forEach(node => {
    const key = node.getAttribute('data-live-edit');
    if (key) {
      edits[key] = node.innerHTML;
    }
  });

  localStorage.setItem('kafkef_live_edits', JSON.stringify(edits));
  triggerStickyNotification('💾 Tüm canlı metin değişiklikleri kaydedildi!');
  toggleLiveEditMode();
}

function applyLiveEdits() {
  const stored = localStorage.getItem('kafkef_live_edits');
  if (!stored) return;
  try {
    const edits = JSON.parse(stored);
    Object.keys(edits).forEach(key => {
      const node = document.querySelector(`[data-live-edit="${key}"]`);
      if (node) {
        node.innerHTML = edits[key];
      }
    });
  } catch (e) { }
}
