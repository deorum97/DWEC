const crypto = require("crypto");
class User {
  constructor(name, password, admin) {
    this.name = name;
    this.password = password;
    this.admin = admin;
    this.token = generateUUID();
  }
  static createUser(name, password, admin, token) {
    const user = new User();
    user.name = name;
    user.password = password;
    user.admin = admin;
    user.token = generateUUID();
    return pet;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = User;
