function valorVenta(ventas){
    return ventas.cantidad * ventas.precio;
}

function totalVentas(ventas){
    let total = 0;
    for (let i = 0; i < ventas.length; i++) {
        total += valorVenta(ventas[i]);
    }
    return total;
}

function ventaMayor(ventas){
    let mayor = ventas[0];
    for (let i = 1; i < ventas.length; i++) {
        if (valorVenta(ventas[i]) > valorVenta(mayor)) {
            mayor = ventas[i];
        }
    }
    return mayor;
}

function unidadesVendidas(ventas){
    let totalUnidades = 0;
    for (let i = 0; i < ventas.length; i++) {
        totalUnidades += ventas[i].cantidad;
    }
    return totalUnidades;
}

function ticketPromedio(ventas){
    if (ventas.length === 0) return 0;
    return totalVentas(ventas) / ventas.length;
}

function ventasCiudad(ventas, ciudad) {
    if (!ciudad) return 0;

    const ciudadBuscada = ciudad.trim().toLowerCase();

    let total = 0;
    for (let i = 0; i < ventas.length; i++) {
        
        const ciudadRegistro = ventas[i].ciudad.trim().toLowerCase();

        if (ciudadRegistro === ciudadBuscada) {
            total += valorVenta(ventas[i]);
        }
    }

    return total;
}

function bubblesort(array){
    const copia = [...array];
    for (let i = 0; i < copia.length - 1; i++) {
        for (let j = 0; j < copia.length - 1 - i; j++) {
            if (copia[j] > copia[j + 1]) {
                [copia[j], copia[j + 1]] = [copia[j + 1], copia[j]]
            }
        }
    }
    return copia;
}

function grupoProducto(ventas){
    const resumen= {};

    for(let i=0; i<ventas.length; i++){
        const venta=ventas[i]
        const nombre= venta.producto

        if(!resumen[nombre]){
            resumen[nombre]={
                producto: nombre,
                unidades: 0,
                ingresos: 0
            }
        }
        resumen[nombre].unidades+=venta.cantidad
        resumen[nombre].precio+=valorVenta(venta)
    }
    return Object.values(resumen)
}

function unidadesVendidasM(ventas){
    const productos=grupoProducto(ventas)
    return productos
    .sort((a, b) => b.unidades - a.unidades)
    .slice(0, 3)
}

function totalVendidoM(ventas){
    const productos=grupoProducto(ventas)
    return productos
    .sort((a, b) => b.ingresos - a.ingresos)
    .slice(0, 3)
}

module.exports = {
    valorVenta,
    totalVentas,
    ventaMayor,
    unidadesVendidas,
    ticketPromedio,
    ventasCiudad,
    bubblesort,
    unidadesVendidasM,
    totalVendidoM
};
