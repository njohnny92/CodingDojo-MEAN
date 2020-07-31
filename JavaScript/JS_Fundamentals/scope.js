// let is a block scope; anything let or const defined inside the block, it will not be defined outside of it.
function letLoop(){
        for (let i=0; i<3; i++) {    // notice we use let to define i
            console.log(i);          // this will log 0, 1, 2
        }
        console.log(i);              //  this will give us a ReferenceError because i is not defined outside the loop
    }
letLoop()

// var is a function scope; anything var defined inside the function will have access to that variable even outside of the loop or if-block.
function varLoop(){
        for (var i=0; i<3; i++) {    // notice we use var to define i
            console.log(i);          // this will log 0, 1, 2
        }
        console.log(i);              //  this will log 3
    }
varLoop()