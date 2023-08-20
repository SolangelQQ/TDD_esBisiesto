import esBisiesto from "./esBisiesto";

const anio = document.querySelector("#anio");

const form = document.querySelector("#calcular-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const calcularAnio = Number.parseInt(anio.value);

  alert(esBisiesto(calcularAnio));
});
