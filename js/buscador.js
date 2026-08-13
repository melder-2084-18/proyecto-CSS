(function () {
    // 1. CATÁLOGO GLOBAL 100% COMPLETO CON TODOS LOS PRODUCTOS DEL PROYECTO
    const GLOBAL_CATALOG = [
        // --- HOGAR (hogar.html) ---
        { title: 'Sofá gris de 2 plazas', category: 'Hogar', price: 189.00, page: './hogar.html', image: 'https://via.placeholder.com/160x140?text=Sofa' },
        { title: 'Sartén antiadherente 28cm', category: 'Hogar', price: 14.50, page: './hogar.html', image: 'https://via.placeholder.com/160x140?text=Sarten' },
        { title: 'Set de cajas organizadoras', category: 'Hogar', price: 12.00, page: './hogar.html', image: 'https://via.placeholder.com/160x140?text=Organizadores' },
        { title: 'Juego de sábanas queen', category: 'Hogar', price: 22.00, page: './hogar.html', image: 'https://via.placeholder.com/160x140?text=Ropa+de+Cama' },
        { title: 'Cortinas verdes blackout', category: 'Hogar', price: 18.00, page: './hogar.html', image: 'https://via.placeholder.com/160x140?text=Cortinas' },
        { title: 'Licuadora 3 velocidades', category: 'Hogar', price: 27.00, page: './hogar.html', image: 'https://via.placeholder.com/160x140?text=Licuadora' },

        // --- TECNOLOGÍA (tecnologia.html) ---
        { title: 'Smart TV 55 pulgadas 4K', category: 'Tecnología', price: 399.99, page: './tecnologia.html', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=500&q=80' },
        { title: 'Smartphone Nova X Pro', category: 'Tecnología', price: 299.99, page: './tecnologia.html', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80' },
        { title: 'Laptop Ultra 15 pulgadas', category: 'Tecnología', price: 649.99, page: './tecnologia.html', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80' },
        { title: 'Audífonos inalámbricos Pro', category: 'Tecnología', price: 59.99, page: './tecnologia.html', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80' },
        { title: 'Smartwatch Active', category: 'Tecnología', price: 89.99, page: './tecnologia.html', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80' },
        { title: 'Cámara digital compacta', category: 'Tecnología', price: 249.99, page: './tecnologia.html', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80' },
        { title: 'Teclado mecánico RGB', category: 'Tecnología', price: 49.99, page: './tecnologia.html', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80' },
        { title: 'Mouse inalámbrico ergonómico', category: 'Tecnología', price: 29.99, page: './tecnologia.html', image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=500&q=80' },
        { title: 'Parlante Bluetooth portátil', category: 'Tecnología', price: 44.99, page: './tecnologia.html', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80' },
        { title: 'Cargador rápido USB-C', category: 'Tecnología', price: 19.99, page: './tecnologia.html', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=500&q=80' },
        { title: 'Tablet 10 pulgadas', category: 'Tecnología', price: 179.99, page: './tecnologia.html', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80' },
        { title: 'Consola portátil de videojuegos', category: 'Tecnología', price: 129.99, page: './tecnologia.html', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=500&q=80' },

        // --- MÁS VENDIDOS (mas-vendidos.html) ---
        { title: 'Auriculares bluetooth', category: 'Tecnología', price: 22.00, page: './mas-vendidos.html', image: '../Assets/Auriculares%20inal%C3%A1mbricos%20sony.png' },
        { title: 'Smartwatch Pro', category: 'Tecnología', price: 25.00, page: './mas-vendidos.html', image: '../Assets/smart%20watch%20tecnologia.png' },
        { title: 'Set de cortinas color verde esmeralda', category: 'Hogar', price: 5.00, page: './mas-vendidos.html', image: '../Assets/cortinas%20producto.png' },
        { title: 'Mochila negra resistente al agua', category: 'Moda', price: 45.00, page: './mas-vendidos.html', image: '../Assets/mochila%20negra%20producto.png' },
        { title: 'Perfume aroma a manzana', category: 'Belleza', price: 60.00, page: './mas-vendidos.html', image: '../Assets/perfume%20producto.png' },
        { title: 'Bolso azul', category: 'Moda', price: 75.00, page: './mas-vendidos.html', image: '../Assets/bolso%20producto.png' },

        // --- INICIO (index.html) ---
        { title: 'Buzo adidas Classic hombre', category: 'Moda', price: 12.99, page: './index.html', image: '../Assets/sueter%20banner%202.png' },
        { title: 'Perfume Dream 100ml', category: 'Belleza', price: 75.00, page: './index.html', image: '../Assets/Perfume%20Ocean%20100ml.png' },
        { title: 'Mochila Urban', category: 'Moda', price: 15.99, page: './index.html', image: '../Assets/mochila%20negra%20producto.png' },
        { title: 'Batidora de Pie Smart (Hogar)', category: 'Hogar', price: 45.99, page: './index.html', image: '../Assets/Batidora%20Smart%20.png' },
        { title: 'Auriculares Inalámbricos Pro (Tecnología)', category: 'Tecnología', price: 59.00, page: './index.html', image: '../Assets/Auriculares%20inal%C3%A1mbricos%20sony.png' },
        { title: 'Set de Skincare Premium (Belleza)', category: 'Belleza', price: 29.50, page: './index.html', image: '../Assets/Set%20de%20belleza.png' },

        // --- OFERTAS (ofertas.html) ---
        { title: 'Perfume Ocean 100ml', category: 'Belleza', price: 72.25, page: './ofertas.html', image: '../Assets/Perfume%20Ocean%20100ml.png' },
        { title: 'Bolso de cuero azul', category: 'Moda', price: 59.00, page: './ofertas.html', image: '../Assets/Bolso%20producto.png' },
        { title: 'Jeans slim fit hombre', category: 'Moda', price: 22.50, page: './ofertas.html', image: '../Assets/Jeans%20slim%20fit%20hombre.png' },
        { title: 'Tenis deportivos urbanos', category: 'Moda', price: 34.99, page: './ofertas.html', image: '../Assets/Tenis%20deportivos%20urbanos.png' },
        { title: 'Chaqueta impermeable', category: 'Moda', price: 44.00, page: './ofertas.html', image: '../Assets/Chaqueta%20impermeable.png' },
        { title: 'Crema facial hidratante', category: 'Belleza', price: 18.50, page: './ofertas.html', image: '../Assets/Crema%20facial%20hidratante.png' },
        { title: 'Labial mate larga duración', category: 'Belleza', price: 9.99, page: './ofertas.html', image: '../Assets/Labial%20mate%20larga%20duraci%C3%B3n.png' },
        { title: 'Shampoo reparador Palmolive', category: 'Belleza', price: 11.75, page: './ofertas.html', image: '../Assets/Shampoo%20reparador.png' },
        { title: 'Paleta de sombras', category: 'Belleza', price: 21.00, page: './ofertas.html', image: '../Assets/Paleta%20de%20sombras.png' },
        { title: 'Set de brochas de maquillaje', category: 'Belleza', price: 16.40, page: './ofertas.html', image: '../Assets/Set%20de%20brochas%20de%20maquillaje.png' },
        { title: 'Botella Térmica 750ml', category: 'Deportes', price: 35.00, page: './ofertas.html', image: '../Assets/Botella%20T%C3%A9rmica%20750ml.png' },
        { title: 'Mancuernas ajustables', category: 'Deportes', price: 48.00, page: './ofertas.html', image: '../Assets/Mancuernas%20ajustables.png' },
        { title: 'Balón de fútbol profesional', category: 'Deportes', price: 24.99, page: './ofertas.html', image: '../Assets/Bal%C3%B3n%20de%20f%C3%BAtbol%20profesional.png' },
        { title: 'Guantes de Boxeo del Venudo', category: 'Deportes', price: 17.50, page: './ofertas.html', image: '../Assets/Guantes%20de%20boxeo%20-%20Venudo.png' },
        { title: 'Mat de yoga antideslizante', category: 'Deportes', price: 29.99, page: './ofertas.html', image: '../Assets/Mat%20de%20yoga%20antideslizante.png' },
        { title: 'Bicicleta de montaña', category: 'Deportes', price: 219.00, page: './ofertas.html', image: '../Assets/Bicicleta.png' }
    ];

    // NORMALIZADOR DE TEXTO (Quita acentos, signos y mayúsculas)
    function normalizeText(str) {
        if (!str) return '';
        return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, '').trim();
    }

    // EVENTO DE CLIC EN UN RESULTADO DE LA BÚSQUEDA
    window.onSearchItemClick = function (event, targetPage, targetTitle) {
        event.preventDefault();

        sessionStorage.setItem('searchTargetTitle', targetTitle);

        const currentPath = window.location.pathname;
        const currentPageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

        // Si la página requerida es la misma en la que estamos
        if (targetPage.includes(currentPageName) || currentPageName.includes(targetPage.replace('./', ''))) {
            scrollToProductByTitle(targetTitle);
        } else {
            // Si requiere cambiar de página
            window.location.href = `${targetPage}?target=${encodeURIComponent(targetTitle)}`;
        }
    };

    // ESCÁNER UNIVERSAL DE TARJETAS POR TEXTO
    function scrollToProductByTitle(titleToFind) {
        document.querySelectorAll('.search-dropdown').forEach(d => d.classList.remove('active'));

        const cleanTarget = normalizeText(titleToFind);

        // Si la página usa filtros (como en ofertas.html), forzar clic en "Todo"
        const filterAllBtn = document.querySelector('.filter-btn[data-filter="todo"]');
        if (filterAllBtn && !filterAllBtn.classList.contains('active')) {
            filterAllBtn.click();
        }

        setTimeout(() => {
            const candidateElements = document.querySelectorAll('.product-title, .product-card h3, .product-card h4');
            let foundCard = null;

            for (let el of candidateElements) {
                const text = normalizeText(el.textContent);
                if (text === cleanTarget || text.includes(cleanTarget) || cleanTarget.includes(text)) {
                    foundCard = el.closest('.product-card') || el.closest('article');
                    break;
                }
            }

            if (foundCard) {
                foundCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Efecto de enfoque e iluminación
                foundCard.style.transition = 'all 0.4s ease';
                foundCard.style.outline = '4px solid #2563EB';
                foundCard.style.boxShadow = '0 0 25px rgba(37, 99, 235, 0.5)';
                foundCard.style.transform = 'scale(1.04)';

                setTimeout(() => {
                    foundCard.style.outline = 'none';
                    foundCard.style.boxShadow = 'none';
                    foundCard.style.transform = 'scale(1)';
                    sessionStorage.removeItem('searchTargetTitle');
                }, 2500);
            }
        }, 300);
    }

    // COMPROBAR SI VIENE DE UNA REDIRECCIÓN CON PARÁMETRO
    function checkUrlForTarget() {
        const urlParams = new URLSearchParams(window.location.search);
        const targetTitle = urlParams.get('target') || sessionStorage.getItem('searchTargetTitle');

        if (targetTitle) {
            scrollToProductByTitle(targetTitle);
        }
    }

    // INICIALIZACIÓN DEL BUSCADOR
    function initSearchSystem() {
        const searchBars = document.querySelectorAll('.search-bar');

        searchBars.forEach(bar => {
            const input = bar.querySelector('input');
            if (!input) return;

            let dropdown = bar.querySelector('.search-dropdown');
            if (!dropdown) {
                dropdown = document.createElement('div');
                dropdown.className = 'search-dropdown';
                bar.appendChild(dropdown);
            }

            function executeSearch(query) {
                const cleanQuery = normalizeText(query);
                if (!cleanQuery) {
                    dropdown.classList.remove('active');
                    dropdown.innerHTML = '';
                    return;
                }

                // Filtrar duplicados
                const uniqueProducts = [];
                const seenTitles = new Set();

                GLOBAL_CATALOG.forEach(p => {
                    const normTitle = normalizeText(p.title);
                    if (!seenTitles.has(normTitle)) {
                        seenTitles.add(normTitle);
                        uniqueProducts.push(p);
                    }
                });

                const results = uniqueProducts.filter(item => {
                    const title = normalizeText(item.title);
                    const category = normalizeText(item.category);
                    return title.includes(cleanQuery) || category.includes(cleanQuery);
                });

                if (results.length === 0) {
                    dropdown.innerHTML = `
                        <div class="search-empty-state">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <p>No encontramos productos con ese nombre. Intenta con otra búsqueda.</p>
                        </div>`;
                } else {
                    dropdown.innerHTML = `
                        <div class="search-results-list">
                            ${results.slice(0, 6).map(item => `
                                <a href="${item.page}" class="search-item" onclick="window.onSearchItemClick(event, '${item.page}', '${item.title.replace(/'/g, "\\'")}')">
                                    <img src="${item.image}" class="search-item-img" onerror="this.src='../Assets/Logo%20nova%20air.png'">
                                    <div class="search-item-details">
                                        <div class="search-item-title">${item.title}</div>
                                        <div class="search-item-meta">
                                            <span class="search-item-category">${item.category}</span>
                                            <span class="search-item-price">$${item.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </a>
                            `).join('')}
                        </div>`;
                }
                dropdown.classList.add('active');
            }

            input.addEventListener('input', (e) => executeSearch(e.target.value));

            document.addEventListener('click', (e) => {
                if (!bar.contains(e.target)) {
                    dropdown.classList.remove('active');
                }
            });

            input.addEventListener('focus', () => {
                if (input.value.trim()) executeSearch(input.value);
            });
        });

        checkUrlForTarget();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearchSystem);
    } else {
        initSearchSystem();
    }
})();
// =========================================================
// SCRIPT INTEGRADO DE ATENCIÓN AL CLIENTE (GLOBAL)
// =========================================================

// Exponer funciones al objeto global window
window.openSupportModal = function () {
    const modal = document.getElementById('supportModal');
    if (modal) modal.classList.add('active');
};

window.closeSupportModal = function () {
    const modal = document.getElementById('supportModal');
    if (modal) modal.classList.remove('active');
};

window.switchSupportTab = function (tabName) {
    const tabs = document.querySelectorAll('.support-tab');
    tabs.forEach(t => t.classList.remove('active'));

    document.querySelectorAll('.support-form').forEach(f => f.classList.remove('active'));

    if (tabName === 'opinion') {
        if (tabs[0]) tabs[0].classList.add('active');
        const form = document.getElementById('supportFormOpinion');
        if (form) form.classList.add('active');
    } else if (tabName === 'queja') {
        if (tabs[1]) tabs[1].classList.add('active');
        const form = document.getElementById('supportFormQueja');
        if (form) form.classList.add('active');
    } else if (tabName === 'contacto') {
        if (tabs[2]) tabs[2].classList.add('active');
        const form = document.getElementById('supportContact');
        if (form) form.classList.add('active');
    }
};

window.setRating = function (rating) {
    const stars = document.querySelectorAll('.star-rating i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
};

window.handleSupportSubmit = function (event, successMessage) {
    event.preventDefault();
    alert(successMessage);
    window.closeSupportModal();
    event.target.reset();
};

// Asignar evento al botón y al fondo del modal cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnAtencionCliente');
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.openSupportModal();
        });
    }

    const modal = document.getElementById('supportModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                window.closeSupportModal();
            }
        });
    }
});
// FUNCIONES GLOBALES PARA ATENCIÓN AL CLIENTE
window.openSupportModal = function() {
    var modal = document.getElementById('supportModal');
    if (modal) {
        modal.classList.add('active');
    } else {
        alert('No se encontró el elemento con id "supportModal" en el HTML.');
    }
};

window.closeSupportModal = function() {
    var modal = document.getElementById('supportModal');
    if (modal) modal.classList.remove('active');
};

window.switchSupportTab = function(tabName) {
    var tabs = document.querySelectorAll('.support-tab');
    tabs.forEach(function(t) { t.classList.remove('active'); });

    var forms = document.querySelectorAll('.support-form');
    forms.forEach(function(f) { f.classList.remove('active'); });

    if (tabName === 'opinion') {
        if (tabs[0]) tabs[0].classList.add('active');
        var form = document.getElementById('supportFormOpinion');
        if (form) form.classList.add('active');
    } else if (tabName === 'queja') {
        if (tabs[1]) tabs[1].classList.add('active');
        var form = document.getElementById('supportFormQueja');
        if (form) form.classList.add('active');
    } else if (tabName === 'contacto') {
        if (tabs[2]) tabs[2].classList.add('active');
        var contact = document.getElementById('supportContact');
        if (contact) contact.classList.add('active');
    }
};

window.setRating = function(rating) {
    var stars = document.querySelectorAll('.star-rating i');
    stars.forEach(function(star, index) {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
};

window.handleSupportSubmit = function(event, message) {
    event.preventDefault();

    // 1. Crear elemento de notificación personalizada estilo novaAIR
    var toast = document.createElement('div');
    toast.className = 'novaair-custom-toast';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fa-solid fa-circle-check"></i>
            <div>
                <strong>novaAIR dice:</strong>
                <p>${message}</p>
            </div>
        </div>
    `;

    document.body.appendChild(toast);

    // 2. Animación de entrada
    setTimeout(function() {
        toast.classList.add('show');
    }, 100);

    // 3. Cerrar modal y resetear formulario
    window.closeSupportModal();
    event.target.reset();

    // 4. Ocultar y remover la notificación tras 3.5 segundos
    setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3500);
};