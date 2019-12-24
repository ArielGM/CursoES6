const nombres = ['Alejandro','Maria','Manuel','Cesar'];

const numero_caracteres=nombres.map(function(nombre){
    return `El nombre ${nombre} tiene ${nombre.length} letras`;
});

const numero_caracteres2=nombres.map((nombre)=>`El nombre ${nombre} tiene ${nombre.length} letras`);

console.log(numero_caracteres);
console.log(numero_caracteres2);