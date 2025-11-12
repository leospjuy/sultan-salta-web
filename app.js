// ==========================
// CONFIG BÁSICA
// Editá estos datos a gusto
// ==========================
const WHATS_NUMBER = '5493874752648'; // sin + y con código de país 54

const products = [
      // --- PERFUMES ---
      // AFNAN
      { "id": "9am", "name": "9 AM MASC", "brand": "Afnan", "size": 100, "notes": ["Cítrico","Dulce"], "tags":["Unisex","Fresco"], "price": 60000, "priceText": "$60.000", "available": true, "image": "img/9amm-Photoroom.jpg" },
      { "id": "9am-dive", "name": "9 AM DIVE EDP", "brand": "Afnan", "size": 100, "notes": ["Ámbar","Notas acuaticas"], "tags": [], "price": 60000, "priceText": "$60.000", "available": true, "image": "img/9ammdive-Photoroom.jpg" },
      { "id": "9pm", "name": "9 PM MASC EDP", "brand": "Afnan", "size": 100, "notes": ["Ámbar","Pachuli"], "tags": [], "price": 60000, "priceText": "$60.000", "available": true, "image": "img/9pm-Photoroom.jpg" },
      // ARMAF
      { "id": "odyssey-mandarin", "name": "Odyssey Mandarin Sky EDP", "brand": "Armaf", "size": 100, "notes": ["Dulce","Mandarina"], "tags": [], "price": 65000, "priceText": "$65.000", "available": true, "image": "img/mandarin-Photoroom.jpg" },
      { "id": "cdn-iconic", "name": "Club de Nuit Iconic EDP", "brand": "Armaf", "size": 100, "notes": ["Pachuli","Pomelo"], "tags": [], "price": 80000, "priceText": "$80.000", "available": true, "image": "img/cdniconic-Photoroom.jpg" },
      { "id": "cdnim", "name": "Club de Nuit Intense Man", "brand": "Armaf", "size": 105, "notes": ["Amaderado","Cítrico","Almizcle"], "tags":["Masculino","Clásico"], "price": 50000, "priceText": "$50.000", "available": true, "image": "img/cdni-Photoroom.jpg" },
      { "id": "cdn-urban-elixir", "name": "Club de Nuit Urban elixir", "brand": "Armaf", "size": 105, "notes": ["Amaderado","Cítrico","floral blanco"], "tags":["Masculino","Clásico"], "price": 75000, "priceText": "$75.000", "available": true, "image": "img/ccdnurban.jpeg" },
      { "id": "cdn-women", "name": "Club de Nuit Women EDP", "brand": "Armaf", "size": 100, "notes": ["Limon","Cítrico"], "tags": [], "price": 51000, "priceText": "$51.000", "available": true, "image": "img/cdniw-Photoroom.jpg" },
      { "id": "cdn-untold", "name": "Club de Nuit Untold EDP", "brand": "Armaf", "size": 100, "notes": ["Ámbar","Azafran"], "tags": [], "price": 85000, "priceText": "$85.000", "available": true, "image": "img/cdnu-Photoroom.jpg" },
      { "id": "odyssey-candee", "name": "Odyssey Candee", "brand": "Armaf", "size": 100, "notes": ["Rosa","Jazmín"], "tags": [], "price": 55000, "priceText": "$55.000", "available": true, "image": "img/cande-Photoroom.jpg" },
      // LATTAFA
      { "id": "badee-amethyst", "name": "Badee Al Oud Amethyst F EDP", "brand": "Lattafa", "size": 100, "notes": ["Oud","Bergamota"], "tags": [], "price": 60000, "priceText": "$60.000", "available": true, "image": "img/amethyst-Photoroom.jpg" },
      { "id": "badee-honor", "name": "Badee Al Oud Honor & Glory EDP", "brand": "Lattafa", "size": 100, "notes": ["Vainilla","Piña"], "tags": [], "price": 60000, "priceText": "$60.000", "available": true, "image": "img/honor y gloory-Photoroom.jpg" },
      { "id": "badee-glory", "name": "Badee Al Oud Oud For Glory EDP", "brand": "Lattafa", "size": 100, "notes": ["Amaderado","Pachuli"], "tags": [], "price": 60000, "priceText": "$60.000", "available": true, "image": "img/for  gloory-Photoroom.jpg" },
      { "id": "badee-sublime", "name": "Badee Al Oud Sublime EDP", "brand": "Lattafa", "size": 100, "notes": ["Ciruela","Fresa"], "tags": [], "price": 59000, "priceText": "$59.000", "available": true, "image": "img/sublime-Photoroom.jpg" },
      { "id": "fakhar-hombre", "name": "Fakhar Hombre EDP", "brand": "Lattafa", "size": 100, "notes": ["Manzana","Bergamota"], "tags": [], "price": 60000, "priceText": "$60.000", "available": true, "image": "img/fakhar-Photoroom.jpg" },
      { "id": "khamrah", "name": "Khamrah EDP", "brand": "Lattafa", "size": 100, "notes": ["Canela","Vainilla"], "tags": [], "price": 55000, "priceText": "$55.000", "available": true, "image": "img/khamra-Photoroom.jpg" },
      { "id": "khamrah-qahwa", "name": "Khamrah Qahwa EDP", "brand": "Lattafa", "size": 100, "notes": ["Cafe","Canela"], "tags": [], "price": 65000, "priceText": "$65.000", "available": true, "image": "img/khamraqawha-Photoroom.jpg" },
      { "id": "yara-candy", "name": "Yara Candy EDP", "brand": "Lattafa", "size": 100, "notes": ["Almizcle","Jazmín"], "tags": [], "price": 55000, "priceText": "$55.000", "available": true, "image": "img/candyyara-Photoroom.jpg" },
      { "id": "yara-moi", "name": "Yara Moi EDP", "brand": "Lattafa", "size": 100, "notes": ["Pachuli","Floral"], "tags": [], "price": 55000, "priceText": "$55.000", "available": true, "image": "img/yaramoi-Photoroom.jpg" },
      { "id": "yara-rosa", "name": "Yara Rosa EDP", "brand": "Lattafa", "size": 100, "notes": ["Jazmín","Vainilla"], "tags": [], "price": 60000, "priceText": "$60.000", "available": true, "image": "img/yararosa-Photoroom.jpg" },
      { "id": "yara-tous", "name": "Yara Tous EDP", "brand": "Lattafa", "size": 100, "notes": ["Citrico","Rosa"], "tags": [], "price": 50000, "priceText": "$50.000", "available": true, "image": "img/yaratous-Photoroom.jpg" },
      { "id": "yara-assad", "name": "Yara Assad EDP", "brand": "Lattafa", "size": 100, "notes": ["Ámbar","Tabaco"], "tags": [], "price": 51000, "priceText": "$51.000", "available": true, "image": "img/yaraasad-Photoroom.jpg" },
      { "id": "yara-zanzibar", "name": "Yara Assad Zanzibar EDP", "brand": "Lattafa", "size": 100, "notes": ["Aniz","Amaderado"], "tags": [], "price": 43500, "priceText": "$43.500", "available": true, "image": "img/yarazanzibar-Photoroom.jpg" },
      { "id": "kit-yara", "name": "Kit Yara Candy + Yara Rosa EDP", "brand": "Lattafa", "size": 100, "notes": [], "tags": [], "price": 85000, "priceText": "$85.000", "available": true, "image": "img/kityara-Photoroom.jpg" },
      { "id": "musamam-white", "name": "Musamam White EDP", "brand": "Lattafa", "size": 100, "notes": ["Vainilla"], "tags": [], "price": 90000, "priceText": "$90.000", "available": true, "image": "img/musamanwhite-Photoroom.jpg" },
      { "id": "antiquites", "name": "La Collection d Antiquites 1886 EDP", "brand": "Lattafa", "size": 100, "notes": ["Benjuí","Ámbar"], "tags": [], "price": 75000, "priceText": "$75.000", "available": true, "image": "img/lacolletion1886-Photoroom.jpg" },
      { "id": "kingdom", "name": "The Kingdom Masculino", "brand": "Lattafa", "size": 100, "notes": ["Almizcle","Cedro"], "tags": [], "price": 78000, "priceText": "$78.000", "available": true, "image": "img/tkdm-Photoroom.jpg" },
      { "id": "ajwad", "name": "Ajwad De Lattafa Unisex", "brand": "Lattafa", "size": 100, "notes": ["Almizcle","Sándalo"], "tags": [], "price": 50000, "priceText": "$50.000", "available": true, "image": "img/ajwad-Photoroom.jpg" },
      { "id": "angham", "name": "Lattafa Angham", "brand": "Lattafa", "size": 100, "notes": ["Cedro","Almizcle"], "tags": [], "price": 52000, "priceText": "$52.000", "available": true, "image": "img/anghamm-Photoroom.jpg" },
      { "id": "haya", "name": "Lattafa Haya", "brand": "Lattafa", "size": 100, "notes": ["Vainilla","Ámbar"], "tags": [], "price": 53000, "priceText": "$53.000", "available": true, "image": "img/hayaa-Photoroom.jpg" },
      { "id": "sakeena", "name": "Lattafa Sakeena", "brand": "Lattafa", "size": 100, "notes": ["Vetiver","Rosa"], "tags": [], "price": 55000, "priceText": "$55.000", "available": true, "image": "img/sakeena-Photoroom.jpg" },
      // RASASI
      { "id": "hawas-ice", "name": "Hawas ICE", "brand": "Rasasi", "size": 100, "notes": ["Cardamo","Notas acuaticas"], "tags": [], "price": 70000, "priceText": "$70.000", "available": true, "image": "img/hawas-Photoroom.jpg" },
      // ZIMAYA
      { "id": "tiramisu", "name": "Tiramisú Coco Zimaya", "brand": "Zimaya", "size": 100, "notes": ["Dulce"], "tags": [], "price": 60000, "priceText": "$60.000", "available": true, "image": "img/tiramisu.jpg" },
      
      // --- TECNOLOGÍA ---
      { "id": "iphone-13", "name": "iPhone 13", "brand": "TECNO+", "notes": ["Grado A+", "Batería 85%"], "tags": ["Celular", "Apple"], "price": 500000, "priceText": "$500.000", "available": true, "image": "img/iphone-13.jpg" },
      { "id": "tv-stick", "name": "TV Stick", "brand": "TECNO+", "notes": ["Convierte tu TV en Smart"], "tags": ["Tecnología"], "price": 40000, "priceText": "$40.000", "available": true, "image": "img/TVSTICK-Photoroom.jpg" },
      { "id": "alexa-jbl", "name": "Alexa JBL", "brand": "TECNO+", "notes": ["Poné música: Spotify, YouTube, Amazon Music"], "tags": ["Tecnología", "Audio"], "price": 60000, "priceText": "$60.000", "available": true, "image": "img/alexajbl-Photoroom.jpg" },
      { "id": "luo-afeitadora", "name": "LUO afeitadora perfiladora", "brand": "TECNO+", "notes": ["Recargable Barberia Dorado"], "tags": ["Cuidado Personal"], "price": 15000, "priceText": "$15.000", "available": true, "image": "img/patilleraluo.jpg" },

      // --- KARSEELL ---
      { "id": "karseell-shampoo", "name": "Karseell Maca Power Shampoo", "brand": "Karseell", "size": 500, "notes": ["diseñado para fortalecer, nutrir y revitalizar tu cabello"], "tags": ["Cuidado Personal", "Cabello"], "price": 22000, "priceText": "$22.000", "available": true, "image": "img/shampokarsell.jpg" },
      { "id": "karseell-maca", "name": "Karseell Máscara Colágeno", "brand": "Karseell", "size": 500, "notes": ["Restauracion colageno"], "tags": ["Hidratación, Nutrición, Reducción del frizz, Reparación"], "price": 25000, "priceText": "$25.000", "available": true, "image": "img/karsellmaca.jpg" }
];

