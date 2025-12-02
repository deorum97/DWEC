"use strict";
import { clickCelda } from "./main2.js";
class Facade {
  renderCeldas(
    numFilas,
    numColumnas,
    casillaHunter,
    arrayBombas,
    casillasSeleccoinadas
  ) {
    const celdas = document.getElementById("celdas");
    celdas.innerHTML = "";

    celdas.style.gridTemplateColumns = `repeat(${numFilas}, 100px)`;
    celdas.style.gridTemplateRows = `repeat(${numColumnas}, 100px)`;

    for (let i = 0; i < numFilas * numColumnas; i++) {
      const cell = document.createElement("div");
      if (casillasSeleccoinadas.includes(i)) {
        const img = document.createElement("img");
        if (arrayBombas.includes(i)) {
          img.setAttribute("src", "img/error.png");
          cell.appendChild(img);
        } else {
          img.setAttribute("src", "img/square.png");
        }

        img.style.visibility = "visible";
        cell.appendChild(img);
      } else if (i === casillaHunter) {
        const img = document.createElement("img");
        img.setAttribute("src", "img/boat.png");
        cell.appendChild(img);
      } else if (arrayBombas.includes(i)) {
        const img = document.createElement("img");
        img.setAttribute("src", "img/error.png");
        cell.appendChild(img);
      } else {
        const img = document.createElement("img");
        img.setAttribute("src", "img/square.png");
        cell.appendChild(img);
      }
      cell.dataset.numCelda = i;
      cell.addEventListener("click", clickCelda);
      celdas.appendChild(cell);
    }
  }

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
}

export { Facade };
