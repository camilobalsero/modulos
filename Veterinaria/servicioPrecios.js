function servicioPrecio(servicio, mascota, veterinaria) {
    let precio=""
    if(servicio == `peluqueria`){
        if(mascota == `perro`){
            precio = `30.000`;
        }else if(mascota == `gato`){
            precio = `40.000`;
        }
    }else if(servicio == `baño`){
        if(mascota == `perro`){
            precio = `35.000`;
        }else if(mascota == `gato`){
            precio = `25.000`;
        }
    }else if(servicio == `veterinaria`){
        if( veterinaria == `esterilizacion`){
            precio = `120.000`;
        }else if(veterinaria == `consulta`){
            precio = `30.000`;
        }
    } 
    return precio;
}
export {servicioPrecio}