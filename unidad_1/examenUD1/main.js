"use strict";

const boton = document.getElementById("boton");

//incio de la funcionalidad al iniciar darle al boton
boton.addEventListener("click", (e) => {
  //coge los valores del input y los divide
  const inputNumeros = document.getElementById("inputNumeros").value;
  const arrayInput = inputNumeros.split(",");

  //hace el array de los numeros para usarlos luego
  let arrayNumeros = [];

  for (let index = 0; index < arrayInput.length; index++) {
    const element = arrayInput[index];
    const elementNum = parseInt(element);
    //si encuentra algo que no es un número sale de la funcion y va a la funcion de error
    //si encuentra un número lo añade al array
    if (!Number.isInteger(elementNum)) {
      mostrarMensajeError(element);
      return;
    } else {
      arrayNumeros.push(elementNum);
    }
  }

  mostrarMensaje(arrayNumeros);
});

//funcion para mostrar los mensajes
function mostrarMensaje(arrayNumeros) {
  //se coge la seccion dande van a estar los elementos
  const sectionMain = document.getElementById("sectionMain");

  //se crean todos los elementos en orden (porque me parece mas ordenado hacerlo asi)
  const listaOriginal = document.createElement("p");
  const listaPares = document.createElement("p");
  const listaImpares = document.createElement("p");
  const listaUnica = document.createElement("p");
  const listaInvertida = document.createElement("p");
  const sumaNumeros = document.createElement("p");

  //se hacen los array de los numeros pares e impares y se hace un array para comprobar que son cada uno
  //depende de lo que sean se meten en un array u en otro
  const arrayListaPares = [];
  const arrayListaImpares = [];
  for (let index = 0; index < arrayNumeros.length; index++) {
    const element = arrayNumeros[index];
    if (element % 2 === 0) {
      arrayListaPares.push(element);
    } else {
      arrayListaImpares.push(element);
    }
  }

  //se hace el array para los números únicos y solo se van añadiendo a este array si no han salido antes
  //es decir si ya esta en el array no se mete
  const arrayUnicos = [];

  for (let index = 0; index < arrayNumeros.length; index++) {
    const element = arrayNumeros[index];
    if (!arrayUnicos.includes(element)) {
      arrayUnicos.push(element);
    }
  }

  //se suman todos los numeros, e usado la funcion reduce que recorre el array y lo hace mas limpio que un for
  //al menos para esto me gusta
  const suma = arrayNumeros.reduce((acc, num) => acc + num, 0);

  //se hacen todos los textos que van a estar en los elementos
  const textoListaOriginal = document.createTextNode(
    "Lista original: [" + arrayNumeros + "]"
  );
  const textoListaPares = document.createTextNode(
    "Lista pares: [" + arrayListaPares + "]"
  );
  const textoListaImpares = document.createTextNode(
    "Lista impares: [" + arrayListaImpares + "]"
  );
  const textoListaUnica = document.createTextNode(
    "Lista Unica: [" + arrayUnicos + "]"
  );

  //aqui hago la lista invertida porque si la hago antes me la desordena con el resto de arrays
  const arrayinvertido = arrayNumeros.sort((a, b) => b - a);

  const textoListaInvertida = document.createTextNode(
    "Lista ordenada (desc): [" + arrayinvertido + "]"
  );
  const textoSumaNumeros = document.createTextNode("Suma total: " + suma);

  //añado todos los textos a sus elementos correspondientes
  listaOriginal.appendChild(textoListaOriginal);
  listaPares.appendChild(textoListaPares);
  listaImpares.appendChild(textoListaImpares);
  listaUnica.appendChild(textoListaUnica);
  listaInvertida.appendChild(textoListaInvertida);
  sumaNumeros.appendChild(textoSumaNumeros);

  //Añado todos los elementos al section en orden para que salgan como quiero
  sectionMain.appendChild(listaOriginal);
  sectionMain.appendChild(listaPares);
  sectionMain.appendChild(listaImpares);
  sectionMain.appendChild(listaUnica);
  sectionMain.appendChild(listaInvertida);
  sectionMain.appendChild(sumaNumeros);
}

//funcion para el mensaje de error solo se entra aquí si hay algo que no sea un número
function mostrarMensajeError(element) {
  //coge el section y le mete el elemento con el mensaje de error
  const sectionMain = document.getElementById("sectionMain");
  const parrafoAEscribir = document.createElement("p");
  const textoParrafoAEscribir = document.createTextNode(
    `Entrada invalida: '${element}' no es un número.`
  );

  parrafoAEscribir.appendChild(textoParrafoAEscribir);
  sectionMain.appendChild(parrafoAEscribir);
}
