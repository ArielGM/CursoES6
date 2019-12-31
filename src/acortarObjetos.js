const crearObjeto=(nombre,edad)=>{
    return{
        nombre:nombre,
        edad:edad,
        mostrarInfo:()=>{
            return `Nombre: ${nombre}, Edad: ${edad}`;
        }
    }
}

console.log(crearObjeto('Ariel',33).mostrarInfo());


//ACORTAR FUNCION
const crearObjeto2=(nombre,edad)=>{
    return{
        nombre,
        edad,
        mostrarInfo(){
            return `Nombre: ${nombre}, Edad: ${edad}`;
        }
    }
}

console.log(crearObjeto2('Faride',29).mostrarInfo());