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
    return stringUsuario ? JSON.parse(stringUsuario) : [];
  }

  guardarUsuario(usuario) {
    localStorage.setItem(HISTORIC_USER, JSON.stringify(usuario));
  }
  
  guardarNuevoUsuario(usuario) {
    this.array.push(usuario);
    this.guardarUsuario(this.array);
  }

  comprobarClave(clave, claveR) {
    return clave === claveR ? true : false;
  }

  loguearUsuario(nombre,clave){
    this.array.forEach((element) => {
      if(element.nombre===nombre && element.clave===clave){
        window.location.href= "juego.html";
      }
    });
  }
}

export { UsuarioManager };
