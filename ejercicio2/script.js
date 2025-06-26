const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
const input = document.getElementById("busqueda");
const btnFiltrar = document.getElementById("filtrar");
const ul = document.getElementById("listaPalabras");
const mensaje = document.getElementById("mensaje");

function mostrarLista(lista) {
  ul.innerHTML = "";
  lista.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = palabra;
    ul.appendChild(li);
  });
}

btnFiltrar.addEventListener("click", () => {
  const texto = input.value.trim().toLowerCase();
  mensaje.textContent = "";

  if (texto === "") {
    mensaje.textContent = "Por favor, ingresá un texto para filtrar.";
    ul.innerHTML = "";
    return;
  }

   const resultado = palabras.filter(p =>
    p.toLowerCase().includes(texto)
  );
    if (resultado.length === 0) {
    ul.innerHTML = "<li>No se encontraron coincidencias.</li>";
  } else {
    mostrarLista(resultado);
  }
});
mostrarLista(palabras);