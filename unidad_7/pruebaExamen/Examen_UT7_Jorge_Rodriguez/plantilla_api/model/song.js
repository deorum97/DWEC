const crypto = require("crypto");
class Song {
  constructor(title, duration, rating, albumId, listened) {
    this.title = title;
    this.duration = duration;
    this.rating = rating;
    this.albumId = albumId;
    this.listened = listened;
  }
  static createSong(title, duration, rating, albumId, listened) {
    const main = new Song();
    main.title = title;
    main.duration = duration;
    main.rating = rating;
    main.albumId = albumId;
    main.listened = listened;
    return main;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = Song;
