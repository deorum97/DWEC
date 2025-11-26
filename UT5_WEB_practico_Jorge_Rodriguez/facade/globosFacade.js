"use strict";
import { globoSeleccionado } from "../js/gameControler.js";
class GlobosFacade {
  constructor() {
    this.sectionGlobos = document.getElementById("sectionGlobos");
  }

  renderGlobos(num) {
    const formGlobos = document.getElementById("formGlobos");
    formGlobos.style.visibility = "hidden";
    for (let index = 0; index < num; index++) {
      this.renderGlobo();
    }
  }

  renderGlobo() {
    const divGlobo = document.createElement("div");
    divGlobo.style.position = "absolute";
    const globo = document.createElement("img");
    globo.style.width = "3em";
    globo.style.height = "3em";
    divGlobo.style.left = Math.floor(Math.random() * 90) + "%";
    divGlobo.style.top = Math.floor(Math.random() * 90) + "%";
    const idGlobo = Math.floor(Math.random() * 4);
    switch (idGlobo) {
      case 0:
        globo.setAttribute("src", "img/Green_Circle.png");
        break;
      case 1:
        globo.setAttribute("src", "img/blue_Circle.png");
        break;
      case 2:
        globo.setAttribute("src", "img/redCircle.jpg");
        break;
      case 3:
        globo.setAttribute("src", "img/Yellow_Circle.png");
        break;
    }
    divGlobo.appendChild(globo);
    divGlobo.addEventListener("click", (e) => {
      globoSeleccionado(e.target);
    });
    this.sectionGlobos.appendChild(divGlobo);
  }

  mostrarPuntos(punt) {
    const puntuacion = document.getElementById("puntuacion");
    const puntos = document.getElementById("puntos");
    puntuacion.style.visibility = "visible";
    puntos.innerHTML = "";
    puntos.innerHTML = punt;
  }
}

export { GlobosFacade };
