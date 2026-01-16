"use strict";

class DomFacade {
  renderPokemon(pokemon) {
    // const commandTask = new CommandTask();
    // const taskManager = new TaskManager();
    const sectionListaPokemon = document.getElementById("sectionPokemon");

    const divListaPokemon = document.createElement("div");

    const nombrePokemon = document.createElement("p");
    const textoNombrePokemon = document.createTextNode(pokemon.nombre);
    const tipoPokemon = document.createElement("p");
    const textoTipoPokemon = document.createTextNode(pokemon.tipo);
    const nivelPokemon = document.createElement("p");
    const textoNivelPokemon = document.createTextNode(pokemon.nivel);
    const fechaCapturaPokemon = document.createElement("p");
    const fecha = new Date(pokemon.fechaCaptura);
    const textoFechaCapturaPokemon = document.createTextNode(
      `Capturado: ${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`
    );

    nombrePokemon.appendChild(textoNombrePokemon);
    tipoPokemon.appendChild(textoTipoPokemon);
    nivelPokemon.appendChild(textoNivelPokemon);
    fechaCapturaPokemon.appendChild(textoFechaCapturaPokemon);

    divListaPokemon.appendChild(nombrePokemon);
    divListaPokemon.appendChild(tipoPokemon);
    divListaPokemon.appendChild(nivelPokemon);
    divListaPokemon.appendChild(fechaCapturaPokemon);

    sectionListaPokemon.appendChild(divListaPokemon);
  }

  renderNull() {
    const sectionListaPokemon = document.getElementById("sectionPokemon");
    const nulo = document.createElement("p");
    const textoNnulo = document.createTextNode("No se han encontrado Pokemon");

    nombreNulo.appendChild(textoNnulo);
    sectionListaPokemon.appendChild(nulo);
  }

  renderEstadisticas(array) {
    const sectionListaEstadisticasPokemon = document.getElementById(
      "estadísticasPokemon"
    );
    array.forEach((element) => {
      const article = document.createElement("article");
      const estadistica = document.createElement("p");
      const textoEstadistica = document.createTextNode(Object.keys(element));
      const mediaEstadistica = document.createElement("p");
      const textoMediaEstadistica = document.createTextNode(
        Object.values(element)
      );

      estadistica.appendChild(textoEstadistica);
      mediaEstadistica.appendChild(textoMediaEstadistica);

      article.appendChild(estadistica);
      article.append(mediaEstadistica);
      sectionListaEstadisticasPokemon.appendChild(article);
    });
  }

  notify(arrayPokemon) {
    const section = document.getElementById("sectionPokemon");
    section.innerHTML = "";
    if (arrayPokemon.length === 0) {
    }
    arrayPokemon.forEach((element) => this.renderPokemon(element));
  }
}

export { DomFacade };