// ==========================
// Render UI
// ==========================
const $grid = document.querySelector('#grid');
const $q = document.querySelector('#q');
const $brand = document.querySelector('#brand');
const $notes = document.querySelector('#notes');
const $count = document.querySelector('#count');
const $total = document.querySelector('#total');
const $cartContainer = document.querySelector('#cart-container');
const $sendOrder = document.querySelector('#sendOrder');

const state = { selected: new Map(), filter:{ q:'', brand:'', note:'' } };

const perfumeSVG = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M8 2h8v3H8zM10 5h4v3h-4z"/>
    <path d="M7 8h10a3 3 0 013 3v7a3 3 0 01-3 3H7a3 3 0 01-3-3v-7a3 3 0 013-3z"/>
  </svg>`;

function money(n){
  try{
    return n.toLocaleString('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0});
  }catch{ return `${n}` }
}

function card(p){
  const id = `chk_${p.id}`;
  const imageHtml = p.image 
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` 
    : perfumeSVG;
  
  const available = p.available !== false; // Es disponible por defecto, a menos que se especifique `false`.
  const badgeHtml = available 
    ? `<span class="badge">${p.brand}</span>`
    : `<span class="badge danger">Agotado</span>`;

  return `
    <article class="card ${!available ? 'unavailable' : ''}" data-brand="${p.brand}" data-notes="${p.notes.join(',').toLowerCase()}" data-name="${(p.name+ ' ' + p.brand).toLowerCase()}">
      <div class="thumb" aria-hidden="true">
        ${badgeHtml}
        ${imageHtml}
      </div>
      <div class="card-body">
        <div class="name">${p.name} <span class="brand">• ${p.brand} ${p.size ? `• ${p.size}ml` : ''}</span></div>
        <div class="notes">Notas: ${p.notes.join(', ')}</div>
        <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="price">${p.priceText || money(p.price)}</div>
        <div class="actions">          
          <a class="btn whats" href="${waFor([{product: p, quantity: 1}])}" target="_blank" rel="noopener" aria-label="Pedir ${p.name} por WhatsApp">Consultar</a>
          <button class="btn gold add-btn" data-id="${p.id}" ${!available ? 'disabled' : ''}>+ Agregar</button>
        </div>
      </div>
    </article>`;
}

