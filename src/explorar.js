const Datos= require("./datos");
const objDatos= new Datos();

const ventas = objDatos.ventas;

console.log("Registros:", ventas.length);
console.log("Primero:", ventas[0]);
console.log("Ultimo:", ventas[ventas.length-1]);
console.log("Producto en la posicion 4:", ventas[4].producto);
console.table(ventas)
