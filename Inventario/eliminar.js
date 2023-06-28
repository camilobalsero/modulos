import { actualizarElInventario } from "./model.js";

function eliminarExistencias() {
    let categoria = prompt(`Ingrese la categoria del producto`);
    let producto = prompt(`Ingrese el nombre del producto`);
    let cantidad = parseInt(prompt(`Ingrese la cantidad que desea eliminar`));

    actualizarElInventario(categoria, producto, -cantidad);
    console.log(`Se ha eliminado ${cantidad} existencia de ${producto}.`);  
}

export{eliminarExistencias}