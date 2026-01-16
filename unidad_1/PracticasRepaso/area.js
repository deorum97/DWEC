/*
Descripción:
Se te da un arreglo de enteros no negativos donde cada valor representa la
altura de una línea vertical sobre el eje X. El objetivo es encontrar dos líneas
que, junto con el eje X, formen un contenedor que pueda contener la mayor
cantidad posible de agua.
Objetivo:
Maximizar el área formada por dos líneas y el eje X.
*/

function area(nums) {
  let max = [];
  let maxarea = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      let base = j - i;
      let alto = Math.min(nums[i], nums[j]);
      if (base * alto > maxarea) {
        maxarea = base * alto;
        max = [nums[i], nums[j]];
      }
    }
  }
  return max;
}

const numeros = [8, 10, 9, 3, 4, 11];
console.log(area(numeros));
