var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
console.log(foo);
magic();

// Variable declarations (var) rise to the top of their scope like hot air balloons.

// Functions create their own scope and act like cages, preventing declarations from rising out.

// Assignments, or = signs, act like anchors. They stay put, no matter how the code is rearranged.

// let and const do not get hoisted,  and will throw an error if called before they are declared. const will even throw a syntax error if it is called before it is assigned.