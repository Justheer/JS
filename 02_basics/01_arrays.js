//arrays

//more array declaretion types.

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[1]);
const myHeros = ["shaktiman", "gandhiji"]
const myArr2 = new Array(1, 2, 3, 4)


// Array Methods

myArr.push(6) // add value after last element.
myArr.push(7) //add value after last element.
myArr.pop()  // remove the last element.

myArr.unshift(9) //add value before first element
myArr.shift()   //remove the first element

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() //it joins the array into the string.



console.log(myArr);
console.log(newArr);

//slice and splice

//slice : it returns copy section of array.
//splice : splice remove the portion of slice and manupalate the origal array.


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log(myn2);






