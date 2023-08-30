import { barcelona, roma, paris, londres } from "./ciudades.js";


console.log(barcelona)
console.log(roma)
console.log(paris)
console.log(londres)

let tituloE = document.getElementById("titulo")
let subtituloE = document.getElementById("subtitulo")
let parrafoE = document.getElementById("parrafo")
let enlaces = document.querySelectorAll("a")


enlaces.forEach(function(enlace){
    
    enlace.addEventListener ("click", function(eventoClick){
        console.log(`clic en ${enlace.textContent}`)
        let eleccion = enlace.textContent;
        let objetoDestino;
        
        if (eleccion === "Barcelona") {
            objetoDestino = barcelona;
        } else if (eleccion === "Roma") {
            objetoDestino = roma;
        } else if (eleccion === "París") {
            objetoDestino = paris;
        } else if (eleccion === "Londres") {
            objetoDestino = londres;
        }
        
        enlaces.forEach(enlace => {
            enlace.classList.remove("active");
        });

        
        enlace.classList.add("active");


        tituloE.textContent = objetoDestino.titulo
        subtituloE.textContent = objetoDestino.subtitulo
        parrafoE.innerHTML = objetoDestino.parrafo

        

    })
})








//* Metodo uno *************************************************
// let enlaces = document.querySelectorAll("a")
// let tituloE = document.getElementById("titulo")
// let subtituloE = document.getElementById("subtitulo")
// let parrafoE = document.getElementById("parrafo")


// enlaces.forEach(function (enlace) {
//     enlace.addEventListener("click", function () {
//         enlaces.forEach(function (enlace) {
//             enlace.classList.remove("active")
//         })
//         this.classList.add("active")
        
//         let contenido = obtenerContenido(this.textContent)
    
//         tituloE.innerHTML = contenido.titulo
//         subtituloE.innerHTML = contenido.subtitulo
//         parrafoE.innerHTML = contenido.parrafo
//     })



// })


// function obtenerContenido(enlace) {
//     let contenido = {
//         "Barcelona": barcelona,
//         "Roma": roma,
//         "París": paris,
//         "Londres": londres
//     }
//     return contenido[enlace]
// }

//*Metodo uno ***********************************************

