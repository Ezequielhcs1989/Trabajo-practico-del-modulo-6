var nombreUsuario = prompt("Hola,Como es tu nombre???")

function darBienvenida() {
    let speech = new SpeechSynthesisUtterance();
    console.log(nombreUsuario, speech);
    if (nombreUsuario) {
        var texto = 'Bienvenido ' + nombreUsuario + ' gracias por entrar a mi sitio web, ahora por favor contesta si eres peronista';
        speech.lang = 'es';
        speech.text = texto;
        speechSynthesis.speak(speech);

    }
}

function peron(msg) {
    let speech = new SpeechSynthesisUtterance();
    console.log(sosPeronista, speech);
    if (sosPeronista) {
        var texto = msg;
        speech.lang = 'es';
        speech.text = texto;
        speechSynthesis.speak(speech);

    }
}

if (nombreUsuario) {
    alert("bienvenid@ " + nombreUsuario + " Gracias por entrar a mi sitio web");
    darBienvenida();

} else { alert(" Usted no ingreso un campo aceptable o no ingreso ningun campo.") }

//pregunta del rigor

let sosPeronista = prompt("vos sos Peronista ? Si / No")

if (sosPeronista == "si") {
    peron('Ah sos terrible pelotudo');

} else if (sosPeronista == "no") {
    peron("todo ok");
}