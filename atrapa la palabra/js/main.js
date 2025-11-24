"use strict";

import { UsuarioManager } from "./managerUsuario.js";
import { Validators } from "../utilities/validators.js";
import { Usuario } from "../model/user.js";

const managerUsuario = new UsuarioManager();

const formRegistro = document.getElementById("formRegistro");
const btnRegistro = document.getElementById("btnRegistro");

const registroUser = document.getElementById("registroUser");
const registroClave = document.getElementById("registroClave");
const registroClaveR = document.getElementById("registroClaveR");

const formLogin = document.getElementById("formLogin");
const btnLogueo = document.getElementById("btnLogueo");

const loginUser = document.getElementById("user");
const loginCclave = document.getElementById("clave");

btnRegistro.addEventListener("click", (e) => {
  e.preventDefault();
  Validators.validateName(registroUser);
  Validators.validateClaveRegistro(registroClave, registroClaveR);
  if (!formRegistro.checkValidity()) {
    formRegistro.reportValidity();
  } else {
    const user = new Usuario(registroUser.value, registroClave.value);
    managerUsuario.guardarNuevoUsuario(user);
  }
});

btnLogueo.addEventListener("click", (e) => {
  e.preventDefault();
  Validators.validateName(loginUser);
  Validators.validateClave(loginCclave);
  if (!formLogin.checkValidity()) {
    formLogin.reportValidity();
  } else {
    managerUsuario.loguearUsuario(loginUser.value, loginCclave.value);
  }
});
