// functions stored in a variable are called function expression
// functions declaration can be called before the function is defined
// function expression cannot be called before the function is defined, 
// it is only called after the function has been declared
// function declaration is the normal way of declaring functions

// let funExpression = function () {
//     alert ("Prosper")
// }
// funExpression();

// // Callback function
// function greeting  (myName) {
//     alert (`Hello ${myName}`);
// }

// function userInput (callback) {
//     let myName= "Prosper"
//     callback(myName)
// }
// userInput(greeting);

// // Arrow Functions
// // they are like function expression but here, you don't need
// // the function keyword, it is replaced with an arrow (=>)
// let sum = (a,b) => {
//     return a + b;
// };
// alert ( sum (45,2) );

// Array

// let fruits = ["Apple", "Avocado", "Pineapples"]
// for (let i = 0; i < fruits.length; i++) {
//     alert(fruits[i])
// }
// let fruits = ["Apple", "Avocado", "Pineapples"]
// for (let fruit of fruits) {
//     alert (fruit);
// }

// Methods
// An object can also contain a function, a function inside an object
// is known as a method

let users = {
    name: "Kyle" ,
    age: 26 ,
    sayHi: function() {
    alert (this.name)
    }
};
    


