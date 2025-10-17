/*
Escriba una función que tome un número decimal como entrada, y
devuelva el número de bits que son iguales a uno en la
representación binaria de ese número. Comprueba que la entrada no
sea negativa.
*/

function decimal(num) {
  if (num >= 0) {
    console.log(num.toString(2).split("1").length - 1);
  } else {
    console.log("Pon un número negativo");
  }
}
decimal(215);
decimal(-3);
