const produtos = [
    {
        id: 1,
        nome: "Console Sony PlayStation 5, Edição Digital, SSD 825GB, Controle Sem Fio DualSense + 2 Jogos Digitais",
        preco: 3440.07,
        categoria: "console",
        descricao: "Console PS5 pura diversão",
        imagem: "https://images2.kabum.com.br/produtos/fotos/922662/console-sony-playstation-5-825gb-astro-bot-e-gran-turismo-edicao-digital-1000050614_1758119259_gg.jpg"
    },
    {
        id: 2,
        nome: "Console PlayStation 2 Slim Preto - Sony",
        preco: 539.99,
        categoria: "console",
        descricao: "Esse é old!",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/3/39/PS2-Versions.png"
    },
    {
        id: 3,
        nome: "Monitor Gamer Curvo Husky Boreal 34 Polegadas, WQHD, Ultrawide, 200Hz, 1ms, Adaptive Sync, DisplayPort e HDMI, HDR",
        preco: 1699.99,
        categoria: "monitor",
        descricao: "Excelente monitor!",
        imagem: "https://images0.kabum.com.br/produtos/fotos/871300/monitor-gamer-curvo-husky-boreal-34-wqhd-ultrawide-200hz-1ms-adaptive-sync-displayport-e-hdmi-hdr-hmg00234pt_1762773854_gg.jpg"
    },
    {
        id: 4,
        nome: "Notebook Gamer Acer Nitro V15, AMD Ryzen 7-7735HS, 16GB RAM, RTX 4050, SSD 512 GB, Tela 15.6, Full HD, Windows 11",
        preco: 4994.10,
        categoria: "notebook",
        descricao: "Esse é potente de vdd.",
        imagem: "https://images6.kabum.com.br/produtos/fotos/649716/notebook-acer-gamer-nitro-v15-anv15-51-7837-intel-core-i7-8gb-ram-ddr5-15-6-nvidia-rtx-3050-512gb-ssd-linux-preto-nh-qqdal-008_1730306499_gg.jpg"
    },
    {
        id: 5,
        nome: "iPad Pro Apple, Tela 13, 256GB, Chip M4, Wi-Fi, Câmera Traseira 12MP, iPadOS 17, Preto Especial",
        preco: 8499.90,
        categoria: "apple",
        descricao: "No precinho!",
        imagem: "https://images5.kabum.com.br/produtos/fotos/581325/ipad-pro-apple-tela-13-256gb-chip-m4-wi-fi-camera-traseira-12mp-ipados-17-preto-especial-mvx23bz-a_1717437504_gg.jpg"
    },
    {
        id: 6,
        nome: "Monitor Gamer GIGABYTE 27 FHD, 180Hz, 1ms, IPS, HDMI e DisplayPort, 110% sRGB, FreeSync",
        preco: 899.99,
        categoria: "monitor",
        descricao: "Excelente monitor, no precinho!",
        imagem: "https://images0.kabum.com.br/produtos/fotos/636510/monitor-gamer-gigabyte-27-fhd-180hz-1ms-ips-hdmi-e-displayport-110-srgb-hdr-freesync-gs27fa-sa_1736186477_gg.jpg"
    },
    {
        id: 7,
        nome: "Monitor Gamer de Tubo 15 Polegadas 4K, 144Hz, 1ms, IPS, HDMI, DisplayPort, VGA, 100% sRGB",
        preco: 1599.99,
        categoria: "monitor",
        descricao: "O melhor entre os melhores.",
        imagem: "https://http2.mlstatic.com/D_962365-MLB91697545897_092025-C.jpg"
    },
    {
        id: 8,
        nome: "Game Retro Mini Super Nintendo + 150 mil Jogos + 2 Controles + Pack com todos os Jogos de Snes (Controles SNES)",
        preco: 250.00,
        categoria: "console",
        descricao: "Old é pouco pra esse daqui.",
        imagem: "https://m.media-amazon.com/images/I/51W1GgQs40L._AC_SX522_.jpg"
    },
    {
        id: 9,
        nome: "Monitor Gamer Samsung 24, Essential S3, Full HD, 100Hz, 5ms, HDMI, VGA, Preto",
        preco: 535.60,
        categoria: "monitor",
        descricao: "Monitor top, custo benefício.",
        imagem: "https://images0.kabum.com.br/produtos/fotos/magalu/724790/xlarge/Monitor-Gamer-Samsung-Essential-S3-LS24D300GALMZD-24-Full-HD-IPS_1765384347.jpg"
    },
    {
        id: 10,
        nome: "Notebook Lenovo IdeaPad Slim 3i Core I5 13420H, 8GB RAM, 512GB Win11",
        preco: 2699.00,
        categoria: "notebook",
        descricao: "Notebook top para estudos e trabalho.",
        imagem: "https://images1.kabum.com.br/produtos/fotos/876251/notebook-lenovo-ideapad-slim-3i-core-i5-13420h-8gb-ram-512gb-win11-83ns0002br_1751480019_gg.jpg"
    },
    {
        id: 11,
        nome: "MacBook Air Apple 13.6, Chip M2, CPU 8 Núcleos, GPU 10 Núcleos, 24GB, SSD 512GB, Cinza Espacial",
        preco: 7457.50,
        categoria: "notebook",
        descricao: "Macbook custo benefício!",
        imagem: "https://images2.kabum.com.br/produtos/fotos/954432/macbook-air-apple-13-6-chip-m2-cpu-8-nucleos-gpu-10-nucleos-24gb-ssd-512gb-meia-noite-z1hn0bz-a_1769543917_gg.jpg"
    }
];

