"use strict";

/**
 * Se declara como New Promise y recibe dos parametros: "resolve" (respuesta a caso positivo) y 
 * "reject" (respuesta a caso incorrecto).
 * Los resultados se capturan con metodos .then() y .catch()
 */
var promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var respuesta = false;
    if (respuesta) resolve(respuesta);else reject(respuesta);
  }, 2000);
});
promesa.then(function (message) {
  alert(message);
});
promesa["catch"](function (message) {
  alert(message);
});