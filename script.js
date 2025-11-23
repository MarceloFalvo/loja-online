// ===== PRODUCT DATA =====
const products = [
    {
        id: 'PRD001',
        name: 'Fone de Ouvido Premium',
        price: 899.99,
        image: 'C:/Users/marce/.gemini/antigravity/brain/e52f6552-4a3d-4d0a-a2c6-eb94af44efa0/headphones_product_1763913120631.png',
        shortDescription: 'Fones de ouvido sem fio com cancelamento de ruído ativo e som de alta fidelidade.',
        fullDescription: 'Experimente áudio de qualidade excepcional com nossos fones de ouvido premium. Com cancelamento de ruído ativo, bateria de longa duração (até 30 horas), design ergonômico e conectividade Bluetooth 5.0. Perfeito para música, trabalho e viagens.',
        stock: 15
    },
    {
        id: 'PRD002',
        name: 'Smartwatch Elite',
        price: 1299.99,
        image: 'C:/Users/marce/.gemini/antigravity/brain/e52f6552-4a3d-4d0a-a2c6-eb94af44efa0/smartwatch_product_1763913151816.png',
        shortDescription: 'Relógio inteligente com monitoramento de saúde completo e design elegante.',
        fullDescription: 'Monitore sua saúde e fitness com estilo. Display AMOLED de alta resolução, monitoramento cardíaco 24/7, GPS integrado, resistência à água até 50m e bateria que dura até 7 dias. Compatível com iOS e Android.',
        stock: 20
    },
    {
        id: 'PRD003',
        name: 'Teclado Mecânico RGB',
        price: 649.99,
        image: 'C:/Users/marce/.gemini/antigravity/brain/e52f6552-4a3d-4d0a-a2c6-eb94af44efa0/keyboard_product_1763913176492.png',
        shortDescription: 'Teclado mecânico com switches premium e iluminação RGB personalizável.',
        fullDescription: 'Eleve seu setup com este teclado mecânico premium. Switches mecânicos de alta qualidade, iluminação RGB totalmente personalizável, estrutura em alumínio, teclas anti-ghosting e software de customização avançado. Ideal para gamers e profissionais.',
        stock: 12
    },
    {
        id: 'PRD004',
        name: 'Mouse Wireless Pro',
        price: 349.99,
        image: 'C:/Users/marce/.gemini/antigravity/brain/e52f6552-4a3d-4d0a-a2c6-eb94af44efa0/mouse_product_1763913208213.png',
        shortDescription: 'Mouse ergonômico sem fio com sensor de precisão e iluminação RGB.',
        fullDescription: 'Precisão e conforto em suas mãos. Sensor óptico de 16.000 DPI, design ergonômico, 8 botões programáveis, bateria recarregável com até 70 horas de uso e iluminação RGB customizável. Perfeito para trabalho e jogos.',
        stock: 25
    },
    {
        id: 'PRD005',
        name: 'Speaker Bluetooth',
        price: 499.99,
        image: 'C:/Users/marce/.gemini/antigravity/brain/e52f6552-4a3d-4d0a-a2c6-eb94af44efa0/speaker_product_1763913244465.png',
        shortDescription: 'Caixa de som portátil com som 360° e resistência à água.',
        fullDescription: 'Som potente onde você estiver. Alto-falantes de 20W com som 360°, resistência à água IPX7, bateria de 12 horas, conexão Bluetooth 5.0 e entrada auxiliar. Design compacto e portátil para levar sua música a qualquer lugar.',
        stock: 18
    },
    {
        id: 'PRD006',
        name: 'Mochila Tech Premium',
        price: 399.99,
        image: 'C:/Users/marce/.gemini/antigravity/brain/e52f6552-4a3d-4d0a-a2c6-eb94af44efa0/backpack_product_1763913271123.png',
        shortDescription: 'Mochila para laptop com compartimentos organizados e design moderno.',
        fullDescription: 'Organize e proteja seus dispositivos com estilo. Compartimento acolchoado para laptop até 17", múltiplos bolsos organizadores, porta USB para carregamento, material resistente à água e design ergonômico. Ideal para trabalho e viagens.',
        stock: 30
    }
];

