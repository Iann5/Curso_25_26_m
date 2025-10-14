import { ENV } from "../config/env.js";

// quiero que crees una funcion initialStorage que reciba un array de usuarios
// y los guarde en el localStorage
/**
 * 
 * @param {*} arrayUsers 
 */
export function initialStorage(arrayUsers){
    localStorage.setItem(ENV.VITE_STORAGE_KEY, JSON.stringify(arrayUsers));
    console.log(`${ENV.VITE_STORAGE_KEY}: Usuarios guardados correctamente`);
}

// Crear una función llamada getUsuarios() que se traiga todos los usuarios 
/**
 * 
 * @returns 
 */
export const getUsers = () => {
    return JSON.parse(localStorage.getItem(ENV.VITE_STORAGE_KEY) || []);
}

// Crear una función llamada setUsuarios(usuario) y lo guarde en el 
// localStorage en la key del .env
/**
 * 
 * @param {*} usuario 
 */
export const setUsers = (user) => {
    // const users = getUsers();
    // users.push(user);
    // initialStorage(users);
    initialStorage([...getUsers(), user]);
}