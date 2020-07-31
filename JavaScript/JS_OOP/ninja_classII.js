function Ninja(name){

    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    Ninja.prototype.sayName = function(){
        console.log("Hi my ninja name is "+name+"!");
    }

    Ninja.prototype.showStats = function(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength)
    }

    Ninja.prototype.drinkSake = function(){
        this.health = this.health + 10;
        console.log("Increased health to " +this.health+ "!");
    }

    this.punch = function(ninja2) {
        if (!(ninja2 instanceof Ninja)) {
            console.log(ninja2 + ' is not a Ninja!');
        }
        else {
            ninja2.health -= 5;
            console.log(ninja2.name + ' was punched by ' + this.name + ' and lost 5 Health!');
        }
    }

    this.kick = function(ninja2) {
        if (!(ninja2 instanceof Ninja)) {
            console.log(ninja2 + ' is not a Ninja!');
        }
        else{
            ninja2.health = this.health - (15 * strength);
            console.log(ninja2 + ' was kicked by ' + this.name + ' and lost 15 Health!');
        }
    }
}

var johnny = new Ninja('Johnny');
var jill = new Ninja('Jill')
johnny.punch(jill);
johnny.kick('quan');