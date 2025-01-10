const symbols = {
  sumar: '+',
  restar: '-',
  multiplicar: '*',
  dividir: '/',
  igual: '=',
};

const main = document.getElementById('main');

let result = '';

let operator = null;

function calculate(e) {
  // LA PUTA MADREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
}

main.addEventListener('click', (e) => {
  if (e.target.matches('.button-num')) {
    return calculate(e.target.textContent);
  }

  if (e.target.matches('.button-operator')) {
    return calculate(symbols[e.target.id]);
  }
});
