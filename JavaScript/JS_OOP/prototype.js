function Cat(catName) {
    var name = catName;
    this.getName = function() {
      return name;
    };
  }
  //adding a method to the cat prototype
  Cat.prototype.sayHi = function() {
    console.log('meow');
  };
  //adding properties to the cat prototype
  Cat.prototype.numLegs = 4;
  var muffin = new Cat('muffin');
  var biscuit = new Cat('biscuit');
  console.log(muffin, biscuit);
  //we access prototype properties the same way as we would access 'own' properties
  muffin.sayHi();
  biscuit.sayHi();
  console.log(muffin.numLegs);
  // we may change an instance's attributes rather than keeping the value set by prototype
  muffin.numLegs = 3;
  // poor mutant cats: muffin.__proto__.numLegs ++;
  // doing this to muffin will cause all the cats to have 5 legs, but muffin will still have 3 legs
