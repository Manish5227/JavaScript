let name = "Manish"
const repoCount = 11

console.log(name + repoCount + " Value");

console.log(`My name is ${name} and my repo count is ${repoCount}.`);

let gameName = new String("ManishY-kr-ydv");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));

let newString = gameName.substring(0, 4)
console.log(newString);

let otherString = gameName.slice(-5, 4)
console.log(otherString);

const anotherString = "       Manish         "
console.log(anotherString);
console.log(anotherString.trim());
console.log(anotherString.trimStart());

const url = "https://manish.com/manish20%yadav"

console.log(url.replace('20%' , '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));