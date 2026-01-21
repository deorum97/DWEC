"use strict";

import { HISTORIC_USER, HISTORIC_USERL } from "../model/constants.js";

class UsuarioManager {
  constructor() {
    if (!UsuarioManager.instance) {
      UsuarioManager.instance = this;
      this.array = this.cargarUsuario();
    }
    return UsuarioManager.instance;
  }

  cargarUsuario() {
    const stringUsuario = localStorage.getItem(HISTORIC_USER);
    return stringUsuario ? JSON.parse(stringUsuario) : [];
  }

  guardarNuevoUsuario(usuario) {
    this.array.push(usuario);
    localStorage.setItem(HISTORIC_USER, JSON.stringify(this.array));
  }

  comprobarClave(clave, claveR) {
    return clave === claveR ? true : false;
  }

  getUsuario() {
    const stringUsuario = sessionStorage.getItem(HISTORIC_USERL);
    return stringUsuario ? JSON.stringify(stringUsuario) : null;
  }

  loguearUsuario(nombre, clave) {
    this.array.forEach((element) => {
      if (element.nombre === nombre && element.clave === clave) {
        sessionStorage.setItem(HISTORIC_USERL, element.nombre);
        window.location.href = "lobby.html";
      }
    });
  }
}

export { UsuarioManager };
