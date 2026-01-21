/*
El teorema de los cuatro cuadrados de Lagrange, también conocido
como conjetura de Bachet, afirma que todo número natural puede
representarse como la suma de cuatro cuadrados enteros.
Haz una función que devuelva un array con los cuatro números naturales
que cumplan el teorema dado un número natural pasado como argumento.
*/

function lagrange(num) {
  let nums = [];
  for (i = 1; i <= 4; i++) {
    num = parseInt(Math.sqrt(num));
    if (Number.isInteger(num)) nums.push(num);
  }
  return nums;
}

console.log(lagrange(41));
