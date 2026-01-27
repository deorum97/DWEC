const crypto = require("crypto");
class Pet {
  constructor(nombre, raza, foto, estado, descripcion) {
    this.nombre = nombre;
    this.raza = raza;
    this.foto = foto;
    this.estado = estado;
    this.descripcion = descripcion;
  }
  static createPet(nombre, raza, foto, estado, descripcion, id) {
    const pet = new Pet();
    pet.nombre = nombre;
    pet.raza = raza;
    pet.foto = foto;
    pet.estado = estado;
    pet.descripcion = descripcion;
    pet.id = id;
    return pet;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = Pet;
