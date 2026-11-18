Seccion diccionario de datos

los datos de index pertenecen al numero perteneciente de cada objeto dentro del arreglo

los atributos id, fecha, cliente, producto, ciudad, cantidad y precio son caracteristicas de cada objeto ventas 

Seccion casos borde detectados 

el primer caso seria que dentro de ciudades, hay un medellin escrito con m minuscula, lo que hare sera ponerlo en mayuscula asi como el resto de los datos

el segundo caso seria que dentro de cantidades, hay un 0, lo cual no indica mucho si es un error o simplemente algo en el historial, a lo tanto yo no tocare ese dato y simplemente le dejare alli

la prueba de las funciones con el arreglo vacio me dieron los siguientes resultados: 

Total de ventas: 0
Venta mayor: undefined
Unidades vendidas: 0
Ticket promedio: 0
Ventas en Medellín: 0
Total ventas en Cali: 0
Total ventas en Bogotá: 0
Array organizado: [
   0,  1,   2,    2,  3,
   5,  6,   8,   12, 32,
  34, 34, 565, 2354
]

Prueba a mano
Iteración (i)	Registro (id)	Operación (cantidad * precio)	valorVenta(ventas[i])	total acumulado
Inicio	—	—	—	0
i = 0	1	2 * 42000	84000	84000
i = 1	2	1 * 26000	26000	110000
i = 2	3	1 * 95000	95000	205000
i = 3	4	1 * 42000	42000	247000
i = 4	5	3 * 45000	135000	382000
i = 5	6	2 * 26000	52000	434000
i = 6	7	1 * 120000	120000	554000
i = 7	8	0 * 42000	0	554000
i = 8	9	2 * 45000	90000	644000
i = 9	10	4 * 42000	168000	812000
i = 10	11	1 * 95000	95000	907000
i = 11	12	3 * 26000	78000	985000

Iteración (i)	Registro (id)	valorVenta(ventas[i])	valorVenta(mayor) actual	¿ventas[i] > mayor?	Nuevo mayor (id)
Inicio	1	—	84000	—	1
i = 1	2	26000	84000	FALSE	1
i = 2	3	95000	84000	TRUE	3
i = 3	4	42000	95000	FALSE	3
i = 4	5	135000	95000	TRUE	5
i = 5	6	52000	135000	FALSE	5
i = 6	7	120000	135000	FALSE	5
i = 7	8	0	135000	FALSE	5
i = 8	9	90000	135000	FALSE	5
i = 9	10	168000	135000	TRUE	10
i = 10	11	95000	168000	FALSE	10
i = 11	12	78000	168000	FALSE	10