/* ==============================================
   CHALO KHAVA — main.js
   Full interactivity: menu, animations, forms
   ============================================== */

'use strict';

/* ──────────────────────────────────────────────
   MENU DATA
   ────────────────────────────────────────────── */
const MENU = [
  /* ── GUJARATI SPECIALS ── */
  {
    id: 1, cat: 'gujarati', name: 'Gujarati Thali',
    desc: 'Dal, Kadhi, 2 Sabji, Rice, 5 Rotis, Papad, Tangy Pickle & Special Shrikhand — a complete meal.',
    price: 399, badge: 'Bestseller', spice: 1,
    img: 'https://tse4.mm.bing.net/th/id/OIP.Kn7Pb3Z4ejXvIeOz3xPWggHaEJ?pid=Api&P=0&h=180',
    catLabel: 'Gujarati Special'
  },
  {
    id: 2, cat: 'gujarati', name: 'Steamed Dhokla',
    desc: 'Spongy steamed chickpea-flour cakes garnished with mustard seeds and fresh coriander.',
    price: 120, badge: 'Must Try', spice: 0,
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=350&fit=crop&q=80',
    catLabel: 'Gujarati Special'
  },
  {
    id: 3, cat: 'gujarati', name: 'Khandvi',
    desc: 'Delicate rolled gram-flour snack finished with coconut, sesame & curry leaves.',
    price: 110, badge: null, spice: 0,
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=350&fit=crop&q=80',
    catLabel: 'Gujarati Special'
  },
  {
    id: 4, cat: 'gujarati', name: 'Undhiyu',
    desc: 'Mixed winter vegetables slow-cooked in an earthen pot with a burst of spices.',
    price: 250, badge: 'Seasonal', spice: 2,
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=350&fit=crop&q=80',
    catLabel: 'Gujarati Special'
  },
  {
    id: 5, cat: 'gujarati', name: 'Dal Dhokli',
    desc: 'Spiced wheat-flour dumplings simmered in a fragrant toor dal curry.',
    price: 180, badge: 'Comfort Food', spice: 2,
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&h=350&fit=crop&q=80',
    catLabel: 'Gujarati Special'
  },
  {
    id: 6, cat: 'gujarati', name: 'Kadhi Khichdi',
    desc: 'Creamy buttermilk kadhi served alongside perfectly cooked moong-dal khichdi.',
    price: 160, badge: null, spice: 1,
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=350&fit=crop&q=80',
    catLabel: 'Gujarati Special'
  },
  {
    id: 7, cat: 'gujarati', name: 'Fafda Gathiya',
    desc: 'Crispy gram-flour snacks served with tangy green chutney and raw papaya pickle.',
    price: 100, badge: null, spice: 1,
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=350&fit=crop&q=80',
    catLabel: 'Gujarati Special'
  },

  /* ── STARTERS ── */
  {
    id: 8, cat: 'starters', name: 'Paneer Tikka',
    desc: 'Marinated cottage cheese cubes grilled in tandoor with peppers and spiced onions.',
    price: 280, badge: 'Popular', spice: 2,
    img: 'https://images.unsplash.com/photo-1599487488310-c5b2082cdd9c?w=500&h=350&fit=crop&q=80',
    catLabel: 'Starter'
  },
  {
    id: 9, cat: 'starters', name: 'Veg Spring Rolls',
    desc: 'Crispy pastry rolls filled with stir-fried veggies and Asian herbs.',
    price: 150, badge: null, spice: 1,
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=350&fit=crop&q=80',
    catLabel: 'Starter'
  },
  {
    id: 10, cat: 'starters', name: 'Hara Bhara Kabab',
    desc: 'Patties made from spinach, peas and spices, pan-fried to golden perfection.',
    price: 200, badge: null, spice: 1,
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=350&fit=crop&q=80',
    catLabel: 'Starter'
  },
  {
    id: 11, cat: 'starters', name: 'Crispy Corn',
    desc: 'Sweet corn tossed in butter, aromatic spices and fresh herbs.',
    price: 160, badge: "Kids' Fav", spice: 1,
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=350&fit=crop&q=80',
    catLabel: 'Starter'
  },
  {
    id: 12, cat: 'starters', name: 'Veg Manchurian',
    desc: 'Crispy veggie balls in a tangy-sweet Indo-Chinese sauce.',
    price: 180, badge: null, spice: 2,
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=350&fit=crop&q=80',
    catLabel: 'Starter'
  },
  {
    id: 13, cat: 'starters', name: 'Masala Papad',
    desc: 'Crispy papads topped with diced onions, tomatoes and signature chutneys.',
    price: 80, badge: null, spice: 1,
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&h=350&fit=crop&q=80',
    catLabel: 'Starter'
  },

  /* ── MAINS ── */
  {
    id: 14, cat: 'mains', name: 'Paneer Butter Masala',
    desc: 'Soft paneer cubes in a velvety tomato-butter gravy topped with fresh cream.',
    price: 300, badge: 'Bestseller', spice: 1,
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&h=350&fit=crop&q=80',
    catLabel: 'Main Course'
  },
  {
    id: 15, cat: 'mains', name: 'Dal Makhani',
    desc: 'Black lentils slow-cooked overnight with butter, cream and aromatic spices.',
    price: 250, badge: null, spice: 1,
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=350&fit=crop&q=80',
    catLabel: 'Main Course'
  },
  {
    id: 16, cat: 'mains', name: 'Palak Paneer',
    desc: 'Fresh cottage cheese in smooth, garlicky spinach gravy.',
    price: 280, badge: null, spice: 2,
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&h=350&fit=crop&q=80',
    catLabel: 'Main Course'
  },
  {
    id: 17, cat: 'mains', name: 'Chole Masala',
    desc: 'Hearty chickpeas slow-cooked in a bold tangy-spiced onion-tomato masala.',
    price: 220, badge: null, spice: 3,
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=350&fit=crop&q=80',
    catLabel: 'Main Course'
  },
  {
    id: 18, cat: 'mains', name: 'Veg Dum Biryani',
    desc: 'Fragrant basmati rice dum-cooked with seasonal vegetables and saffron.',
    price: 280, badge: "Chef's Pick", spice: 2,
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=350&fit=crop&q=80',
    catLabel: 'Main Course'
  },
  {
    id: 19, cat: 'mains', name: 'Kadai Paneer',
    desc: 'Paneer and peppers tossed in a bold, smoky kadai masala.',
    price: 290, badge: null, spice: 3,
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&h=350&fit=crop&q=80',
    catLabel: 'Main Course'
  },
  {
    id: 20, cat: 'mains', name: 'Shahi Korma',
    desc: 'Mixed vegetables and paneer in a creamy cashew-and-saffron royal gravy.',
    price: 320, badge: 'Premium', spice: 1,
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=350&fit=crop&q=80',
    catLabel: 'Main Course'
  },

  /* ── BREADS ── */
  {
    id: 21, cat: 'breads', name: 'Butter Naan',
    desc: 'Soft leavened bread baked in tandoor, generously slathered with butter.',
    price: 50, badge: null, spice: 0,
    img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&h=350&fit=crop&q=80',
    catLabel: 'Breads'
  },
  {
    id: 22, cat: 'breads', name: 'Garlic Naan',
    desc: 'Tandoor-baked naan topped with minced garlic, butter and coriander.',
    price: 60, badge: 'Popular', spice: 0,
    img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&h=350&fit=crop&q=80',
    catLabel: 'Breads'
  },
  {
    id: 23, cat: 'breads', name: 'Thepla (3 pcs)',
    desc: 'Soft Gujarati flatbread made with fenugreek leaves and warming spices.',
    price: 80, badge: 'Gujarati Fav', spice: 1,
    img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&h=350&fit=crop&q=80',
    catLabel: 'Breads'
  },
  {
    id: 24, cat: 'breads', name: 'Puri (4 pcs)',
    desc: 'Golden, puffed deep-fried wheat bread — perfect with sabji.',
    price: 60, badge: null, spice: 0,
    img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&h=350&fit=crop&q=80',
    catLabel: 'Breads'
  },
  {
    id: 25, cat: 'breads', name: 'Missi Roti',
    desc: 'Rustic whole-wheat and gram-flour roti seasoned with ajwain.',
    price: 45, badge: null, spice: 1,
    img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&h=350&fit=crop&q=80',
    catLabel: 'Breads'
  },

  /* ── DESSERTS ── */
  {
    id: 26, cat: 'desserts', name: 'Kesar Shrikhand',
    desc: 'Strained yogurt sweetened with sugar and perfumed with saffron and cardamom.',
    price: 120, badge: 'Must Try', spice: 0,
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&h=350&fit=crop&q=80',
    catLabel: 'Dessert'
  },
  {
    id: 27, cat: 'desserts', name: 'Gulab Jamun (2 pcs)',
    desc: 'Melt-in-mouth milk-solid dumplings soaked in rose-flavoured sugar syrup.',
    price: 100, badge: 'All-time Fav', spice: 0,
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=350&fit=crop&q=80',
    catLabel: 'Dessert'
  },
  {
    id: 28, cat: 'desserts', name: 'Basundi',
    desc: 'Creamy reduced-milk dessert flavoured with saffron, cardamom and pistachio.',
    price: 140, badge: null, spice: 0,
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&h=350&fit=crop&q=80',
    catLabel: 'Dessert'
  },
  {
    id: 29, cat: 'desserts', name: 'Gajar Halwa',
    desc: 'Classic carrot pudding slow-cooked with ghee, sugar, milk and dry fruits.',
    price: 120, badge: 'Winter Special', spice: 0,
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=350&fit=crop&q=80',
    catLabel: 'Dessert'
  },
  {
    id: 30, cat: 'desserts', name: 'Mohan Thal',
    desc: 'Traditional Gujarati gram-flour fudge made with pure ghee and topped with nuts.',
    price: 100, badge: null, spice: 0,
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&h=350&fit=crop&q=80',
    catLabel: 'Dessert'
  },

  /* ── BEVERAGES ── */
  {
    id: 31, cat: 'beverages', name: 'Mango Lassi',
    desc: 'Thick creamy yogurt blended with Alphonso mangoes — a summer icon.',
    price: 100, badge: 'Summer Hit', spice: 0,
    img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&h=350&fit=crop&q=80',
    catLabel: 'Beverage'
  },
  {
    id: 32, cat: 'beverages', name: 'Chaas (Buttermilk)',
    desc: 'Refreshing spiced buttermilk with roasted cumin, ginger and coriander.',
    price: 60, badge: "Gujarat's Own", spice: 1,
    img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&h=350&fit=crop&q=80',
    catLabel: 'Beverage'
  },
  {
    id: 33, cat: 'beverages', name: 'Masala Chai',
    desc: 'Strong ginger-cardamom tea brewed low and slow in whole milk.',
    price: 50, badge: null, spice: 1,
    img: 'https://images.unsplash.com/photo-1544025132-c9699b0e6f4c?w=500&h=350&fit=crop&q=80',
    catLabel: 'Beverage'
  },
  {
    id: 34, cat: 'beverages', name: 'Rose Sharbat',
    desc: 'Chilled rose-water drink with sabja seeds, fresh lime and a pinch of kala namak.',
    price: 90, badge: null, spice: 0,
    img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&h=350&fit=crop&q=80',
    catLabel: 'Beverage'
  },
  {
    id: 35, cat: 'beverages', name: 'Fresh Lime Soda',
    desc: 'Zesty fresh lime with soda — served sweet, salty or mixed, your choice.',
    price: 80, badge: null, spice: 0,
    img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&h=350&fit=crop&q=80',
    catLabel: 'Beverage'
  },
];

