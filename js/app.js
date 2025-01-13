const calculator = document.getElementById('main');
const show = document.getElementById('show');
const showResult = document.getElementById('result');

const symbolsOp = {
  sumar: '+',
  restar: '-',
  multiplicar: '*',
  dividir: '/',
};

let result = [];

const indice = 0;

let numbers = '';

function operation(e) {
  if (!isNaN(e)) {
    numbers += e;
  } else {
    const number = parseFloat(numbers);

    result.push(number, e);

    numbers = '';
  }
}

showResult.addEventListener('click', () => {
  console.log(result);
});

calculator.addEventListener('click', (e) => {
  if (e.target.matches('.number')) {
    const number = e.target.textContent;

    operation(number);
  }

  if (e.target.matches('.operator')) {
    const operator = symbolsOp[e.target.id];

    operation(operator);
  }
});
