const score = 500
console.log(score);

const balance = new Number(101)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num = 123.8976
console.log(num.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));


// ************** Math **************

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(5.7));
console.log(Math.ceil(2.2));
console.log(Math.floor(7.7));
console.log(Math.min(7, 8, 4, 1));
console.log(Math.max(7, 8, 4, 1));

console.log(Math.random());
console.log((Math.random()* 10) + 1);
console.log(Math.floor(Math.random()* 10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min)) + min);