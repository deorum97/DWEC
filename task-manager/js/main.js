"use strict";

import { Task } from "./models/task.js";
import { HISTORIC_KEY } from "../js/models/constants.js";

const buttonCrearTarea = document.getElementById("crearTarea");
let arrayHistorico = [];

loadHistoric();

buttonCrearTarea.addEventListener("click", (event) => {
  event.preventDefault;
  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;
  const prioridad = document.getElementById("prioridad").value;
  const tarea = crearTarea(titulo, descripcion, prioridad);
  addHistoricTarea(tarea);
});

function crearTarea(titulo, descripcion, prioridad, createAt) {
  const tarea = new Task(titulo, descripcion, prioridad, createAt);
  mostrarTarea(tarea);
  return tarea;
}

function mostrarTarea(tarea) {
  const sectionListaTareas = document.getElementById("listaTareas");

  const divListaTareas = document.createElement("div");

  const botonBorrar = document.createElement("button");
  const textoBotonBorrar = document.createTextNode("Borrar");
  const nombreTarea = document.createElement("p");
  const textoNombreTarea = document.createTextNode(tarea.title);
  const descripcionTarea = document.createElement("p");
  const textoDescripcionTarea = document.createTextNode(tarea.description);
  const prioridadTarea = document.createElement("p");
  const textoPrioridadTarea = document.createTextNode(tarea.priority);

  botonBorrar.addEventListener("click", (event) => {
    borrarTarea(tarea.id);
  });

  nombreTarea.appendChild(textoNombreTarea);
  descripcionTarea.appendChild(textoDescripcionTarea);
  prioridadTarea.appendChild(textoPrioridadTarea);
  botonBorrar.appendChild(textoBotonBorrar);

  divListaTareas.appendChild(nombreTarea);
  divListaTareas.appendChild(descripcionTarea);
  divListaTareas.appendChild(prioridadTarea);
  divListaTareas.appendChild(botonBorrar);

  sectionListaTareas.appendChild(divListaTareas);
}

function borrarTarea(id) {
  const resul = arrayHistorico.filter((tarea) => tarea.id == id);
  return resul;
}
function addHistoricTarea(objTren) {
  arrayHistorico.push(objTren);
  localStorage.setItem(HISTORIC_KEY, JSON.stringify(arrayHistorico));
}

function guardarHistoricTarea(arrayHistorico) {
  localStorage.setItem(HISTORIC_KEY, JSON.stringify(arrayHistorico));
}

function loadHistoric() {
  let stringHistoric = localStorage.getItem(HISTORIC_KEY);
  if (stringHistoric !== null) {
    arrayHistorico = JSON.parse(stringHistoric);
    for (let index = 0; index < arrayHistorico.length; index++) {
      const element = arrayHistorico[index];
      crearTarea(
        element.title,
        element.description,
        element.priority,
        element.createAt,
        element.id
      );
    }
  }
}
