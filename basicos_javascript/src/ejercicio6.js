// // .at <------- acceso con indices negativos
// const frutas = ["🍊","🍒","🫐","🍍"]
// console.log(frutas.at(-2)); //🫐
// console.log(frutas.slice(-2)); //[🫐,🍍

// // splice ---> se utiliza para extrarer partes de un array sin modificar el array original
// // splice ---> frutas.splice(1,2) / elimina desde la posición 1, 2 elementos
// frutas.splice(1,2,"🍐","🥝") // elimina desde la posición 1, 2 elementos y lo sustituye con "🍐","🥝"

// //concat ---> concatenar dos arrays
// frutas.concat(["🍉","🍇"]); // <--- es poco eficiente de esta forma
// //--------------------------------------------------
// const agees=[1,2,3,4,5,6];
// const ArrayConcat = [...frutas,...agees]; // ESTA ES LA QUE HAY QUE USAR spread operator == ...
 
// // SET <-- OTRO TIPO DE DATOS (datos únicos)
const pesos = [1,2,3,4,5,6,7,7,4,5,6,9];
// const sinDuplicados = [...new Set(pesos)]; // <-- usamos set para crear elementos únicos 

// // .reduce <-- reduce un array a un único valor
// //pesos.reduce((acumulador,elemento,indice,array) => aquí va la lógica, valorInicial);
// // acumulador, elemento <--- son obligatorios
// // el resto son opcionales
// // NO MUTA EL ARRAY

//------------------- Ejercicios ----------------

pesos.reduce((suma,peso)=> suma+peso , 0);

//Multipilicar todos los elementos de un array
pesos.reduce((multipilicar,peso)=> multipilicar*peso , 1);

//Encontrar el máximo y el mínimo
pesos.reduce((max,peso) => peso > max ? peso : max, pesos[0]);
pesos.reduce((min,peso) => peso < min ? peso : min, pesos[0]);

//Dado un array que sea manzana, platano, naranja, manzana, manzana, platano, pera, pera. Devolvedem un
//objeto clave valor que me diga nombre de la fruta: cuántas veces aparece esa fruta.
const frutas2 = ["manzana", "platano", "naranja", "manzana", "manzana", "platano", "pera", "pera"];
//{ manzana: 3, platano: 2, naranja: 1, pera: 2 }
frutas2.reduce((acc,fruta) => {
    acc[fruta]=(acc[fruta] || 0) + 1 // []--> sirve para crear un elemento dentro de un objeto.
    return acc;
} , {});

//Dado el siguiente array bidimensional, se pide aplanar dicho array en un array unidimensional
const numeros = [[1,2,3],[4,5],[6,7,8,9]];
numeros.reduce((acc,numero) => {}, {});

// array de objetos
const usuarios = [
    {id:1 , name: "pepe", age: 30, data :{books:100}},
    {id:2 ,name: "maria", age: 25, data :{books:50}},
    {id:3 ,name: "juan", age: 35, data :{books:20}},
    {id:4 ,name: "carla", age: 30, data :{books:20}},
    {id:5 ,name: "fran", age: 25, data :{books:10}},
    {id:6 ,name: "roberto", age: 30, data :{books:60}},
    {id:7 ,name: "alba", age: 25, data :{books:0}},
];

//1.-dame la información del usuario cuyo nombre es JUAN
usuarios.find(usuario => usuario.name.toLowerCase() === "juan");

//2.-dame todods los usuarios cuya edad es mayor/igual que 28
let resultado = usuarios.find(usuario => Number(usuario.age) >= 28) ?? {};

//3.-Dado el siguiente, devolver un array solo con los nombres de usuario que tienen en su biblioteca
//más de 20 libros
usuarios.filter(usuario => Number(usuario.data.books) > 20).map(usuario => usuario.name);

//4.-Obtener el valor promedio total de todos los libros si suponemos un precio medio de 28€
usuarios.reduce((acc, usuario) => acc + (usuario.data.books * 28), 0);

//5.-Decirme que usuarios no tienen libros
usuarios.find(usuarios => Number(usuarios.books) === 0);

const productos = [
    {id:1 , name: "Laptop", precio: 1200,  stock: 5 ,category: 'Tecnología'},
    {id:2 ,name: "Camiseta", precio: 35, stock: 15,category: 'Ropa'},
    {id:3 ,name: "Monitor", precio: 300, stock: 0,category: 'Tecnología'},
    {id:4 ,name: "Libro", precio: 800, stock: 50,category: 'Literatura'},
    {id:5 ,name: "Móvil", precio: 20, stock: 10,category: 'Tecnología'},
    {id:6 ,name: "Pantalón", precio: 60, stock: 5,category: 'Ropa'}
];

//Se pide:
//1.- Obtener un array con los nombres de todos los productos que están agotados.
productos.filter(producto => Number(producto.stock) === 0).map(producto => producto.name);

//2.- Calcular el valor total del inventario (precio * cantidad) de todos los productos.
productos.reduce((acc,producto) => acc + (Number(producto.precio*producto.stock)),0);

//3.- Filtrar los productos que pertenecen a la categoría 'Tecnología' y tienen un precio mayor a 500.
productos.filter(producto => producto.category === 'Tecnología' && Number(producto.precio) > 500);

//4.- Crear un nuevo array de productos aplicando un descuento del 10% a todos los productos de la
// categoría 'Ropa'.
productos.map((producto)=> producto.category === 'Ropa' ? {...producto, precio: Number(producto.precio-(producto.precio*0.10))} : producto );