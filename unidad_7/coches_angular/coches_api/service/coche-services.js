const Coche = require("../model/coche");
const { MongoClient, ObjectId } = require("mongodb");
const { BD, COCHES_COLLECTION, URI } = require("../constants");

class CocheService {
  static async get() {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const cochesDB = database.collection(COCHES_COLLECTION);

      const coches = await cochesDB.find().toArray();

      return coches;
    } finally {
      await client.close();
    }
  }

  static async getById(id) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const cochesDB = database.collection(COCHES_COLLECTION);

      const coches = await cochesDB.findOne({ _id: new ObjectId(id) });

      return coches;
    } finally {
      await client.close();
    }
  }

  static async post(marca, modelo, year, precio, imagen) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const cochesDB = database.collection(COCHES_COLLECTION);

      const newCoche = new Coche(marca, modelo, year, precio, imagen);

      const result = await cochesDB.insertOne(newCoche);

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
      const cochesDB = database.collection(COCHES_COLLECTION);

      const query = { _id: new ObjectId(id) };

      const result = await cochesDB.deleteOne(query);

      if (result.deletedCount === 1) {
        return "Successfully deleted one document.";
      } else {
        return "No documents matched the query. Deleted 0 documents.";
      }
    } finally {
      await client.close();
    }
  }

  static async update(id, marca, modelo, year, precio, imagen) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const cochesDB = database.collection(COCHES_COLLECTION);

      const filter = { _id: new ObjectId(id) };

      const updateCoche = new Coche(marca, modelo, year, precio, imagen);

      const result = await cochesDB.replaceOne(filter, updateCoche);

      return result;
    } finally {
      await client.close();
    }
  }
}

module.exports = CocheService;
