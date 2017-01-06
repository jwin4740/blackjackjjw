$(document).ready(function() {
    // global variables

    var cardArray = [];

    // global variables



    //methods object

    function deckObjMain() {
        this.cardArray = cardArray;
        this.cards = cards;
        this.buildDecks = buildDecks;
        this.deckShuffle = deckShuffle;
        this.displayCards = displayCards;
    }



    // card object
    function cards(value, suit, name, image) {

        this.value = value;
        this.suit = suit;
        this.name = name;
        this.image = image;

    }



    // fill array with x deck(s) of cards
    function buildDecks(x) {
        var counter = 0;
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
        this.face = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        this.suits = ["clubs", "diamonds", "hearts", "spades"];


        for (var k = 0; k < x; k++) {
            for (var j = 0, m = this.values.length; j < m; j++) {
                for (var i = 0, n = this.suits.length; i < n; i++) {
                    counter++;
                    var modcounter = counter % 52;
                    if (modcounter === 0) {
                        modcounter = 52;
                    }

                    cardArray.push(new cards(this.values[j], this.suits[i], this.face[j] + " of " + this.suits[i], "<img class='snap' alt='cardimage' src='assets/images/card" + modcounter + ".png'>"));

                }
            }
        }
        deckShuffle();
        displayCards(x);
        $("#deal").on("click", function dealing () {

        	
        	var res = getRandom(cardArray.length)
        	console.log(res);
        	$("#dealerHand").append(cardArray[45].image);
        	$("#dealerHand").append("<img class='snap' alt='cardimage' src='assets/images/backface.png'>");
        	$("#playerHand").append(cardArray[23].image);
        	$("#playerHand").append(cardArray[26].image);

        });
        $("#reload").on("click", function () {
        	location.reload();
        	

        });

        $("#hitplayer").on("click", function hitPlayer () {
        	
        	

        });

        $("#hitdealer").on("click", function hitDealer () {
        	
        	

        });
        console.log(cardArray[0].value);
    }


    buildDecks(3);


    function hand() {

        var x = Math.floor(Math.random() * 52);
        var y = Math.floor(Math.random() * 52);
        $("#card").append(cardArray[x].image);
        $("#card").append(cardArray[y].image);
        $("#card").append("<br>");

        console.log(cardArray[x]);
        console.log(cardArray[y]);
    }

    function deckShuffle() {
        var i, j, k;
        var temp;

        // Shuffle the stack 'n' times.

        for (i = 0; i < 1; i++)
            for (j = 0; j < cardArray.length; j++) {
                k = Math.floor(Math.random() * cardArray.length);
                temp = cardArray[j];
                cardArray[j] = cardArray[k];
                cardArray[k] = temp;
            }
    }
    // shuffle();
function getRandom(x){
	var e = Math.floor(Math.random() * x)
	console.log(x);
	console.log(e);
	return e;

}

    function displayCards(x) {
        for (var w = 0; w < x * 52; w++) {
            $("#card").append(cardArray[w].image);
        }
    }

});
