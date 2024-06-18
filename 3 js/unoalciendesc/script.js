let numdesc = [];
for (let i = 100; i >= 0; i--) {
    numdesc.push(i);
}

document.getElementById("num-desc").innerHTML = numdesc.join(", ");