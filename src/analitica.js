function valorVenta(ventas){
    return ventas.cantidad * ventas.precio;
}

function totalVentas(ventas){
    let total = 0;
    for (let i = 0; i < ventas.length-1; i++) {
        total += valorVenta(ventas[i]);
    }
    return total;
}

function VentaMayor(ventas){
    let mayor = ventas[0];
    for (let i = 1; i < ventas.length; i++) {
        if (valorVenta(ventas[i]) > valorVenta(mayor)) {
            mayor = ventas[i];
        }
    }
    return mayor;
}

function UnidadesVendidas(ventas){
    let totalUnidades = 0;
    for (let i = 0; i < ventas.length; i++) {
        totalUnidades += ventas[i].cantidad;
    }
    return totalUnidades;
}

function ticketPromedio(ventas){
    
}
