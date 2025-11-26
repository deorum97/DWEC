import { UsuarioManager } from "../js/managerUsuario.js";
import { Usuario } from "../model/user.js";
import { Validators } from "../utilities/validators.js";

class RegistroFacade {
  constructor() {
    this.managerUsuario = new UsuarioManager();
  }
  renderRegistro() {
    const sectionLoguin = document.getElementById("sectionRegister");
    sectionLoguin.innerHTML =
      "<form id='formRegistro'>" +
      "<label>Usuario<input type='text' name='user' id='registroUser'/></label>" +
      "<label>Contraseña<input type='password' name='clave' id='registroClave'/></label>" +
      "<label>Repite la contraseña<input type='password' name='claveR' id='registroClaveR'/></label>" +
      "<button id='btnLogueo'>Enviar</button>" +
      "</form>";
    document.getElementById("btnLogueo").addEventListener("click", (e) => {
      e.preventDefault();
      const user = document.getElementById("registroUser");
      const clave = document.getElementById("registroClave");
      const claveR = document.getElementById("registroClaveR");
      Validators.validateName(user);
      Validators.validateClaveRegistro(clave, claveR);
      if (!formRegistro.checkValidity()) {
        formRegistro.reportValidity();
      } else {
        const user = new Usuario(user.value, clave.value);
        this.managerUsuario.guardarNuevoUsuario(user);
      }
    });
  }

  renderLogin() {
    const sectionRegister = document.getElementById("sectionLogin");
    sectionRegister.innerHTML =
      "<form id='formLogin'>" +
      "<label>Usuario<input type='text' name='user' id='user'/></label>" +
      "<label>Contraseña<input type='password' name='clave' id='clave'/></label>" +
      "<button id='btnRegistro'>Enviar</button>" +
      "</form>";
    document.getElementById("btnRegistro").addEventListener("click", (e) => {
      e.preventDefault();
      const user = document.getElementById("user");
      const clave = document.getElementById("clave");
      Validators.validateName(user);
      Validators.validateClave(clave);
      if (!formLogin.checkValidity()) {
        formLogin.reportValidity();
      } else {
        this.managerUsuario.loguearUsuario(user.value, clave.value);
      }
    });
  }
}

export { RegistroFacade };
