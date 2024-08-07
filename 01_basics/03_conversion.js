let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


//When we convert the number, it will easily convert in number Ex. "33" => 33
//When we convert the number with word, it will give the value => NaN
//When we convert the boolean (true), it will convert into the 1 and (false) convert into the 0 Ex. true => 1, false => 0

let isLoggedIn = "heer"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


//1 => true
//0 => false
//"heer" => true
//"" => false

let someNumber = 33

let stringNumber = String (someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//***************************** Operations ****************************** */

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " heer"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


//console.log(3 + 4 * 5 % 3); (This is not a good way to write the code.)

console.log(+true);
console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

console.log(num1,num2,num3);

let gameCounter = 100
++gameCounter;
console.log(gameCounter);






