// ===== STATE MANAGEMENT =====
let cart = [];
let currentView = 'hero';
let currentProduct = null;
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];

// ===== DOM ELEMENTS =====
const heroSection = document.getElementById('heroSection');
const productsSection = document.getElementById('productsSection');
const productDetailSection = document.getElementById('productDetailSection');
const cartSection = document.getElementById('cartSection');
const checkoutSection = document.getElementById('checkoutSection');
const productsGrid = document.getElementById('productsGrid');
const cartBadge = document.getElementById('cartBadge');
const notificationContainer = document.getElementById('notificationContainer');
const modalContainer = document.getElementById('modalContainer');
const userNameDisplay = document.getElementById('userNameDisplay');

// ===== NAVIGATION =====
function showView(view) {
    // Hide all sections
    heroSection.classList.add('hidden');
    productsSection.classList.add('hidden');
    productDetailSection.classList.add('hidden');
    cartSection.classList.add('hidden');
    checkoutSection.classList.add('hidden');

    // Show selected section
    currentView = view;
    switch (view) {
        case 'hero':
            heroSection.classList.remove('hidden');
            break;
        case 'products':
            productsSection.classList.remove('hidden');
            renderProducts();
            break;
        case 'productDetail':
            productDetailSection.classList.remove('hidden');
            break;
        case 'cart':
            cartSection.classList.remove('hidden');
            renderCart();
            break;
        case 'checkout':
            checkoutSection.classList.remove('hidden');
            renderCheckout();
            break;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== PRODUCT RENDERING =====
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" onclick="showProductDetail('${product.id}')">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-header">
                    <h3 class="product-name">${product.name}</h3>
                    <span class="product-price">R$ ${product.price.toFixed(2)}</span>
                </div>
                <p class="product-description">${product.shortDescription}</p>
                <div class="product-footer">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); showProductDetail('${product.id}')">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function showProductDetail(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;

    document.getElementById('detailId').textContent = `ID: ${currentProduct.id}`;
    document.getElementById('detailName').textContent = currentProduct.name;
    document.getElementById('detailPrice').textContent = `R$ ${currentProduct.price.toFixed(2)}`;
    document.getElementById('detailDescription').textContent = currentProduct.fullDescription;
    document.getElementById('detailImage').src = currentProduct.image;
    document.getElementById('detailImage').alt = currentProduct.name;

    showView('productDetail');
}

