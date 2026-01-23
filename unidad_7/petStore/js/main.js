"use strict";

import { FacadeCard } from "../facade/DOMFacadeCard.js";
import { API_URL, HISTORIC_USER } from "../model/constant.js";

const facadeCard = new FacadeCard();
const tcard = document.getElementById("tablaCard");
const inputNombre = document.getElementById("user");
const inputClave = document.getElementById("clave");
document.getElementById("btnLogueo").addEventListener("click", loguearUsuario);
document
  .getElementById("btnRegistro")
  .addEventListener("click", registrarUsuario);

async function registrarUsuario(event) {
  event.preventDefault();
  const inputClave = document.getElementById("registroClave");
  const inputClaveR = document.getElementById("registroClaveR");
  if (inputClave !== inputClaveR) {
    return;
  }

  const nombre = document.getElementById("user");
  await PostLibro(libro);
  event.target.reset();
  mostrarConsultar();
}

async function loguearUsuario(event) {
  event.preventDefault();
  const requestUser = await fetch(
    API_URL + "users/" + document.getElementById("user").value,
  );

  if (!requestUser.ok) {
    alert("Usuario no encontrado");
    return;
  }

  const user = await requestUser.json();

  if (user.clave === document.getElementById("clave").value) {
    sessionStorage.setItem(HISTORIC_USER, user.nombre);
    window.location.href = "lobby.html";
  } else {
    alert("Clave incorrecta");
  }
}
