const show = document.getElementById('show');
const button = document.querySelectorAll('.button');

const num = [];

const calcular = () => {
  console.log(typeof num);
};

const clickButton = () => {
  const operator = {
    sumar: '+',
    restar: '-',
    multiplicar: '*',
    dividir: '/',
  };

  button.forEach((item) => {
    item.addEventListener('click', () => {
      if (operator[item.textContent]) {
        num.push(operator[item.textContent]);

        show.textContent += operator[item.textContent];
      } else {
        num.push(parseFloat(item.textContent));

        show.textContent += item.textContent;
      }

      calcular();
    });
  });
};

clickButton();
