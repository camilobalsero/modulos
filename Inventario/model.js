let inventario = {
        granos:{
            arroz: 20,
            frijoles: 10,
            lentejas: 10
        },
        aseo:{
            jabon: 10,
            limpido: 10,
            champu: 10
        },
        carnes:{
            pescado: 10,
            res: 10,
            cerdo: 10
        },
        lacteos: {
            yogurt: 10,
            leche: 10,
            kumis: 10
        }
    };

    function actualizarElInventario(categoria, producto, cantidad){
        inventario[categoria][producto] += cantidad;
    }

    function obtenerInventario(){
        return inventario;
    }

    export{actualizarElInventario, obtenerInventario}