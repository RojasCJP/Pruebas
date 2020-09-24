//tengo que hacer un flag que cambie todos los turnos 
//despues de eso que cada boton que toque debe cambiar de color y ver si se puede guardar en un archivo xml
var contador = 1;
function cambiaColor(identificacion, contadorexterno) {
    var botonTablero = document.getElementById(identificacion);
    console.log(botonTablero);
    console.log(contadorexterno);
    if (contadorexterno === undefined) {
        console.log('el contador no esta definido');
    } else {
        if (contadorexterno == 1 || contadorexterno == 2) {
            contador = contadorexterno;
        } else {
            contador = contador;
        }
    }
    console.log("no introdujo contador externo");
    if (contador == 1) {
        botonTablero.className = botonTablero.className.replace(botonTablero.getAttribute("class"), "fichanegra")
        contador = 2;
        //poner color negro
    } else if (contador == 2) {
        botonTablero.className = botonTablero.className.replace(botonTablero.getAttribute("class"), "fichablanca")
        contador = 1;
        //poner color blanco
    }
}
