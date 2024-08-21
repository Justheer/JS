//LOOPS

//Exercise 01 Print Numbers from 1 to 10
//Write a for loop that print the numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  //Exercise 2: Sum of First 10 Natural Numbers
  // Write a loop that calculates the sum of the first 10 natural numbers (1 to 10) and prints the result.

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

  
  // Exercise 3: Print Even Numbers between 1 and 20

  // Write a loop that prints all the even numbers between 1 and 20.
  // Printing even numbers between 1 and 20 using a for loop
  
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
  }
  
  //Exercise 4: Reverse a String
  //write a loop that reverses a given string
  
  
  //Exercise 5: Multiplication Table
  //write a loop that prints multiplication table for the number 5
  
  for (let i = 5; i <= 5; i++) {
    //   console.log(`Outer loop value: ${i}`);
     for (let j = 1; j <= 10; j++) {
          console.log(i + '*' + j + ' = ' + i*j );  
          } 
      }
    
  //Exercise 6: Find the Factorial of a Number
  // Write a loop that calculates the factorial of a number, for example, 5! (5 factorial).
  
  function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}
console.log(factorial(5)); 
console.log(factorial(3)); 
console.log(factorial(0)); 

  
  
  
  