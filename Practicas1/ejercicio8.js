/* 
    Implementa una función de diferencia, que devuelva un array que
    tenga todos los valores de la lista pasada como primer parámetro
    que no están presentes en la lista b manteniendo su orden.
    arrayDiff([1,2],[1]) == [2]
    arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(arrayA, arrayB) {
  let res = [];
  arrayA.forEach((element) => {
    if (!arrayB.includes(element)) {
      if (!res.includes(element)) res.push(element);
    }
  });

  console.log(res);
}

arrayDiff([1, 2], [1]);
arrayDiff([1, 2, 2, 2, 3], [2]);
