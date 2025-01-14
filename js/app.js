const calculator = document.getElementById('main');
const show = document.getElementById('show');
const showResult = document.getElementById('result');

const symbolsOp = {
  sumar: '+',
  restar: '-',
  multiplicar: '*',
  dividir: '/',
};

let result = '';

let currentOperation = null;

function operation(e) {
  if (isNaN(e)) {
    const number = parseFloat(result);

    if (result !== '') {
      result = number;

      currentOperation = e;

      performOperation(result, currentOperation);
    }

    result = '';
  } else {
    result += e;
  }
}

function performOperation(item, signo) {
  if (signo === '+') {
    console.log(item + 2);
  }
}

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
