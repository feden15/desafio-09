import {cantidadDeGatos, cantidadDePasos} from './main.js'

//! ----------------------------------- PARTE C ---------------------------------------
console.warn('PARTE C');

for (let i=1; i<=cantidadDeGatos; i++) {
  if (i % 2 == 0) {
    console.log('GATO #' + i + '🐈‍⬛🐈‍' + '🐾'.repeat(cantidadDePasos))
  } else {
    console.log('GATO #' + i + '🐈‍⬛' + '🐾'.repeat(cantidadDePasos))
  }
}