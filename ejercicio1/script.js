const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operacion = document.getElementById('operacion');
const calcularBtn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');


function verificarDivisionPorCero() {
  const op = operacion.value;
  const n2 = parseFloat(num2.value);


  if (op === "division" && n2 === 0) {
    calcularBtn.disabled = true;
  } else {
    calcularBtn.disabled = false;
  }
}

calcularBtn.addEventListener('click', function () {
  const valor1 = parseFloat(num1.value);
  const valor2 = parseFloat(num2.value);
  let res = '';

  switch (operacion.value) {
    case 'sumar':
      res = valor1 + valor2;
      break;
    case 'restar':
      res = valor1 - valor2;
      break;
    case 'multiplicar':
      res = valor1 * valor2;
      break;
    default:
      res = 'Operación no válida';
  }

  resultado.textContent = res;
});