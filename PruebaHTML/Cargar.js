document.getElementById("botcargar").addEventListener("click", cargarDocXML);
function cargarDocXML() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cargarXML(this);
        }
    };
    xhr.open("GET", "Partida.xml", true);
    xhr.send();
}

function cargarXML(xml) {
    var docXML = xml.responseXML;
    var fichas = docXML.getElementsByTagName("ficha");
    for (var i = 0; i < fichas.length; i++) {
        var fila = fichas[i].getElementsByTagName("fila").textContent;
        var columna = fichas[i].getElementsByTagName("columna").textContent;
        var color = fichas[i].getElementsByTagName("color").textContent;
        var id = columna + fila;
        var contadorExterno = 0
        if (color == "blanco") {
            contadorExterno = 2;
        } else {
            contadorExterno = 1;
        }
        console.log(id + " " + contadorExterno);
        cambiaColor(id, contadorExterno)

    }
}

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