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
        $("#deal").on("click", function dealing() {


            var res = getRandom(cardArray.length);
            console.log(cardArray[res]);
            $("#dealerHand").append(cardArray[res].image);
            cardArray.splice(cardArray[res], 1);
            console.log("deck now has: " + cardArray.length);

            // dealer blank
            var res1 = getRandom(cardArray.length);
            console.log(cardArray[res1]);
            console.log("DEALER HAS: " + cardArray[res1].name);
            $("#dealerHand").append(cardArray[res1]);
            cardArray.splice(cardArray[res1], 1);
            console.log("dealer has: " + cardArray.length);


            var res2 = getRandom(cardArray.length);
            console.log(cardArray[res2]);
            $("#playerHand").append(cardArray[res2].image);
            cardArray.splice(cardArray[res2], 1);
            console.log("deck now has: " + cardArray.length);

            var res3 = getRandom(cardArray.length);
            console.log(cardArray[res3]);
            $("#playerHand").append(cardArray[res3].image);
            cardArray.splice(cardArray[res3], 1);
            console.log("deck now has: " + cardArray.length);



        });
        $("#reload").on("click", function() {
            location.reload();


        });

        $("#hitplayer").on("click", function hitPlayer() {

            var res3 = getRandom(cardArray.length);
            console.log(cardArray[res3]);
            $("#playerHand").append(cardArray[res3].image);
            cardArray.splice(cardArray[res3], 1);
            console.log("deck now has: " + cardArray.length);


        });

        $("#hitdealer").on("click", function hitDealer() {
            var res3 = getRandom(cardArray.length);
            console.log(cardArray[res3]);
            $("#dealerHand").append(cardArray[res3].image);
            cardArray.splice(cardArray[res3], 1);
            console.log("deck now has: " + cardArray.length);



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
    function getRandom(x) {
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