function render(){
  const q = state.filter.q.toLowerCase();
  const brand = state.filter.brand;
  const note = state.filter.note.toLowerCase();

  const list = (products || []).filter(p => {
    const matchQ = !q || (p.name+ ' ' + p.brand + ' ' + p.notes.join(' ')).toLowerCase().includes(q);
    const matchB = !brand || p.brand === brand;
    const matchN = !note || p.notes.map(n=>n.toLowerCase()).some(n=>n.includes(note));
    return matchQ && matchB && matchN;
  });
  $grid.innerHTML = list.map(card).join('');

  // re-bind add buttons
  $grid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e)=>{
      const id = e.target.dataset.id;
      const product = products.find(x=>x.id===id);
      addToCart(product);
      renderCart();
      updateSticky();
    });    
  });
}

function renderCart() {
  const $cartItems = document.querySelector('#cart-items');
  if (state.selected.size === 0) {
    $cartContainer.classList.remove('visible');
    return;
  }

  $cartContainer.classList.add('visible');
  $cartItems.innerHTML = [...state.selected.values()].map(item => `
    <div class="cart-item" data-id="${item.product.id}">
      <img src="${item.product.image || ''}" alt="${item.product.name}">
      <div class="cart-item-details">
        <div>${item.product.name}</div>
        <b>${item.product.priceText || money(item.product.price)}</b>
      </div>
      <div class="quantity-controls">
        <button class="quantity-decrease" title="Quitar uno">-</button>
        <span>${item.quantity}</span>
        <button class="quantity-increase" title="Añadir uno">+</button>
      </div>
    </div>
  `).join('');

  // Añadir listeners a los controles del carrito
  $cartItems.querySelectorAll('.cart-item').forEach(cartItemNode => {
    const id = cartItemNode.dataset.id;
    cartItemNode.querySelector('.quantity-increase').addEventListener('click', () => {
      const item = state.selected.get(id);
      item.quantity++;
      renderCart();
      updateSticky();
    });

    cartItemNode.querySelector('.quantity-decrease').addEventListener('click', () => {
      const item = state.selected.get(id);
      item.quantity--;
      if (item.quantity <= 0) {
        state.selected.delete(id);
      }
      renderCart();
      updateSticky();
    });
  });
}

