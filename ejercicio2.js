/*
  Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los
  códigos PIN no pueden contener más que exactamente 4 dígitos o
  exactamente 6 dígitos. Si a la función se le pasa una cadena de PIN
  válida, devuelve true, de lo contrario devuelve false.
*/
function comprobarPin(pin) {
  //con .toString se pasa a texto y con el lenght se mira el largo
  return pin.toString().length > 4 && pin.toString().length < 6 ? true : false;
}

console.log(ComprobarPin(125));
console.log(ComprobarPin(12545));
console.log(ComprobarPin(12545465464));
