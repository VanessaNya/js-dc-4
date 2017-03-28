/*

Card Game of War Exercise Part 1.

*/

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*

Given the above suits and ranks array, write a function called
createDeck that will take both as parameters and return a new array
with all 52 possible card combinations. The returned 'Deck of Cards'
shoulkd be an array with 52 strings in it, each representing a card
(i.e. 'ace of Hearts')

Call createDeck and save the result into a variable called
deckOfCards.

*/
function createDeck(suits, ranks) {
  var allDeck = []

  for (var i = 0; i < suits.length; i++) {
    for (var r = 0; r < ranks.length; r++) {
      allDeck.push(ranks[r] + ' of ' + suits[i])
    }
  }
  return allDeck
}

var deckOfCards = createDeck(suits, ranks)


/*

Write a function called getRandomCard that will return one random
card from deckOfCards whenever it is called.

Don't worry about removing the card from deckOfCards.

*/
function getRandomCard(deck) {
  var randomNum = Math.floor(Math.random() * deck.length)
  return deck[randomNum]
}

var randomCard = getRandomCard(deckOfCards)

console.log(randomCard)

/*

Write a function called dealHand that takes a number as it's only
parameter. This number represents the number of cards that dealHand
should return.

If no number is passed in, then dealHand should still return one
card. If dealHand is only returning one card, it returns that card
as a string; if dealHand is returning more than one card, it returns
the cards as an array.

*/
function dealHand(numOfCards, deck) {
var hand = 1
if (numOfCards === 1) {
  hand = getRandomCard(deck)
} else {
  hand = []
  for(var i = 0; i < numOfCards; i++) {
    hand.push(getRandomCard(deck))
   }
  }
return hand
}

/*

Create two variables, playerOneCards and playerTwoCards, and
initialize them as empty arrays.

Deal both playerOneCards and playerTwoCards 7 cards each.

*/
var playerOneCards = dealHand [7]
var playerTwoCards = dealHand [7]



/*

Write a function called showHand that takes a player's cards as an
array and prints each card.

*/
function showHand(hand) {
  console.log("Your hand is: \n-" + hand.join("\n-"))

}


/*

Get pumped:
Next class we're going to talk about objects, which will let us
create cards that are easier to use because they contain attributes
like suit and rank. Then, we'll be able to take two random cards and
compare their score with each other!

*/
