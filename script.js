let nombreUsuario = prompt("Hola,Como es tu nombre???")


if (nombreUsuario.match(/^[A-Z]+$/i)) {
    alert("bienvenid@ " + nombreUsuario + " Gracias por entrar a mi sitio")


} else { alert(" Usted no ingreso un campo aceptable o no ingreso ningun campo.") }