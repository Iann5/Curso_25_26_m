/*
Gestion bancaria Revolut 

Desarrolla un sistema bancario básico que permita realizar las siguientes operaciones:
- Crear cuentas bancarias, generando un número de cuenta aleatorio de 24 dígitos.
- Depositar y retirar dinero de una cuenta, asegurando que no se pueda retirar más saldo del disponible.
- Consultar el saldo de una cuenta.
- Transferir dinero entre cuentas.
- Mantener un listado de todas las cuentas creadas.
- Buscar cuentas por el nombre del titular.

Implementa una función de prueba (test) que verifique todas las funcionalidades anteriores.
*/

//--------------Declarar Variables--------------

const cuentas=[];
//--------------Declarar Funciones--------------
/**
 * 
 * @returns {string} Te devuelve el número de cuenta de 24 dígitos
 */
function generarNumeroCuenta(){
    let numeroCuenta='';
    for(let i=0;i<24;i++){
        numeroCuenta+=Math.floor(Math.random()*10);
    }   
    return numeroCuenta;
}

/**
 * 
 * @param {*} titular - nombre de la cuenta
 * @returns Te devuelve el nombre de la cuenta creada
 */
function crearCuenta(titular){
    const cuenta={
        titular: titular,
        numeroCuenta: generarNumeroCuenta(),
        saldo: 0
    };
    cuentas.push(cuenta);
    return cuenta;
}

/**
 * 
 * @param {*} numeroCuenta - número de cuenta a la que se le va a añadir el dinero
 * @param {*} cantidad - cantidad de dinero que se va a añadir
 * @returns Lo que hace es añadir una cantidad de dinero a la cuenta y si se ha hecho bien devuelve true
 */
function depositar(numeroCuenta,cantidad){
    const cuenta=cuentas.find(cuenta=>cuenta.numeroCuenta==numeroCuenta);
    let resultado = false;

    if (cuenta) {
        cuenta.saldo += cantidad;
        resultado = true;
    }

    return resultado;
}

/**
 * 
 * @param {*} numeroCuenta - número de cuenta a la que se le va a retirar el dinero
 * @param {*} cantidad - cantidad de dinero que se quiere retirar
 * @returns Lo que hace es retirar una cantidad de dinero a la cuenta y si el dinero
 * que quiere quitar es mayor que el saldo que hay da error.
 */
function retirar(numeroCuenta,cantidad){
    const cuenta=cuentas.find(cuenta=>cuenta.numeroCuenta==numeroCuenta);
    let resultado = false;
    if (cuenta && cuenta.saldo >= cantidad) {
        cuenta.saldo -= cantidad;
        resultado = true;
    }
    return resultado;
}

/**
 * 
 * @param {*} numeroCuenta - número de cuenta que se va a preguntar el saldo
 * @returns Te devuelve cuanto dinero hay en la cuenta
 */
function consultarSaldo(numeroCuenta){
    const cuenta=cuentas.find(cuenta=>cuenta.numeroCuenta==numeroCuenta);
    return cuenta ? cuenta.saldo : null;
}

/**
 * 
 * @param {*} numeroCuentaOrigen - número de cuenta desde la que se va a transferir el dinero
 * @param {*} numeroCuentaDestino - número de cuenta a la que se va a transferir el dinero
 * @param {*} cantidad - cantidad de dinero a transferir
 * @returns Lo que devuelve es true si se ha podido hacer la transferencia y false si no.
 */
function transferir(numeroCuentaOrigen, numeroCuentaDestino, cantidad) {
    const cuentaOrigen = cuentas.find(cuenta => cuenta.numeroCuenta == numeroCuentaOrigen);
    const cuentaDestino = cuentas.find(cuenta => cuenta.numeroCuenta == numeroCuentaDestino);
    let resultado = false;
    if (cuentaDestino && cuentaOrigen.saldo >= cantidad) {
        cuentaOrigen.saldo -= cantidad;
        cuentaDestino.saldo += cantidad;
        resultado = true;
    }
    return resultado;
}

/**
 * 
 * @returns devuelve todas las cuentas que hay
 */
function ListarCuentas() {
    return cuentas;
}

/**
 * 
 * @param {*} titular - nombre de la cuenta 
 * @returns - Este devuelve las cuentas que coinciden con el nombre que se haya puesto 
 */
function nombreTitularCuenta(titular) {
    return cuentas.find(cuenta => cuenta.titular == titular);
}

//--------------Inicializar la aplicación--------------

test();