//Primitive

// 7 Types : String, Number, Boolean, null, undefined, BigInt, symbol.


const score = 100   //Number
const scoreValue = 100.3

const isLoggedIn = false   //Boolean
const outsideTemp = null
let userEmail;

const id = Symbol('123')   //symbol
const anotherId = Symbol('123')

console.log(id === anotherId)

//const bigNumber =  25136521546329897484n   //BigInt


//Non Primitive

//Array, Objects, Functions


// Object is a {}.
const heros = ["A", "B", "C" ];
let myObj = {
    name: "heer",
    age : 23,
}

// function
// defination of function is " function(){}"

const myFunction = function(){
    console.log("Hello world!");
    
}

//How to know the datatype of any value?
// Use Typeof before the variable

console.log(typeof heros)

//return typeof

//primitive

//undefined => undefined
//null => object
//boolean => boolean
//Number => number
//String => string
//BigInt => bigInt
//symbol => symbol


//non-primitive

//object => object
//array => array
//function => function 

