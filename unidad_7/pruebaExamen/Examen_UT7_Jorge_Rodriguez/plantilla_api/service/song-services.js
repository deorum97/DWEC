const Song = require("../model/song");
const { MongoClient, ObjectId } = require("mongodb");
const { BD, SONG_COLLECTION, URI } = require("../model/constants");

class SongService {
  static async get() {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const songDB = database.collection(SONG_COLLECTION);

      const songs = await songDB.find().toArray();

      return songs;
    } finally {
      await client.close();
    }
  }

  static async getById(id) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const songDB = database.collection(SONG_COLLECTION);

      const songs = await songDB.findOne({ _id: new ObjectId(id) });

      return songs;
    } finally {
      await client.close();
    }
  }

  static async post(title, duration, rating, albumId, listened) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const songDB = database.collection(SONG_COLLECTION);

      const newSong = new Song(title, duration, rating, albumId, listened);

      const result = await songDB.insertOne(newSong);

      return result;
    } finally {
      await client.close();
    }
  }

  static async delete(id) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const songDB = database.collection(SONG_COLLECTION);

      const query = { _id: new ObjectId(id) };

      const result = await songDB.deleteOne(query);

      if (result.deletedCount === 1) {
        return "Successfully deleted one document.";
      } else {
        return "No documents matched the query. Deleted 0 documents.";
      }
    } finally {
      await client.close();
    }
  }

  static async update(id, title, duration, rating, albumId, listened) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const songDB = database.collection(SONG_COLLECTION);

      const filter = { _id: new ObjectId(id) };

      const updateSong = new Song(title, duration, rating, albumId, listened);

      const result = await songDB.replaceOne(filter, updateSong);

      return result;
    } finally {
      await client.close();
    }
  }
}

module.exports = SongService;
