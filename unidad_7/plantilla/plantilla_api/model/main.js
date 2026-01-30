const crypto = require("crypto");
class Main {
  constructor(name, description, price, user) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
  static createMain(name, description, price) {
    const main = new Main();
    main.name = name;
    main.description = description;
    main.price = price;
    return main;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = Main;
