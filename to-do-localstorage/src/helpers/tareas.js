// IMPORTACIONES

import { dbTareas } from "../db/db";

const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;

//aqui van las funciones helper para las tareas

export const rellenarLocalStorage = (arrayTareas,tareas="Tareas") => {
    // Guardar en el localStorage en la clave 'tareas'
    localStorage.setItem(tareas, JSON.stringify(arrayTareas));
};

// Crear una funcion llamada mostrarTarea que me pase cómo parámetro una clave y 
// que me demustre a través de la consola, la clave en cuestion, usar console.table();

export const mostrarTarea = (tareas="Tareas") => {
    console.table(JSON.parse(localStorage.getItem(tareas)));
};

function saveJSONParse (text) {
    try {
        if(typeof text !== "string"){ 
            throw new Error(`Error, la data ${text} no es un string`)
        };
        return JSON.parse(text);
    } catch (error){
        throw new Error("Error Parseando la data");
    }
}

/**
 * 
 * @returns {Array} Array de tareas
 */
export function getTareas() {
    const dataSinParsear = localStorage.getItem(TEXT_KEY);
    const dataParseada = saveJSONParse(dataSinParsear);
    if(!Array.isArray(dataParseada)){
        console.error("Error en la data");
        return [];
    }
    return dataParseada;
}

/**
 * 
 * @param {*} tareas 
 * @returns {Array} Array de tareas guardadas en localStorage
 */
export function saveTareas(arrayTareas=[]){
    try{
        if(!Array.isArray(arrayTareas)){
            throw new Error(`Error, el arary de tareas no es válido`)
        }
        // serializar --> convierto a String
        const json = JSON.stringify(arrayTareas);
        // guardo en localStorage
        localStorage.setItem(TEXT_KEY,json);
        console.log("Array guardado perfectamente");
    } catch (error) {
        console.error("Error al guardar el array en localStorage");
    }
}

export function addTarea(nombreTarea){
    const nombre = String(nombreTarea ?? "").trim();
    try {
        const nuevaTarea = {
            id: uid(5),
            nombre,
            fechaCreacion: new Date().toISOString(),
            completada: false,
        }
        localStorage.push(nuevaTarea);
        
    } catch (error) {

    }    
}

/**
 * 
 * @param {*} id 
 * @returns {Array} devuelve las tareas que guardadas
 */
export function deleteTarea(id){
    localStorage.removeItem(id);
    return id;
}

/**
 * 
 * @param {String} id 
 */
export function completarTarea(id){
    
}

/**
 * 
 * @param {String} id 
 */
export function descompletarTarea(id){

}

/**
 * 
 * @returns 
 */
export function buscarCompletadas(){
    const completadas = JSON.parse(localStorage.getItem(true));
    return completadas;
}

/**
 * 
 * @returns 
 */
export function buscarNoCompletadas(){
    const noCompletadas = JSON.parse(localStorage.getItem(false));
    return noCompletadas;
}
/**
 * 
 * @param {String} nombre 
 * @returns {String} - Te devuevle el nombre buscado
 */
export function buscarPorNombre(nombre){
    const nombres = JSON.parse(localStorage.getItem(nombre).toLowerCase());
    return nombres;
}