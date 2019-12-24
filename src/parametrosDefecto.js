function registrarUsuario(nombre = 'NN', pais = 'Sin pais', correo = 'no email', telefono='sin telefono'){ // Se asocia un valor por defecto al definir parametros de entrada con el signo =
    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono}`;
}

console.log(registrarUsuario('Carlos',undefined,undefined,'979120007'));