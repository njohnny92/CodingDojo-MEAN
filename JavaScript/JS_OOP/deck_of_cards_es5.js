var Deck = function Deck() {
    this.deck = [];
    var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    var pips = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for(var suit in suits) {
        for(var pip in pips) {
            this.deck.push(pips[pip] + ' of ' +suits[suit]);
        }
    }
};
//Deck object has a prototype attribute, all instances will check themselves then their prototypes to see if it exists.
//If it exists within themselves, it'll run. If cannot be found then they'll look for the method named shuffle inside the prototype.
Deck.prototype.shuffle = function(){
    var m = this.deck.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = this.deck[m];
        this.deck[m] = this.deck[i];
        this.deck[i] = t;
    };
    return this;
};

var deck1 = new Deck();
// console.log(deck1.deck);
deck1.shuffle();
console.log(deck1.deck)