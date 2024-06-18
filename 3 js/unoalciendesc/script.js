let descendingNumbers = [];
for (let i = 100; i >= 0; i--) {
  descendingNumbers.push(i);
}

document.getElementById("num-desc").innerHTML = descendingNumbers.join(", ");