"use strict";
import {
  congelaTiempo,
  duplicaPunto,
  globoSeleccionado,
  sumafallos,
  sumaGlobo,
  sumaPunto,
} from "../js/gameControler.js";
class GlobosFacade {
  constructor() {
    this.sectionGlobos = document.getElementById("sectionGlobos");
    this.globoAmarillo = false;
  }

  renderGlobos(num) {
    const formGlobos = document.getElementById("formGlobos");
    formGlobos.style.visibility = "hidden";
    for (let index = 0; index < num; index++) {
      this.nuevoGlobo();
    }
  }

  nuevoGlobo() {
    const divGlobo = document.createElement("div");
    divGlobo.style.position = "absolute";
    const globo = document.createElement("img");
    globo.style.width = "5em";
    globo.style.height = "5em";
    divGlobo.style.left = Math.floor(Math.random() * 90) + "%";
    divGlobo.style.top = Math.floor(Math.random() * 90) + "%";
    const idGlobo = Math.floor(Math.random() * 4);
    switch (idGlobo) {
      case 0:
        globo.setAttribute("src", "img/Green_Circle.png");
        sumaGlobo();
        globo.addEventListener("click", (e) => {
          sumaPunto();
        });
        this.renderGlobo(divGlobo, globo);
        break;
      case 1:
        globo.setAttribute("src", "img/blue_Circle.png");
        globo.addEventListener("click", (e) => {
          congelaTiempo();
        });
        this.renderGlobo(divGlobo, globo);
        break;
      case 2:
        globo.setAttribute("src", "img/redCircle.png");
        globo.addEventListener("click", (e) => {
          sumafallos();
        });
        this.renderGlobo(divGlobo, globo);
        break;
      case 3:
        if (this.globoAmarillo) {
          this.nuevoGlobo();
        } else {
          this.globoAmarillo = true;
          globo.setAttribute("src", "img/Yellow_Circle.png");
          sumaGlobo();
          globo.addEventListener("click", (e) => {
            duplicaPunto();
          });
          this.renderGlobo(divGlobo, globo);
        }

        break;
    }
  }

  renderGlobo(divGlobo, globo) {
    divGlobo.appendChild(globo);
    divGlobo.addEventListener("click", (e) => {
      globoSeleccionado(e.target);
    });
    this.sectionGlobos.appendChild(divGlobo);
  }

  gameOver(aciertos, fallos, punt) {
    const puntuacion = document.getElementById("puntuacion");
    const pFallos = document.getElementById("fallos");
    const pPuntos = document.getElementById("puntos");
    const puntuacionFinal = document.getElementById("puntuacionFinal");
    puntuacion.style.visibility = "visible";
    pPuntos.innerHTML = "";
    pPuntos.innerHTML = aciertos;
    pFallos.innerHTML = "";
    pFallos.innerHTML = fallos;
    puntuacionFinal.innerHTML = "";
    puntuacionFinal.innerHTML = punt;
  }

  mostrarPuntos(punt) {
    const puntuacion = document.getElementById("puntuacion");
    const puntos = document.getElementById("puntos");
    puntuacion.style.visibility = "visible";
    puntos.innerHTML = "";
    puntos.innerHTML = punt;
  }

  mostrarfallos(punt) {
    const fallos = document.getElementById("fallos");
    fallos.innerHTML = "";
    fallos.innerHTML = punt;
  }

  mostrarFinal(punt) {
    const puntuacionFinal = document.getElementById("puntuacionFinal");
    puntuacionFinal.innerHTML = "";
    puntuacionFinal.innerHTML = punt;
  }
}

export { GlobosFacade };
