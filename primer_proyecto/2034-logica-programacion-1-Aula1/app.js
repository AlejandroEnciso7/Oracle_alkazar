function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector("elemento"); //  let titulo = document.querySelector("h1");
  elementoHTML.innerHTML = texto; //cambia el contenido del h1 en la pestaña index.html por el texto indicado-- titulo.innerHTML = 'este seria el nuevo texto'
}

let parrafo = document.querySelector("p"); //donde se refleja el p?
parrafo.innerHTML = "indica un número del 1 al 10"; //cambia el contenido del p en la pestaña index.html por el texto indicado

alert("bienvenidos al sitio web");

let NumeroMaximo = 10;
let numeroUsuario = 0;
let intentos = 1;
//let PalabraVeces = "vez";
let MaximosIntentos = 3;
let numeroSecreto = GenerarNumeroSecreto();

while (numeroUsuario != numeroSecreto) {
  // while (condicion) {codigo a ejecutar}
  numeroUsuario = parseInt(
    prompt(`Me indicas un numero entre 1 y ${NumeroMaximo}por favor:`)
  );

  console.log(numeroUsuario); // los console.log permiten ver en la consola del navegador los valores de las variables

  //doble barra para comentarios
  if (numeroUsuario == numeroSecreto) {
    alert(
      `Acertaste, el numero es: ${numeroUsuario} lo hiciste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }` // ? es un operador ternario que permite evaluar una condicion y ejecutar un codigo u otro separados por el :
    ); //las comillas invertidas junto con ${} permiten colocar variables dentro de un string
  } else {
    alert("no acertaste el numero"); //no se cumplio la condicion
  }
  intentos = intentos + 1; // se incremento el contador de intentos al no acertar el numero
  //PalabraVeces = "veces";
  if (intentos > 3) {
    //si los intentos son mayor a 3 se ejecuta el codigo que romple el loop
    alert(`has superado el maximo de ${MaximosIntentos} intentos`);
    break;
  }
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(numeroSecreto);
  console.log(numeroUsuario);
  console.log(numeroUsuario == numeroSecreto);
  if (numeroUsuario == numeroSecreto) {
    asignarTextoElemento(
      "p",
      `acertaste el numero en ${intentos} ${intentos == 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento("p", "el numero secreto es menor");
    } else {
      asignarTextoElemento("p", "el numero secreto es mayor");
    }
    intentos++; //aumenta el valor de la variable 'intentos' por uno cada vez se reliza un intento
    limpiarTexto();
  }
  return;
}

function GenerarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * 10) + 1;
  //si el numero generado esta incluido en la lista
  if (listaNumeroSorteado.includes(numeroGenerado)) {
    return GenerarNumeroSecreto();
  } else {
    listaNumeroSorteado.push(numeroGenerado);
    return numeroGenerado;
  }
} 

function limpiarTexto() {
  document.querySelector("#valorUsuario").value = ""; //es otra forma de hacer  let valorTexto =document.querySelector('#valorUsuario');
  //valorTexto.value = '';
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", "indica un numero del 1 al 10");
  numeroSecreto = GenerarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar el texto
  limpiarTexto();
  // indicar mensaje de iontervalo de numeros
  //generar el numero aleatorio
  //inicializar el numero de intentos
  mensajesIniciales();
  //deshabilitar el boton de juego nuevo
  document.querySelector("#reiniciar").setAttribute("disabled", "true"); //set attribute toma dos parametros el atributo y true/false
}

condicionesIniciales();
