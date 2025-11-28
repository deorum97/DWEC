"use strict";

import { GlobosFacade } from "../facade/globosFacade.js";
import { Validators } from "../utilities/validators.js";
import { desloguear } from "./deslogueo.js";
import { UsuarioManager } from "./managerUsuario.js";

const facade = new GlobosFacade();

const managerUsuario = new UsuarioManager();
user = managerUsuario.getUsuario();
if (!user) {
  window.location.href = "index.html";
}

let puntos = 0;
let fallos = 0;
let duplica = false;
let totalGlobosBueno = 0;
let tiempo = 0;
let amarillPop = false;

let intervaloCongelado = null;
let intervaloMovimiento = null;

const sectionGlobos = document.getElementById("sectionGlobos");
const buttonEnviar = document.getElementById("submitGlobos");
const inputGlobos = document.getElementById("numGlobos");
const formGlobos = document.getElementById("formGlobos");

const btnDeslogueo = document.getElementById("cambiarUsuario");
btnDeslogueo.addEventListener("click", (e) => {
  desloguear();
});

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
  intervaloMovimiento = setInterval(() => moverGlobo(), 100);
}

function moverGlobo() {
  tiempo += 0.1;
  Array.from(sectionGlobos.children).forEach((element) => {
    if (parseInt(tiempo) === 3 && !amarillPop) {
      quitarAmarillo(element);
    }
    const mov = Math.floor(Math.random() * 2);
    const movD = Math.floor(Math.random() * 2);
    if (mov === 0) {
      if (movD === 0) {
        if (parseFloat(element.style.top) + 0.1 < 93) {
          element.style.top = parseFloat(element.style.top) + 0.5 + "%";
        } else {
          element.style.top = parseFloat(element.style.top) - 0.5 + "%";
        }
      } else {
        if (parseFloat(element.style.top) + 0.1 > 7) {
          element.style.top = parseFloat(element.style.top) - 0.5 + "%";
        } else {
          element.style.top = parseFloat(element.style.top) + 0.5 + "%";
        }
      }
    } else {
      if (movD === 0) {
        if (parseFloat(element.style.left) + 0.1 < 93) {
          element.style.left = parseFloat(element.style.left) + 0.5 + "%";
        } else {
          element.style.left = parseFloat(element.style.left) - 0.5 + "%";
        }
      } else {
        if (parseFloat(element.style.left) + 0.1 > 7) {
          element.style.left = parseFloat(element.style.left) - 0.5 + "%";
        } else {
          element.style.left = parseFloat(element.style.left) + 0.5 + "%";
        }
      }
    }
  });
}

function quitarAmarillo(element) {
  const src = element.firstChild.getAttribute("src");
  if (src === "img/Yellow_Circle.png") {
    element.remove();
    amarillPop = true;
    totalGlobosBueno--;
  }
}

export function sumaPunto() {
  puntos++;
  totalGlobosBueno--;
}

export function sumafallos() {
  fallos++;
}

export function duplicaPunto() {
  duplica = true;
  totalGlobosBueno--;
  amarillPop = true;
}

export function sumaGlobo() {
  totalGlobosBueno++;
}

export function congelaTiempo() {
  clearInterval(intervaloMovimiento);
  intervaloCongelado = setInterval(() => reponerTiempo(), 2000);
}

function reponerTiempo() {
  clearInterval(intervaloCongelado);
  intervaloMovimiento = setInterval(() => moverGlobo(), 100);
}

function calcularPuntos() {
  const puntuacion = parseInt(100 / tiempo + puntos * 10 - fallos * 5);
  if (duplica) {
    return puntuacion * 2;
  } else {
    return puntuacion;
  }
}

export function globoSeleccionado(globo) {
  globo.remove();
  checkFin();
}

function checkFin() {
  if (totalGlobosBueno === 0) {
    const punt = calcularPuntos();
    facade.gameOver(puntos, fallos, punt);
    Array.from(sectionGlobos.children).forEach((element) => {
      element.remove();
    });
  }
}
