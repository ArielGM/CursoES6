"use strict";

var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostrarInfo: function mostrarInfo() {
      return "Nombre: ".concat(nombre, ", Edad: ").concat(edad);
    }
  };
};

console.log(crearObjeto('Ariel', 33).mostrarInfo()); //ACORTAR FUNCION

var crearObjeto2 = function crearObjeto2(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostrarInfo: function mostrarInfo() {
      return "Nombre: ".concat(nombre, ", Edad: ").concat(edad);
    }
  };
};

console.log(crearObjeto2('Faride', 29).mostrarInfo());