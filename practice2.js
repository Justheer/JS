//Non-primitve data types


//Exercise 1: Arrays

//*******1. Create an array: Create an array called fruits that contains the names of 5 different fruits.

// const fruits = ["apple", "banana", "kiwi", "grapes", "watermelon"]

//*******2. Accessing elements: Access the second and fourth elements of the fruits array and log them to the console.

// console.log(fruits [3]);

//*******3. Array methods:

// Add a fruit to the end of the fruits array.

// console.log(fruits.push("mango"));
// console.log(fruits);

// Remove the first fruit from the array.

// console.log(fruits.shift());
// console.log(fruits);

// Sort the array alphabetically.

// console.log(fruits.sort());
// console.log(fruits);

// Find the length of the array.

// let size = fruits.length
// console.log(size);


//*******4. Loop through the array: Use a for loop or forEach to loop through the fruits array and log each fruit to the console.
//-----------



//Exercise 2: Objects

//*******1. Create an object: Create an object called car with the following properties: make, model, year, and color.

// const car = {
//     make : "Toyota",
//     year: 2023,
//     model: "SUV",
//     color: "white"
// }


//*******2.Accessing properties: Log the make and year properties of the car object to the console.

// console.log(car ["make"]);
// console.log(car ["year"]);

//*******3. Add and update properties:
// Add a new property called isElectric and set it to false.

// const car = {
//     make : "Toyota",
//     year: 2023,
//     model: "SUV",
//     color: "white",
//     isElectric: false
// };
// console.log(car);


// Update the color of the car to a different color.

// const car = {
//         make : "Toyota",
//         year: 2023,
//         model: "SUV",
//         color: "white",
//         isElectric: false
//     };

// // Update the color
// car.color = "blue";

// console.log(car.color);
// console.log(car);


//*******4. Methods in objects:
// Add a method called startEngine that logs the message "The engine is starting" when called.

// const car = {
//     make : "Fortuner",
//     year: 2023,
//     model: "SUV",
//     color: "white",
//     isElectric: false,
//     startEngine: function () {
//         console.log("The engine is starting");  
//         }       
// };


// Call the startEngine method.

// console.log(car);

//Exercise 3: Arrays of Objects

//*******1.Create an array of objects: Create an array called students, where each element is an object representing a student with name, age, and grade properties.

// const students = [
//     { name: "Gagan", 
//       age: 18, 
//       grade: "8th" },
//     { name: "Kanan", 
//       age: 16, 
//       grade: "7th" },
//     { name: "Manan", 
//       age: 14, 
//       grade: "6th" }
// ];

// console.log(students);


//*******2.Loop through the array:
// Use a loop to log each student's name and grade to the console.
//---------------

// Find the average age of all students in the array.
//--------------

//*******3.Array methods with objects:
// Add a new student object to the students array.
// students.push({
//     name: "Chaman",
//     age: 12,
//     grade: "4th"
// })
// console.log(students);



// Use the filter method to find all students with a grade higher than 85 and log them to the console.
//-----------------


//Exercise 4: Nested Objects
//*******1. Create a nested object: Create an object called person that has properties firstName, lastName, and an address object that contains street, city, and postalCode.

// const person = {
//     firstName: "heer",
//     lastName: "fataniya",
//     address: {
//         street: "second",
//         city: "ahmedabad",
//         postalcode: 521021
//     }}
    // console.log(person);
    


//*******2. Access nested properties: Log the city and postalCode properties of the address object to the console.

// console.log(person["city"]["postalcode"]);


//*******3. Update nested properties: Change the street of the address object to a new street name.

// person.street = "first"
// console.log(person.street);
// console.log(person);




//*******4. Add a nested method: Add a method called getFullName to the person object that returns the person's full name by combining firstName and lastName.

// let person = {
//     firstName: "heer",
//     lastName: "fataniya",
//     getFullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(person.getFullName);



    



