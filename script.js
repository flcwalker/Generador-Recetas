// Arrays para almacenar ingredientes y recetas
let ingredientes = [];
let recetas = [];

function agregarIngrediente() {
  const ingredienteInput = document.getElementById("ingredienteInput");
  const ingrediente = ingredienteInput.value.trim();

  if (ingrediente !== "") {
    ingredientes.push(ingrediente);
    actualizarListaIngredientes();
    ingredienteInput.value = "";
  }
}

function agregarReceta() {
  const recetaInput = document.getElementById("recetaInput");
  const receta = recetaInput.value.trim();

  if (receta !== "") {
    recetas.push(receta);
    actualizarListaRecetas();
    recetaInput.value = "";
  }
}

function actualizarListaIngredientes() {
  const listaIngredientes = document.getElementById("listaIngredientes");
  listaIngredientes.innerHTML = "";

  ingredientes.forEach((ingrediente) => {
    const li = document.createElement("li");
    li.textContent = ingrediente;
    listaIngredientes.appendChild(li);
  });
}

function actualizarListaRecetas() {
  const listaRecetas = document.getElementById("listaRecetas");
  listaRecetas.innerHTML = "";

  recetas.forEach((receta) => {
    const li = document.createElement("li");
    li.textContent = receta;
    listaRecetas.appendChild(li);
  });
}
