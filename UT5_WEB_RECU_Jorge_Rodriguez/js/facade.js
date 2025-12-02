"use strict";
import { clickCelda } from "./main.js";
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

  mostrarTiempo(tiempo) {
    const pTiempo = document.getElementById("tiempo");
    pTiempo.innerHTML = tiempo;
  }

  mostrarCapturas(capturas) {
    const pCapturas = document.getElementById("capturas");
    pCapturas.innerHTML = capturas;
  }
}

export { Facade };
