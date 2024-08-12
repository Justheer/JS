//Q.1 List all primitive data types in JavaScript.
// Ans. String, Number, Boolean, Null, Undefined, BigInt, Symbol.


//Q.2 List all reference data types in JavaScript.
// Ans. Object, Array, Function.


//Q.3 Describe the difference between null and undefined.
// Ans. Undefined : When variable print  without a value,then output will be undefined.
// Ans. Null : When Variable print with zero value then output will be Null.
//1
let c = null;
console.log(typeof c);

//2
let d = 1;
console.log(typeof d);

//3
let e = null;
console.log(e);



//Q.4 Show examples of immutable primitive data types.
// Ans.
let text = "Heer";
let age = 18 ; // Number
let isLoggedIn = false; //Boolean
let rent = [0]; //Null
let mark; // undefined


//Q.5 Demonstrate how to check the type of a variable using typeof.
// Ans.
console.log(typeof text);


//Q.6 Explain how JavaScript handles type coercion.
//Ans. with string and number for ex.
let y = "5"+5+5;
console.log(y);



//Q.7 Give an example of NaN and explain its use.
// Ans. 
//let score = 0/0
//console.log(score);



//Q.8 Compare == and === with examples.
// Ans.
//1
let x = 2;
let z = "2";
console.log(x == z);
console.log(x === z);

//2
let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2 is", comp1 == comp2);
console.log("comp1 === comp2 is", comp1 === comp2);

//3
let mark1 = "100";
let mark2 = 100;
console.log(mark1 == mark2 );
console.log(mark1 === mark2);

//4
let score1 = "abc";
let score2 = 123;
console.log(score1 == score2);
console.log(score1 === score2);

//5
let rank1 = 54;
let rank2 = "54";
console.log(54 == "54");
console.log(54 === "54");



//Q.9 Practice using the typeof operator with different data types.
// Ans.
console.log(typeof text);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof rent);
console.log(typeof mark);
// let a = 100n
// console.log(typeof a);



//Q.10 Convert data types using JavaScript functions.


// BigInt

let f = 4562125356563413656956n;
console.log(typeof f);


let g = BigInt(6654354168687465464564);
console.log(g);



console.log(10n + 20n);
console.log(40n - 20n);
console.log(40n * 20n);

console.log(20n > 10);
console.log(20n === 20);
console.log(20n < "20");  // if i'm compare to lessthan and graterthan, so output will be false inthe both value. Why???
console.log(20n + "20");

console.log(8n / 4n);
console.log(8 / 4);










