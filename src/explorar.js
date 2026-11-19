const Datos= require("./datos");
const { totalVentas, ventaMayor, unidadesVendidas, ticketPromedio, ventasCiudad, bubblesort,unidadesVendidasM,totalVendidoM } = require("./analitica");
const objDatos= new Datos();

const ventas = objDatos.ventas;

console.log("Registros:", ventas.length);
console.log("Primero:", ventas[0]);
console.log("Ultimo:", ventas[ventas.length-1]);
console.log("Producto en la posicion 4:", ventas[4].producto);
console.table(ventas)

console.log("Total de ventas:", totalVentas(ventas));
console.log("Venta mayor:", ventaMayor(ventas));
console.log("Unidades vendidas:", unidadesVendidas(ventas));
console.log("Ticket promedio:", ticketPromedio(ventas));
console.log("Ventas en Medellín:", ventasCiudad(ventas, "MedeLlin"));
console.log("Total ventas en Cali:", ventasCiudad(ventas, "CAli"));
console.log("Total ventas en Bogotá:", ventasCiudad(ventas, "BoGota"));
console.log("top 3 productos mas vendidos", totalVendidoM(ventas));
console.log("unidades vendidos", unidadesVendidas(ventas));
const array_num=[]

array_num.push(3,2,7,1,8,2,34,5,6,32,34,12,565,2354,0);

array_num.splice(2,1);

console.log("Array organizado:", bubblesort(array_num));
