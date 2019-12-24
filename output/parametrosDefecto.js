"use strict";

function registrarUsuario() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'NN';
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Sin pais';
  var correo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'no email';
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'sin telefono';
  // Se asocia un valor por defecto al definir parametros de entrada con el signo =
  return "Nombre: ".concat(nombre, ", Pais: ").concat(pais, ", Correo: ").concat(correo, ", Telefono: ").concat(telefono);
}

console.log(registrarUsuario('Carlos', undefined, undefined, '979120007'));