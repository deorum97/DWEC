const crypto = require("crypto");
class User {
  constructor(nombre, clave) {
    this.nombre = nombre;
    this.clave = clave;
  }
  static createUser(nombre, clave) {
    const user = new User();
    user.nombre = nombre;
    user.clave = clave;
    return user;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = User;
