let pares = [];
    for (let i = 0; i <= 100; i++) {
      if (i % 2 === 0) pares.push(i);
    }

    document.getElementById("pares-num").innerHTML = pares.join(", ");