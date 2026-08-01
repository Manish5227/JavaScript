// Primitive dataTypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non-Primitive)
// Array, Objects, Functions

// JavaScript (JS) is a dynamically typed language
// NO need to declare the data type of a variable

const heros = ["Shaktiman", "Doga", "Nagraj"];

let myObj = {
    name : "Manish",
    age : 21,
}

let myFunction = function() {
    console.log("Hello World")
}

// Non Primitive datatypes are object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) & Heap (Non-Primitive)

let myYtChannel = "manishyadavdotcom"
let anotherNamee = myYtChannel
myYtChannel = "chai aur code" 

console.log(myYtChannel);
console.log(anotherNamee);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl",
}

let userTwo = userOne;

userTwo.email = "manish@google.com"

console.log(userOne.email);
console.log(userTwo.email);