1. Itrating Over the array with array.enteries()

const fruits = ["Apple", "Kiwi", "Banana", "Cherry", "Mango"];
const iterator = fruits.entries();

for (const [index, fruits] of iterator) {
    console.log(`Index ${index}: ${fruits}`);
}


2. Converting Array.enteries() to an Array.;

const colors = ["red", "yellow", "green", "blue"];
const colorEntries = Array.from(colors.entries());

console.log(colorEntries);


3. Filtering Entries with a specific condition.;

const numbers = [10, 20, 30, 40, 50, 60];
const iterat = numbers.entries();

const filterEntries = [];
for (const [index, number] of iterat) {
    if (number > 30) {
        filterEntries.push([index, number]);
    }
}
console.log(filterEntries);

4. Modifying elements while iterating with array.entries()

const letters = ['a', 'b', 'c', 'd'];
const words = letters.entries();

for (let [index, letter] of words) {
    letters[index] = letter.toUpperCase();
}

console.log(letters);

Array, from();
5. Converting a string to an array;

const str = "JavaScript";
const array = Array.from(str);

console.log(array);


6. Creating an array from a set;

const set = new Set(['a', 'b', 'c', 'b', 'c']);
const array = Array.from(set);

console.log(array);

7. Removing Duplicates from an array;

const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 5,];
const uniqueNumbers = Array.from(new Set(numbers));

console.log(uniqueNumbers);

Array.keys();
8. Iterating over array indexes;

const fruits = ["Apple", "Mango", "Kiwi"];
const keys = fruits.keys();

for (const key of keys) {
    console.log(key);

}

9. creating an Array of indexes;

const colors = ['red', 'pink', 'white', 'black'];
const colorKeys = Array.from(colors.keys());

console.log(colorKeys);

10. Using Array.keys() with forEach

const animals = ["lion", "tiger", "dog", "cat"];
const keys = animals.keys();

Array.from(keys).forEach(key => {
    console.log(`index: ${key}`);
});

11. Accessing Elements by Index Using Array.keys();

const numbers = [10, 20, 30, 40];
const keys = numbers.keys();

for (const key of keys) {
    console.log(`Element at index ${key}: ${numbers[key]}`);
}


Array.find();
12. Finding the first number;

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(first);

13.finding the first number;

const numbers = [5, 13, 8, 29, 24];
let second = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 20;
}

console.log(second);

14. finding the first index;

const numbers = [4, 9, 16, 25, 29];

let third = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(third);

15.;

const colors = ["red", "blue", "green"];

let color = colors.findIndex(myFunction);

function myFunction(value, index, array) {
    return value > "blue";
}

console.log(colors);





