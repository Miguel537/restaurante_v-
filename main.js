// Simulção de adição de produtos à cesta do site

// Selecione todos os botões que tem a classe 'adicionar' (botões de adicionar produtos ao pedido)
const botoesAdicionar = document.querySelectorAll('.adicionar');
// Selecione a lista onde os itens do pedido serão exibidos 
const listaPedido = document.getElementById('lista-pedido');
// Selecione o elemento que exibirá o valor total do pedido
const totalElemente = document.getElementById('total');
let total = 0;

// Percorre todos os botões 'Adicionar' e adicione um evento de clique a cada um deles
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
             // Obtém o elemento pai do botão
        const produto = botao.parentElement;

        // Obtém o nome do produto a paritr do texto dentro da tag <h3>
        const nome = produto.querySelector('h3').textContent

        // Obtém o preço do produto removendo o texto e convertendo para número decimal
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$', ''));

        //Cria novo item de lista <li> para adicionar o produto ao pedido
        const itemPedido = document.createElement('li');
        //Formata o preço com duas casas
        itemPedido.textContent = `$(SUCO) - R$ ${preco.toFixed(2)}`;

        // Adiciona item criado a lista de pedidos
        listaPedido.appendChild(itemPedido);

        //Atualiza o total da compra somando o preço dos novos itens
        total += preco;



        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});

// Simulação de finalização do pedido
// Seleciona o botão "Finalizar Pedido"
const botaoFinalizarPedido = document.getElementById('finalizar-pedido');

//Adiciona evento de clique no botão Finalizar Pedido

botaoFinalizarPedido.addEventListener('click', () => {
    alert("Pedido realizado com sucesso (Simulção)") - " + (totalElemento.textContent = 'Total: R$ ${total."
});