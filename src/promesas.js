/**
 * Se declara como New Promise y recibe dos parametros: "resolve" (respuesta a caso positivo) y 
 * "reject" (respuesta a caso incorrecto).
 * Los resultados se capturan con metodos .then() y .catch()
 */

const promesa=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let respuesta=false;
        if(respuesta)resolve(respuesta);
        else reject(respuesta);
    },2000);
});

promesa.then((message)=>{
    alert(message);
})

promesa.catch((message)=>{
    alert(message)
})