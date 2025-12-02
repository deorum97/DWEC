"use strict";
import { clickCelda } from "./main2.js";
class Facade {
  renderCeldas(numFilas, numColumnas) {
    const celdas = document.getElementById("celdas");
    celdas.innerHTML = "";

    celdas.style.gridTemplateColumns = `repeat(${numFilas}, 100px)`;
    celdas.style.gridTemplateRows = `repeat(${numColumnas}, 100px)`;

    for (let i = 0; i < numFilas * numColumnas; i++) {
      const cell = document.createElement("div");
      cell.dataset.numCelda = i;
      cell.addEventListener("click", clickCelda);
      celdas.appendChild(cell);
    }
  }

  borrarCeldas() {
    const celdas = document.getElementById("celdas");
    celdas.innerHTML = "";
  }

  mostrarVidas(vidas) {
    const pVidas = document.getElementById("vidas");
    pVidas.innerHTML = vidas;
  }

  mostrarPuntos(puntos) {
    const pPuntos = document.getElementById("puntos");
    pPuntos.innerHTML = puntos;
  }

  mostrarTiempo(tiempo) {
    const pTiempo = document.getElementById("tiempo");
    pTiempo.innerHTML = tiempo;
  }
}

export { Facade };
