const symbols = {
  sumar: '+',
  restar: '-',
  multiplicar: '*',
  dividir: '/',
};

const main = document.getElementById('main');

let result = 0;

let operator = null;

function calculate(e) {
  if (!isNaN(e)) {
    const number = (result = parseFloat(e));

    if (operator === '+') {
      result += number;
      console.log(result);
      // space
    } else if (operator === '-') {
      result -= number;

      // space
    }
  } else if (isNaN(e)) {
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
