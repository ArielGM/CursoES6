class Usuario{
    constructor(nombre, edad, email){
        this.nombre=nombre,
        this.edad=edad,
        this.email=email
    }

    mostrarInfo(){
        return `
            Nombre: ${this.nombre}, <br />
            Edad: ${this.edad}, <br />
            Email: ${this.email} <br />
            <hr />
        `;
    }
}


let user=new Usuario('Ariel', 33, 'agm@email.com');
document.write(user.mostrarInfo());


//HERENCIA
class Estudiante extends Usuario{
    constructor(nombre,edad,email,carrera){
        super(nombre,edad,email); //Esto trae los atributos de la clase padre
        this.carrera=carrera;
    }

    mostrarInfo(){
        return `
            Nombre: ${this.nombre}, <br />
            Edad: ${this.edad}, <br />
            Email: ${this.email} <br />
            Carrera: ${this.carrera}
            <hr />
        `;
    }
}

let user2=new Estudiante('Faride', 29, 'fag@email.com','Odontologa');
document.write(user2.mostrarInfo());