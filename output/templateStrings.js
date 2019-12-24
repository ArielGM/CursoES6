"use strict";

var nombre = 'Ariel Gonzalez';
var edad = 33;
var pais = 'Chile';
console.log('Con +: La persona es ' + nombre + ', tiene ' + edad + ' y es de ' + pais);
console.log("Con StringTemplate: La persona es ".concat(nombre, ", tiene ").concat(edad, " y es de ").concat(pais));