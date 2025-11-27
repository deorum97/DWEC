"use strict";

import { faker } from "https://cdn.jsdelivr.net/npm/@faker-js/faker/+esm";
import { DOMJuegoFacade } from "../facade/DOMJuegoFacade.js";
import { HISTORIC_BEST, HISTORIC_LAST } from "../model/constants.js";

const adivinaPalabra = document.getElementById("adivinaPalabra");
const juego = document.getElementById("juego");

const facade = new DOMJuegoFacade();

let vidas = 3;
let puntos = 0;
let nivel = 1;
let velocidad = 4000;
let intervaloPalabras;
let intervaloMovimiento;

nuevoJuego();

const botonReinicio = document.getElementById("reiniciarPartida");
botonReinicio.addEventListener("click", (e) => reiniciarJuego());

adivinaPalabra.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    borrarPalabra();
    if (puntos % 5 === 0) {
      velocidad -= 700;
      nivel++;
      cambiarVelocidadMovimiento(velocidad);
      facade.mostarNivel(nivel);
    }
  }
});

function borrarPalabra() {
  Array.from(juego.children).forEach((element) => {
    if (adivinaPalabra.value === element.textContent) {
      element.remove();
      adivinaPalabra.value = "";
      puntos++;
      facade.mostarPuntos(puntos);
    }
  });
}

function nuevoJuego() {
  facade.mostarVidas(vidas);
  facade.mostarPuntos(puntos);
  facade.mostarNivel(nivel);
  facade.mostarUltimaPartida();
  facade.mostarMejorPartida();
  intervaloPalabras = setInterval(() => nuevaPalabra(), velocidad);
  intervaloMovimiento = setInterval(() => movimiento(), 2);
}

function nuevaPalabra() {
  const palabra = faker.word.noun();
  facade.mostrarPalabra(palabra);
}

function movimiento() {
  Array.from(juego.children).forEach((element) => {
    element.style.top = parseFloat(element.style.top) + 0.03 * nivel * 2 + "%";
    /* const contenedorAltura = juego.clientHeight;
    const elementoBottom = parseFloat(element.style.top) + element.offsetHeight; */

    if (parseFloat(element.style.top) >= 95) {
      //console.log("¡La palabra tocó el fondo!");
      restarVida(vidas);
      element.remove();

      // Aquí puedes restar vidas, desencadenar fallos, etc.
    }
  });
}

function cambiarVelocidadMovimiento(tiempo) {
  clearInterval(intervaloMovimiento);
  clearInterval(intervaloPalabras);
  intervaloPalabras = setInterval(() => nuevaPalabra(), tiempo);
  intervaloMovimiento = setInterval(() => movimiento(), 2);
}

function restarVida() {
  vidas = vidas - 1;
  facade.mostarVidas(vidas);

  if (vidas <= 0) {
    gameOver();
  }
}

function gameOver() {
  clearInterval(intervaloPalabras);
  clearInterval(intervaloMovimiento);
  adivinaPalabra.disabled = true;

  guardarUltimaPartida();
  facade.gameOver();
}

function guardarUltimaPartida() {
  localStorage.setItem(HISTORIC_LAST, puntos);
  const best = localStorage.getItem(HISTORIC_BEST);
  if (puntos > best) {
    {
      localStorage.setItem(HISTORIC_BEST, puntos);
    }
  }
}

function reiniciarJuego() {
  vidas = 3;
  puntos = 0;
  velocidad = 4000;
  adivinaPalabra.disabled = false;
  facade.reinicio();
  intervaloPalabras = setInterval(() => nuevaPalabra(), velocidad);
  intervaloMovimiento = setInterval(() => movimiento(), 2);
}

function palabraSeleccionada() {
  Array.from(juego.children).forEach((element) => {
    if (adivinaPalabra.value === element.textContent) {
      element.remove();
      adivinaPalabra.value = "";
      puntos += 2;
      facade.mostarPuntos(puntos);
    }
  });
}

export { palabraSeleccionada };
