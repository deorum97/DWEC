const crypto = require("crypto");
class Main {
  constructor(title, year, genre, rating, platform, imageUrl) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.rating = rating;
    this.platform = platform;
    this.imageUrl = imageUrl;
  }
  static createMain(title, year, genre, rating, platform, imageUrl) {
    const main = new Main();
    main.title = title;
    main.year = year;
    main.genre = genre;
    main.rating = rating;
    main.platform = platform;
    main.imageUrl = imageUrl;
    return main;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = Main;
