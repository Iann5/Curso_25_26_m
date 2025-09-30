// //Usos de los arrays

// //declaración

// const edades=[];
// const frutas=["pera","manzana","fresa"];

// // usando el constructor Array

// const cp = new Array();
// const cc = new Array("3rjasjfa","asfasfa","oasfnoamfas");

// // Añadir:

// edades.push(10); // añadiendo al final.
// edades.unshift(100); // añadir al comienzo

// //eliminar:

// edades.pop(); // elimina el último y retorna lo que ha eliminado
// edades.shift(); // elimina el primero

// // ***** slice --> Extraer partes de un Array

// //edades.slice()

// // *************************** map

// edades.map( (edad) => edad*2 );

// // ********* filter

// edades.filter( (edad) => edad>=18);
// edades.filter( (edad) =>{
//     console.log(edad,"-->",i);
//     return edad<=12;
// } );

/*
Dado un array de nombres, crear una función llamada mayúsculas que ponga en mayusculas todos los 
elementos de ese array que pase cómo parámetro.

Crear una función llamada precios con IVA que al pasarle un array de precios me los devuelva con el IVA
incluido.

Crear una función llamada imparesCuadrado que le pase un array de números y me devuelva solo los 
impares elevados al cuadrado

Crear una función llamada normalizarEmail que le pase un array de emails que pueden llevar espacios al principio
o al final del email y que los devuelva sin espacios

Crear una función llamada filtrarLongitud que le pase como parametro nombres y un tamaño y devuelva solo un array 
con los nombres que sean >= que el parámetro de tamaño 


Crear una función normalizarNombresPropios que me pase como parámetro un array de nombres y me los devuelva
con la letra CAPITAL en mayuscula (nombre y apellido)
*/

//Nombres
const nombres = ["pepe","maria","juan"];
nombres.map( (nombre) => nombre.toUpperCase() );

//IVA
const ivas = [10,8,20,15]
ivas.map( (iva) => iva+iva*0.21);

//Impares

const imparesCuadrado = [2,3,4,5,10,9,11];
imparesCuadrado.map( (imparCuadrado) => imparesCuadrado%2!==0 ? Math.pow(imparCuadrado, 2) : imparesCuadrado );

//Email
/**
 * @param {Array} emails
 * @returns {Array} Devuelve emails sin espacios al principio y al final
 */
const emails = [" pepe@gmail.com ", " maria@educaand.es", "pedro@gmail.com "];
function normalizarEmails(emails=[]){
    return emails.map( (email) => email.trim() );
}

//Longitud
/**
 * 
 * @param {string} nombres 
 * @param {number} tamaño 
 * @returns 
 */
function filtrarLongitud(names=[], size=0){
    return names.filter( (name) => name.length>size );
}

//Normalizar Nombres Propios

const normalizarNombres = ["Pepe perez","maRIa Lopez","Juan Garcia"];
function normalizarNombresPropios(names=[]){
    return names.map( (name) => {
        name.toLowerCase()
        .split(" ")
        .filter(palabra => palabra !=="")
        .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(" ")
    });
}
console.log(normalizarNombresPropios(normalizarNombres));
