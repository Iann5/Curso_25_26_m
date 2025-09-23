// Primer ejercicio de JavaScript

//--------------Declarar Variables--------------

//--------------Declarar Funciones--------------

/**
 * 
 * @param {number} [a=0] - primer número a sumar con valor por defecto 0
 * @param {number} [b=0] - segundo número a sumar con valor por defecto 0
 * @returns {number} - la suma de a y b
 */

function suma(a=0, b=0) {
  return a + b;
}

//--------------Inicializar la aplicación--------------

//test de la función suma
console.log(suma(3,5));
console.log(suma(10,15));
console.log(suma(7));
console.log(suma());
