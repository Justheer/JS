// Immediately Invoked Function Expressions (IIFE)

(function coffee() {
     console.log(`DB CONNECTED`);
})()

( () => {
    console.log(`DB CONNECTED TWO`);
    
}  )()

//Global scope ke polution se problem hoti hai kahi baar, to uss global scope ke jo variables hai ya koi bhi declaration hai uske polution ko hatane ke liye ham IIFE ka use karte hai. 