/* ──────────────────────────────────────────────
   TESTIMONIALS DATA
   ────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    text: '"The Gujarati Thali here is exactly like my naani\'s cooking! The kadhi-khichdi combo is just heavenly. I come here every Sunday without fail."',
    name: 'Priya Mehta',
    loc: 'Athwa, Surat',
    stars: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    text: '"Chalo Khava is our family\'s go-to restaurant. The Undhiyu during winters is absolutely unmissable — authentic, aromatic and served piping hot."',
    name: 'Rakesh Shah',
    loc: 'Adajan, Surat',
    stars: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    text: '"Best Dhokla and Khandvi in the entire city, no contest! The warm, homely ambiance makes the experience even more special. Highly recommend!"',
    name: 'Nandini Desai',
    loc: 'Vesu, Surat',
    stars: 5,
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    text: '"The Dal Dhokli reminds me of my hometown. Perfect spice levels, made fresh daily. The service is warm and attentive — feels like home."',
    name: 'Viral Patel',
    loc: 'Piplod, Surat',
    stars: 5,
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
];

/* ──────────────────────────────────────────────
   UTILITY: TOAST NOTIFICATION
   ────────────────────────────────────────────── */
function showToast(msg, duration = 3000) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ──────────────────────────────────────────────
   ANNOUNCEMENT BAR
   ────────────────────────────────────────────── */
