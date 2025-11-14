"use strict";

import { Libro } from "../Model/libro.js";
import { HISTORIC_KEY } from "./constants.js";

let arrayLibros = [];
loadLibros();

function loadLibros() {
  let stringLibros = sessionStorage.getItem(HISTORIC_KEY);
  if (stringLibros !== null) {
    arrayLibros = JSON.parse(stringLibros);
    for (let index = 0; index < arrayLibros.length; index++) {
      const element = arrayLibros[index];
      addLibroObj(new Libro(element.nombre, element.paginas, element.prestado));
    }
  }
}

function addLibroObj(libro) {
  const sectionLibros = document.getElementById("sectionConsultar");
  const nuevoArticulo = document.createElement("article");
  const headerLibro = document.createElement("header");
  const nuevoNombreLibro = document.createElement("p");
  //Añadir una clase a un elemento
  //nuevoNombreLibro.className = "nombre-libro";
  const nuevoNumeroPaginas = document.createElement("p");
  const nuevoPrestadoLibro = document.createElement("p");

  const textNombreLibro = document.createTextNode(libro.nombre);
  const textNumeroPaginas = document.createTextNode(
    `Páginas: ${libro.paginas}`
  );
  const textPrestado = document.createTextNode(`Prestado: ${libro.prestado}`);

  sectionLibros.appendChild(nuevoArticulo);

  headerLibro.appendChild(nuevoNombreLibro);

  nuevoArticulo.appendChild(headerLibro);
  nuevoArticulo.appendChild(nuevoNumeroPaginas);
  nuevoArticulo.appendChild(nuevoPrestadoLibro);

  nuevoNombreLibro.appendChild(textNombreLibro);
  nuevoNumeroPaginas.appendChild(textNumeroPaginas);
  nuevoPrestadoLibro.appendChild(textPrestado);
}
