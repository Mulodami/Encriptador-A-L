function encriptar(){
    let texto = document.getElementById("texto").value;
     let tituloMensaje = document.getElementById("titulo-mensaje");
     let parrafo = document.getElementById("parrafo");
     let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/a/gi, "ai")
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";
    } else{
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "ingresa el texto que deseas encriptar o desencriptar";
        alert ("Debes ingresar algun texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");


    let textoCifrado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";
     } else{
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "ingresa el texto que deseas encriptar o desencriptar";
        alert ("Debes ingresar algun texto");
     }
}