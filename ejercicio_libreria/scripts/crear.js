"use strict";

import { Libro } from "../Model/libro.js";
import { HISTORIC_KEY } from "./constants.js";

let arrayLibros = [];
loadLibros();

const buttonCrear = document.getElementById("botonCrear");
buttonCrear.addEventListener("click", (e) => {
  const nombreLibro = document.getElementById("nombreLibro").value;
  const numeroPaginas = document.getElementById("numeroPaginas").value;
  const inputPrestado = document.getElementById("prestado");

  let prestado = "no";
  if (inputPrestado.checked) {
    prestado = "si";
  }

  guardarLibro(new Libro(nombreLibro, numeroPaginas, prestado));
});

function guardarLibro(objLibro) {
  arrayLibros.push(objLibro);
  sessionStorage.setItem(HISTORIC_KEY, JSON.stringify(arrayLibros));
}

function loadLibros() {
  let stringLibros = sessionStorage.getItem(HISTORIC_KEY);
  if (stringLibros !== null) {
    arrayLibros = JSON.parse(stringLibros);
  }
}
