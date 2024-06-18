let evenNumbers = [];
    for (let i = 0; i <= 100; i++) {
      if (i % 2 === 0) evenNumbers.push(i);
    }

    document.getElementById("even-numbers").innerHTML = evenNumbers.join(", ");