function addToCart(product) {
  if (!product) return;
  const id = product.id;

  if (state.selected.has(id)) {
    // Si ya está, incrementa la cantidad
    state.selected.get(id).quantity++;
  } else {
    // Si no está, lo agrega con cantidad 1
    state.selected.set(id, { product: product, quantity: 1 });
  }
}

function updateSticky(){
  const items = [...state.selected.values()];
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const total = items.reduce((acc, item) => acc + (Number(item.product.price) * item.quantity), 0);

  $count.textContent = totalCount;
  $total.textContent = money(total);
  $sendOrder.disabled = items.length === 0;
  $sendOrder.classList.toggle('gold', items.length > 0);
}

function waFor(list){
  const itemsText = list.map(item => {
    const quantityText = item.quantity > 1 ? ` (x${item.quantity})` : '';
    return `• ${item.product.name} (${item.product.brand})${quantityText} — ${item.product.priceText || money(item.product.price)}`;
  }).join('%0A');
  
  const total = list.reduce((acc, item) => acc + (Number(item.product.price) * item.quantity), 0);
  const text = `Hola Sultan%2C quiero pedir:%0A${itemsText}%0A%0ASubtotal:%20${encodeURIComponent(money(total))}`;
  return `https://wa.me/${WHATS_NUMBER}?text=${text}`;
}

