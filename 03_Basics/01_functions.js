function sayMyName() {
    console.log("M");
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
    
}

// sayMyName()

// function add(number1, number2) {
//     console.log(number1 + number2);
    
// }

function add(number1, number2) {
    // let result = number1 + number2
    // return result
    // console.log("Manish"); // Nothing print after return

    return number1 + number2
    
}


const result = add(8, 10)
//console.log("Result: ", result);

function user(userName = "Yadav") {
    if(!userName) {
        console.log("Please enter a username: ");
        return
    }
    return `${userName} just logged in`
} 

console.log(user("Manish"));

