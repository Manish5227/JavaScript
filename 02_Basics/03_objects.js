// Singleton
// Object.create

// Object literals

const mySymb = Symbol("key1")

const JsUser = {

    name: "Manish",
    "full name": "Manish Yadav",
    [mySymb]: "key1",
    age: 21,
    location: "Ghaziabad",
    email: "manish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySymb]);

JsUser.email = "manish@chatGPT.com"
Object.freeze(JsUser)
JsUser.email = "manish@microsoft.com"
console.log(JsUser);


// JsUser.greeting = function () {
//     console.log(`Hello JS User, ${this.name}`);
    
// }


// console.log(JsUser.greeting());