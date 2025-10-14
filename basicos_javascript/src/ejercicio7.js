const numeros = [1,2,3,4,5];
//Generar un objeto resumen de mi array que tenga los siguientes campos
/*
{
valor: numero_correspondiente,
posicion: posicion_dentro_del_array,
esUltimo: array_que_me_diga_si_es_el_ultimo (true/false)
}
*/

const resumenNumeros = numeros.map((numero,indice,miArray) =>{
    return {
        valor: numero,
        posicion: indice,
        esUltimo: indice === miArray.length-1
    }
} );

console.log(resumenNumeros); // array de objetos mapeados a una estructura dada.


const products = [
    {
        name: "laptop", price: 1000, stock: 5, active: true
    },
    {
        name: "Mouse Logitech", price: 28.56, stock:0, active: false
    }
]

/*
Mapeado:

    -nombre
    -precioOriginal
    -precioIVA
    -hayStock

*/

const productsWithVat = products.map((product) => {
    return{
        name: product.name,
        originalPrice: product.price,
        priceWithVat: product.price*1.21,
        avaible: product.stock>0,
    }
});

//filtrame los productos que tienen stock y están activos

const saProducts = products.filter((product) => product.stock>0 && product.active);

//Os pido que busqueis los datos de todos los laptop de forma case Insensitive

//Lo que hace es buscar el nombre que contenga la palabra "laptop" y devuelve sus datos
const lapProducts = products.filter((product) => product.name.toLowerCase().includes("laptop"));

const findProducts = (products,find) => products
    .filter((product) =>product.name.toLowerCase()
        .includes(find.toLowerCase())
    )

//Crear una función que le pase como parámetro un array de productos, precio inicial, precio_final
// y devuelva los productos cuyo precio está en ese rango de valores (sin incluirlo)

const filterPrice = (products, inicialPrice, finalPrice) => products
.filter((product) => product.price > inicialPrice && product.price < finalPrice);

//modificar FindProductos para que además me muestre sólo los que están activos.
const findProducts2 = (products,find) => products
    .filter((product) =>product.name.toLowerCase()
        .includes(find.toLowerCase())
    )


const carrito = [
    {
        name: "laptop", price: 1000, count: 5, category: "Electronica"
    },
    {
        name: "Mouse Logitech", price: 28.56, count:1, category: "Electronica"
    },
    {
        name: "Monitor MSI 24", price: 210, count: 10, category: "Electronica"
    },
    {
        name: "Teclado Mecánico", price: 150, count: 2, category: "Electronica"
    },
    {
        name: "Polo Sclaper", price: 150, count: 2, category: "Ropa"
    },
    {
        name: "Pantalón Stradivarius", price: 150, count: 2, category: "Ropa"
    },
]

/**
 * 
 * @param {Object} cart - Carrito de objetos
 * @param {Number} vat(iva) - IVA a aplicar
 * @return {Number} -Total del carrito IVA incluido
 */
const totalCart = (cart = [], vat =1.21) => cart
    .reduce((total,product)=> product.count>5 
    ? ((total+product.price*vat)*0.95): total+product.price*vat
    ,0);

//Agrupar el carrito por categorías

const productsCategory = (cart=[]) =>{
    return cart.reduce((groups,product) => {
        const categoryFilter=product.category;
        if(!groups[categoryFilter]){
            groups[categoryFilter] = [];
        }
        groups[categoryFilter].push(product)
        return groups
    }, {})
}

/*
{
    Electronica: [
        {
        },
        {
        },
    ],
    Ropa: [
        {
        },
        {
        }
    ]
}
*/

//Quiero que me creeis una función que me cuente todos los votos del ususario
const votos = ["Ana","Carlos","Ana","Beatriz","Carlos","Ana"];

// {Ana: 3, Carlos: 2, Beatriz: 1}

//función al que le paso un array de votos y cuenta cuántos votos tiene cada usuario.

const countVotes = (votes=[]) =>{
    return votes.reduce((countsVote,vote) => {
        countsVote[vote] = (countsVote[vote] || 0) + 1
        return countsVote
    }, {})
}

//funcion {arrayUsuarios, idBusqueda} ---> devuelve el rol que tiene
//Buscar el usuario cuyo id es igual a 2 y obtener el rol que tiene

const usuarios = [
    {id: 1, nombre: "Ana", rol: "admin"},
    {id: 2, nombre: "Carlos", rol: "usuario"},
    {id: 3, nombre: "Beatriz", rol: "admin"},
]

const findUsers = (users=[],id=1) =>{
    return users.find((user) =>{
        if(encontrado = Number(user.id) === Number(id)){
            return user.rol;
        }else{
            return `Error, usuario con id= ${id} no encontrado`
        };
    }) 
}

//buscar el indice del array donde se encuentra el usuario con id buscado.

const findUsersIndex = () => {
    return users.findIndex((user) =>{
        return Number(user.id) === Number(id);
    }) 
};

// devuelve -1 si findIndex devuelve error o no encuentra la acción requerida


// some() ---> devuelve true si al menos un elemento cumple una condición ********

const numerosPares = [4,5,6,7,8];
// ¿Hay números pares en ese array?

const hayPares = numerosPares.some((numero) => numero%2===0) // devuelve true o false si hay algún número par
