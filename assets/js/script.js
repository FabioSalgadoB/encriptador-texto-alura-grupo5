//Referencias HTML
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");
const cajaTexto = document.querySelector("#ingresar-texto");
const textoEncriptado = document.querySelector("#input-texto-encriptado");
const imgMuneco = document.querySelector("#muneco");
const mensaje_uno = document.querySelector("#mensaje1");
const mensaje_dos = document.querySelector("#mensaje2");
const mensaje_tres = document.querySelector("#mensaje3");
const texto_muneco2 = document.querySelector("#texto-muneco2");
const modal = document.querySelector("#myModal");
const btnCerrar = document.querySelector(".cerrar");
const contenidoModal = document.querySelector("#contenido-modal");

// Esta funcion realiza el proceso de encriptar la frase
const fraseEncriptar = (palabra) => {
  palabra = palabra.replace(/e/gim, "enter");
  palabra = palabra.replace(/o/gim, "over");
  palabra = palabra.replace(/i/gim, "imes");
  palabra = palabra.replace(/a/gim, "ai");
  palabra = palabra.replace(/u/gim, "ufat");
  console.log(palabra);
  textoEncriptado.innerHTML = palabra;

  if (!cajaTexto.value) {
    modal.style.display = "block";
  }
  validarTexto(cajaTexto.value);
};
// Esta funcion realiza el proceso de desencriptar la frase
const desencriptarFrase = (palabra) => {
  palabra = palabra.replace(/enter/gim, "e");
  palabra = palabra.replace(/over/gim, "o");
  palabra = palabra.replace(/imes/gim, "i");
  palabra = palabra.replace(/ai/gim, "a");
  palabra = palabra.replace(/ufat/gim, "u");
  console.log(palabra);
  textoEncriptado.innerHTML = palabra;
  if (!textoEncriptado.value) {
    modal.style.display = "block";
  }
};

//Esta funcion permite selecionar y copiar el texto
const copiar = () => {
  let contenido = document.querySelector("#input-texto-encriptado");
  contenido.select();
  document.execCommand("copy");
  if (!cajaTexto.value) {
    modal.style.display = "block";
  }
};

//validacion de texto
const validarTexto = (texto) => {
  if (texto.match(/[áéíóúÁÉÍÓÚ]/)) {
    modal.style.display = "block";
    contenidoModal.innerHTML =
      "El texto no debe incluir acentos ni letras mayusculas";
    textoEncriptado.innerHTML = " ";
    mensaje_uno.style.display = "block";
    mensaje_dos.style.display = "none";
  }
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === texto[i].toUpperCase()) {
      modal.style.display = "block";
      contenidoModal.innerHTML =
        "El texto no debe incluir acentos ni letras mayusculas";
      textoEncriptado.innerHTML = " ";
      mensaje_uno.style.display = "block";
      mensaje_dos.style.display = "none";
    }
  }
  return false;
};
//Acciones para el boton encriptar
btnEncriptar.addEventListener(
  "click",
  (encriptar = () => {
    imgMuneco.style.display = "none";
    if (!cajaTexto.value) {
      mensaje_dos.style.display = "none";
    } else {
      mensaje_uno.style.display = "none";
      mensaje_dos.style.display = "block";
      textoEncriptado.style.visibility = "visible";
    }

    fraseEncriptar(cajaTexto.value);
  })
);

//Acciones para el boton desencriptar
btnDesencriptar.addEventListener(
  "click",
  (desencriptar = () => {
    if (!textoEncriptado.value) {
      mensaje_uno.style.display = "block";
      mensaje_dos.style.display = "none";
      mensaje_tres.style.display = "none";
    } else {
      mensaje_uno.style.display = "none";
      mensaje_dos.style.display = "none";
      mensaje_tres.style.display = "block";
    }
    desencriptarFrase(cajaTexto.value);
  })
);

//Acciones para el boton copiar
btnCopiar.addEventListener(
  "click",
  (copiar_texto = () => {
    copiar();
  })
);

//Accciones para el boton cerrar modal
btnCerrar.addEventListener(
  "click",
  (cerrar = () => {
    modal.style.display = "none";
  })
);

//Cerrar haciendo click en la pantalla
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
