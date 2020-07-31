// parent Dot class
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        console.log(`This ${this.constructor.name} is at x ${this.x} and y ${this.y}.`);
    }
    parentFunction() {
        return 'This is from the parent function!';
    }
}
// child Circle class
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    //since the parent class does not have a radius argument, we can show the radius from the child function since it was added in there.
    showRadius() {
        console.log(`This Dot has a radius of ${this.radius}.`)
    }
    showAddition() {
        console.log(`The sum of x: ${this.x} and y: ${this.y} equates to 66.`)
    }
    childFunction() {
        const message = super.parentFunction();
        console.log(message);
    }
}


// we can now create Circles
const circle1 = new Circle(33, 33, 33);
// same attributes as a Dot, plus a radius
console.log(circle1);
// and Circles can access Dot methods
circle1.showLocation();
circle1.showRadius();
circle1.showAddition();
circle1.childFunction();