const Task = require("../model/task");
const { MongoClient, ObjectId } = require("mongodb");

class TaskService {
  static async get() {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("TaskDB");
      const tasksDB = database.collection("tasks");

      const tasks = await tasksDB.find().toArray();

      return tasks;
    } finally {
      await client.close();
    }
  }

  static async getById(id) {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("TaskDB");
      const tasksDB = database.collection("tasks");

      const tasks = await tasksDB.findOne({ _id: new ObjectId(id) });

      return tasks;
    } finally {
      await client.close();
    }
  }

  static async post(nombre, fecha, descripcion) {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("TaskDB");
      const tasksDB = database.collection("tasks");

      const newTask = new Task(nombre, fecha, descripcion);

      const result = await tasksDB.insertOne(newTask);

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
      const database = client.db("TaskDB");
      const tasksDB = database.collection("tasks");

      const query = { _id: new ObjectId(id) };

      const result = await tasksDB.deleteOne(query);

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
      const database = client.db("TaskDB");
      const tasksDB = database.collection("tasks");

      const filter = { _id: new ObjectId(id) };

      const updateTask = {
        $set: {
          descripcion: descripcion,
        },
      };

      const result = await tasksDB.updateOne(filter, updateTask);

      return result;
    } finally {
      await client.close();
    }
  }
}

module.exports = TaskService;
