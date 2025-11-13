"use strict";

import { Task } from "./models/task.js";
import { HISTORIC_KEY } from "../js/models/constants.js";

let arrayHistorico = [];

loadHistoric();

const buttonCrearTarea = document.getElementById("crearTarea");
const buttonFiltro = document.getElementById("botonFiltro");

buttonCrearTarea.addEventListener("click", (event) => {
  event.preventDefault;
  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;
  const prioridad = document.getElementById("prioridad").value;
  const tarea = crearTarea(titulo, descripcion, prioridad);
  addHistoricTarea(tarea);
});

buttonFiltro.addEventListener("click", (event) => {
  event.preventDefault;
  const prioridad = document.getElementById("filtroPrioridad").value;
  filtrarLista(prioridad);
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
  const botonModificar = document.createElement("button");
  const textoBotonModificar = document.createTextNode("Modificar");
  const nombreTarea = document.createElement("p");
  const textoNombreTarea = document.createTextNode(tarea.title);
  const descripcionTarea = document.createElement("p");
  const textoDescripcionTarea = document.createTextNode(tarea.description);
  const prioridadTarea = document.createElement("p");
  const textoPrioridadTarea = document.createTextNode(tarea.priority);
  const doneTarea = document.createElement("p");
  let textoDoneTarea = document.createTextNode(tarea.done);
  console.log(textoDoneTarea);

  botonBorrar.addEventListener("click", (event) => {
    borrarTarea(tarea.title);
  });

  botonModificar.addEventListener("click", (event) => {
    completarTarea(tarea.title);
  });

  nombreTarea.appendChild(textoNombreTarea);
  descripcionTarea.appendChild(textoDescripcionTarea);
  prioridadTarea.appendChild(textoPrioridadTarea);
  doneTarea.appendChild(textoDoneTarea);
  botonBorrar.appendChild(textoBotonBorrar);
  botonModificar.appendChild(textoBotonModificar);

  divListaTareas.appendChild(nombreTarea);
  divListaTareas.appendChild(descripcionTarea);
  divListaTareas.appendChild(prioridadTarea);
  divListaTareas.appendChild(doneTarea);
  divListaTareas.appendChild(botonBorrar);
  divListaTareas.appendChild(botonModificar);

  sectionListaTareas.appendChild(divListaTareas);
}

function borrarTarea(title) {
  const idx = arrayHistorico.findIndex((t) => t.title === title);
  if (idx === -1) return false;
  arrayHistorico.splice(idx, 1);
  guardarHistoricTarea(arrayHistorico);
  recargarDomListas();
}

function completarTarea(title) {
  const idx = arrayHistorico.findIndex((t) => t.title === title);
  const tarea = arrayHistorico.filter((t) => t.title === title);
  tarea.done = true;

  if (idx === -1) return false;

  arrayHistorico[idx] = { ...arrayHistorico[idx], ...tarea };
  guardarHistoricTarea(arrayHistorico);
  recargarDomListas();
}

function addHistoricTarea(objTarea) {
  arrayHistorico.push(objTarea);
  localStorage.setItem(HISTORIC_KEY, JSON.stringify(arrayHistorico));
}

function guardarHistoricTarea(arrayHistorico) {
  localStorage.setItem(HISTORIC_KEY, JSON.stringify(arrayHistorico));
}

function recargarDomListas() {
  const section = document.getElementById("listaTareas");
  section.innerHTML = "";
  loadHistoric();
}

function filtrarLista(prioridad) {
  const section = document.getElementById("listaFiltroTareas");
  section.innerHTML = "";
  const lista = arrayHistorico.filter((t) => t.priority === prioridad);
  const divListaTareas = document.createElement("div");

  lista.forEach((element) => {
    const nombreTarea = document.createElement("p");
    const textoNombreTarea = document.createTextNode(element.title);
    const descripcionTarea = document.createElement("p");
    const textoDescripcionTarea = document.createTextNode(element.description);
    const prioridadTarea = document.createElement("p");
    const textoPrioridadTarea = document.createTextNode(element.priority);

    nombreTarea.appendChild(textoNombreTarea);
    descripcionTarea.appendChild(textoDescripcionTarea);
    prioridadTarea.appendChild(textoPrioridadTarea);

    divListaTareas.appendChild(nombreTarea);
    divListaTareas.appendChild(descripcionTarea);
    divListaTareas.appendChild(prioridadTarea);
  });
  section.appendChild(divListaTareas);
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
        element.id,
        element.done
      );
    }
  }
}