// ===== CART MANAGEMENT =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        if (existingItem.quantity >= product.stock) {
            showNotification(`Estoque insuficiente! Apenas ${product.stock} unidades disponíveis.`, 'error');
            return;
        }
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartBadge();
    showNotification(`${product.name} adicionado ao carrinho!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartBadge();
    renderCart();
    showNotification('Produto removido do carrinho', 'success');
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    const product = products.find(p => p.id === productId);

    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    if (newQuantity > product.stock) {
        showNotification(`Estoque insuficiente! Apenas ${product.stock} unidades disponíveis.`, 'error');
        return;
    }

    item.quantity = newQuantity;
    updateCartBadge();
    renderCart();
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;

    if (totalItems > 0) {
        cartBadge.classList.remove('hidden');
    } else {
        cartBadge.classList.add('hidden');
    }
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function renderCart() {
    const cartContent = document.getElementById('cartContent');

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🛒</div>
                <h3>Seu carrinho está vazio</h3>
                <button class="btn btn-primary" onclick="showView('products')">
                    Explorar Produtos
                </button>
            </div>
        `;
        return;
    }

    const subtotal = calculateTotal();
    const shipping = subtotal > 500 ? 0 : 29.90;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    cartContent.innerHTML = `
        <div class="cart-container">
            <div class="cart-items">
                ${cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p class="cart-item-price">R$ ${item.price.toFixed(2)} / unidade</p>
                            <div class="quantity-control">
                                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">−</button>
                                <input type="number" class="quantity-input" value="${item.quantity}" 
                                    onchange="updateQuantity('${item.id}', parseInt(this.value))" min="1" max="${item.stock}">
                                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                            </div>
                        </div>
                        <div class="cart-item-actions">
                            <span class="cart-item-total">R$ ${(item.price * item.quantity).toFixed(2)}</span>
                            <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remover</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="cart-summary">
                <h3>Resumo do Pedido</h3>
                <div class="summary-row">
                    <span class="summary-label">Subtotal</span>
                    <span class="summary-value">R$ ${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Frete</span>
                    <span class="summary-value">${shipping === 0 ? 'GRÁTIS' : 'R$ ' + shipping.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Impostos (8%)</span>
                    <span class="summary-value">R$ ${tax.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Total</span>
                    <span class="summary-total">R$ ${total.toFixed(2)}</span>
                </div>
                <div class="summary-actions">
                    <button class="btn btn-accent" onclick="placeOrder()">
                        ✓ Finalizar Pedido
                    </button>
                    <button class="btn btn-secondary" onclick="cancelOrder()">
                        ✕ Cancelar Pedido
                    </button>
                    <button class="btn btn-secondary" onclick="showView('products')">
                        ← Ver Mais Produtos
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ===== ORDER MANAGEMENT =====
function placeOrder() {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio!', 'error');
        return;
    }

    // Check if user is logged in
    if (!currentUser) {
        showNotification('Faça login para continuar com a compra', 'error');
        showLoginModal();
        return;
    }

    // Go to checkout
    showView('checkout');
}

function cancelOrder() {
    if (cart.length === 0) return;

    showModal(`
        <h3>Cancelar Pedido?</h3>
        <p style="text-align: center; color: var(--text-secondary);">
            Tem certeza que deseja cancelar seu pedido? Todos os itens serão removidos do carrinho.
        </p>
        <div class="modal-actions">
            <button class="btn btn-secondary" onclick="closeModal()">
                Não, Voltar
            </button>
            <button class="btn btn-accent" onclick="closeModal(); clearCart()">
                Sim, Cancelar
            </button>
        </div>
    `);
}

function clearCart() {
    cart = [];
    updateCartBadge();
    renderCart();
    showNotification('Carrinho limpo com sucesso', 'success');
}

// ===== CHECKOUT =====
function renderCheckout() {
    const subtotal = calculateTotal();
    const shipping = subtotal > 500 ? 0 : 29.90;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const summaryContent = document.getElementById('checkoutSummaryContent');
    summaryContent.innerHTML = `
        ${cart.map(item => `
            <div class="summary-row">
                <span class="summary-label">${item.name} (${item.quantity}x)</span>
                <span class="summary-value">R$ ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('')}
        <div class="summary-row" style="margin-top: var(--space-4); padding-top: var(--space-4); border-top: 1px solid var(--border-color);">
            <span class="summary-label">Subtotal</span>
            <span class="summary-value">R$ ${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span class="summary-label">Frete</span>
            <span class="summary-value">${shipping === 0 ? 'GRÁTIS' : 'R$ ' + shipping.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span class="summary-label">Impostos (8%)</span>
            <span class="summary-value">R$ ${tax.toFixed(2)}</span>
        </div>
        <div class="summary-row" style="margin-top: var(--space-4); padding-top: var(--space-4); border-top: 2px solid var(--border-hover);">
            <span class="summary-label">Total</span>
            <span class="summary-total">R$ ${total.toFixed(2)}</span>
        </div>
        <div class="summary-actions">
            <button class="btn btn-accent" onclick="confirmCheckout()">
                ✓ Confirmar Pedido
            </button>
            <button class="btn btn-secondary" onclick="showView('cart')">
                ← Voltar ao Carrinho
            </button>
        </div>
    `;

    setupCheckoutListeners();
}

function setupCheckoutListeners() {
    // Toggle billing address
    const sameAsBilling = document.getElementById('sameAsBilling');
    const billingSection = document.getElementById('billingSection');

    sameAsBilling.addEventListener('change', function () {
        if (this.checked) {
            billingSection.classList.add('hidden');
        } else {
            billingSection.classList.remove('hidden');
        }
    });

    // Payment method toggle
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    const cardPaymentForm = document.getElementById('cardPaymentForm');
    const pixPaymentForm = document.getElementById('pixPaymentForm');

    paymentMethods.forEach(method => {
        method.addEventListener('change', function () {
            if (this.value === 'pix') {
                cardPaymentForm.classList.add('hidden');
                pixPaymentForm.classList.remove('hidden');
            } else {
                cardPaymentForm.classList.remove('hidden');
                pixPaymentForm.classList.add('hidden');
            }
        });
    });

    // Format card number
    const cardNumber = document.getElementById('cardNumber');
    cardNumber.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\s/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formattedValue;
    });

    // Format card expiry
    const cardExpiry = document.getElementById('cardExpiry');
    cardExpiry.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        e.target.value = value;
    });

    // Format CEP
    const cepInputs = document.querySelectorAll('#deliveryCep, #billingCep');
    cepInputs.forEach(input => {
        input.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 5) {
                value = value.slice(0, 5) + '-' + value.slice(5, 8);
            }
            e.target.value = value;
        });
    });
}

