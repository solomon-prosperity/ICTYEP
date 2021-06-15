// Task1
let admin;
let newName;
newName= "John";
admin = newName
alert (admin);

// Task2
let height= 7;
let base = 3.5;
let area = height * base / 2;
alert (`The area of the triangle is = ${area}cm`);

// Task3
let balance = 100000
function withdraw (balance, amount) {
    if (amount > balance) {
        return "Insufficient Balance"
    } else {
        return "transaction Successful"
    }
}
let response = withdraw (balance, 60000);
alert (response)

// Task 4
let sum = 0
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 for ( let i= 0; i < num.length; i++ ) {
    sum = sum + num[i] 
}
alert (sum)