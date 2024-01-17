/*
@autor: Iván Lorenzo Ruiz
github:
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
    console.log(nombre.value)

    correo.value.trim().length === 0 && erroresMensaje.push("El correo no puede estar vacio")
    
    mensaje.value.trim().length<10 && erroresMensaje.push("El mensaje es demasiado corto")

    info.addEventListener("click", () => {
        if (solicitud.value==="solicitud") {
          alert("mensaje1")
        }
        if (reserva.value==="reserva") {
          alert("mensaje2")
        }
    })

    if (erroresMensaje.length === 0 && confirm("¿Está seguro que desea enviar el formulario?")) {
        formulario.submit()
    } else if (erroresMensaje.length > 0) {
       
    
        erroresMensaje.forEach(function (mensaje) {
  
            erroresMensaje.textContent = ""
            let mili = document.createElement("li")
           
            mili.textContent= mensaje
            errores.appendChild(mili)
        })

    }
}


formulario.addEventListener("submit", validar)