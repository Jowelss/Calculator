const show = document.getElementById('show');
const buttoNum = document.querySelectorAll('.button-num');
const buttonOperator = document.querySelectorAll('.button-operator');

const operation = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const symbols = {
  sumar: '+',
  restar: '-',
  multiplicar: '*',
  dividir: '/',
};

const arrContent = [];

buttoNum.forEach((num) => {
  num.addEventListener('click', () => {
    arrContent.push(num.textContent);
  });
});

buttonOperator.forEach((op) => {
  op.addEventListener('click', () => {
    arrContent.push(symbols[op.textContent]);
  });
});
