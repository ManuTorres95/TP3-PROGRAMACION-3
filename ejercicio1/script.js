const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const operacion = document.getElementById('operacion');
const calcularBtn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

operacion.addEventListener('change', function () {
  if (operacion.value === 'dividir') {
    calcularBtn.disabled = true;
  } else {
    calcularBtn.disabled = false;
  }
});