/*
Descripción: 
Se te da un arreglo de enteros nums y un entero target. Debes encontrar 
dos números distintos en nums cuya suma sea igual a target. Devuelve sus 
índices como un arreglo [i, j]. Se asume que existe exactamente una 
solución. 
Objetivo: 
Encontrar los índices i y j donde nums[i] + nums[j] === target. 
*/

function TwoSum(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        if (nums[i] + nums[j] === target) {
          console.log(nums[i] + " " + nums[j] + " " + target);
        }
      }
    }
  }
}

TwoSum([1, 2, 3, 4, 5, 6], 6);
