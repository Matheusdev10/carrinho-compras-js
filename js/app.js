const btnAdicionar = document.querySelector('.botao-form botao-adicionar');
const btnLimpar = document.querySelector('.botao-form botao-limpar');
const listaProdutos = document.querySelector('#lista-produtos');
let listarProdutosCarrinho = listaProdutos.querySelector(
  '.carrinho__produtos__produto'
);
const valorTotal = document.querySelector('#valor-total');

let total = 0;

function adicionar() {
  let produtos = [];
  const select = document.getElementById('produto');
  const valorSelect = select.value;
  const qtd = document.querySelector('#quantidade');
  let valorQtd = qtd.value;

  if (valorSelect === 'Selecione um produto' || valorQtd === '') {
    alert('Selecione um item ou quantidade válida');
  } else {
    produtos.push(valorQtd, valorSelect);

    // esse metodo slice converte meu array de produtos
    //que possui 2 posições em um array com apenas uma posição
    // o parametro 0 especifica onde meu slice ira começar a alteração
    // o parametro 2 especifica quantos elementos serao removidos
    // a partir do indice especificado
    // o terceiro parametro recebe os produtos que serao adicionados
    // no indice 0
    produtos.splice(0, 2, [...produtos]);

    produtos.map((item) => {
      const li = document.createElement('li');

      li.textContent = item;
      listarProdutosCarrinho.appendChild(li);
    });
  }

  produtos.splice(0, 1, produtos[0][0], produtos[0][1]);
  // esse slice esta fazendo com que o meu array volte a ter
  //duas posições. Nesse caso o parametro 0 significa de onde
  //minha operação começara
  // o indice 1 significa o numero de elementos que sera removido.
  // Por fim produtos[0][0], produtos[0][1]) são os elementos que
  //serão adicionados ao array a partir do índice especificado.

  let padrao = /^(.*?) - (R\$\d+)$/;
  console.log(produtos);
  let resultado = produtos[1].match(padrao);
  let valorString = resultado[2].replace('R$', '').trim(); // Remover "R$" e espaços extras
  let valorNumerico = parseFloat(valorString.replace(',', '.'));
  const multiplicar = valorNumerico * valorQtd;
  total = total + multiplicar;
  valorTotal.innerHTML = `Total R$${total}`;
}

function limpar() {
  let listarProdutosCarrinho = listaProdutos.querySelector(
    '.carrinho__produtos__produto'
  );
  const valorTotal = document.querySelector('#valor-total');

  listarProdutosCarrinho.textContent = '';
  valorTotal.textContent = '';
}
