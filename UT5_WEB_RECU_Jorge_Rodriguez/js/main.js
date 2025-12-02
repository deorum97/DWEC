"use strict";

import { Validators } from "../utilities/validator.js";
import { Facade } from "./facade.js";

let casillaHunter = null;
let intervaloMovimiento = null;
let array = [];
let casillasSeleccionadas = [];
let vidas = 0;
let puntos = 0;

const numFilas = document.getElementById("numFilas");
const numColumnas = document.getElementById("numColumnas");
const numVelocidad = document.getElementById("numVelocidad");
const numBombas = document.getElementById("numBombas");

const formBarco = document.getElementById("formBarco");

const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  Validators.validateFilas(numFilas);
  Validators.validateColumnas(numColumnas);
  Validators.validateVelocidad(numVelocidad);
  Validators.validateBombas(numBombas, numFilas.value, numColumnas.value);

  if (!formBarco.checkValidity()) {
    formBarco.reportValidity();
  } else {
    nuevoJuego();
  }
});

const facade = new Facade();

function nuevoJuego() {
  casillaHunter = Math.round(
    Math.random() * (numFilas.value * numColumnas.value)
  );
  vidas = 3;
  calcularBombas();
  facade.renderCeldas(
    numFilas.value,
    numColumnas.value,
    casillaHunter,
    array,
    casillasSeleccionadas
  );

  facade.mostrarVidas(vidas);
  facade.mostrarPuntos(puntos);
  intervaloMovimiento = setInterval(
    () => movimientoBarco(),
    parseInt(numVelocidad.value)
  );
}
function nuevoJuegoplus() {
  casillaHunter = Math.round(
    Math.random() * (numFilas.value * numColumnas.value)
  );
  array = [];
  casillasSeleccionadas = [];
  calcularBombas();
  facade.renderCeldas(
    numFilas.value,
    numColumnas.value,
    casillaHunter,
    array,
    casillasSeleccionadas
  );
  facade.mostrarVidas(vidas);
  facade.mostrarPuntos(puntos);
  intervaloMovimiento = setInterval(
    () => movimientoBarco(),
    parseInt(numVelocidad.value)
  );
}

function calcularBombas() {
  array = [];
  let n = 0;
  while (n < numBombas.value) {
    const bomba = Math.round(
      Math.random() * (numFilas.value * numColumnas.value)
    );
    if (!array.includes(bomba)) {
      array.push(bomba);
      n++;
    }
  }
}

function movimientoBarco() {
  const nuevaCelda = Math.round(
    Math.random() * (numFilas.value * numColumnas.value)
  );
  if (!array.includes(nuevaCelda)) {
    facade.renderCeldas(
      numFilas.value,
      numColumnas.value,
      nuevaCelda,
      array,
      casillasSeleccionadas
    );
  }
}

export function clickCelda(e) {
  const celda = e.target;
  const index = Number(celda.dataset.index);

  Array.from(celda.children).forEach((element) => {
    if (element.getAttribute("src") === "img/square.png") {
      element.style.visibility = "visible";
      casillasSeleccionadas.push(index);
    } else if (element.getAttribute("src") === "img/error.png") {
      element.style.visibility = "visible";
      casillasSeleccionadas.push(index);
      vidas--;
      facade.mostrarVidas(vidas);

      if (vidas === 0) {
        gameOver();
      }
    } else if (element.getAttribute("src") === "img/boat.png") {
      puntos++;
      facade.mostrarPuntos(puntos);

      if (puntos === 10) {
        win();
      }
      alert("Has dado al hunter! ");
      nuevoJuegoplus();
    }
  });
}

function gameOver() {
  alert("Has perdido!!!");
}
function win() {
  alert("Has ganado!!!");
}
