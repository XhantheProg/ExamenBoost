function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  let primeNumbers = [];
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) primeNumbers.push(i);
  }
  
  document.getElementById("prime-numbers").innerHTML = primeNumbers.join(", ");