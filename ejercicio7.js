/*
    Escribe una función que tenga como parámetro un array de números
    enteros. Tu trabajo es tomar esa array y encontrar un índice N en el
    que la suma de los enteros a la izquierda de N sea igual a la suma de
    los enteros a la derecha de N. Si no hay ningún índice que haga que
    esto ocurra, devuelve -1. Si se le da un array con múltiples
    respuestas, devuelve el menor índice correcto.
    Digamos que te dan el array {1,2,3,4,3,2,1}:
    Tu función devolverá el índice 3, porque en la 3ª posición del array, la suma
    del lado izquierdo del índice ({1,2,3}) y la suma del lado derecho del índice
    ({3,2,1}) son ambas iguales a 6.
    Veamos otra.
    Te dan el array {1,100,50,-51,1,1}:
    Su función devolverá el índice 1, porque en la primera posición de la matriz,
    la suma del lado izquierdo del índice ({1}) y la suma del lado derecho del
    índice ({50,-51,1,1}) son ambas iguales a 1.
    La última:
    Se le da la matriz {20,10,-80,10,10,15,35}
    En el índice 0 el lado izquierdo es {}
    El lado derecho es {10,-80,10,10,15,35}
    Ambos son iguales a 0 cuando se suman. (Las matrices vacías son iguales a
    0 en este problema)
    El índice 0 es el lugar donde el lado izquierdo y el lado derecho son iguales.
    Entrada:
    Un array de enteros de longitud 0 < arr < 1000. Los números del array
    pueden ser cualquier entero positivo o negativo.
    Salida:
    El índice más bajo N en el que el lado a la izquierda de N es igual al lado a la
    derecha de N. Si no se encuentra un índice que se ajuste a estas reglas,
    entonces se devolverá -1.
*/

function buscarN(array) {
  let iz = 0;
  let de = 0;
  let salir = false;
  let contador = 0;
  do {
    iz = 0;
    de = 0;
    for (j = 0; j <= contador; j++) {
      iz = iz + array[j];
    }

    for (j = array.length - 1 - contador; j >= 0; j--) {
      de = de + array[j];
    }

    salir = iz === de ? true : false;
    contador++;
  } while (contador <= array.length - 1 && !salir);

  if (salir) {
    console.log(
      `El índice más bajo ${contador - 1} en el que el lado a la izquierda de ${
        contador - 1
      } es igual al lado a la derecha de ${contador - 1}`
    );
  } else {
    console.log(-1);
  }
}

buscarN([1, 2, 3, 4, 3, 2, 1]);
buscarN([20, 10, -80, 10, 10, 15, 35]);
