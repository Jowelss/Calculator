const symbols = {
  sumar: '+',
  restar: '-',
  multiplicar: '*',
  dividir: '/',
  igual: '=',
};

const main = document.getElementById('main');

let result = 0;

let operator = null;

let stringNum = '';

function calculate(e) {
  if (!isNaN(e)) {
    stringNum += e;
    const pero = parseFloat(stringNum);

    if (operator === '+') result += pero;

    if (operator === '-') result -= number;

    if (operator === '*') result *= number;

    if (operator === '/') result /= number;

    console.log(result);
    console.log(stringNum);
  } else {
    operator = e;
  }
}

main.addEventListener('click', (e) => {
  if (e.target.matches('.button-num')) {
    return calculate(e.target.textContent);
  }

  if (e.target.matches('.button-operator')) {
    return calculate(symbols[e.target.id]);
  }
});
