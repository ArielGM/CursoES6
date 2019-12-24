"use strict";

var nombres = ['Alejandro', 'Maria', 'Manuel', 'Cesar'];
var numero_caracteres = nombres.map(function (nombre) {
  return "El nombre ".concat(nombre, " tiene ").concat(nombre.length, " letras");
});
var numero_caracteres2 = nombres.map(function (nombre) {
  return "El nombre ".concat(nombre, " tiene ").concat(nombre.length, " letras");
});
console.log(numero_caracteres);
console.log(numero_caracteres2);