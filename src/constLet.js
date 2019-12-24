//CARACTERISTICA 1: Declaracion de variables:
//Cuando declaro con VAR puedo redeclarar variables 
//Utilizando LET o CONST no permite la redeclaracion de variables


let nombre = 'Ariel Gonzalez';
console.log('Hola ' + nombre);


//CARACTERISTICA 2:
// let y const tambien tienen un scope en el que no podemos acceder a las variables creadas dentro de una funcion.

function saludo(){
    var nombre='Carlos';
    return 'Hola'+nombre;
}

console.log(nombre);


//CARACTERISTICA 3:
//posee scope por bloque

var edad=18;

if(edad>18){
    let esMayor=true;
}

console.log(esMayor); // Esto genera error por que 'esMayor' esta declarado dentro del bloque if... si estuviera declarado como VAR esMayor seria accesible desde fuera del bloque

//CARACTERISTICA: 4
// const: lo usamos cuando queremos que un valor nunca cambie
// let: lo usamos con variables reutilizables
// un ARREGLO de tipo const, no se le puede cambiar los valores pero si se puede agregar mas campos a la cola

const colores=['amarillo','azul']; 
colores.push('verde');

console.log(colores); //{'amarillo','azul','verde'}