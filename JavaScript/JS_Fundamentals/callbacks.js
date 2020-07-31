// //1.)
// //THIS EXAMPLE SUPPLIES setTimeout() function with a chunk of code to run once its timer has elapsed.

// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");

//2.)
//SHOWS THAT a is a number and b is a function.

// var a = 2;
// var b = function() { console.log("something"); };
// function doSomething(x) {
//   console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);

// //3.)
// /*call backs, linked to Ajax requestts, helps us create more seamless user experience on a web page because we can send
// and recieve data and update the DOM without needing to refresh the page.
// */

// function doSomething(possibleCallback) {
//     if (typeof(possibleCallback) === 'function'){
//       console.log('possibleCallback is a callback!');
//       possibleCallback(); //we can invoke the callback!
//     }
//     else {
//       console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
//     }
//   }
//   doSomething(function myCallback(){ console.log('yes, I am a callback!') }); //this is a function within the console.log
//   doSomething('string'); // this is not a function within the console.log

// /*3.)
// makePasta() can help us make different types of pasta. Unfortunately, our pasta is pretty bland right now with no sauce.
// We're able to accept a callback (our makeSauce aprameter), but we're not passing it a function when makePasta() is invoked.
// */

// function makePasta(pasta, makeSauce) {
//   console.log("Boiling water");
//   console.log("Putting " + pasta + " pasta in the water");
//   console.log("Pasta is done!");
//   return pasta + " Pasta! Voila!";
// }
// makePasta("Penne");
// makePasta("Farfalle");

/*4.)
What if you want to make penne with Alfredo sauce one day and then Bowtie with pesto the next day?
We need to modify our makePasta recipe so when it is passed a sauce it can make it.
*/

function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  // create a variable for sauce!
  var sauce = makeSauce();          // invoke makeSauce, our callback
  console.log("Mixing sauce");
  console.log("Pasta is done!");
  return pasta + " Pasta with " + sauce + " sauce! Voila!";
}
function makePesto() {
  console.log("Making Pesto");
  return "pesto";
}
function makeAlfredo() {
  console.log("Making Alfredo");
  return "alfredo";
}
// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto));
// notice lack of parentheses after makePesto.
// Remember: we want to pass the function, not execute it and pass a return value.
console.log(makePasta("Farfalle", makeAlfredo));

// /* 5A.)
// Youtube example, an example that function will not execute the callback until something else has happened.
// That something else is 3000 (3 seconds).  The console will run the code within the function of the console.log statement
// after 3 seconds.
// */

// let logCall = function() {
//   console.log('logCall was called back.');
// };

// setTimeout(logCall, 3000);

// /*5B.)
// Youtube example. Passing a function at the time you define the funciton.  The funciton that was defined in setTimeout is an anonymous funciton
// that has not been assigned to a variable.
// */

// setTimeout(function() {
//   console.log('The function was called back.');
// }, 3000);


// /* 7.)
// Youtube example. A problem where you want the function to return back students who attends at school "East".
// */

// let students = [{name: "Mary", score: 90, school: "East"},
// {name: "James", score: 100, school: "East"},
// {name: "Steve", score: 40, school: "East"},
// {name: "Gabe", score: 90, school: "West"},
// {name: "Rachel", score: 85, school: "East"},
// {name: "Rochelle", score: 95, school: "West"},
// {name: "Lynette", score: 75, school: "East"}];

// //this function cycles through the array, detects to see if the school is "east", wont pass anything that has "west"
// let processStudents = function(data, callback){
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].school.toLowerCase() === "east") {
//       if (typeof callback === "function") {
//         callback(data[i]);
//       }
//     }
//   }
// }

// processStudents(students, function(obj) {
//   if (obj.score > 70) {
//     console.log(obj.name + " passed.")
//   }
// });