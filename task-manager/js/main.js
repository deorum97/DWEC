"use strict";

import { DomFacade } from "./ui/domFacade.js";
import { TaskManager } from "./ui/taskListView.js";
import { TareaStrategy, FilterTaskPriority } from "./patterns/strategy.js";
import { CommandTask } from "./patterns/command.js";

let arrayHistorico = [];

const facade = new DomFacade();
const filterStrategy = new TareaStrategy();
const manager = new TaskManager();
const command = new CommandTask();

arrayHistorico = manager.cargarTareas();
facade.loadHistoric(arrayHistorico);

const buttonCrearTarea = document.getElementById("crearTarea");
const buttonFiltro = document.getElementById("botonFiltro");

//hecho
buttonCrearTarea.addEventListener("click", (event) => {
  event.preventDefault;
  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;
  const prioridad = document.getElementById("prioridad").value;
  const tarea = command.createTask(titulo, descripcion, prioridad);
  facade.renderTask(tarea);
  manager.guardarNuevaTarea(tarea);
});

//hecho
buttonFiltro.addEventListener("click", (event) => {
  event.preventDefault;
  const prioridad = document.getElementById("filtroPrioridad").value;
  filterStrategy.setStrategy(new FilterTaskPriority());
  const filterArray = filterStrategy.filter(arrayHistorico, prioridad);
  facade.mostarListaFiltrada(filterArray);
});
