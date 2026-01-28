const crypto = require("crypto");
class Product {
  constructor(name, description, price, user) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
  static createProduct(name, description, price) {
    const product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;
    return product;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = Product;
