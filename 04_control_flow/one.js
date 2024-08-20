// < , > , <= , >=, == , === , != , !== , &&


// if

//(1)
// const isUserLoggedIn = true
// const temperature = 40

// if (temperature === 30) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

//(2)
// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


//(3) - imlicity scope

// const balance = 1000

// if (balance > 500) console.log ("test"), console.log ("test2");


//(4) if - else if

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750")
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
    
// }

//(5) - usecase in real life 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {      //&& meaning is all the conditions will be true
    console.log("Allow to buy a course");
}

if (loggedInFromGoogle || loggedInFromEmail) {    // || meaning is ek bhi condition agar true hai to it will work
    console.log("User logged in");
}