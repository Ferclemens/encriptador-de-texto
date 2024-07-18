// elementos
let textoAEncriptarEl = document.getElementById("texto_a_encriptar");
let textoEncriptadoEl = document.getElementById("texto_encriptado");
let botonEncriptarEl = document.getElementById("boton_encriptar");
let botonDesencriptarEl = document.getElementById("boton_desencriptar");
let botonCopiarEl = document.getElementById("boton_copiar");
let imagenCajaVaciaEl = document.getElementById("img_caja_vacia");
let tituloCajaVaciaEl = document.getElementById("titulo_caja_vacia");
let descripcionCajaVaciaEl = document.getElementById("descripcion_caja_vacia");

// llaves de encriptación
const llave = ["ai", "enter", "imes", "ober", "ufat"];

function encriptar() {
  let textoAEncriptar = obtenerTextoAEncriptar();

  // separa y cambia letras a minúscula.
  let arrayDeLetras = textoAEncriptar.toLowerCase().split("");

  // busca y elimina los acentos de las vocales
  for (let i = 0; i < arrayDeLetras.length; i++) {
    if (arrayDeLetras[i] === "á") {
      arrayDeLetras[i] = "a";
    } else if (arrayDeLetras[i] === "é") {
      arrayDeLetras[i] = "e";
    } else if (arrayDeLetras[i] === "í") {
      arrayDeLetras[i] = "i";
    } else if (arrayDeLetras[i] === "ó") {
      arrayDeLetras[i] = "o";
    } else if (arrayDeLetras[i] === "ú") {
      arrayDeLetras[i] = "u";
    }
  }
  // busca y encripta vocales
  for (let i = 0; i < arrayDeLetras.length; i++) {
    if (arrayDeLetras[i] === "a") {
      arrayDeLetras[i] = llave[0];
    } else if (arrayDeLetras[i] === "e") {
      arrayDeLetras[i] = llave[1];
    } else if (arrayDeLetras[i] === "i") {
      arrayDeLetras[i] = llave[2];
    } else if (arrayDeLetras[i] === "o") {
      arrayDeLetras[i] = llave[3];
    } else if (arrayDeLetras[i] === "u") {
      arrayDeLetras[i] = llave[4];
    }
  }
  let textoEncriptado = arrayDeLetras.join("");
  //console.log(textoEncriptado);
  return textoEncriptado;
}

//obtiene el contenido del texto a encriptar
function obtenerTextoAEncriptar() {
  let textoAEncriptar = textoAEncriptarEl.value;
  return textoAEncriptar;
}

//obtiene el contenido del texto encriptado
function obtenerTextoEncriptado() {
  let textoEncriptado = textoEncriptadoEl.textContent;
  return textoEncriptado;
}
//muestra el texto encriptado en la ui
function setearTextoEncriptado() {
  let textoEncriptado = encriptar();
  textoEncriptadoEl.hidden = false;
  botonCopiarEl.hidden = false;
  imagenCajaVaciaEl.hidden = true;
  tituloCajaVaciaEl.hidden = true;
  descripcionCajaVaciaEl.hidden = true;
  return (textoEncriptadoEl.textContent = textoEncriptado);
}

//copiar texto
async function copiarTexto() {
  let texto = textoEncriptadoEl.textContent;
  //console.log("texto a copiar", texto);
  await navigator.clipboard.writeText(texto);
}

function desencriptar() {
  let textoADesencriptar = obtenerTextoEncriptado();
  //console.log(textoADesencriptar);
  let textoDesencriptado = textoADesencriptar
    .replaceAll(llave[0], "a")
    .replaceAll(llave[1], "e")
    .replaceAll(llave[2], "i")
    .replaceAll(llave[3], "o")
    .replaceAll(llave[4], "u");
  console.log("texto desencriptado", textoDesencriptado);
  return textoDesencriptado;
}
//muestra el texto desencriptado en la ui
function setearTextoDesencriptado() {
  let textoDesencriptado = desencriptar();
  return (textoEncriptadoEl.textContent = textoDesencriptado);
}
