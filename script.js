var nombreUsuario = prompt("Hola,Como es tu nombre???")

function darBienvenida() {
    let speech = new SpeechSynthesisUtterance();
    console.log(nombreUsuario, speech);
    if (nombreUsuario) {
        var texto = 'Bienvenido ' + nombreUsuario + ' gracias por entrar a mi sitio web, ahora por favor contesta esta pregunta, ¿sos Peronista?';
        speech.lang = 'es';
        speech.text = texto;
        speechSynthesis.speak(speech);

    }
}

function peronSi() {
    let speech = new SpeechSynthesisUtterance();
    console.log(sosPeronista, speech);
    if (sosPeronista) {
        var texto = 'Ah sos terrible pelotudo';
        speech.lang = 'es';
        speech.text = texto;
        speechSynthesis.speak(speech);

    }
}

function peronNo() {
    let speech = new SpeechSynthesisUtterance();
    console.log(sosPeronista, speech);
    if (sosPeronista) {
        var texto = 'Me caes bien';
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
    alert(" AH sos un terrible pelotudo");
    peronSi();

} else if (sosPeronista == "no") {
    alert("Me caes bien");
    peronNo();
}