import { obtenerInventario } from "./model.js";

function mostrarInventario(){
    let inventario = obtenerInventario();
    console.log(`Inventario:`);
    for( let categoria in inventario){
        console.log(`${categoria}:`);
        for ( let  producto in inventario[categoria]){
            console.log(`${producto}: ${inventario[categoria][producto]}`);
        }
    }
}
export {mostrarInventario}