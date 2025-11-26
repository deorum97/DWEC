class Validators {
  static validateName(nombre) {
    if (nombre.value.length < 3) {
      nombre.setCustomValidity("El nombre debe tener al menos 3 caracteres.");
    } else {
      nombre.setCustomValidity("");
    }
  }

  static validateClave(clave) {
    if (clave.value.length < 3) {
      clave.setCustomValidity("La clave debe tener al menos 3 caracteres.");
    } else {
      clave.setCustomValidity("");
    }
  }

  static validateClaveRegistro(clave, claveR) {
    if (clave.value.length < 3) {
      clave.setCustomValidity("La clave debe tener al menos 3 caracteres.");
    } else if (clave.value !== claveR.value) {
      claveR.setCustomValidity("LaS clave debe tener al menos 3 caracteres.");
    } else {
      clave.setCustomValidity("");
    }
  }

  static validateNumGlobos(numGlobos) {
    const fechaActual = new Date(Date.now());
    const diaActual = fechaActual.getDate();
    let min = 15;
    if (parseInt(diaActual) >= min) {
      min = diaActual;
    }
    if (parseInt(numGlobos.value) < min) {
      numGlobos.setCustomValidity(
        "Los globos deben ser mayores o iguales a " + min
      );
    } else {
      numGlobos.setCustomValidity("");
    }
  }
}

export { Validators };
