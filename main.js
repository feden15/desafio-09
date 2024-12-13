import './style.css'

let cantidadDeGatos = Number(prompt('Indique la cantidad de gatos'))
let cantidadDePasos = Number(prompt('Indique la cantidad de pasos'))

//! ----------------------------------- PARTE 1 ---------------------------------------
console.warn('PARTE 1');

for (let i=1; i<=cantidadDeGatos; i++) {
  if (i % 3 == 0) {
    console.log('GATO #' + i + ': 😹');
  } else if (i % 3 == 2) {
    console.log('GATO #' + i + ': 😸');
  } else {
    console.log('GATO #' + i + ': 😺');
  }
}

//! ----------------------------------- PARTE 2 ---------------------------------------
console.warn('PARTE 2');

for (let i=1; i<=cantidadDeGatos; i++) {
  console.log('GATO #' + i + '🐈‍⬛' + '🐾'.repeat(cantidadDePasos));
}

//! ----------------------------------- PARTE 3 ---------------------------------------
console.warn('PARTE 3');

for (let i=1; i<=cantidadDeGatos; i++) {
  if (i % 2 == 0) {
    console.log('GATO #' + i + '🐈‍⬛🐈‍' + '🐾'.repeat(cantidadDePasos))
  } else {
    console.log('GATO #' + i + '🐈‍⬛' + '🐾'.repeat(cantidadDePasos))
  }
}

//! ----------------------------------- PARTE 4 ---------------------------------------
console.warn('PARTE 4');