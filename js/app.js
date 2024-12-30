const num = document.querySelectorAll('.num');
const sign = document.querySelectorAll('.sign');

const show = document.getElementById('show');

const eliminate = document.getElementById('eliminate');
const addition = document.getElementById('addition');
const equal = document.getElementById('equal');

function calcularm() {
  equal.addEventListener('click', () => {
    const signIndex = show.textContent.indexOf('+');

    const numOne = show.textContent.substring(0, signIndex);
    const numTwo = show.textContent.substring(signIndex + 1);

    const result = parseFloat(numOne) + parseFloat(numTwo);

    show.textContent = result;
  });
}

calcularm();

function sumar() {
  addition.addEventListener('click', () => {
    show.textContent += '+';
  });
}

sumar();

function deleteNum() {
  eliminate.addEventListener('click', () => {
    show.textContent = show.textContent.slice(0, -1);
  });
}

deleteNum();

function clickNums() {
  num.forEach((label) => {
    label.addEventListener('click', () => {
      show.textContent += label.textContent;
    });
  });
}

clickNums();
