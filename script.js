// scripts.js
const botonAgregar = document.querySelector(".boton-agregar");
const inputRecetas = document.getElementById("recetas-input");
const listaIngredientes = document.getElementById("lista-ingredientes");

botonAgregar.addEventListener('click', () => {
  const nuevoIngrediente = inputRecetas.value;
  if (nuevoIngrediente !== '') {
    const li = document.createElement('li');
    li.textContent = nuevoIngrediente;
    listaIngredientes.appendChild(li);
    inputRecetas.value = '';
  }
});
