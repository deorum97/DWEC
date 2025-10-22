const numeroPrimo = 200;

function primo(n) {
  let d = 0;
  if (n === 1) {
    return false;
  }
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      d++;
    }
    if (d > 2) {
      return false;
    }
  }
  return d <= 2 ? true : false;
}

console.log(primo(4));
