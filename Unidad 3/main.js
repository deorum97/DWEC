import { cambioDivisa } from "./cambioDivisa.js";
const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", function onClcik(e) {
  e.preventDefault();
  const element = document.getElementsByTagName(`input`)[0];
  let valorNumerico = parseInt(element.value);
  const divisaFrom = document.getElementById("divisasFrom");
  const divisaTo = document.getElementById("divisasTo");

  const divisaValueFrom = divisaFrom[divisaFrom.selectedIndex].value;
  const divisaValueTo = divisaTo[divisaTo.selectedIndex].value;
  let cambio = cambioDivisa(divisaValueFrom, divisaValueTo, valorNumerico);
  addHistoricExchange(valorNumerico, cambio, divisaValueFrom, divisaValueTo);
});

function addHistoricExchange(
  valueOrigin,
  valueExchanged,
  divisaFrom,
  divisaTo
) {
  const historicSection = document.getElementById("sectionHistorico");
  const para = document.createElement("p");
  const fechaActual = new Date(Date.now());
  const valorNumericoExchanged = valueExchanged.toString().slice(0, 5);
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
