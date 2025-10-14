// EJERCICIO: Destructuring profundo

import { productos } from "./data/data";
import { extraerData } from "./helpers/myFuctions";

/// --------------------- Inicio de la aplicación ---------------------

const newDataArray = (arrayProducts) => 
  arrayProducts.map((product)=> extraerData(product));
/*
const newDataArray = (arrayProducts) => 
  arrayProducts.map(extraerProducto);
*/ 
console.log(newDataArray(productos));
