import { cambioDivisa } from "./cambioDivisa.js";
import { HISTORIC_KEY } from "./constant.js";
import { Historico } from "./Model/historicModel.js";

let arrayHistorico = [];
cargarHistorico();

const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", function onClcik(e) {
  e.preventDefault();
  const element = document.getElementsByTagName(`input`)[0];
  let valorNumerico = parseInt(element.value);
  const divisaFrom = document.getElementById("divisasFrom");
  const divisaTo = document.getElementById("divisasTo");

  const divisaValueFrom = divisaFrom[divisaFrom.selectedIndex].value;
  const divisaValueTo = divisaTo[divisaTo.selectedIndex].value;
  const fechaActual = new Date(Date.now());
  let cambio = cambioDivisa(divisaValueFrom, divisaValueTo, valorNumerico);
  addHistoricExchange(
    valorNumerico,
    cambio,
    divisaValueFrom,
    divisaValueTo,
    fechaActual
  );
  addLineHistoricToLocalStorage(
    new Historico(
      valorNumerico,
      cambio,
      divisaValueFrom,
      divisaValueTo,
      fechaActual
    )
  );
});

function addLineHistoricToLocalStorage(objHistorico) {
  arrayHistorico.push(objHistorico);
  localStorage.setItem(HISTORIC_KEY, JSON.stringify(arrayHistorico));
}

function cargarHistorico() {
  let stringHistoric = localStorage.getItem(HISTORIC_KEY);
  if (stringHistoric !== null) {
    arrayHistorico = JSON.parse(stringHistoric);
    for (let index = 0; index < arrayHistorico.length; index++) {
      const element = arrayHistorico[index];
      addHistoricExchange(
        element.valueOrigin,
        element.valueExchanged,
        element.divisaFrom,
        element.divisaTo,
        new Date(Date.parse(element.fechaActual))
      );
    }
  }
}

function addHistoricExchange(
  valueOrigin,
  valueExchanged,
  divisaFrom,
  divisaTo,
  fechaActual
) {
  const historicSection = document.getElementById("sectionHistorico");
  const para = document.createElement("p");
  const valorNumericoExchanged = Number.parseFloat(valueExchanged).toFixed(2);
  const textHistoricSection = document.createTextNode(
    `${fechaActual.getDate()}/${fechaActual.getMonth()}/${fechaActual.getFullYear()}
     ${fechaActual.getHours()}:${fechaActual.getMinutes()}
     Importe ${valueOrigin} ${divisaFrom} - ${valorNumericoExchanged} ${divisaTo}`
  );
  para.appendChild(textHistoricSection);
  historicSection.appendChild(para);
}

document.getElementById("imagen").addEventListener("click", (event) => {
  const divisaFrom = document.getElementById("divisasFrom");
  const divisaTo = document.getElementById("divisasTo");
  const auxiliarDivisa = divisaTo.selectedIndex;
  divisaTo.selectedIndex = divisaFrom.selectedIndex;
  divisaFrom.selectedIndex = auxiliarDivisa;
});
