const calculator = document.getElementById('main');
const show = document.getElementById('show');
const showResult = document.getElementById('show-result');

const symbolsOp = {
  sumar: '+',
  restar: '-',
  multiplicar: '*',
  dividir: '/',
  resultado: '=',
};

const resultArr = [];

function operar(item) {
  // TOMAR EN CUENTA CAMBIAR EL METODO EVAL POR FUNCIONES QUE REALICEN LAS OPERACIONES QUE EVAL ME AHORRA
  show.textContent += item;
  showResult.textContent = eval(show.textContent);
}

calculator.addEventListener('click', (e) => {
  if (e.target.matches('.number')) {
    const number = e.target.textContent;

    operar(number);
  } else if (e.target.matches('.operator')) {
    const operator = symbolsOp[e.target.id];

    operar(operator);
  }
});
