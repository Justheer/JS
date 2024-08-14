function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("L");
}

//sayMyName()

// function addTwoNumber (number1, number2){
//        console.log(number1 + number2);
// }

function addTwoNumber (number1, number2){

   // let result = number1 + number2
    // return result
    return number1 + number2    
}


const result = addTwoNumber(3, 5)

//console.log("Result:", result );

function loginUserMessage(username = "sam"){  //sam is a defult value

    if (!username) {
        console.log("Please enter your username");
        return
    }

    return `${username} just logged in`
}

 //console.log(loginUserMessage("Heer"));
 //console.log(loginUserMessage("Heer"));

 function calculateCartPrice (val1, val2, ...num1){
        return num1
 }

   //console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "heer",
    price: 199
}

function handleObject (anyObject){
   console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
}
  //handleObject (user)
   handleObject ({
        username: "sam",
        price: 999
   })  

const myNewArray = [200,400,100,600]

function returnSecondValue (getArray){
        return getArray[1]
}

//console.log(returnSecondValue(myNewArray)); 
 console.log(returnSecondValue([200,400, 500, 1000]));
   

 
 
   
