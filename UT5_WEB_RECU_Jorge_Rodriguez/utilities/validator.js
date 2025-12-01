class Validators {
  static validateFilas(numFilas) {
    const num = parseInt(numFilas.value);
    if (num >= 3 && num <= 10) {
      numFilas.setCustomValidity("");
    } else {
      numFilas.setCustomValidity("El numero de filas debe ser entre 3 y 10.");
    }
  }

  static validateColumnas(numColumnas) {
    const num = parseInt(numColumnas.value);
    if (num >= 3 && num <= 10) {
      numColumnas.setCustomValidity("");
    } else {
      numColumnas.setCustomValidity(
        "El numero de columnas debe ser entre 3 y 10."
      );
    }
  }

  static validateVelocidad(numVelocidad) {
    const num = parseInt(numVelocidad.value);
    if (num >= 200 && num <= 800) {
      numVelocidad.setCustomValidity("");
    } else {
      numVelocidad.setCustomValidity("La velocidad debe ser entre 200 y 800.");
    }
  }

  static validateBombas(numbombas, numFilas, numColumnas) {
    const num = parseInt(numbombas.value);
    const celdas = numFilas * numColumnas;
    const max = Math.round(celdas / 3);
    if (num >= 1 && num <= max) {
      numbombas.setCustomValidity("");
    } else {
      numbombas.setCustomValidity(
        "El numero de filas debe ser entre 1 y " + max + "."
      );
    }
  }
}

export { Validators };
