import { Task } from "../models/task.js";
import { HISTORIC_KEY } from "../models/constants.js";

class CommandTask {
  createTask(id, title, description, priority, done) {
    return new Task(id, title, description, priority, done);
  }

  borrarTarea(id, arrayTareas) {
    const idx = arrayTareas.findIndex((t) => t.id === id);
    if (idx === -1) return false;
    arrayTareas.splice(idx, 1);
    return arrayTareas;
  }

  completarTarea(id, arrayTareas) {
    const idx = arrayTareas.findIndex((t) => t.id === id);
    if (idx === -1) return false;

    arrayTareas[idx].done = !arrayTareas[idx].done;
    return arrayTareas;
  }
}

export { CommandTask };
