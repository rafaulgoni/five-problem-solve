const str = "hEllo world";

let count = 0;
for (let a = 0; a < str.length; a++) {
    let char = str[a].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') count++;
}

console.log(count);