function confirmCheckout() {
    // Validate delivery address
    const deliveryCep = document.getElementById('deliveryCep').value;
    const deliveryStreet = document.getElementById('deliveryStreet').value;
    const deliveryNumber = document.getElementById('deliveryNumber').value;
    const deliveryNeighborhood = document.getElementById('deliveryNeighborhood').value;
    const deliveryCity = document.getElementById('deliveryCity').value;
    const deliveryState = document.getElementById('deliveryState').value;

    if (!deliveryCep || !deliveryStreet || !deliveryNumber || !deliveryNeighborhood || !deliveryCity || !deliveryState) {
        showNotification('Por favor, preencha todos os campos obrigatórios do endereço de entrega', 'error');
        return;
    }

    // Validate payment
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    if (paymentMethod !== 'pix') {
        const cardNumber = document.getElementById('cardNumber').value;
        const cardName = document.getElementById('cardName').value;
        const cardExpiry = document.getElementById('cardExpiry').value;
        const cardCvv = document.getElementById('cardCvv').value;

        if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
            showNotification('Por favor, preencha todos os dados do cartão', 'error');
            return;
        }
    }

    // Generate order number
    const orderNumber = 'ORD' + Date.now().toString().slice(-8);

    // Show confirmation modal
    if (paymentMethod === 'pix') {
        showModal(`
            <h3>📱 Pagamento via PIX</h3>
            <p style="text-align: center; color: var(--text-secondary);">
                Escaneie o QR Code abaixo para realizar o pagamento
            </p>
            <div style="background: white; padding: var(--space-6); border-radius: var(--radius-lg); margin: var(--space-6) 0;">
                <div style="text-align: center; font-size: 100px;">📱</div>
                <p style="text-align: center; color: #333; font-family: monospace; font-size: var(--text-sm); margin-top: var(--space-4);">
                    00020126580014br.gov.bcb.pix...
                </p>
            </div>
            <div class="order-number">${orderNumber}</div>
            <p style="text-align: center; color: var(--text-secondary); font-size: var(--text-sm);">
                Seu pedido será processado após a confirmação do pagamento.
            </p>
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="closeModal(); clearCart(); showView('hero')">
                    Concluir
                </button>
            </div>
        `);
    } else {
        showModal(`
            <h3>🎉 Pedido Realizado com Sucesso!</h3>
            <p style="text-align: center; color: var(--text-secondary);">
                Seu pedido foi confirmado e está sendo processado.
            </p>
            <div class="order-number">${orderNumber}</div>
            <p style="text-align: center; color: var(--text-secondary); font-size: var(--text-sm);">
                Guarde este número para acompanhar seu pedido.
            </p>
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="closeModal(); clearCart(); showView('hero')">
                    Continuar Comprando
                </button>
            </div>
        `);
    }
}

