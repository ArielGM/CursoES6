const persona=['Ariel Gonzalez', 33, 'Chile'];

const [nombre,edad,pais,profesion]=persona; //Se crea un arreglo de variables, donde cada campo se asocia al valor de una posicion en el arreglo con valores.

const mostrarInfo=([nombre, ,pais,profesion='No especificado']=persona)=>console.log(nombre,profesion,edad);

mostrarInfo(persona);