let cartCount = 0;
let cartTotal = 0;

// Función para abrir/cerrar el carrito
function toggleCart() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

// Función para añadir productos al carrito
function addToCart(name, price) {
    cartCount++;
    cartTotal += price;
    
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
    
    const container = document.getElementById('cart-items');
    if (cartCount === 1) container.innerHTML = '';

    const div = document.createElement('div');
    div.style.padding = '10px 0';
    div.style.borderBottom = '1px solid #30363d';
    div.innerHTML = `<span>${name}</span> <span style="float:right">S/. ${price}</span>`;
    container.appendChild(div);

    // Abrir el carrito automáticamente para confirmación
    document.getElementById('sidebar').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// NUEVA FUNCIÓN: Alertas de navegación para el menú y footer
function redirigir(seccion) {
    alert("Esta página dice:\n\nRedirigiendo a la sección de " + seccion);
}