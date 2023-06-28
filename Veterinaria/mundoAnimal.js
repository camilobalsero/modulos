import { servicioPrecio } from "./servicioPrecios.js";
import { pedirEstrin } from "./prompt.js";
import {empleado} from "./empleado.js"

function main() {
    let nombre = pedirEstrin("Ingrese su nombre");
    let agenda = pedirEstrin("Escriba el dia y fecha para agendar su cita ejemplo: 22 de Noviembre de 2022");
    let servicio = pedirEstrin("Ingrese el servicio de Baño de Mascotas, servicio de Peluqueria de Mascota y el servicio de Veterinaria de Mascotas");
    let mascota= pedirEstrin("Ingrese si su mascota es un perro o un gato");
    let empleados = empleado(servicio);
    let precio1=servicioPrecio(servicio,mascota)

    console.log("Señor (A)", nombre, "Su cita para el servicio de  ", servicio, "ha quedado agendada para el:", agenda, "con un valor de ", precio1, "con: ", empleados)
    //Señor(a) Juan Mata, su cita para el servicio de Baño ha quedado agendada para el próximo 28 de septiembre de 2022 con un valor de $40.000.

}
main()