$q.addEventListener('input', ()=>{ state.filter.q = $q.value; render(); });
$brand.addEventListener('change', ()=>{ state.filter.brand = $brand.value; render(); });
$notes.addEventListener('change', ()=>{ state.filter.note = $notes.value; render(); });

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#cart-close').addEventListener('click', () => {
  $cartContainer.classList.remove('visible');
});

$sendOrder.addEventListener('click', ()=>{
  const list = [...state.selected.values()];
  window.open(waFor(list), '_blank');
});

document.querySelectorAll('.kit [data-kit]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // JSON.parse no funciona con comillas simples, las reemplazamos por dobles.
    const names = JSON.parse(e.target.dataset.kit.replace(/'/g, '"'));
    sendKit(names);
  });
});

function sendKit(names){
  const list = products.filter(p=> names.some(n => (p.name + ' ('+p.brand+')').includes(n)));
  const waList = list.map(p => ({product: p, quantity: 1}));
  window.open(waFor(waList), '_blank');
}

function populateFilters() {
  const brands = [...new Set(products.map(p => p.brand))];
  const allNotes = [...new Set(products.flatMap(p => p.notes))];

  $brand.innerHTML += brands
    .sort()
    .map(b => `<option>${b}</option>`)
    .join('');

  $notes.innerHTML += allNotes
    .sort()
    .map(n => `<option>${n}</option>`)
    .join('');
}

// --- Inicialización ---
render();
populateFilters();