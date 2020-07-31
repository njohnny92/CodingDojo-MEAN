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
}

var Johnny = new Ninja("Johnny");
Johnny.sayName();
Johnny.showStats();
Johnny.drinkSake();
Johnny.drinkSake();
Johnny.showStats();