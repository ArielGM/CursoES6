const usuario={
    nombre:'Ariel Gonzalez',
    correo:'correo@correo.cl',
    edad:33,
    pais:'Chile',
    profesion:'Ing. Civil Informatico'
}

const nombre1=usuario.nombre;
const profesion1=usuario.profesion;

//Ó se puede asignar a una lista de variables

const {nombre, profesion='No especificado'}=usuario;

const mostrarInfo=({nombre, pais})=>{
    console.log(`${nombre} es de ${pais}`);
}

console.log(usuario);

mostrarInfo(usuario);