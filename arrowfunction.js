// Basic arrow function

const greet = () => "Hello world!";
console.log(greet());

//Arrow function with parameters

const add = (a, b) => a + b;;
console.log(add(5, 3));

//Arrow function with Single parameter

const double = n => n * 2;
console.log(double(4));

//Arrow function returning an object

const createUser = (name, age) => ({ name, age });
console.log(createUser("Alice", 25));

//Arrow function in array methods

const numbers = [1, 2, 3, 4];
const squares = numbers.map(n => n * 2);
console.log(squares);

//Arrow function as a callback

setTimeout(() => {
    console.log("Hello Hello ");
}, 2000);


//Arrow function with array's "reduce" method

const sum = [1, 2, 3, 4].reduce((sum1, sum2) => sum1 + sum2, 0);
console.log(sum);


//Arrow function with defult parameters

const greetUser = (name = "Guest") => `Hello, ${name}`;
console.log(greetUser());
console.log(greetUser("Heer"));


// Arrow function with rest parameters

const sumAll = (...numbers) => numbers.reduce((num1, num2) => num1 + num2, 0);
console.log(sumAll(2, 2, 4, 1, 5));






