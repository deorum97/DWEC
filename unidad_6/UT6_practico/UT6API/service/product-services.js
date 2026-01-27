const Product = require("../model/product");
const { MongoClient, ObjectId } = require("mongodb");
const User = require("../model/user");
const { HISTORIC_USER } = require("../../constants.js");

class ProductService {
  static async get() {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("Examen6DB");
      const productsDB = database.collection("products");

      const products = await productsDB.find().toArray();

      return products;
    } finally {
      await client.close();
    }
  }

  static async getById(id) {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("Examen6DB");
      const productsDB = database.collection("products");

      const products = await productsDB.findOne({ _id: new ObjectId(id) });

      return products;
    } finally {
      await client.close();
    }
  }

  static async post(name, description, price) {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("Examen6DB");
      const productsDB = database.collection("products");

      const newProduct = new Product(name, description, price);

      const product = { name: name, description: description, price: price };

      const result = await productsDB.insertOne(newProduct);

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
      const database = client.db("Examen6DB");
      const productsDB = database.collection("products");

      const query = { _id: new ObjectId(id) };

      const result = await productsDB.deleteOne(query);

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
      const database = client.db("Examen6DB");
      const productsDB = database.collection("products");

      const filter = { _id: new ObjectId(id) };

      const updateProduct = {
        $set: {
          descripcion: descripcion,
        },
      };

      const result = await productsDB.updateOne(filter, updateProduct);

      return result;
    } finally {
      await client.close();
    }
  }
}

module.exports = ProductService;
