"use strict";

var _servicioPrecios = require("./servicioPrecios.js");

var _prompt = require("./prompt.js");

var _empleado = require("./empleado.js");

/*
Programa que proporciona servicios a una verinaria 
Author: Luis Vélez
Fecha: Undefined
Licencia GPL
*/
function main() {
  var nombre = (0, _prompt.pedirEstrin)("Ingrese su nombre");
  var agenda = (0, _prompt.pedirEstrin)("Escriba el dia y fecha para agendar su cita ejemplo: 22 de Noviembre de 2022");
  var servicio = (0, _prompt.pedirEstrin)("Ingrese el servicio de Baño de Mascotas, servicio de Peluqueria de Mascota y el servicio de Veterinaria de Mascotas");
  var mascota = (0, _prompt.pedirEstrin)("Ingrese si su mascota es un perro o un gato");
  var empleados = (0, _empleado.empleado)(servicio);
  var precio1 = (0, _servicioPrecios.servicioPrecio)(servicio, mascota);
  console.log("Señor (A)", nombre, "Su cita para el servicio de  ", servicio, "ha quedado agendada para el:", agenda, "con un valor de ", precio1, "con: ", empleados); //Señor(a) Juan Mata, su cita para el servicio de Baño ha quedado agendada para el próximo 28 de septiembre de 2022 con un valor de $40.000.
}

main();