let carrinho = [];

// =======================================================
// SISTEMA DE NOTIFICAÇÕES ANIMADAS
// =======================================================

// Criar container de notificações se não existir
function criarContainerNotificacoes() {
    if (!document.querySelector('.notification-container')) {
        const container = document.createElement('div');
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
    return document.querySelector('.notification-container');
}

// Função para mostrar notificação
function mostrarNotificacao(mensagem, tipo = 'success', titulo = 'Sucesso!') {
    const container = criarContainerNotificacoes();

    // Criar elemento da notificação
    const notification = document.createElement('div');
    notification.className = `notification ${tipo}`;

    // Ícone baseado no tipo
    let icone = '';
    if (tipo === 'success') {
        icone = `
            <div class="checkmark-circle">
                <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </div>
        `;
    } else if (tipo === 'error') {
        icone = `
            <div class="checkmark-circle" style="background-color: #dc3545;">
                <svg viewBox="0 0 24 24">
                    <line x1="18" y1="6" x2="6" y2="18" stroke="white" stroke-width="3"/>
                    <line x1="6" y1="6" x2="18" y2="18" stroke="white" stroke-width="3"/>
                </svg>
            </div>
        `;
    } else if (tipo === 'warning') {
        icone = `
        <div class="checkmark-circle" style="background-color: #ffc107;">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 2L2 19h20L12 2z" stroke="white" stroke-width="2" fill="none"/>
                <circle cx="12" cy="15" r="1.5" fill="white"/>
                <rect x="11" y="8" width="2" height="5" fill="white"/>
            </svg>
        </div>
    `;
    } else if (tipo === 'info') {
        icone = `
        <div class="checkmark-circle" style="background-color: #17a2b8;">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="none"/>
                <line x1="12" y1="8" x2="12" y2="12" stroke="white" stroke-width="2"/>
                <circle cx="12" cy="16" r="1.5" fill="white"/>
            </svg>
        </div>
    `;
    }

    notification.innerHTML = `
        ${icone}
        <div class="notification-content">
            <div class="notification-title">${titulo}</div>
            <div class="notification-message">${mensagem}</div>
        </div>
        <button class="notification-close">&times;</button>
    `;

    container.appendChild(notification);

    // Fechar notificação ao clicar no X
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });

    // Remover automaticamente após 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 3000);
}

// Função que cria efeito ripple nos botões
function criarRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple';

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// Função para animar o contador do carrinho
function animarContador() {
    const contador = document.getElementById('cart-count');
    if (contador) {
        contador.classList.add('pulse');
        setTimeout(() => contador.classList.remove('pulse'), 500);
    }
}

// Adicionar efeito ripple a todos os botões
document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.btn-buy, .btn-remove, .search-bar button[type="submit"], .checkout-form button[type="submit"]');
    botoes.forEach(botao => {
        botao.addEventListener('click', criarRipple);
    });
});

