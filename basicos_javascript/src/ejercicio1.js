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

let edad=18;
edad>=18? alert("Eres mayor de edad"): alert("Eres menor de edad");

//en caso de que esto sea null o undefined ?? hará esto otro
function saludar(nombreUsuario){
  // return `Bienvenid@ ${nombreUsuario}`;
  let mensaje = nombreUsuario ?? "Usuario";
  return `Bienvenid@ ${nombreUsuario ?? "Usuario"}`;
}

//--------------Inicializar la aplicación--------------


//--------------Tests--------------

let nombre="Ian";

console.log(saludar(nombre));

console.log("La suma de 5+0 es: $suma(3,5)");

