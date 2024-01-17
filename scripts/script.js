/*
@autor: Iván Lorenzo Ruiz
github: https://github.com/Ivanlr96/examenTema5
*/

const formulario = document.querySelector("#formulario")
const nombre = document.querySelector("#nombre")
const correo = document.querySelector("#correo")
const solicitud = document.querySelector("#solicitud")
const reserva = document.querySelector("#reserva")
const info = document.querySelector("#info")
const mensaje = document.querySelector("#mensaje")
const enviar = document.querySelector("#enviar")
const errores = document.querySelector("#errores")
let erroresMensaje = []

function validar(evento) {
    evento.preventDefault()
    erroresMensaje = []

    nombre.value.trim().length === 0 && erroresMensaje.push("El nombre no puede estar vacio")
    !/^[A-zA-Z0-9]*$/.test(nombre.value.trim()) && erroresMensaje.push("El nombre no es válido")
    console.log(nombre.value)

    correo.value.trim().length === 0 && erroresMensaje.push("El correo no puede estar vacio")
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && erroresMensaje.push("El correo no es válido")
    
    mensaje.value.trim().length<10 && erroresMensaje.push("El mensaje es demasiado corto")

    info.addEventListener("click", () => {
        if (solicitud.value==="solicitud") {
            alert("mensaje1")
        }
        if (solicitud.value==="reserva") {
            alert("mensaje2")
        }
    })

    if (erroresMensaje.length === 0 && confirm("¿Está seguro que desea enviar el formulario?")) {
        formulario.submit()
    } else if (erroresMensaje.length > 0) {
       
        errores.textContent=""
        erroresMensaje.forEach(function (mensaje) {
  
            erroresMensaje.textContent = ""
            let mili = document.createElement("li")
           
            mili.textContent= mensaje
            errores.appendChild(mili)
        })

    }
}


formulario.addEventListener("submit", validar)