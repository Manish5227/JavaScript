const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const allHeros1 = [...marvel_heros, ...dc_heros]
// console.log(allHeros1);

// const other_arr = [1,2,3,4,[5,6],7,[8,9,[10,11]]]
// console.log(other_arr);
// const another_arr = other_arr.flat(Infinity)
// console.log(another_arr);

console.log(Array.isArray("Manish"));
console.log(Array.from("Manish"));
console.log(Array.from({name: "Manish"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));