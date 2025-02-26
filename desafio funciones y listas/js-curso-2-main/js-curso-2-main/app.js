let titulo = document.querySelector("h1");
titulo.innerHTML = "hora del desafio";

function BotonClick() {
  console.log("el boton fue clicado");
}

function NombreCiudad() {
  let ciudadBR = prompt("ingresa una ciudad de brasil");
  alert(`estuve en ${ciudadBR} y me acorde de ti`);
}

function AmoJS() {
  alert("yo amo JS");
}

function Suma() {
  let numero1 = prompt("ingresa un numero");
  let numero2 = prompt("ingresa un numero");
  let resultado = numero1 + numero2;
  alert(`${numero1} + ${numero2} = ${resultado}`);
}
