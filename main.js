// Selecione todos os botões que têm a classe 'adicionar' (botões de adicionar produtos ao pedido)
const botoesAdicionar = document.querySelectorAll('.adicionar');
// Selecione a lista onde os itens do pedido serão exibidos 
const listaPedido = document.getElementById('lista-pedido');
// Selecione o elemento que exibirá o valor total do pedido
const totalElemento = document.getElementById('total');
let total = 0;

// Adiciona evento de clique a cada botão "Adicionar"
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        const produto = botao.parentElement;
        const nome = produto.querySelector('h3').textContent;
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$', '').trim());

        // Adiciona item à lista
        const itemPedido = document.createElement('li');
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
        listaPedido.appendChild(itemPedido);

        // Atualiza o total
        total += preco;
        totalElemento.textContent = `Total do Pedido: R$ ${total.toFixed(2)}`;
    });
});

// Simulação de finalização do pedido
const botaoFinalizarPedido = document.getElementById('finalizar-pedido');

botaoFinalizarPedido.addEventListener('click', () => {
    if (total > 0) {
        alert(`Pedido realizado com sucesso! Total: R$ ${total.toFixed(2)}`);
    } else {
        alert('Nenhum item foi adicionado ao pedido.');
    }
});
