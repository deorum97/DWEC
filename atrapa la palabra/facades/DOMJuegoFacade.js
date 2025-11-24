"use strict";

import { HISTORIC_BEST, HISTORIC_LAST } from "../model/constants.js";
import { palabraSeleccionada } from "../js/gameControler.js";

class DOMJuegoFacade {
  constructor() {
    this.juego = document.getElementById("juego");
  }

  mostarVidas(vida) {
    const vidas = document.getElementById("vidas");
    vidas.innerHTML = "";
    vidas.innerHTML = vida;
  }

  mostarPuntos(puntos) {
    const punto = document.getElementById("puntos");
    punto.innerHTML = "";
    punto.innerHTML = puntos;
  }

  mostrarPalabra(palabra) {
    const divPalabra = document.createElement("div");
    divPalabra.style.position = "absolute";
    divPalabra.style.top = 0;
    divPalabra.style.left =
      Math.floor(Math.random() * (this.juego.clientWidth - 50)) + "px";
    const contenedorPalabra = document.createElement("p");
    const textoPalabra = document.createTextNode(palabra);
    contenedorPalabra.appendChild(textoPalabra);
    divPalabra.appendChild(contenedorPalabra);
    divPalabra.addEventListener("click", (e) => palabraSeleccionada());
    this.juego.appendChild(divPalabra);
  }

  mostarUltimaPartida() {
    const ultimaPartida = document.getElementById("ultima");
    ultimaPartida.innerHTML = "";
    const ultimosPuntos = localStorage.getItem(HISTORIC_LAST);
    ultimaPartida.innerHTML = ultimosPuntos
      ? localStorage.getItem(HISTORIC_LAST)
      : "--";
  }

  mostarMejorPartida() {
    const mejorPartida = document.getElementById("mejor");
    mejorPartida.innerHTML = "";
    const mejoresPuntos = localStorage.getItem(HISTORIC_BEST);
    mejorPartida.innerHTML = mejoresPuntos
      ? localStorage.getItem(HISTORIC_BEST)
      : "--";
  }

  gameOver() {
    const sectionGameOver = document.getElementById("gameOver");
    sectionGameOver.style.visibility = "visible";
    const gameOverUltimaPuntuacion = document.getElementById(
      "gameOverUltimaPuntuacion"
    );
    const gameOverMejorPuntuacion = document.getElementById(
      "gameOverMejorPuntuacion"
    );
    gameOverMejorPuntuacion.innerHTML =
      "Mejor Puntuación: " + localStorage.getItem(HISTORIC_BEST);
    gameOverUltimaPuntuacion.innerHTML =
      "Ultima Puntuación: " + localStorage.getItem(HISTORIC_LAST);
  }

  reinicio() {
    this.mostarPuntos(0);
    this.mostarVidas(3);
    this.mostarMejorPartida();
    this.mostarUltimaPartida();
    const sectionGameOver = document.getElementById("gameOver");
    sectionGameOver.style.visibility = "hidden";
    Array.from(this.juego.children).forEach((element) => {
      element.remove();
    });
  }
}

export { DOMJuegoFacade };
