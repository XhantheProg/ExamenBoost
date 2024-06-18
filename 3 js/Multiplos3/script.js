let multiplesOf3 = [];
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) multiplesOf3.push(i);
}

document.getElementById("multiples-of-3").innerHTML = multiplesOf3.join(", ");