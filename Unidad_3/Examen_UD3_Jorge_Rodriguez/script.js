"use strict";

import { Tren } from "./model/trenModel.js";
import { viajeTren, eventoViaje } from "./SimuladorViajeTren.js";
import { HISTORIC_KEY } from "./constants.js";

let arrayHistorico = [];
loadHistoric();

const botonAddTren = document.getElementById("addTren");
const botonSimularViaje = document.getElementById("simularViaje");
const botonBorrarTrenes = document
  .getElementById("borrarTrenes")
  .addEventListener("click", (event) => borrarTodosTrens());

botonAddTren.addEventListener("click", (event) => {
  const nombreTren = document.getElementById("nombreTren").value;
  const velocidadTren = document.getElementById("velocidadTren").value;
  const tipoTren = document.getElementById("tipoTren").value;
  const fechaActual = new Date(Date.now());
  const nuevoTren = new Tren(nombreTren, velocidadTren, tipoTren, fechaActual);

  addTren(nuevoTren);
  addSelectTren(nuevoTren);
  addHistoricTren(nuevoTren);
});

botonSimularViaje.addEventListener("click", (event) => {
  const origenTren = document.getElementById("origenTren").value;
  const destinoTren = document.getElementById("destinoTren").value;
  const trenElegido = document.getElementById("selectTrenes").value;

  const distancia = viajeTren(origenTren, destinoTren, trenElegido);

  const divViajesTrenes = document.getElementById("divViajesTrenes");

  const divNuevoViajeTren = document.createElement("div");
  const nuevoViaje = document.createElement("p");
  const nuevoViajeTren = document.createElement("p");
  const nuevoViajeDistancia = document.createElement("p");
  const nuevoViajeTiempo = document.createElement("p");
  const nuevoViajeEvento = document.createElement("p");

  const textoNuevoViaje = document.createTextNode(
    `Viaje de ${origenTren} a ${destinoTren}`
  );
  const textoNuevoViajeTren = document.createTextNode(`Tren: ${trenElegido}`);
  const textoNuevoViajeDistancia = document.createTextNode(
    `Distancia: ${distancia} km`
  );
  const textoNuevoViajeTiempo = document.createTextNode(`Tiempo estimado:`);

  const TextoEventoViajeTren = document.createTextNode(eventoViaje());

  nuevoViaje.appendChild(textoNuevoViaje);
  nuevoViajeTren.appendChild(textoNuevoViajeTren);
  nuevoViajeDistancia.appendChild(textoNuevoViajeDistancia);
  nuevoViajeTiempo.appendChild(textoNuevoViajeTiempo);
  nuevoViajeEvento.appendChild(TextoEventoViajeTren);

  divNuevoViajeTren.appendChild(nuevoViaje);
  divNuevoViajeTren.appendChild(nuevoViajeTren);
  divNuevoViajeTren.appendChild(nuevoViajeDistancia);
  divNuevoViajeTren.appendChild(nuevoViajeTiempo);
  divNuevoViajeTren.appendChild(nuevoViajeEvento);

  divViajesTrenes.appendChild(divNuevoViajeTren);
});

function addTren(objTren) {
  const divTren = document.getElementById("trenes");

  const nuevoTrenDiv = document.createElement("div");
  const nombreTrenDiv = document.createElement("p");
  const tipoTrenDiv = document.createElement("p");
  const velocidadTrenDiv = document.createElement("p");
  const fechaTrenDiv = document.createElement("p");

  const TextoNombreTrenDiv = document.createTextNode(objTren.nombreTren);
  const TextoTipoTrenDiv = document.createTextNode(`Tipo: ${objTren.tipoTren}`);
  const TextoVelocidadTrenDiv = document.createTextNode(
    `Velocidad: ${objTren.velocidadTren}`
  );
  const TextoFechaTrenDiv = document.createTextNode(
    // `Fecha de alta: ${objTren.fechaActual.getDate()} /${objTren.fechaActual.getMonth()} /
    //  ${objTren.fechaActual.getFullYear()}`
    ""
  );

  nombreTrenDiv.appendChild(TextoNombreTrenDiv);
  tipoTrenDiv.appendChild(TextoTipoTrenDiv);
  velocidadTrenDiv.appendChild(TextoVelocidadTrenDiv);
  fechaTrenDiv.appendChild(TextoFechaTrenDiv);

  nuevoTrenDiv.appendChild(nombreTrenDiv);
  nuevoTrenDiv.appendChild(tipoTrenDiv);
  nuevoTrenDiv.appendChild(velocidadTrenDiv);
  nuevoTrenDiv.appendChild(fechaTrenDiv);

  divTren.appendChild(nuevoTrenDiv);
}

function addSelectTren(objTren) {
  const selectTren = document.getElementById("selectTrenes");

  const optionTren = document.createElement("option");

  const textoSelectTren = document.createTextNode(objTren.nombreTren);

  optionTren.appendChild(textoSelectTren);
  optionTren.setAttribute("name", objTren.nombreTren);
  selectTren.appendChild(optionTren);
}

function addHistoricTren(objTren) {
  arrayHistorico.push(objTren);
  localStorage.setItem(HISTORIC_KEY, JSON.stringify(arrayHistorico));
}

function loadHistoric() {
  let stringHistoric = localStorage.getItem(HISTORIC_KEY);
  if (stringHistoric !== null) {
    arrayHistorico = JSON.parse(stringHistoric);

    arrayHistorico.forEach((element) => {
      addTren(element);
      addSelectTren(element);
    });
  }
}

function borrarTodosTrens() {
  localStorage.clear();
  window.location.reload();
}
