"use strict";

import { FacadeCard } from "../facade/DOMFacadeCard.js";
import { API_URL, HISTORIC_USER } from "../model/constant.js";
import { UsuarioManager } from "./managerUsuario.js";

let user = null;
const managerUsuario = new UsuarioManager();
user = managerUsuario.getUsuario();
if (user) {
  window.location.href = "listarPets.html";
}

document.getElementById("btnLogueo").addEventListener("click", loguearUsuario);
document
  .getElementById("btnRegistro")
  .addEventListener("click", registrarUsuario);

async function registrarUsuario(event) {
  event.preventDefault();
  const inputNombre = document.getElementById("registroUser");
  const inputClave = document.getElementById("registroClave");
  const inputClaveR = document.getElementById("registroClaveR");
  managerUsuario.registrarUsuario(
    inputNombre.value,
    inputClave.value,
    inputClaveR.value,
  );
}

async function loguearUsuario(event) {
  event.preventDefault();
  managerUsuario.loguearUsuario(
    document.getElementById("user").value,
    document.getElementById("clave").value,
  );
}

function cargarUsuario() {
  const stringUsuario = localStorage.getItem(HISTORIC_USER);
  return stringUsuario ? JSON.parse(stringUsuario) : [];
}
