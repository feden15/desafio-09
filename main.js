import './style.css'

 let cantidadDeGatos = Number(prompt('Indique la cantidad de gatos'))
/* let cantidadDePasos = Number(prompt('Indique la cantidad de pasos')) */

for (let i=1; i<=cantidadDeGatos; i++) {
  if (i % 3 == 0) {
    console.log('GATO #' + i + ': TERCERO');
  } else if (i % 3 == 2) {
    console.log('GATO #' + i + ': SEGUNDO/PAR');
  } else {
    console.log('GATO #' + i + ': PRIMERO');
  }
}