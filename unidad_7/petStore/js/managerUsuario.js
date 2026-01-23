"use strict";

import { HISTORIC_USER, API_URL } from "../model/constant.js";
import { Usuario } from "../model/user.js";

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

  getUsuario() {
    const stringUsuario = sessionStorage.getItem(HISTORIC_USER);
    return stringUsuario ? JSON.stringify(stringUsuario) : null;
  }

  async loguearUsuario(nombre, clave) {
    const requestUser = await fetch(API_URL + "users/" + nombre);

    if (!requestUser.ok) {
      alert("Usuario no encontrado");
      return;
    }

    const user = await requestUser.json();

    if (user.clave === clave) {
      sessionStorage.setItem(HISTORIC_USER, user.nombre);
      window.location.href = "listarPets.html";
    } else {
      alert("Clave incorrecta");
    }
  }
  async registrarUsuario(nombre, clave, claveR) {
    if (clave === claveR) {
      let myHeaders = new Headers({
        "Content-Type": "application/json",
      });
      const user = new Usuario(nombre, clave);
      const requestUser = new Request(`${API_URL}users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: myHeaders,
      });
      const requestRegisterUser = await fetch(requestUser);
      const dataCreatedUser = await requestRegisterUser.json();
      this.loguearUsuario(nombre, clave);
      return dataCreatedUser;
    }
  }
}

export { UsuarioManager };
