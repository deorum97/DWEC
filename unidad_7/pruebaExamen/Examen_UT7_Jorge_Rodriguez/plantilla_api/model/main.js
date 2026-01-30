const crypto = require("crypto");
class Main {
  constructor(title, artist, year, genre, coverUrl) {
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.genre = genre;
    this.coverUrl = coverUrl;
  }
  static createMain(title, artist, year, genre, coverUrl) {
    const main = new Main();
    main.title = title;
    main.artist = artist;
    main.year = year;
    main.genre = genre;
    main.coverUrl = coverUrl;
    return main;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = Main;
