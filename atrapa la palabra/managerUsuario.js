"use strict";

import { HISTORIC_USER } from "./model/constants.js";

class UsuarioManager {
  constructor() {
    if (!UsuarioManager.instance) {
      UsuarioManager.instance = this;
      this.array = this.cargarUsuario();
    }
    return UsuarioManager.instance;
  }

  cargarUsuario() {
    const stringUsuario = JSON.stringify(localStorage.getItem(HISTORIC_USER));
    return JSON.parse(stringUsuario);
  }

  guardarUsuario(arrayUsuario) {
    localStorage.setItem(HISTORIC_USER, arrayUsuario);
  }

  comprobarClave(clave, claveR) {
    return clave === claveR ? true : false;
  }
}

export { UsuarioManager };