(function initAnnBar() {
  const bar = document.getElementById('announcementBar');
  const close = document.getElementById('annClose');
  if (!bar || !close) return;
  close.addEventListener('click', () => {
    bar.style.maxHeight = bar.scrollHeight + 'px';
    requestAnimationFrame(() => {
      bar.style.transition = 'max-height 0.35s ease, padding 0.35s ease';
      bar.style.maxHeight = '0';
      bar.style.padding = '0';
      bar.style.overflow = 'hidden';
    });
  });
})();

/* ──────────────────────────────────────────────
   NAVBAR — scroll effect + hamburger
   ────────────────────────────────────────────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Scroll → add .scrolled class
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    // back-to-top visibility
    document.getElementById('backTop').classList.toggle('visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu when nav link clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link[data-section]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => observer.observe(s));
})();

/* ──────────────────────────────────────────────
   HERO — image parallax + bg loaded
   ────────────────────────────────────────────── */
(function initHero() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  // Trigger scale animation after a short delay (feels smooth)
  setTimeout(() => heroBg.classList.add('loaded'), 300);

  // Light parallax on scroll
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroBg.style.transform = `translateY(${y * 0.3}px) scale(1)`;
    }
  }, { passive: true });
})();

/* ──────────────────────────────────────────────
   COUNTER ANIMATION
   ────────────────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = (target / duration) * 16;
  let current = 0;
  const tick = () => {
    current = Math.min(current + step, target);
    el.textContent = current >= 1000
      ? (current / 1000).toFixed(current >= 10000 ? 0 : 1) + 'K'
      : Math.floor(current);
    if (current < target) requestAnimationFrame(tick);
    else el.textContent = target >= 1000
      ? (target / 1000).toFixed(target >= 10000 ? 0 : 1) + 'K'
      : target;
  };
  requestAnimationFrame(tick);
}

(function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });
  counters.forEach(c => obs.observe(c));
})();

/* ──────────────────────────────────────────────
   SCROLL REVEAL ANIMATIONS
   ────────────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
})();

/* ──────────────────────────────────────────────
   MENU — render + filter
   ────────────────────────────────────────────── */