const productList = document.querySelector('#product-list');
const cartCount = document.querySelector('#cart-count');
const menuToggle = document.querySelector('#menu-toggle');
const mainNav = document.querySelector('.main-nav');
const categoryFilter = document.querySelector('#category-filter');
const searchForm = document.querySelector('#search-form');

// =======================================================
// FUNÇÃO DE FORMATAÇÃO PARA REAL BRASILEIRO (R$)
// =======================================================

function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Função alternativa se quiser apenas o número sem o símbolo R$
function formatarNumeroReal(valor) {
    return valor.toFixed(2).replace('.', ',');
}

// =======================================================
// FUNÇÕES DE PERSISTÊNCIA (localStorage)
// =======================================================

function salvarCarrinho() {
    localStorage.setItem('carrinhoNeoStore', JSON.stringify(carrinho));
}

function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinhoNeoStore');

    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);

        if (cartCount) {
            cartCount.textContent = carrinho.length;
        }
    }
}

function renderizarProduto(produto) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.setAttribute('data-id', produto.id);
    card.setAttribute('data-category', produto.categoria);

    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <div class="card-footer">
            <span class="price">${formatarPreco(produto.preco)}</span>
            <button class="btn-buy" data-id="${produto.id}">Comprar</button>
        </div>
    `;

    productList.appendChild(card);

    const buyButton = card.querySelector('.btn-buy');
    buyButton.addEventListener('click', adicionarAoCarrinho);
}

function exibirProdutos(lista) {
    if (productList) {
        // Define o título para ocupar 100% da largura do grid.
        productList.innerHTML = '<h2 style="grid-column: 1 / -1;">Nossos Produtos</h2>';

        if (lista.length === 0) {
            productList.innerHTML += `
                <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                    <h3>Nenhum produto encontrado.</h3>
                    <p>Tente outra busca ou categoria.</p>
                </div>
            `;
            return;
        }

        lista.forEach(produto => {
            renderizarProduto(produto);
        });
    }
}

// Função para mostrar loading
function mostrarLoading() {
    if (productList) {
        productList.innerHTML = `
            <h2 style="grid-column: 1 / -1;">Nossos Produtos</h2>
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <div class="loading-spinner"></div>
                <p style="margin-top: 1rem;">Carregando produtos...</p>
            </div>
        `;
    }
}


// =======================================================
// 4. INTERAÇÕES COM EVENTOS
// =======================================================

// INTERAÇÃO 1: Abrir/Fechar Menu Mobile
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('menu-open');
    });
}

function adicionarAoCarrinho(event) {
    const produtoId = parseInt(event.target.dataset.id);
    const produtoSelecionado = produtos.find(p => p.id === produtoId);

    if (produtoSelecionado) {
        carrinho.push(produtoSelecionado);

        // Salva após a alteração
        salvarCarrinho();

        cartCount.textContent = carrinho.length;

        // Animação do contador
        animarContador();

        // Notificação visual
        mostrarNotificacao(
            `"${produtoSelecionado.nome}" foi adicionado ao seu carrinho!`,
            'success',
            'Produto Adicionado'
        );
    }
}

// INTERAÇÃO 3: Filtro de Produtos (Buscar por Categoria)
if (categoryFilter) {
    categoryFilter.addEventListener('change', (event) => {
        const categoriaSelecionada = event.target.value;
        const selectElement = event.target;
        const categoriaNome = selectElement.options[selectElement.selectedIndex].text;

        if (categoriaSelecionada === '') {
            exibirProdutos(produtos);
            mostrarNotificacao(
                'Mostrando todas as categorias',
                'info',
                'Filtro Removido'
            );
        } else {
            const produtosFiltrados = produtos.filter(produto => produto.categoria === categoriaSelecionada);
            exibirProdutos(produtosFiltrados);

            mostrarNotificacao(
                `Encontrados ${produtosFiltrados.length} produto(s) em ${categoriaNome}`,
                'success',
                'Filtro Aplicado'
            );
        }
    });
}


// INTERAÇÃO 4: Busca de Produtos por Texto
if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const searchInput = document.querySelector('#product-search');
        const termoBusca = searchInput.value.toLowerCase().trim();

        if (termoBusca === '') {
            exibirProdutos(produtos);
            mostrarNotificacao(
                'Mostrando todos os produtos',
                'info',
                'Busca Limpa'
            );
            return;
        }

        const produtosEncontrados = produtos.filter(produto => {
            const nomeProduto = produto.nome.toLowerCase();
            const descricaoProduto = produto.descricao.toLowerCase();
            return nomeProduto.includes(termoBusca) || descricaoProduto.includes(termoBusca);
        });

        exibirProdutos(produtosEncontrados);

        if (produtosEncontrados.length === 0) {
            mostrarNotificacao(
                `Nenhum produto encontrado para "${termoBusca}"`,
                'warning',
                'Sem Resultados'
            );
        } else {
            mostrarNotificacao(
                `Encontrados ${produtosEncontrados.length} produto(s)`,
                'success',
                'Busca Concluída'
            );
        }
    });
}


// =======================================================
// 5. FUNCIONALIDADES DO CARRINHO (carrinho.html)
// =======================================================

const cartTableBody = document.getElementById('cart-table-body');
const cartTotalElement = document.getElementById('cart-total');
const checkoutForm = document.getElementById('checkout-form');

if (cartTableBody) {

    function renderizarCarrinho() {
        if (carrinho.length === 0) {
            cartTableBody.innerHTML = '<tr><td colspan="3" style="text-align: center;">Seu carrinho está vazio.</td></tr>';
            cartTotalElement.textContent = formatarPreco(total);
            return;
        }

        let htmlContent = '';
        let total = 0;

        carrinho.forEach((item, index) => {
            total += item.preco;
            htmlContent += `
                <tr>
                    <td>${item.nome}</td>
                    <td>${formatarPreco(total)}</td>
                    <td>
                        <button class="btn-remove" data-index="${index}">Remover</button>
                    </td>
                </tr>
            `;
        });

        cartTableBody.innerHTML = htmlContent;
        cartTotalElement.textContent = formatarPreco(total);

        document.querySelectorAll('.btn-remove').forEach(button => {
            button.addEventListener('click', removerDoCarrinho);
        });
    }

    function removerDoCarrinho(event) {
        const indexParaRemover = parseInt(event.target.dataset.index);
        const produtoRemovido = carrinho[indexParaRemover];

        carrinho.splice(indexParaRemover, 1);

        // Salva após a remoção
        salvarCarrinho();

        cartCount.textContent = carrinho.length;
        renderizarCarrinho();

        // Notificação visual
        mostrarNotificacao(
            `"${produtoRemovido.nome}" foi removido do carrinho.`,
            'warning',
            'Item Removido'
        );
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (event) => {
            event.preventDefault();

            if (carrinho.length === 0) {
                mostrarNotificacao(
                    'Adicione produtos antes de finalizar a compra!',
                    'error',
                    'Carrinho Vazio'
                );
                return;
            }

            const nomeCliente = document.getElementById('name').value;

            // Mostrar notificação de sucesso
            mostrarNotificacao(
                `Pedido de ${cartTotalElement.textContent} recebido com sucesso!`,
                'success',
                `Obrigado, ${nomeCliente}!`
            );

            // Esvaziar o carrinho após a compra simulada
            carrinho = [];

            // Salva o carrinho vazio
            salvarCarrinho();

            cartCount.textContent = 0;
            renderizarCarrinho();
            checkoutForm.reset();
        });
    }
}

// =======================================================
// 6. INICIALIZAÇÃO GERAL (DOMContentLoaded)
// =======================================================

// Função para inicializar a página
function inicializarPagina() {
    carregarCarrinho();

    // Verifica em qual página estamos e renderiza o conteúdo apropriado
    const pathname = window.location.pathname;

    // Renderiza produtos
    if (productList) {
        // Delay para garantir que o DOM está totalmente pronto
        setTimeout(() => {
            exibirProdutos(produtos);
        }, 50);
    }

    if (cartTableBody) {
        renderizarCarrinho();
    }

    // Adiciona evento de clique para o menu mobile...
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('menu-open');
        });
    }
}

// Aguarda o DOM estar completamente carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarPagina);
} else {
    inicializarPagina();
}

