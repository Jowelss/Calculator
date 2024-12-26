const num = document.querySelectorAll('.num');
const show = document.getElementById('show');
const sumar = document.getElementById('sumar');

const arr = [];

function getNumber() {
  const arrNum = Array.from(num);

  arrNum.forEach((item) => {
    item.addEventListener('click', () => {
      arr.push(item.textContent);

      show.value = arr.join('');

      arr.join('');
    });
  });
}

getNumber();