const spiceLabel = ['No Spice', 'Mild', 'Medium', 'Spicy'];
const spiceEmoji = ['', '🌶', '🌶🌶', '🌶🌶🌶'];

function buildCard(item) {
  const badge = item.badge
    ? `<span class="card-badge">${item.badge}</span>`
    : '';
  const spiceHtml = item.spice > 0
    ? `<div class="spice-row" title="${spiceLabel[item.spice]}">${spiceEmoji[item.spice]}</div>`
    : '';

  return `
    <div class="menu-card fade-in" data-cat="${item.cat}" data-id="${item.id}">
      <div class="card-img-wrap">
        <img
          src="${item.img}"
          alt="${item.name}"
          loading="lazy"
          onerror="this.parentElement.classList.add('img-err')"
        />
        ${badge}
        <button class="card-wish" data-id="${item.id}" aria-label="Add to wishlist">🤍</button>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="veg-dot"></span>
          <span class="card-cat-label">${item.catLabel}</span>
        </div>
        ${spiceHtml}
        <h3 class="card-name">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">₹${item.price}</span>
          <button class="card-order-btn">View Details</button>
        </div>
      </div>
    </div>`;
}

function renderMenu(cat = 'all') {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  const list = cat === 'all' ? MENU : MENU.filter(i => i.cat === cat);
  grid.innerHTML = list.map(buildCard).join('');
  // Stagger animation
  grid.querySelectorAll('.menu-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 0.05}s`;
  });
  // Attach card + wish events after render
  attachCardEvents();
}

