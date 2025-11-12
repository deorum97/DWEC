"use strict";

import { Task } from "./js/models/task.js";
//import { HISTORIC_KEY } from "../js/models/constants.js";

const buttonCrearTarea = document.getElementById("crearTarea");

buttonCrearTarea.addEventListener("click", (event) => {
  event.preventDefault;
  const tarea = crearTarea();
  mostrarTarea(tarea);
});

function crearTarea() {
  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;
  const prioridad = document.getElementById("prioridad").value;
  const tarea = new Task(titulo, descripcion, prioridad);
  return tarea;
}

function mostrarTarea(tarea) {
  const sectionListaTareas = document.getElementById("listaTareas");
  const listaTarea = document.createElement("p");
  const textoTarea = document.createTextNode(tarea);
  listaTarea.appendChild(textoTarea);
  sectionListaTareas.appendChild(listaTarea);
}
