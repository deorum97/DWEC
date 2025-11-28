"use strict";

import { UsuarioManager } from "./managerUsuario.js";
import { desloguear } from "../utilities/deslogueo.js";

let user = null;
const managerUsuario = new UsuarioManager();
user = managerUsuario.getUsuario();
if (!user) {
  window.location.href = "index.html";
}

const btnDeslogueo = document.getElementById("desloguear");
btnDeslogueo.addEventListener("click", (e) => {
  desloguear();
});
