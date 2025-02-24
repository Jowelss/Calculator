const calculator = document.getElementById("main");
const show = document.getElementById("show");
const showResult = document.getElementById("show-result");
const error = document.getElementById("error");

const symbolOperator = {
  sumar: "+",
  restar: "-",
  multiplicar: "*",
  dividir: "/",
};

calculator.addEventListener("click", (e) => {
  if (e.target.id === "delete" && show.textContent.length > 0) {
    show.textContent = show.textContent.slice(0, -1);
  }

  if (e.target.id === "result") {
    const valueNull = show.textContent.slice(-1);

    if (isNaN(valueNull)) {
      error.style.display = "block";
    } else {
      showResult.textContent = eval(show.textContent);
    }
  }

  if (e.target.matches(".number")) {
    const number = e.target.textContent;

    show.textContent += number;

    show.scrollLeft = show.scrollWidth; //Para que el scroll este posicionado a la derecha

    // error.style.display = 'none';
  }

  if (e.target.matches(".operator")) {
    const operator = symbolOperator[e.target.id];

    const num = show.textContent.slice(-1);

    // ESTO IF LO HICE DE SUERTE ASI QUE OJITO
    if (!isNaN(num)) {
      show.textContent += operator;

      show.scrollLeft = show.scrollWidth; //Para que el scroll este posicionado a la derecha
    }
  }
});
