const user = {
    username: "heer",
    price: 999,

    welcomeMessage: function(){
         console.log(`${this.username} , welcome to website`);
        //  console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

//Note: When there is no contaxt in global scope, that's why it will print empty curly braces.
//Note: When we print it on browser window, it will a global window.


// function coffee() {
//     let username = "heer"
//     console.log(this.username);
// }
// coffee()

// const coffee = function (){
//     let username = "heer"
//     console.log(this.username);
// }

const coffee = () => {
    let username = "heer"
    console.log(this);
}


// coffee()

//implicit return

// const addTwo = (num1, num2) => {     //Note: will have to write return word when you use of {} curly braces.
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)   //Note: will have not to write return word when you use of () parantheses.

// console.log(addTwo(3,4));

//explicit return

const addTwo = (num1, num2) => ({username: "heer"})

console.log(addTwo(3,4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


  