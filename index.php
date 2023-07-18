<?php

// Define the constant 'recetas'.
const RECETAS = [
  'Receta 1',
  'Receta 2',
  'Receta 3',
];

// Obtén los ingredientes del formulario.
$ingrediente1 = $_POST['ingrediente1'];
$ingrediente2 = $_POST['ingrediente2'];

// Crea un nuevo array con los ingredientes.
$ingredientes = [
  $ingrediente1,
  $ingrediente2,
];

// Llama a la función generarReceta con los ingredientes.
generarReceta($ingredientes);

function generarReceta($ingredientes) {
  // Obtén una receta aleatoria del array de recetas.
  $receta = RECETAS[mt_rand(0, count($ingredientes) - 1)];

  // Imprime la receta en el ul.
  echo "<li>" . $receta . "</li>";
}

?>
