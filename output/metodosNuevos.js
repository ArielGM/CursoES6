"use strict";

var texto = 'Hola Mundo';
console.log(texto, 'empieza con a:', texto.toLowerCase().startsWith('h'));
console.log(texto, 'termina con a:', texto.toLowerCase().endsWith('k'));
console.log(texto, 'incluye la palabra mundo:', texto.toLowerCase().includes('mundo'));
var amigos = ['Carlos', 'Alejandro', 'Faride', 'Ariel']; //retorna true o false si una cadena de texto o arreglo contiene un elemento

console.log(amigos.includes('Benja')); //.find retorna el primer elemento que cumple una condicion

console.log(amigos.find(function (amigo) {
  return amigo.length > 6;
}));
console.log(amigos.findIndex(function (amigo) {
  return amigo === 'Ariel';
}));