// OBJETOS EN JAVASCRIPT

const usuario = {
    name: "Ian",
    email: "ialvtri371@g.educaand.es",
    active: true,
}

// para obtener las claves:

const claves = Object.keys(usuario); // [name,email,active]

// Utilidad verificar si las claves estan todas siguiendo un objeto de partida

// 1.- ¿Como compruebo que todas las clases existan?
function validarCamposRequeridos(objeto,camposRequeridos){
    const clavesObjeto = Object.keys(objeto);
    // retorno verdadero o falso
    return camposRequeridos.every((campoRequerido) =>{
        return clavesObjetos.includes(campo);
    });
}

//data:
const datosFormulario = { name: "Carla", active:false};

const esValido = validarCamposRequeridos(datosFormulario, [
    "name","password","active"
]);

// para los valores: values

const producto = {
    nombre: "laptop",
    stock: 100,
    precio: 1100,
    destacad: true,
}

// array de valores
const valores = Object.values(producto);
//["laptop",100,1100,true]

// Verificar si algún valor cumple una condición:

const precipitaciones = {
    enero:110,
    febrero:98,
    marzo:120,
    abril:50
}

// algún mes fue superior a 100 litros??
const mesSuperiorCien = Object.values(precipitaciones)
    .some((precipitacion) => precipitacion>100);

// cuantos listros totales han caido en los meses enero-abril
const totalLitros = Object.values(precipitaciones)
.reduce((total,precipitacion) => total+precipitacion,0);

// calcular la precipitación máxima
const precipitacionMaxima = Math.max(...Object.values(precipitaciones));

// obtener pares [clave,valor] <---- entries()
const configuracion = {
    tema: "oscuro",
    idioma: "es",
    notificacion: true,
}

// obtener array de clave,valor:
const entradas = Object.entries(configuracion);
/*
[
    ["tema","oscuro"],
    ["idioma","es"],
    ["notificaciones",true],
    ["volumen",75]
]
*/

//********
const usuarioBD = {
    name: "Ian",
    password: "xf20tr",
    email: "ialvtri371@g.educaand.es",
    active: true,
}
// filtar. Eliminar los campos sensibles de este objeto usuarioBD ("password")

Object.entries(usuarioBD).filter()


//destructuring
const {nombre, email} = usuarioBD; // ---> const nombre = usuarioBD.nombre
                                   // ---> const email = usuarioBD.email
const data = [1,2,3,4,5];
const [a,b,,c] = data;

function vData(array){
    const [v1,v2] = array;
    console.log("v1:",v1);
    console.log("v2:",v2);
}

vData(["data",66,99]) // <---


// crear función llamada mostrarPersona, obtener el username, y las dos 
// primeras redes sociales que usuario tenga:

const usuario3 = {
    id:1,
    info: {
        username: "ian",
        redes: ["twitter","github","linkedin"]
    }
}

const {info:{username,redes:[r1,r2]}} = usuario3;
/*
username --> ian
r1 --> twitter
r2 --> github
*/

// Obtener el nombre y la edad del siguiente objeto. Si no existe edad, que guarde el valor 0

const data4 = {
    id:101,
    usuario:{
        perfil:{
            nombre: "Lucia",
            edad:28,
            direccion:{
                ciudad: "Granada",
                pais: "España",
            },
        },
        activo:true,
    },  
};

console.log(data4?.id);

const {usuario:{perfil:{nombre2,edad=0}}} = data4;
/**
 nombre2 -->"Lucia",
 edad --> 28 
*/

const productos = [
        {
            id: 1,
            nombre: "laptop",
            precio: 1000,
            fabricante: {
                nombre: "HP",
                pais: "USA",
                contacto: {
                    email: "info@hp.com",
                    telefono: "+82-2-1234-5678"
                },
            },
            especificaciones: {
                ram: "16GB",
                cpu: "Intel i7"
            }
        },
        {
            id: 2,
            nombre: "smartphone",
            precio: 800,
            fabricante: {
                nombre: "Samsung",
                pais: "Corea del Sur",
                contacto: {
                    email: "support@samsung.com",
                    telefono: "+82-2-8765-4321"
                },
            },
            especificaciones: {
                ram: "12GB",
                cpu: "Snapdragon 8 Gen 2"
            }
        },
        {
            id: 3,
            nombre: "tablet",
            precio: 600,
            fabricante: {
                nombre: "Apple",
                pais: "USA",
                contacto: {
                    email: "contact@apple.com",
                    telefono: "+1-408-996-1010"
                },
            },
            especificaciones: {
                ram: "6GB",
                cpu: "Apple M2"
            }
        },
        {
            id: 4,
            nombre: "monitor",
            precio: 300,
            fabricante: {
                nombre: "LG",
                pais: "Corea del Sur",
                contacto: {
                    email: "info@lg.com",
                    telefono: "+82-2-3456-7890"
                },
            },
            especificaciones: {
                resolucion: "4K",
                tamaño: "27 pulgadas"
            }
        }
]

//Crear una función que extraiga los datos del objeto y me devuelva la siguiente estructura:
//nombre, fabricante {nombre,contacto},especificaciones(solo la ram)
// imaginamos un ARRAY DE PRODUCTOS.
// USANDO LA NUEVA ESPECIFICACIÓN OBTENER el nombre del producto con más rama

const extraerData = (products) =>{
    const {
        nombre,
        fabricante: { nombre:nombreFabricante, contacto },
        especificaciones: { ram }
    } = products;

    return{
        nombre:nombre,
        fabricante:fabricante,
        especificaciones: especificaciones
    }
};

const newDataArray = (arrayProducts) => arrayProducts
    .map((product)=> extraerData(product));