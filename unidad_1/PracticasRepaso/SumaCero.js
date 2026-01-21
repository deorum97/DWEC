/*
Descripción:
Dado un arreglo de enteros nums, devuelve todos los tríos únicos [a, b,
c] tales que a + b + c == 0.
Objetivo:
Encontrar todos los conjuntos únicos de tres números cuya suma sea cero
*/

function suma(nums) {
  //se usa el sort para ordenar los numeros y que sea mas dificil que hayan repetidos, lo de dentro de sort es para ordenaro los numeros negativos correctamente
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    //con el continue si no se cumple la condicion de dentro del if se pasa a la siguiente interaccion del for
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        //comprobaciones para evitar repetidos
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}

function SumaCero(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let x = 0; x < nums.length; x++) {
        if (nums[i] !== nums[j] && nums[i] !== nums[x] && nums[j] !== nums[x]) {
          if (nums[i] + nums[j] + nums[x] === 0) {
            if (!res.includes([nums[i], nums[j], nums[x]]))
              res.push([nums[i], nums[j], nums[x]]);
          }
        }
      }
    }
  }
  return res;
}

console.log(suma([-4, -1, -1, 0, 1, 2, 3]));
