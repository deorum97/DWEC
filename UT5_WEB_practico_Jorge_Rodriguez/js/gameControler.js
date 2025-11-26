"use strict";

import { GlobosFacade } from "../facade/globosFacade.js";
import { Validators } from "../utilities/validators.js";

const facade = new GlobosFacade();

let puntos = 0;
const sectionGlobos = document.getElementById("sectionGlobos");
const buttonEnviar = document.getElementById("submitGlobos");
const inputGlobos = document.getElementById("numGlobos");
const formGlobos = document.getElementById("formGlobos");

buttonEnviar.addEventListener("click", (e) => {
  e.preventDefault;
  Validators.validateNumGlobos(inputGlobos);
  if (!formGlobos.checkValidity()) {
    e.preventDefault;
    formGlobos.reportValidity();
  } else {
    e.preventDefault;
    iniciarJuego(inputGlobos.value);
  }
});

function iniciarJuego(numGlobos) {
  facade.renderGlobos(numGlobos);
  facade.mostrarPuntos(puntos);
  intervaloMovimiento = setInterval(() => moverGlobo(), 2);
}

function moverGlobo() {
  Array.from(sectionGlobos.children).forEach((element) => {
    const mov = Math.floor(Math.random() * 2);
    const movD = Math.floor(Math.random() * 2);
    if (mov === 0) {
      if (movD === 0) {
        if (parseFloat(element.style.top) + 0.1 < 95) {
          element.style.top = parseFloat(element.style.top) + 0.5 + "%";
        } else {
          element.style.top = parseFloat(element.style.top) - 0.5 + "%";
        }
      } else {
        if (parseFloat(element.style.top) + 0.1 > 5) {
          element.style.top = parseFloat(element.style.top) - 0.5 + "%";
        } else {
          element.style.top = parseFloat(element.style.top) + 0.5 + "%";
        }
      }
    } else {
      if (movD === 0) {
        if (parseFloat(element.style.left) + 0.1 < 95) {
          element.style.left = parseFloat(element.style.left) + 0.5 + "%";
        } else {
          element.style.left = parseFloat(element.style.left) - 0.5 + "%";
        }
      } else {
        if (parseFloat(element.style.left) + 0.1 > 5) {
          element.style.left = parseFloat(element.style.left) - 0.5 + "%";
        } else {
          element.style.left = parseFloat(element.style.left) + 0.5 + "%";
        }
      }
    }
  });
}

export function globoSeleccionado(globo) {
  globo.remove();
  puntos++;
  facade.mostrarPuntos(puntos);
}
