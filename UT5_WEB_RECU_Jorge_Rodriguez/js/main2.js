"use strict";

import { Form } from "../model/form.js";
import { Validators } from "../utilities/validator.js";
import {
  HISTORIC_BEST_TIME,
  HISTORIC_CAPTURAS,
  HISTORIC_FORM,
} from "./constants.js";
import { Facade } from "./facade.js";

let casillaHunter = null;
let intervaloMovimiento = null;
let intervaloTiempoActual = null;
let arrayBombas = [];
let casillasSeleccionadas = [];
let vidas = 3;
let puntos = 0;
let velocidadBarco = null;

let tiempoActual = 0;

const facade = new Facade();

const loadFormulario = loadLocalStorageForm();

facade.mostrarVidas(vidas);
facade.mostrarPuntos(puntos);
facade.mostrarTiempo(tiempoActual);

const numFilas = document.getElementById("numFilas");
const numColumnas = document.getElementById("numColumnas");
const numVelocidad = document.getElementById("numVelocidad");
const numBombas = document.getElementById("numBombas");

const formBarco = document.getElementById("formBarco");

const btnEnviar = document.getElementById("btnEnviar");

const btnReinicio = document.getElementById("btnReinicio");

if (loadFormulario) {
  numFilas.value = loadFormulario.filas;
  numColumnas.value = loadFormulario.columnas;
  numVelocidad.value = loadFormulario.velocidad;
  numBombas.value = loadFormulario.trampas;
}

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
    saveLocalStorageForm();
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
  intervaloTiempoActual = setInterval(() => aumentarTiempo(), 100);
}

function aumentarTiempo() {
  tiempoActual += 0.1;

  facade.mostrarTiempo(tiempoActual.toFixed(1));
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
    if (puntos === 10) {
      win();
    } else {
      continuarJuego();
    }
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
  velocidadBarco = velocidadBarco - 50;
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
  document.getElementById("popupTexto").innerHTML = "Has perdido!";

  clearInterval(intervaloTiempoActual);
  clearInterval(intervaloMovimiento);
  saveLocalStorageCapturas();
}

function win() {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popupTexto").innerHTML = "Has ganado!";

  clearInterval(intervaloTiempoActual);
  saveLocalStorageTiempo();
  saveLocalStorageCapturas();
}

function saveLocalStorageForm() {
  const formulario = new Form(
    numFilas.value,
    numColumnas.value,
    numVelocidad.value,
    numBombas.value
  );
  localStorage.setItem(HISTORIC_FORM, JSON.stringify(formulario));
}

function saveLocalStorageTiempo() {
  const tiempo = loadLocalStorageTiempo();
  if (tiempo >= tiempoActual) {
    localStorage.setItem(HISTORIC_BEST_TIME, tiempoActual);
  }
}

function saveLocalStorageCapturas() {
  let capturas = loadLocalStorageCapturas();
  capturas += puntos;
  localStorage.setItem(HISTORIC_CAPTURAS, capturas);
}

function loadLocalStorageForm() {
  const stringFormulario = localStorage.getItem(HISTORIC_FORM);

  return stringFormulario ? JSON.parse(stringFormulario) : null;
}

function loadLocalStorageCapturas() {
  const stringCapturas = localStorage.getItem(HISTORIC_CAPTURAS);

  return stringCapturas ? JSON.parse(stringCapturas) : null;
}

function loadLocalStorageTiempo() {
  const stringTiempo = localStorage.getItem(HISTORIC_BEST_TIME);

  return stringTiempo ? JSON.parse(stringTiempo) : null;
}
