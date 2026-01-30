const Main = require("../model/main");
const { MongoClient, ObjectId } = require("mongodb");
const { BD, MAIN_COLLECTION, URI } = require("../model/constants");

class MainService {
  static async get() {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const mainDB = database.collection(MAIN_COLLECTION);

      const mains = await mainDB.find().toArray();

      return mains;
    } finally {
      await client.close();
    }
  }

  static async getById(id) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const mainDB = database.collection(MAIN_COLLECTION);

      const mains = await mainDB.findOne({ _id: new ObjectId(id) });

      return mains;
    } finally {
      await client.close();
    }
  }

  static async post(name, description, price) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const mainDB = database.collection(MAIN_COLLECTION);

      const newMain = new Main(name, description, price);

      const result = await mainDB.insertOne(newMain);

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
      const mainDB = database.collection(MAIN_COLLECTION);

      const query = { _id: new ObjectId(id) };

      const result = await mainDB.deleteOne(query);

      if (result.deletedCount === 1) {
        return "Successfully deleted one document.";
      } else {
        return "No documents matched the query. Deleted 0 documents.";
      }
    } finally {
      await client.close();
    }
  }

  static async update(id, name, description, price) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const mainDB = database.collection(MAIN_COLLECTION);

      const filter = { _id: new ObjectId(id) };

      const updateMain = new Main(name, description, price);

      const result = await mainDB.replaceOne(filter, updateMain);

      return result;
    } finally {
      await client.close();
    }
  }
}

module.exports = MainService;
