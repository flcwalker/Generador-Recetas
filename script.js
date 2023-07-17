// scripts.js
const botonAgregar = document.querySelector(".boton-agregar");//Se selecciona el elemento del documento por medio de su clase y se asigna a la constante.
const inputRecetas = document.getElementById("recetas-input");//Se selecciona el elemento del documento por medio de su Id y se asigna a la constante.
const listaIngredientes = document.getElementById("lista-ingredientes");//Se selecciona el elemento del documento por medio de su ID y e asigna a la constante.

botonAgregar.addEventListener('click', () => {//Se e agregar un detector de evento a la contante botonAgregar de tipo 'click'.
  const nuevoIngrediente = inputRecetas.value;//Se asigna el valor ingresado en inputRecetas a la contante nuevoIngrediente.  
  if (nuevoIngrediente !== '') {//Si el valor almacenado dentro de la variable, es diferentes a un valor vacío.
    const li = document.createElement('li');//Cree un elemento 'li' y almcenelo en la contante li.
    li.textContent = nuevoIngrediente;//Se le asigna el valor de texto almacenado en la variable nuevoIngrediente a el teto de la variable li.
    listaIngredientes.appendChild(li);//Se le adjunta el valor de la variable li como elemento hijo a la variable listaIngredientes.
    inputRecetas.value = '';//Una ve adjuntado la variable li, e formatea el input, para permitir el ingreso de otro ingrediente.
  }
});

const botonReceta = document.querySelector('.boton-recetas');

botonReceta.addEventListener('click', () => {
    const ingredientes = obtenerIngredientes();
    if (ingredientes.length > 0) {
    const nuevaReceta = generarReceta(ingredientes);
    }else {
      alert("Debe ingresar almenos un ingrediente dentro de la lista, antes de generar alguna receta.");
    }const botonRecetas = document.querySelector('.boton-recetas');

    botonRecetas.addEventListener('click', () => {
      const ingredientes = obtenerIngredientes();
      if (ingredientes.length > 0) {
        const nuevaReceta = generarReceta(ingredientes);
        // Aquí puedes hacer lo que quieras con la nueva receta, como mostrarla en una alerta o en algún elemento del DOM.
      } else {
        alert("Ingrese al menos un ingrediente en la lista antes de generar una receta.");
      }
    });
    
    function generarReceta(ingredientes) {
      // Aquí puedes implementar la lógica para generar la receta con los ingredientes.
      // Por ejemplo, puedes combinar los ingredientes y crear una cadena que represente la receta.
      // Luego, puedes devolver esa cadena o cualquier otro formato que desees para la receta.
      // Aquí un ejemplo simple de cómo podrías combinar los ingredientes en una receta:
      const receta = "Receta: " + ingredientes.join(", ");
      return receta;
    }
    
    
    function generarReceta(ingrediente) {

      const receta = "Receta" + ingredientes.join(", ");
      return receta;
    }
})
