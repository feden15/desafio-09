import {cantidadDeGatos, cantidadDePasos} from './main.js'

//! ----------------------------------- PARTE B ---------------------------------------
console.warn('PARTE B');

for (let i=1; i<=cantidadDeGatos; i++) {
  console.log('GATO #' + i + '🐈‍⬛' + '🐾'.repeat(cantidadDePasos));
}