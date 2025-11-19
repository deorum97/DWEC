import { UsuarioManager } from "../managerUsuario.js";
import { Validators } from "../utilities/validators.js";

class RegistroFacade {
  constructor() {
    this.managerUsuario = new UsuarioManager();
  }
  renderRegistro() {
    const sectionLoguin = document.getElementById("sectionLoguin");
    sectionLoguin.innerHTML =
      "<label>Usuario<input type='text' name='user' id='user'/></label><label>Contraseña<input type='password' name='clave' id='clave'/><label>Repite la contraseña<input type='password' name='claveR' id='claveR'/></label><button id='btnLogueo'>Enviar</button>";
    document.getElementById("btnLogueo").addEventListener("click", (e) => {
      Validators.validateName();
      Validators.validateClaveRegistro();
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
      }
    });
  }

  renderLogin() {
    const sectionLoguin = document.getElementById("sectionLoguin");
    sectionLoguin.innerHTML =
      "<label>Usuario<input type='text' name='user' id='user'/></label><label>Contraseña<input type='password' name='clave' id='clave'/></label><button id='btnLogueo'>Enviar</button>";
    const btnLoguin = document.getElementById("btnLogueo");
    btnLoguin.addEventListener("click", (e) => {});
  }
}

export { RegistroFacade };
