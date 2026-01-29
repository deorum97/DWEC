const crypto = require("crypto");
class Coche {
  constructor(marca, modelo, year, precio, imagen) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.precio = precio;
    this.imagen = imagen;
  }
  static createCoche(marca, modelo, year, precio, imagen) {
    const coche = new Coche();
    coche.marca = marca;
    coche.modelo = modelo;
    coche.year = year;
    coche.precio = precio;
    coche.imagen = imagen;
    return coche;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = Coche;
