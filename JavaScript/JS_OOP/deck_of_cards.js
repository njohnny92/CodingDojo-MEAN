class Card {
    constructor(suit, pip, val) {
        this.suit = suit;
        this.pip = pip;
        this.val = val;
    }

    show() {
        console.log(`${pip} of ${suit}`);
    }
}

class Deck {
    constructor(){
        this.deck = [];
        this.reset();
    }

    reset() {
        this.deck = [];

        let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        let pips = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

        for (let suit in suits){
            for(let pip in pips){
                this.deck.push(pips[pip] + ' of ' + suits[suit]);
            }
        }
    }

    shuffle() {
        var m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }

    deal() {
        return this.deck.pip();
        };
}

class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }
}

const deck1 = new Deck();
console.log(deck1.deck);