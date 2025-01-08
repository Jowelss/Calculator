const symbols = {
  sumar: '+',
  restar: '-',
  multiplicar: '*',
  dividir: '/',
};

const main = document.getElementById('main');

const obj = {
  numOne: '',
  numTwo: '',
  sign: '',
};

main.addEventListener('click', (e) => {
  if (e.target.matches('.button-num') && obj.sign < 1) {
    obj.numOne += e.target.textContent;
  }

  if (e.target.matches('.button-operator')) {
    obj.sign = symbols[e.target.textContent];
  }

  if (e.target.matches('.button-num') && obj.sign.length > 0) {
    obj.numTwo += e.target.textContent;
  }

  convertToNum();
});

function convertToNum() {
  if (obj.sign === '+') {
    let coso = parseFloat(obj.numOne) + parseFloat(obj.numTwo);
    console.log(coso);

    console.log(obj);
  }

  if (obj.sign === '-') {
    let coso = parseFloat(obj.numOne) - parseFloat(obj.numTwo);

    console.log(coso);

    console.log(obj);
  }
}
