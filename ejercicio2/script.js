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