//Referencias HTML
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");
const cajaTexto = document.querySelector("#ingresar-texto");
const textoEncriptado = document.querySelector("#input-texto-encriptado");
const imgMuneco = document.querySelector("#muneco");
const texto_muneco1 = document.querySelector("#texto-muneco1");
const texto_muneco2 = document.querySelector("#texto-muneco2");
const modal = document.querySelector("#myModal");
const btnCerrar = document.querySelector(".cerrar");

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

  if (!cajaTexto.value) {
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

//Acciones para el boton encriptar
btnEncriptar.addEventListener(
  "click",
  (encriptar = () => {
    imgMuneco.style.display = "none";
    btnCopiar.style.display = "block";
    texto_muneco2.style.display = "none";
    textoEncriptado.style.display = "block";
    fraseEncriptar(cajaTexto.value);
  })
);

//Acciones para el boton desencriptar
btnDesencriptar.addEventListener(
  "click",
  (desencriptar = () => {
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
