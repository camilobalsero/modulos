"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.servicioPrecio = servicioPrecio;

function servicioPrecio(servicio, mascota, veterinaria) {
  var precio = "";

  if (servicio == "peluqueria") {
    if (mascota == "perro") {
      precio = "30.000";
    } else if (mascota == "gato") {
      precio = "40.000";
    }
  } else if (servicio == "ba\xF1o") {
    if (mascota == "perro") {
      precio = "35.000";
    } else if (mascota == "gato") {
      precio = "25.000";
    }
  } else if (servicio == "veterinaria") {
    if (veterinaria == "esterilizacion") {
      precio = "120.000";
    } else if (veterinaria == "consulta") {
      precio = "30.000";
    }
  }

  return precio;
}