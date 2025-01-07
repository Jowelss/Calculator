const symbols = {
  sumar: '+',
  restar: '-',
  multiplicar: '*',
  dividir: '/',
};

const arr = [];

const main = document.getElementById('main');

main.addEventListener('click', (e) => {
  if (e.target.matches('.button-operator')) {
    num(symbols[e.target.childNodes[0].textContent]);
  } else if (e.target.matches('.button-num')) {
    num(e.target.childNodes[0].textContent);
  }
});

function num(item) {
  const a = arr.join('');

  if (item !== '+') {
    arr.push(item);

    console.log(a);

    console.log(arr);
  }
}
