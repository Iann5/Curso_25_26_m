/* Crear un juego de un dado que utilizando una función llamada tirar dado,
 permita tirar un dado de seis caras con valores 1/6.
 Además crear una función llamada Simular que le pase como parámetro el número 
 de tiradas y me devuelva el número que se haya repetido más veces.
*/ 

//--------------Declarar Variables--------------

//--------------Declarar Funciones--------------
/**
 * 
 * @returns {number} número aleatorio entre 1 y 6
 */

function tirarDado(){
    return Math.floor(Math.random()*6);
}

/**
 * 
 * @param {*} numTirada - número de tiradas
 * @returns Te devuelve el número que más se ha repetido
 */

function simular(numTirada){
    const nums=[0,0,0,0,0,0];
    for(let i=0;i<numTirada;i++){
        let tirar=tirarDado();
        nums[tirar-1]++;
    }
    
    return nums.indexOf(Math.max(...nums))+1;
}

//--------------Inicializar la aplicación--------------
