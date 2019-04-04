
const idTest = '<a href="/boardgame/28143/race-galaxy"><img src="https://cf.geekdo-images.com/micro/img/gON7K0M9EpzwQTh0yRohSMadL9o=/fit-in/64x64/pic236327.jpg"></a>'

const idRegex = /\d+/

const newId = idTest.match(/\d+/)
console.log(newId[0])

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 

console.log(result);