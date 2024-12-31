const sign = document.querySelectorAll('.sign');
const num = document.querySelectorAll('.num');
const show = document.getElementById('show');

const data = [];

function addNum() {
  num.forEach((item) => {
    item.addEventListener('click', () => {
      data.push(item.textContent);
    });
  });
}

addNum();

function addSign() {
  sign.forEach((item) => {
    item.addEventListener('click', () => {
      data.push(item.textContent);
    });
  });
}

addSign();

function sumar() {}

function restar(params) {}

function dividir(params) {}

function multiplicar(params) {}
