/*
@autor: Iván Lorenzo Ruiz
github:
*/

const formulario=document.querySelector("#formulario")
const nombre=document.querySelector("#nombre")
const correo=document.querySelector("#correo")
const solicitud=document.querySelector("#solicitud")
const reserva=document.querySelector("#reserva")
const info=document.querySelector("#info")
const enviar=document.querySelector("#enviar")
const errores=document.querySelector("#errores")
let erroresMensaje= []

function validar (evento) {
    evento.preventDefault()
    erroresMensaje=[]

    nombre.value.trim().length===0 && alert("EL nombre no puede estar vacio")
}

formulario.addEventListener("submit", validar)