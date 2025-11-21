"use strict";

import { RegistroFacade } from "./facades/DOMRegistroFacade.js";
import { UsuarioManager } from "./managerUsuario.js";

const managerUsuario = new UsuarioManager();
const registroFacade = new RegistroFacade();

let arrayUsuario = [];
arrayUsuario = managerUsuario.cargarUsuario();

registroFacade.renderRegistro();
registroFacade.renderLogin();
