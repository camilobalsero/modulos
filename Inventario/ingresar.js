import { actualizarElInventario } from "./model.js";

function agregarExistencias(){
    let categoria = prompt(`Ingrese la categoria del producto`);
    let producto = prompt(`Ingrese el nombre del producto`);
    let cantidad = parseInt(prompt(`Ingrese la cantidad a ingresar:`));

    actualizarElInventario(categoria, producto, cantidad);
    console.log(`Se han agregado ${cantidad} existencias de ${producto}.`);
}

export{agregarExistencias}