import { Task } from "../models/task.js";

//esta hecho pero no se usa, el comando para hacer las clases se hace en command
//lo dejo aqui para saber que se podria usar para crear las tareas
class taskFactory {
  createTask(id, title, description, priority, done) {
    return new Task({
      id: id,
      title,
      description,
      priority,
      done,
    });
  }
}
