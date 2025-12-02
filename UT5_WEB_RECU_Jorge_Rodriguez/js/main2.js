"use strict";

import { Validators } from "../utilities/validator.js";
import { Facade } from "./facade.js";

let casillaHunter = null;
let intervaloMovimiento = null;
let arrayBombas = [];
let casillasSeleccionadas = [];
let vidas = 3;
let puntos = 0;
let velocidadBarco = null;

const facade = new Facade();

facade.mostrarVidas(vidas);
facade.mostrarPuntos(puntos);

const numFilas = document.getElementById("numFilas");
const numColumnas = document.getElementById("numColumnas");
const numVelocidad = document.getElementById("numVelocidad");
const numBombas = document.getElementById("numBombas");

const formBarco = document.getElementById("formBarco");

const btnEnviar = document.getElementById("btnEnviar");

const btnReinicio = document.getElementById("btnReinicio");

btnReinicio.addEventListener("click", (e) => {
  reinicio();
});

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  Validators.validateFilas(numFilas);
  Validators.validateColumnas(numColumnas);
  Validators.validateVelocidad(numVelocidad);
  Validators.validateBombas(numBombas, numFilas.value, numColumnas.value);

  if (!formBarco.checkValidity()) {
    formBarco.reportValidity();
  } else {
    velocidadBarco = parseInt(numVelocidad.value);

    nuevoJuego();
  }
});

function nuevoJuego() {
  casillaHunter = Math.round(
    Math.random() * (numFilas.value * numColumnas.value)
  );
  calcularBombas();
  facade.renderCeldas(numFilas.value, numColumnas.value);
  intervaloMovimiento = setInterval(
    () => movimientoBarco(),
    parseInt(numVelocidad.value)
  );
}

function calcularBombas() {
  arrayBombas = [];
  let n = 0;
  while (n < numBombas.value) {
    const bomba = Math.round(
      Math.random() * (numFilas.value * numColumnas.value)
    );
    if (!arrayBombas.includes(bomba)) {
      arrayBombas.push(bomba);
      casillasSeleccionadas.push(bomba);
      n++;
    }
  }
}

function movimientoBarco() {
  let salir = true;
  while (salir) {
    casillaHunter = Math.round(
      Math.random() * (numFilas.value * numColumnas.value)
    );
    if (!casillasSeleccionadas.includes(casillaHunter)) {
      salir = false;
    }
  }
  console.log("casillaHunter " + casillaHunter);
}

export function clickCelda(e) {
  const celda = e.target;
  const numCelda = Number(celda.dataset.numCelda);
  if (arrayBombas.includes(numCelda)) {
    celda.style.background = "url('img/error.png')";
    celda.style.backgroundSize = "cover";
    vidas--;
    facade.mostrarVidas(vidas);
    casillasSeleccionadas.push(numCelda);
    if (vidas === 0) {
      gameOver();
    }
  } else if (casillaHunter === numCelda) {
    celda.style.background = "url('img/boat.png')";
    celda.style.backgroundSize = "cover";
    puntos++;
    facade.mostrarPuntos(puntos);
    clearInterval(intervaloMovimiento);
    alert("has capturado al hunter!!");
    continuarJuego();
  } else {
    celda.style.background = "url('img/square.png')";
    celda.style.backgroundSize = "cover";
    casillasSeleccionadas.push(numCelda);
  }
}

function continuarJuego() {
  casillaHunter = Math.round(
    Math.random() * (numFilas.value * numColumnas.value)
  );
  velocidadBarco = parseInt(numVelocidad.value);
  calcularBombas();
  facade.renderCeldas(numFilas.value, numColumnas.value);
  intervaloMovimiento = setInterval(
    () => movimientoBarco(),
    parseInt(numVelocidad.value)
  );
}

function reinicio() {
  document.getElementById("popup").style.display = "none";
  facade.borrarCeldas();
  vidas = 3;
  puntos = 0;
  facade.mostrarPuntos(puntos);
  facade.mostrarVidas(vidas);
}

function gameOver() {
  document.getElementById("popup").style.display = "flex";
  clearInterval(intervaloMovimiento);
}
