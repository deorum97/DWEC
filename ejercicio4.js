/*
  Dada un array de enteros, encuentra todo los números que aparecen
  un número impar de veces.
*/
function arrayImpar(array) {
  const conteo = array.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const arrayO = Object.entries(conteo);

  let res = [];

  arrayO.forEach((element) => {
    if (element[1] % 2 != 0) {
      console.log(element);
    }
  });
}

arrayImpar([
  3, 9, 1, 5, 10, 2, 8, 7, 1, 4, 9, 6, 3, 3, 3, 2, 10, 5, 1, 7, 6, 8, 4, 2, 2,
  2,
]);
