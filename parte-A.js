import {cantidadDeGatos} from './main.js'

//! ----------------------------------- PARTE A ---------------------------------------
console.warn('PARTE A');

for (let i=1; i<=cantidadDeGatos; i++) {
  if (i % 3 == 0) {
    console.log('GATO #' + i + ': 😹');
  } else if (i % 3 == 2) {
    console.log('GATO #' + i + ': 😸');
  } else {
    console.log('GATO #' + i + ': 😺');
  }
}