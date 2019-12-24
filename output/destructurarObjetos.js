"use strict";

var usuario = {
  nombre: 'Ariel Gonzalez',
  correo: 'correo@correo.cl',
  edad: 33,
  pais: 'Chile',
  profesion: 'Ing. Civil Informatico'
};
var nombre1 = usuario.nombre;
var profesion1 = usuario.profesion; //Ó se puede asignar a una lista de variables

var nombre = usuario.nombre,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? 'No especificado' : _usuario$profesion;

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      pais = _ref.pais;
  console.log("".concat(nombre, " es de ").concat(pais));
};

console.log(usuario);
mostrarInfo(usuario);