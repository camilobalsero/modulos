import { mostrarInventario } from "./disponibel.js";
import { agregarExistencias } from "./ingresar.js";
import { eliminarExistencias } from "./eliminar.js";

function ejecucion() {
    while (true){
        let opcion = parseInt(prompt(`Seleccione una opcion:
        1. Mostrar cantidad de productos disponibles
        2. Ingresar nuevas existencias de producto
        3. Eliminar existecias de producto
        4. Salir`));

        switch(opcion){
            case 1:
                mostrarInventario();
                break;
            case 2:
                agregarExistencias();
                break;
            case 3:
                eliminarExistencias();
                break;
            case 4:
                return;
                default:
                console.log(`Opcion inválida. Intente nuevamente`);
        }
    }    
}
ejecucion();