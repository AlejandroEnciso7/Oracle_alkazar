let Nombre = "Lua";
let Edad = 25;
let NumeroDeVentas = 50;
let SaldoDisponible = 1000;
alert("error, completa todos loscampos");
let MensajeDeError = "Error, completa todos los campos, por favor";
alert(MensajeDeError);

let NombreUsuario = prompt("ingresa el nombre del usuario");
let EdadUsuario = prompt("ingrese la edad del usuario");

if (EdadUsuario > 18) {
  alert("puedes obtener una licencia de conducir");
} else {
  alert("no puedes tner una licencia de conducir");
}

let DiaSemana = prompt("ingresa el dia de la semana");

if (DiaSemana == "sabado" || DiaSemana == "domingo") {
  alert("buen fin de semana");
} else {
  alert("buena semana");
}

let NumeroIngresado = prompt("ingresa un numero");
if (NumeroIngresado == 0) {
  alert("el numero es 0");
} else {
  if (NumeriIngresado < 0) {
    alert("el numero es negativo");
  } else {
    alert("el numero es positivo");
  }
}

let SaldoCuenta = 555;
alert("tu saldo es de : $" + SaldoCuenta);

let numeroPractica = 0;
let NumeroPractica2 = 10;
while (numeroPractica < 10) {
  console.log(numeroPractica);
  numeroPractica = numeroPractica + 1;
}
while (NumeroPractica2 > 0) {
  console.log(NumeroPractica2);
  NumeroPractica2 = NumeroPractica2 - 1;
}

let NumeroingresadoEjercicio = prompt("ingresa un numero de 1-10");
while (NumeroingresadoEjercicio < 10) {
  console.log(NumeroingresadoEjercicio);
  NumeroingresadoEjercicio = NumeroingresadoEjercicio + 1;
}

function hola() {
  console.log("hola mundo");
}

function mostrarNombre(nombre) {
  console.log(`hola ${nombre}!`);
}

function dobleNumero(numero) {
  console.log(numero * 2);
}

function promedio(num1, num2, num3) {
  console.log((num1 + num2 + num3) / 3); //como lo hago para que la division sepa cuantos parametros hay?
}

function numeroMayor(num1, num2) {
  if (num1 < num2) {
    return num2;
  } else if (num1 > num2) {
    return num1;
  } else {
    return "ambos numeros son el mismo";
  }
}

function numeroCuadrado(numero) {
  return numero * numero;
}
