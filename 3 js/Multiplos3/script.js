let multiplesDe3 = [];
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) multiplesDe3.push(i);
}

document.getElementById("multiples-de-3").innerHTML = multiplesDe3.join(", ");