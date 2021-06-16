// // Array Method
// let animal = "lion";
// let animals = ["sheep", "goat", "Dog", "cat"];

// animals.push(animal);

// alert (animals.pop());

// alert (animals.unshift(animal));

// let arr1 = ["I" , "Study" , "Jvascript"];
// arr.splice(1,1);
// alert (arr);

// let arr1 = ["t" , "e" , "s" , "t" ];
// arr1.slice(1,3);
// arr1.slice(-2) //removes the last two values (s,t)
// alert(arr1);

// let arr2= [1,2];
// arr2.concat([3,4])
// alert(arr2);

//ForEach

// let anima = ["dog" , "ant" , "cow"];
// anima.forEach(function (i) {
//     alert(`${i} can also speak?`);
// });

// let anima = ["dog" , "ant" , "cow"];
// anima.forEach(i => {alert(`${i} can also speak?`);});


// let users = [
//     {id: 1, name: "JOHN"} ,
//     {id: 2, name: "Pete"} ,
//     {id: 3, name: "Mary"}
// ];

// let user = users.find( item => item.id == 2);
// alert (user.name); 

// let users = [
//     {id: 1, name: "JOHN" , age : 18} ,
//     {id: 2, name: "Pete" , age : 44} ,
//     {id: 3, name: "Mary" , age : 78} ,
// ];

// let underAge = users.filter( (item) => item.id < 3 ); 
// alert (underAge [0].name);

//Maps

// let arr4 = ["jekins" , "baggins" , "tyrone"];
// let lengths = arr4.map(item => item.length);
// alert (lengths);

// let arr5 = [4, 20, 50];
// let newScore = arr5.map(item => item + 5);
// alert (newScore);

// //Reverse: reverses the other of elements in an array
// let arr6 = [1,2,3,4,5,6];
// let disp= arr6.reverse();
// alert (disp);

//Split and join : splits converts a string to an array, join converts
// an array to a string 

// let myNames = "Bilbo: Gandalf: Nazgul" ;
// let arr= myNames.split(":");
// arr.forEach(name => {
//     alert (`A message to ${name}`);
// });

// let myNames = ["Bilbo", "Gandalf", "Nazgul" ];
// let str = myNames.join(",");

// let combine = myNames.join (" - ")

// console.log(str);
// console.log(combine);

class Users {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }
}

const prosper = new Users ("Prosper" , "prosperoera@gmail.com");
console.log (prosper.email)