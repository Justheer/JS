//Exercise : 1 Grading system

// Create a program that takes a student's score (0-100) as input and outputs their grade based on the following criteria:
// 90-100: Grade A
// 80-89: Grade B
// 70-79: Grade C
// 60-69: Grade D
// Below 60: Grade F
// Use if, else if, and else to achieve this.


let grade;

function studentGrade(score) {

    if (score >= 90 && score <= 100) {
        console.log("Grade A");
    } else if (score >= 80 && score <= 90) {
        console.log("Grade B");
    } else if (score >= 70 && score <= 80) {
        console.log("Grade C");
    } else if (score >= 60 && score <= 70) {
        console.log("Grade D");
    } else if (score < 60 && score >= 0) {
        console.log("Grade E");
    } else {
        grade = 'Invalid score'
    }
    console.log(grade);
    
}



//Exercise 2: Even or Odd Number
//Write a JavaScript program that checks if a number is even or odd.

function evenOdd(number) {
    if (number % 2 === 0) {
        console.log(number);
    } else {
        console.log(number);
    }
}  
evenOdd(2);

//Exercise 3: Age Group Classification
//Create a program that takes a person's age and classifies them into one of the following categories:
// 0-12: Child
// 13-19: Teenager
// 20-64: Adult
// 65 and above: Senior
// Use if, else if, and else.

let age = 100;

function personAge(age) {
   if (age >= 0 && age <= 12)  {
      console.log("child");
   } else if (age >= 13 && age <= 19 ) {
     console.log("Teenager");
   } else if (age >= 20 && age <= 64) {
       console.log("Adult");
   } else if (age >= 65 && age <= 100) {
       console.log("Senior");
   } else {
      console.log("Enter valid age.");
   }
}

// Exercise 4: Days of the Week
//Write a program that takes a number (1-7) as input and outputs the corresponding day of the week using a switch statement. For example:
// 1: Monday
// 2: Tuesday
// 3: Wednesday
// 4: Thursday
// 5: Friday
// 6: Saturday
// 7: Sunday

let day;
switch (new Date().getDay()) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log(1);
        break;
}
console.log(`Today is ${day}`);



//Exercise 5: Simple Calculator
// Create a program that simulates a simple calculator using a switch statement. The program should take two numbers and an operator (+, -, *, /) as input and output the result of the operation.

function calculator(num1, num2, operator) {
    let result;
  
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 != 0) {
          result = num1 / num2;
  
        } else {
          console.log("divide by zero");
        }
        break;
      default:
        console.log("Invalid");
        break;
    }
    return result;
  }
  
  console.log(calculator(2, 5, '+'));
  console.log(calculator(10, 5, '-'));
  console.log(calculator(8, 5, '*'));
  console.log(calculator(8, 2, '/'));
