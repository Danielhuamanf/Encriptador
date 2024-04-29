/*function texto() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }*/
function encriptar(){

  var texto = document.getElementById('idEncriptador').value;
  var seccionSinTexto = document.getElementById("seccionSinTexto");
  var seccionConTexto = document.getElementById("seccionConTexto");
  var mensaje = document.getElementById("mensaje");
  var imagen = document.getElementById("imagen-muneco");
  
  if (texto === "") {
    seccionSinTexto.style.display = "block";
    seccionConTexto.style.display = "none";
    imagen.style.display = "block";
  } else {
    // Aquí va tu lógica de encriptación
    // Por ahora, solo mostraremos el texto encriptado
    var textoEncriptado = encriptarMensaje(texto); // Solo convierte a mayúsculas por ejemplo
    mensaje.textContent = textoEncriptado;
    seccionSinTexto.style.display = "none";
    seccionConTexto.style.display = "block";
    imagen.style.display = "none";
  }


}

    


function encriptarMensaje(mensaje) {
    // Convertir todas las letras del mensaje a minúsculas
    mensaje = mensaje.toLowerCase();

    // Objeto de mapeo para las conversiones
    const conversiones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Función para reemplazar cada letra según las conversiones
    const mensajeEncriptado = mensaje.split('').map(letra => {
        return conversiones[letra] || letra; // Si la letra está en conversiones, la reemplaza, de lo contrario, deja la letra original
    }).join('');

    return mensajeEncriptado;
}
function desencriptar() {
  var texto = document.getElementById('idEncriptador').value;
  var seccionSinTexto = document.getElementById("seccionSinTexto");
  var seccionConTexto = document.getElementById("seccionConTexto");
  var mensaje = document.getElementById("mensaje");
  var imagen = document.getElementById("imagen-muneco");
  
  if (texto === "") {
    seccionSinTexto.style.display = "block";
    seccionConTexto.style.display = "none";
    imagen.style.display = "block";
  } else {
    // Aquí va tu lógica de encriptación
    // Por ahora, solo mostraremos el texto encriptado
    var textoEncriptado = desencriptarMensaje(texto); // Solo convierte a mayúsculas por ejemplo
    mensaje.textContent = textoEncriptado;
    seccionSinTexto.style.display = "none";
    seccionConTexto.style.display = "block";
    imagen.style.display = "none";
  }
}
function desencriptarMensaje(fraseEncriptada) {
  const mapa = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };

  let fraseDesencriptada = fraseEncriptada;
  for (let clave in mapa) {
    const expresionRegular = new RegExp(clave, 'g');
    fraseDesencriptada = fraseDesencriptada.replace(expresionRegular, mapa[clave]);
  }
  return fraseDesencriptada;
}
function copiarMensaje() {
  var mensaje = document.getElementById("mensaje").textContent;
  if (mensaje !== "Texto por defecto") {
    var tempInput = document.createElement("input");
    tempInput.value = mensaje;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Texto encriptado copiado al portapapeles");
  } else {
    alert("No hay texto encriptado para copiar");
  }
}
function limpiarTextArea() {
  var texto = document.getElementById("idEncriptador");
  if (texto.value == "Ingrese el texto aquí..") {
      texto.value = "";
  }
}
