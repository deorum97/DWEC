const Pet = require("../model/pets");
const { MongoClient, ObjectId } = require("mongodb");

class PetService {
  static async get() {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("PetDB");
      const petsDB = database.collection("pets");

      const pets = await petsDB.find().toArray();

      return pets;
    } finally {
      await client.close();
    }
  }

  static async getById(id) {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("PetDB");
      const petsDB = database.collection("pets");

      const pets = await petsDB.findOne({ _id: new ObjectId(id) });

      return pets;
    } finally {
      await client.close();
    }
  }

  static async post(nombre, raza, foto, descripcion) {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("PetDB");
      const petsDB = database.collection("pets");

      const newPet = new Pet(nombre, raza, foto, "available", descripcion);

      const result = await petsDB.insertOne(newPet);

      return result;
    } finally {
      await client.close();
    }
  }

  static async delete(id) {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("PetDB");
      const petsDB = database.collection("pets");

      const query = { _id: new ObjectId(id) };

      const result = await petsDB.deleteOne(query);

      if (result.deletedCount === 1) {
        return "Successfully deleted one document.";
      } else {
        return "No documents matched the query. Deleted 0 documents.";
      }
    } finally {
      await client.close();
    }
  }

  static async update(id, descripcion) {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("PetDB");
      const petsDB = database.collection("pets");

      const filter = { _id: new ObjectId(id) };

      const updatePet = {
        $set: {
          descripcion: descripcion,
        },
      };

      const result = await petsDB.updateOne(filter, updatePet);

      return result;
    } finally {
      await client.close();
    }
  }
}

module.exports = PetService;