function attachCardEvents() {
  // Wishlist hearts
  document.querySelectorAll('.card-wish').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const liked = btn.classList.toggle('liked');
      btn.textContent = liked ? '❤️' : '🤍';
      const item = MENU.find(m => m.id === parseInt(btn.dataset.id, 10));
      showToast(liked ? `Added ${item.name} to wishlist ❤️` : `Removed from wishlist`);
    });
  });

  // Open modal on card click
  document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.classList.contains('card-wish') || e.target.closest('.card-wish')) return;
      const id = parseInt(card.dataset.id, 10);
      const item = MENU.find(m => m.id === id);
      openModal(item);
    });
  });
}

(function initMenuFilter() {
  renderMenu();
  const filterContainer = document.getElementById('menuFilters');
  if (!filterContainer) return;
  filterContainer.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.cat);
    // Re-trigger scroll reveal for newly rendered cards
    const cards = document.querySelectorAll('.menu-card');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e2 => {
        if (e2.isIntersecting) { e2.target.classList.add('in-view'); obs.unobserve(e2.target); }
      });
    }, { threshold: 0.1 });
    cards.forEach(c => obs.observe(c));
  });
})();

/* ──────────────────────────────────────────────
   MODAL
   ────────────────────────────────────────────── */
function openModal(item) {
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalImg').src = item.img;
  document.getElementById('modalImg').alt = item.name;
  document.getElementById('modalName').textContent = item.name;
  document.getElementById('modalDesc').textContent = item.desc;
  document.getElementById('modalPrice').textContent = `₹${item.price}`;
  const badgeEl = document.getElementById('modalBadge');
  badgeEl.textContent = item.badge || '';
  badgeEl.style.display = item.badge ? 'inline-block' : 'none';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

(function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  if (!overlay || !closeBtn) return;

  const close = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

/* ──────────────────────────────────────────────
   TESTIMONIALS CAROUSEL
   ────────────────────────────────────────────── */
(function initTestimonials() {
  const track = document.getElementById('testiTrack');
  const dotsWrap = document.getElementById('testiDots');
  if (!track || !dotsWrap) return;

  // Render cards
  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testi-card">
      <div class="testi-stars">${'⭐'.repeat(t.stars)}</div>
      <p class="testi-text">${t.text}</p>
      <div class="testi-avatar">
        <img src="${t.avatar}" alt="${t.name}" loading="lazy"
             onerror="this.style.display='none'" />
      </div>
      <div class="testi-name">${t.name}</div>
      <div class="testi-loc">${t.loc}</div>
    </div>`).join('');

  // Render dots
  dotsWrap.innerHTML = TESTIMONIALS.map((_, i) =>
    `<div class="testi-dot${i === 0 ? ' active' : ''}" data-index="${i}"></div>`).join('');

  let current = 0;
  let autoTimer;

  function goTo(index) {
    current = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsWrap.querySelectorAll('.testi-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current));
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 4500);
  }

  dotsWrap.addEventListener('click', e => {
    const dot = e.target.closest('.testi-dot');
    if (!dot) return;
    goTo(parseInt(dot.dataset.index, 10));
    startAuto();
  });

  // Touch/swipe support
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { goTo(diff > 0 ? current + 1 : current - 1); startAuto(); }
  });

  startAuto();
})();

/* ──────────────────────────────────────────────
   GALLERY LIGHTBOX
   ────────────────────────────────────────────── */
(function initGallery() {
  document.querySelectorAll('.g-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const label = item.dataset.label || '';
      if (!img) return;

      // Create a quick lightbox
      const lb = document.createElement('div');
      lb.style.cssText = `
        position:fixed;inset:0;z-index:3000;background:rgba(20,10,3,0.92);
        display:flex;align-items:center;justify-content:center;
        flex-direction:column;gap:1rem;cursor:zoom-out;
        animation:fadeIn .25s ease;
      `;
      lb.innerHTML = `
        <img src="${img.src}" alt="${label}"
          style="max-width:90vw;max-height:80vh;border-radius:10px;object-fit:contain;box-shadow:0 20px 60px rgba(0,0,0,0.6);" />
        <p style="color:rgba(255,255,255,0.75);font-family:'Playfair Display',serif;font-size:1.1rem;">${label}</p>
      `;
      document.body.appendChild(lb);
      document.body.style.overflow = 'hidden';
      lb.addEventListener('click', () => {
        lb.style.animation = 'fadeOut .2s ease forwards';
        setTimeout(() => { lb.remove(); document.body.style.overflow = ''; }, 200);
      });
    });
  });

  // Inject keyframe styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
    @keyframes fadeOut { from{opacity:1} to{opacity:0} }
  `;
  document.head.appendChild(style);
})();

/* ──────────────────────────────────────────────
   RESERVATION FORM
   ────────────────────────────────────────────── */
(function initReservationForm() {
  const form = document.getElementById('reservationForm');
  const btn = document.getElementById('submitBtn');
  if (!form) return;

  // Set minimum date to today
  const dateInput = document.getElementById('resDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('guestName')?.value.trim();
    const phone = document.getElementById('guestPhone')?.value.trim();
    const date = document.getElementById('resDate')?.value;
    const time = document.getElementById('resTime')?.value;
    const guests = document.getElementById('resGuests')?.value;

    // Basic validation
    if (!name || !phone || !date || !time || !guests) {
      showToast('⚠️ Please fill in all required fields.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      showToast('⚠️ Please enter a valid phone number.');
      return;
    }

    // Simulate submission
    btn.textContent = 'Booking...';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    setTimeout(() => {
      btn.textContent = '✅ Reservation Confirmed!';
      btn.style.background = '#527A3E';
      btn.style.opacity = '1';
      showToast(`🎉 Table booked for ${name} on ${formatDate(date)} at ${time}!`, 5000);
      form.reset();
      setTimeout(() => {
        btn.textContent = 'Confirm Reservation 🍽️';
        btn.disabled = false;
        btn.style.background = '';
      }, 4000);
    }, 1500);
  });

  function formatDate(str) {
    const d = new Date(str);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  }
})();

/* ──────────────────────────────────────────────
   BACK TO TOP
   ────────────────────────────────────────────── */
(function initBackTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ──────────────────────────────────────────────
   SMOOTH ANCHOR SCROLL (for all # links)
   ────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = document.getElementById('navbar')?.offsetHeight || 66;
    const annH = document.getElementById('announcementBar')?.offsetHeight || 0;
    const offset = target.getBoundingClientRect().top + window.scrollY - navH - annH - 10;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});

/* ──────────────────────────────────────────────
   HERO REVEAL ON LOAD
   ────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  // Stagger in hero elements
  const items = document.querySelectorAll('.hero-content .reveal-up');
  items.forEach((el, i) => {
    setTimeout(() => el.classList.add('in-view'), 300 + i * 150);
  });
});

console.log('%c🍽️ Chalo Khava — Kem Cho!', 'color:#C8540A;font-size:1.2rem;font-weight:bold;');
