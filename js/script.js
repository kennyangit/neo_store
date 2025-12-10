// =======================================================
// 1. ESTRUTURA DE DADOS E VARIÁVEIS GLOBAIS
// =======================================================

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
        imagem: "https://images2.kabum.com.br/produtos/fotos/954432/macbook-air-apple-13-6-chip-m2-cpu-8-nucleos-gpu-10-nucleos-24gb-ssd-512gb-cinza-espacial-z1hn0bz-a_1764100488_gg.jpg"
    }
];

// Array que será carregado do localStorage ou inicializado vazio
let carrinho = [];

// REQUISITO JS: Manipular elementos com document.querySelector
const productList = document.querySelector('#product-list');
const cartCount = document.querySelector('#cart-count');
const menuToggle = document.querySelector('#menu-toggle');
const mainNav = document.querySelector('.main-nav');
const categoryFilter = document.querySelector('#category-filter');
const searchForm = document.querySelector('#search-form'); // Elemento de Busca

// =======================================================
// 2. FUNÇÕES DE PERSISTÊNCIA (localStorage)
// =======================================================

function salvarCarrinho() {
    // Transforma o array JavaScript em uma string JSON e salva no localStorage
    localStorage.setItem('carrinhoNeoStore', JSON.stringify(carrinho));
}

function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinhoNeoStore');

    if (carrinhoSalvo) {
        // Se houver dados salvos, transforma a string JSON de volta em array
        carrinho = JSON.parse(carrinhoSalvo);

        // Atualiza o contador imediatamente no header, se o elemento existir
        if (cartCount) {
            cartCount.textContent = carrinho.length;
        }
    }
}


// =======================================================
// 3. FUNÇÕES DE RENDERIZAÇÃO E DOM
// =======================================================

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
            <span class="price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
            <button class="btn-buy" data-id="${produto.id}">Comprar</button>
        </div>
    `;

    productList.appendChild(card);

    const buyButton = card.querySelector('.btn-buy');
    buyButton.addEventListener('click', adicionarAoCarrinho);
}

function exibirProdutos(lista) {
    if (productList) {
        // 🚨 CORREÇÃO: Define o título para ocupar 100% da largura do grid.
        productList.innerHTML = '<h2 style="grid-column: 1 / -1;">Nossos Produtos</h2>';

        // Se a lista estiver vazia (após filtro/busca), informa ao usuário
        if (lista.length === 0) {
            productList.innerHTML += `
                <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                    <h3>😔 Nenhum produto encontrado.</h3>
                    <p>Tente outra busca ou categoria.</p>
                </div>
            `;
            return;
        }

        // REQUISITO JS: Loop (forEach)
        lista.forEach(produto => {
            renderizarProduto(produto);
        });
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

// INTERAÇÃO 2: Adicionar um produto ao carrinho
function adicionarAoCarrinho(event) {
    const produtoId = parseInt(event.target.dataset.id);
    const produtoSelecionado = produtos.find(p => p.id === produtoId);

    if (produtoSelecionado) {
        carrinho.push(produtoSelecionado);

        // 🔑 Salva após a alteração
        salvarCarrinho();

        cartCount.textContent = carrinho.length;
        alert(`"${produtoSelecionado.nome}" adicionado ao carrinho! Total: ${carrinho.length} itens.`);
    }
}

// INTERAÇÃO 3: Filtro de Produtos (Buscar por Categoria) - CORRIGIDO
if (categoryFilter) {
    categoryFilter.addEventListener('change', (event) => {
        const categoriaSelecionada = event.target.value;

        if (categoriaSelecionada === '') {
            exibirProdutos(produtos); // Exibe todos
        } else {
            // REQUISITO JS: Condicional + Método de Array (filter)
            const produtosFiltrados = produtos.filter(produto => produto.categoria === categoriaSelecionada);
            exibirProdutos(produtosFiltrados);
        }
    });
}


// INTERAÇÃO 4: Busca de Produtos por Texto - GARANTINDO O FUNCIONAMENTO
if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const searchInput = document.querySelector('#product-search');
        const termoBusca = searchInput.value.toLowerCase().trim();

        if (termoBusca === '') {
            exibirProdutos(produtos);
            return;
        }

        const produtosEncontrados = produtos.filter(produto => {
            const nomeProduto = produto.nome.toLowerCase();
            const descricaoProduto = produto.descricao.toLowerCase();

            // Verifica se o termo de busca está no nome OU na descrição
            return nomeProduto.includes(termoBusca) || descricaoProduto.includes(termoBusca);
        });

        exibirProdutos(produtosEncontrados); // Usa a função que lida com lista vazia
    });
}


// =======================================================
// 5. FUNCIONALIDADES DO CARRINHO (Apenas em carrinho.html)
// =======================================================

const cartTableBody = document.getElementById('cart-table-body');
const cartTotalElement = document.getElementById('cart-total');
const checkoutForm = document.getElementById('checkout-form');

if (cartTableBody) {

    function renderizarCarrinho() {
        if (carrinho.length === 0) {
            cartTableBody.innerHTML = '<tr><td colspan="3" style="text-align: center;">Seu carrinho está vazio.</td></tr>';
            cartTotalElement.textContent = '0,00';
            return;
        }

        let htmlContent = '';
        let total = 0;

        carrinho.forEach((item, index) => {
            total += item.preco;
            htmlContent += `
                <tr>
                    <td>${item.nome}</td>
                    <td>R$ ${item.preco.toFixed(2).replace('.', ',')}</td>
                    <td>
                        <button class="btn-remove" data-index="${index}">Remover</button>
                    </td>
                </tr>
            `;
        });

        cartTableBody.innerHTML = htmlContent;
        cartTotalElement.textContent = total.toFixed(2).replace('.', ',');

        document.querySelectorAll('.btn-remove').forEach(button => {
            button.addEventListener('click', removerDoCarrinho);
        });
    }

    function removerDoCarrinho(event) {
        const indexParaRemover = parseInt(event.target.dataset.index);

        carrinho.splice(indexParaRemover, 1);

        // 🔑 Salva após a remoção
        salvarCarrinho();

        cartCount.textContent = carrinho.length;
        renderizarCarrinho();
        alert("Item removido!");
    }

    // REQUISITO JS: Evento submit
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (event) => {
            event.preventDefault();

            if (carrinho.length === 0) {
                alert('Seu carrinho está vazio! Adicione produtos antes de finalizar a compra.');
                return;
            }

            const nomeCliente = document.getElementById('name').value;
            alert(`Parabéns, ${nomeCliente}! Seu pedido (R$ ${cartTotalElement.textContent}) foi recebido com sucesso pela NeoStore.`);

            // Esvaziar o carrinho após a compra simulada
            carrinho = [];

            // 🔑 Salva o carrinho vazio
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

document.addEventListener('DOMContentLoaded', () => {
    // 🔑 PASSO CRUCIAL: Carrega o carrinho ANTES de renderizar qualquer coisa.
    carregarCarrinho();

    // Renderiza produtos (se estiver na página index.html)
    if (productList) {
        exibirProdutos(produtos);
    }

    // Renderiza a tabela do carrinho (se estiver na página carrinho.html)
    if (cartTableBody) {
        renderizarCarrinho();
    }
});
