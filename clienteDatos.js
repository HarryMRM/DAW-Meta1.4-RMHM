/*
	Desarrollo de Aplicaciones Web
	Meta 1.4 Ejercicio Promesas:Cliente
	Código por: Harry Manuel Reynozo Magallanes
*/

/*
	Este codigo solicita al servicio informacion
    sobre ciertos procesos, espera el resultado de
    una promesa mediante then's anidados para evitar
    problemas de sincronia.
*/
const servicio = require("./servicioDatos");
servicio.getDatos(1,3000).then(function(r){
    console.log(r);
    return servicio.getDatos(2,500)
}).then(function(r){
    console.log(r);
    return servicio.getDatos(3,4000)
}).then(function(r){
    console.log(r);
    return servicio.getDatos(4,700)
}).then(function(r){
    console.log(r);
    return servicio.getDatos(5,3500)
});;