// ===== AUTHENTICATION =====
function showLoginModal() {
    showModal(`
        <div class="auth-tabs">
            <button class="auth-tab active" onclick="switchAuthTab('login')">Login</button>
            <button class="auth-tab" onclick="switchAuthTab('register')">Cadastro</button>
        </div>
        
        <div id="loginForm" class="auth-form">
            <div class="form-group">
                <label for="loginEmail">E-mail</label>
                <input type="email" id="loginEmail" placeholder="seu@email.com" required>
            </div>
            <div class="form-group">
                <label for="loginPassword">Senha</label>
                <input type="password" id="loginPassword" placeholder="••••••••" required>
            </div>
            <button class="btn btn-primary" onclick="handleLogin()" style="width: 100%;">
                Entrar
            </button>
        </div>
        
        <div id="registerForm" class="auth-form hidden">
            <div class="form-group">
                <label for="registerName">Nome Completo</label>
                <input type="text" id="registerName" placeholder="João Silva" required>
            </div>
            <div class="form-group">
                <label for="registerEmail">E-mail</label>
                <input type="email" id="registerEmail" placeholder="seu@email.com" required>
            </div>
            <div class="form-group">
                <label for="registerPassword">Senha</label>
                <input type="password" id="registerPassword" placeholder="••••••••" required>
            </div>
            <div class="form-group">
                <label for="registerConfirmPassword">Confirmar Senha</label>
                <input type="password" id="registerConfirmPassword" placeholder="••••••••" required>
            </div>
            <button class="btn btn-primary" onclick="handleRegister()" style="width: 100%;">
                Criar Conta
            </button>
        </div>
    `);
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabs = document.querySelectorAll('.auth-tab');

    tabs.forEach(t => t.classList.remove('active'));

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        tabs[0].classList.add('active');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        tabs[1].classList.add('active');
    }
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showNotification('Por favor, preencha todos os campos', 'error');
        return;
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = { name: user.name, email: user.email };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserDisplay();
        closeModal();
        showNotification(`Bem-vindo de volta, ${user.name}!`, 'success');
    } else {
        showNotification('E-mail ou senha incorretos', 'error');
    }
}

function handleRegister() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (!name || !email || !password || !confirmPassword) {
        showNotification('Por favor, preencha todos os campos', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showNotification('As senhas não coincidem', 'error');
        return;
    }

    if (users.find(u => u.email === email)) {
        showNotification('Este e-mail já está cadastrado', 'error');
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    currentUser = { name, email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserDisplay();
    closeModal();
    showNotification(`Conta criada com sucesso! Bem-vindo, ${name}!`, 'success');
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserDisplay();
    showNotification('Logout realizado com sucesso', 'success');
    showView('hero');
}

function updateUserDisplay() {
    if (currentUser) {
        userNameDisplay.textContent = currentUser.name.split(' ')[0];
    } else {
        userNameDisplay.textContent = 'Entrar';
    }
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    const icon = type === 'success' ? '✓' : '⚠';

    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icon}</span>
            <p class="notification-message">${message}</p>
        </div>
    `;

    notificationContainer.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== MODAL =====
function showModal(content) {
    modalContainer.innerHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal" onclick="event.stopPropagation()">
                ${content}
            </div>
        </div>
    `;
}

function closeModal() {
    modalContainer.innerHTML = '';
}

// ===== EVENT LISTENERS =====
document.getElementById('logoBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showView('hero');
});

document.getElementById('viewProductsBtn').addEventListener('click', () => {
    showView('products');
});

document.getElementById('heroViewProductsBtn').addEventListener('click', () => {
    showView('products');
});

document.getElementById('cartBtn').addEventListener('click', () => {
    showView('cart');
});

document.getElementById('loginBtn').addEventListener('click', () => {
    if (currentUser) {
        // Show logout confirmation
        showModal(`
            <h3>Olá, ${currentUser.name}!</h3>
            <p style="text-align: center; color: var(--text-secondary);">
                Deseja sair da sua conta?
            </p>
            <div class="modal-actions">
                <button class="btn btn-secondary" onclick="closeModal()">
                    Cancelar
                </button>
                <button class="btn btn-accent" onclick="handleLogout(); closeModal()">
                    Sair
                </button>
            </div>
        `);
    } else {
        showLoginModal();
    }
});

document.getElementById('addToCartBtn').addEventListener('click', () => {
    if (currentProduct) {
        addToCart(currentProduct.id);
    }
});

document.getElementById('seeMoreProductsBtn').addEventListener('click', () => {
    showView('products');
});

// ===== INITIALIZATION =====
updateCartBadge();
updateUserDisplay();

// Add some sample items to cart for demonstration (optional - remove if not needed)
// addToCart('PRD001');
// addToCart('PRD003');
