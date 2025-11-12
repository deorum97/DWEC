import { Task } from "../models/task.js";

class taskFActory {
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
