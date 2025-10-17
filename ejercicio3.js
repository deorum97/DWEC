/*
  Haz una función que como parámetro reciba un array de números y
  obtenga el número que menos repeticiones haya tenido. En caso de
  empate devuelve el número más pequeño.

*/
function arraymin(array) {
  //reduce recorre el array para saber cuantos numeros hay
  const conteo = array.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {}); //empieza con un objeto vacio por eso los {} vacios

  //entries convierte el objeto en un array bidimensional
  const arrayO = Object.entries(conteo);
  //Infinity para que sea el numero mas grande posible y asi el primero que lea sea el mas pequeño
  let min = Infinity;
  let res = null;

  //recorre ahora el array mas pequeño y con cada numero contado
  arrayO.forEach((element) => {
    if (
      element[1] < min ||
      (element[1] === min && Number(element[0]) < Number(res[0]))
    ) {
      min = element[1];
      res = element;
    }
  });
  console.log(res);
}

arraymin([
  3, 9, 1, 5, 10, 2, 8, 7, 1, 4, 9, 6, 3, 3, 3, 2, 10, 5, 1, 2, 7, 6, 8, 4,
]);
