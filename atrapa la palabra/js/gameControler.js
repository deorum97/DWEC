"use strict";

import { faker } from "https://cdn.jsdelivr.net/npm/@faker-js/faker/+esm";

const nombresAleatorios = faker.person.firstName();

const juego = document.getElementById("juego");
const divPalabra = document.createElement("div");
const palabra = document.createElement("p");
const textoPalabra = document.createTextNode(nombresAleatorios);

palabra.appendChild(textoPalabra);
divPalabra.appendChild(palabra);
juego.appendChild(divPalabra);

const adivinaPalabra = document.getElementById("adivinaPalabra");

adivinaPalabra.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    borrarPalabra();
  }
});

function borrarPalabra() {
  if (adivinaPalabra.value === palabra.textContent) {
    palabra.remove();
    adivinaPalabra.value = "";
  }
}
