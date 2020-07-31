/*Example 1: There is no class keyword in JS. We write functions that act as an object contructor to create particular objects.
The function declares an object, assigns the object key-value pairs based off the provided input, and returns the object.
*/

// function personConstructor(name, age) {
//     // an object literal that will be returned
//     var person = {};
//     // attributes of a person
//     person.name = name;
//     person.age = age;
//     // when attached to an object or instance, functions are called 'methods'.
//     // this is our first method, greet
//     person.greet = function(){
//         console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
//     }
//     // finally, this function must return an instance
//     return person;
// }
// create the 'steve' instance, run greet
// var steve = personConstructor("Steve", 27);
// steve.greet();
// // create the 'anika' instance, run greet. note that it is different.
// var anika = personConstructor("Anika", 33);
// anika.greet();
// // finally note how we can refine the greet method for any particular instance
// var emily = personConstructor("Emily", 22);
// emily.greet = function() {
//     console.log("I am the greatest, ever!");
// };
// emily.greet();


//--------------------------------------------------

/*Example 2: Using this keyword as self and new keyword creates a new instance.
*/

// function personConstructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//     }
// }
// // the 'new' keyword causes our constructor to return the object we expected.
// var anika = new personConstructor('Anika', 33);
// anika.greet();
// console.log(anika);

//------------------------------------------------------
/*Cleaning up our code by creating new instances.  Whenever you use this (self) must have a function new.
*/

function personConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
var person1 = new personConstructor('Johnny', 27);
person1.greet();

var person2 = new personConstructor("Emily", 22);
// using this & new, we can now refer to the 'name' attribute of our instance!
person2.greet = function() {
    console.log("My name is " + this.name + " and I'm the coolest ever!");
}

person2.greet();