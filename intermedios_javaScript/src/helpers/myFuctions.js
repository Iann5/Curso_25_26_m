/** 
 * @param {Object} products - Objeto Data
 * @return {Object} Object Products - Objeto con información extraida
 */
export const extraerData = 
(products) =>{
    const {
        nombre,
        fabricante: { nombre:nombreFabricante, contacto },
        especificaciones: { ram }
    } = products;

    return{
        nombre,
        nombreFabricante,
        contacto,
        ram
    }
};

// crear una función llamada maxRam que me pase como parámetro un array de productos y me devuelva
// el nombre del producto con la ram más alta

export const maxRam = (arrayProducts) => {
    arrayProducts.map(extraerData).reduce((max,actual,)=>{
        ram.splice()
    },0)
}

//Convertir un Objeto a String: JSON.stringify({nombre:"Ian",cp:3333});