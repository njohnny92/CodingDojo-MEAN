function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function() {
        console.log('My name is ' + this.name + '!');
    }

    this.showStats = function() {
        console.log('Name: ' + this.name + ', ' + 'Health: ' + this.health + ', ' + 'Speed: ' + speed + ', ' + 'Strength: ' + strength)
    }
    this.drinkSake = function() {
        console.log('Drinking this sake added 10 health to ' + this.name + '!');
        this.health += 10;
    }

}

var ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();