// for of 
//array

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
}

//string

const greetings = "Hello world!"

for (const greet of greetings) {
    console.log(greet);
}

//Map

const map = new Map()
map.set ('IN', "India")
map.set ('USA', "United States of America")
map.set ('Fr', "France")

console.log(map);

//key, value

for (const [key, value]of map){
   console.log(key,':-',value);
   
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
      console.log(key, value);
      
}