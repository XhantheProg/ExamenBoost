function Esprimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  let primonum = [];
  for (let i = 2; i <= 100; i++) {
    if (Esprimo(i)) primonum.push(i);
  }
  
  document.getElementById("primos-num").innerHTML = primonum.join(", ");