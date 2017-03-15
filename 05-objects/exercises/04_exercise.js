/*

Card Game of War Exercise Part 2.

*/

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*

Card Scores: ace: 1, two: 2, three: 3, four: 4, ... jack: 11, king: 12, queen: 13

*/


/*

Create a `constructor` (A function that returns an object) for a card. Each card should have a suit, rank and score as well as a title. The title should be a string descriptor for the card, like 'Ace of Hearts' or 'Four of Clubs'

Test out your constructor by creating a new card, `console.log`ing it to make sure you're getting what you expect. You should get something like:

{
  suit: 'hearts',
  rank: 'ace',
  title: 'ace of hearts',
  score: 1
}

*/
function Card(suit, rank) {
  this.suit = suit
  this.rank = rank
  this.title = rank + ' of ' + suit
  // this.score = scores[rank]
}
var newCard = new Card(suits[0], ranks[0])
console.log(newCard)

/*

Write a constructor function for a deck of cards. The deck should contain a property `cards` that is an array of the cards in the current deck.

Your deck should contain a method called `createNewDeck` that will populate the `cards` array with all 52 card posibilities, using your card object from above. Someone should not be able to create a new deck of 52 cards if the deck's `cards` array already has cards in it

*/
function Cards() {
  this.cards = [suit, rank]
  this.createNewDeck = function() {
    var deckOfCards = []
    for (var i = 0; i < suits.length; i++) {
      for (var r = 0; r < ranks.length; r++) {
        deckOfCards.push(new Cards(suits[i], ranks[r]))
      }
    }
  }
    return deck
  }
this.cards = this.createNewDeck()

/*

Write a constructor function called player. A player should have a username that is a string and a hand that is an array of cards.

Instantiate two instances of your player object.

*/
function Player(userName, hand) {
  this.name = userName
  this.hand = []
}
var firstPlayer = new Player('Vanessa', [suits, ranks])
var secondPlayer = new Player('Brandon', [suits, ranks])
console.log(firstPlayer.name, firstPlayer.hand)
console.log(secondPlayer.name, secondPlayer.hand)

/*

Get pumped:
For our lab, we're going to have two mini lessons: one on `npm`, which stands for node package manager and installing 3rd party libraries, perhaps to help us handle user input; the second will be on breaking our program into multiple files.

After that, we'll finish building out the game and you'll actually be able to play it!

*/
