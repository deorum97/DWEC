import { TaskManager } from "./taskListView.js";
import { CommandTask } from "../patterns/command.js";

class DomFacade {
  renderTask(tarea, arrayHistorico) {
    const commandTask = new CommandTask();
    const taskManager = new TaskManager();
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
    const textoDoneTarea = document.createTextNode(
      tarea.done ? "true" : "false"
    );

    botonBorrar.addEventListener("click", (event) => {
      const newArray = commandTask.borrarTarea(tarea.id, arrayHistorico);
      taskManager.guardarTareas(newArray);
      this.recargarDomListas(taskManager.cargarTareas());
    });

    botonModificar.addEventListener("click", (event) => {
      const newArray = commandTask.completarTarea(tarea.id, arrayHistorico);
      taskManager.guardarTareas(newArray);
      this.recargarDomListas(taskManager.cargarTareas());
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

  mostarListaFiltrada(lista) {
    const section = document.getElementById("listaFiltroTareas");
    section.innerHTML = "";
    const divListaTareas = document.createElement("div");

    lista.forEach((element) => {
      const nombreTarea = document.createElement("p");
      const textoNombreTarea = document.createTextNode(element.title);
      const descripcionTarea = document.createElement("p");
      const textoDescripcionTarea = document.createTextNode(
        element.description
      );
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

  recargarDomListas(arrayHistorico) {
    const section = document.getElementById("listaTareas");
    section.innerHTML = "";
    this.loadHistoric(arrayHistorico);
  }

  loadHistoric(arrayHistorico) {
    arrayHistorico.forEach((element) =>
      this.renderTask(element, arrayHistorico)
    );
  }
}

export { DomFacade };
