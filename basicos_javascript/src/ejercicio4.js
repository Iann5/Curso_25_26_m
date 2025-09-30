/*
Crear una funciona llamada aprobados y que diga si estoy aprobado o no aprobado.
Hacer una funcion 2.0 que si le paso mas de un 9 me diga sobresaliente, si esta entre 5 y 9 me diga aprobado
y si es menor que 5 me diga suspenso.
*/

/*
function aprobados(nota){
}
*/

// const aprobados = (nota=0) => {
//     return nota>=5 ? "Aprobado":"Suspenso";
// }

const aprobados = (nota=0) => nota>=5 ? "Aprobado":"Suspenso";
const aprobadosV2 = (nota=0) => nota>=9 ? "Sobresaliente": nota>=5 ? "Aprobado":"Suspenso";


//----------------Inicializar la aplicación----------------

console.log(aprobados(5));
console.log(aprobadosV2(9));