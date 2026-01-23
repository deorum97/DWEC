const User = require("../model/user");
const { MongoClient, ObjectId } = require("mongodb");

class UserService {
  static async get() {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("PetDB");
      const usersDB = database.collection("users");

      const users = await usersDB.find().toArray();

      return users;
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
      const usersDB = database.collection("users");

      const users = await usersDB.findOne({ _id: new ObjectId(id) });

      return users;
    } finally {
      await client.close();
    }
  }

  static async getByNombre(nombre) {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("PetDB");
      const usersDB = database.collection("users");

      const users = await usersDB.findOne({ nombre: nombre });

      return users;
    } finally {
      await client.close();
    }
  }

  static async post(nombre, clave) {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("PetDB");
      const usersDB = database.collection("users");

      const newUser = new User(nombre, clave);

      const result = await usersDB.insertOne(newUser);

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
      const usersDB = database.collection("users");

      const query = { _id: new ObjectId(id) };

      const result = await usersDB.deleteOne(query);

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
      const usersDB = database.collection("users");

      const filter = { _id: new ObjectId(id) };

      const updateUser = {
        $set: {
          descripcion: descripcion,
        },
      };

      const result = await usersDB.updateOne(filter, updateUser);

      return result;
    } finally {
      await client.close();
    }
  }
}

module.exports = UserService;
