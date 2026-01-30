const User = require("../model/user");
const { MongoClient, ObjectId } = require("mongodb");
const { BD, USERS_COLLECTION, URI } = require("../model/constants");

class UserService {
  static async get() {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const usersDB = database.collection(USERS_COLLECTION);

      const users = await usersDB.find().toArray();

      return users;
    } finally {
      await client.close();
    }
  }

  static async getById(id) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const usersDB = database.collection(USERS_COLLECTION);

      const users = await usersDB.findOne({ _id: new ObjectId(id) });

      return users;
    } finally {
      await client.close();
    }
  }

  static async login(name, password) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const usersDB = database.collection(USERS_COLLECTION);
      const user = await usersDB.findOne({ name: name, password: password });

      return { token: user.token, admin: user.admin };
    } finally {
      await client.close();
    }
  }

  static async register(name, password, admin) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const usersDB = database.collection(USERS_COLLECTION);

      const newUser = new User(name, password, admin);

      const existingUser = await usersDB.findOne({ name: name });
      if (existingUser) {
        return false;
      }

      const result = await usersDB.insertOne(newUser);

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
      const usersDB = database.collection(USERS_COLLECTION);

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

  static async update(id, name, password, admin) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(BD);
      const usersDB = database.collection(USERS_COLLECTION);

      const filter = { _id: new ObjectId(id) };

      const updateUser = new User(name, password, admin);

      const result = await usersDB.replaceOne(filter, updateUser);

      return result;
    } finally {
      await client.close();
    }
  }
}

module.exports = UserService;
