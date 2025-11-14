import { HISTORIC_KEY } from "../models/constants.js";

class TaskManager {
  constructor() {
    if (!TaskManager.instance) {
      TaskManager.instance = this;
      this.array = this.cargarTareas();
    }
    return TaskManager.instance;
  }

  cargarTareas() {
    const stringTareas = localStorage.getItem(HISTORIC_KEY);
    return stringTareas ? JSON.parse(stringTareas) : [];
  }

  guardarTareas(tareas) {
    localStorage.setItem(HISTORIC_KEY, JSON.stringify(tareas));
  }

  guardarNuevaTarea(objTarea) {
    this.array.push(objTarea);
    this.guardarTareas(this.array);
  }
}

export { TaskManager };
