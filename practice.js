//Exercise 1: let const var

//Declare a variable `name` using `let` and assign it your name.

let myName = "heer"
console.log(myName);


//Declare a constant `pi` using `const` and assign it the value of `3.14`.

const pi = 3.14
console.log(pi);


//Declare a variable `age` using `var` and assign it your age.

var age = 23
console.log(age);

//Exercise 2: Reassignment and scope

//Declare a variable `city` using `let` and assign it the name of your city.
//Change the value of `city` to another city name.

let myCity = "Adipur"
    myCity = "Jamnagar"

    console.log(myCity);


//Declare a variable `language` using `var` and assign it a programming language.
//Change the value of `language` to another language.

var myLanguage = "css"
var myLanguage = "JavaScript"
    console.log(myLanguage);
    


//Declare a constant `birthYear` using `const` and assign it your birth year.
//Try to change the value of `birthYear` and observe the result.

const birthYear = 2000
     console.log(birthYear);

//we know that we cannot reassign the value in const but if want to reassign then use object like below.

const myNumber = {value: 10};
myNumber.value = 11;

console.log(myNumber);

//array method
const myArray = ['kakan', 'manan', 'gagan'];
myArray[4] = 'tanan';
console.log(myArray);

//we know that we cannot redeclare the const variable, but if want to redeclare then use if statement or function.

const myVillage = {value: 'dhroll'}
myVillage.value = 'patan'

if (true) {
    const value = 'khambhalia'
    console.log(value);
}

console.log(myVillage);






     