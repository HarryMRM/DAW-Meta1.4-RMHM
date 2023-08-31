/*
	Desarrollo de Aplicaciones Web
	Meta 1.4 Ejercicio Promesas:Servicio
	Código por: Harry Manuel Reynozo Magallanes
*/

/*
	Este codigo envia promesas mediante una funcion
    async, en la que se enviara la promesa resultante
    al cliente de datos.
*/
let obtenDatosDeInternet = function (id,duracion){
    const promesa = new Promise(async function (resolve){
        console.log("Proceso "+id+" obteniendo datos de internet");
        let myPromise = new Promise(function(resolve){
            setTimeout(function() {resolve("Transferencia "+id+" terminada");},duracion);
        });
        let test = await myPromise;
        resolve(test);
    })
    return promesa;
}
module.exports.getDatos = obtenDatosDeInternet;