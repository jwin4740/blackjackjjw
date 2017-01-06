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
        for (var w = 0; w < x * 52; w++) {
        $("#card").append(cardArray[w].image);
    }
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
    

    // function displayCards() {
    //     for (var i = 1; i < 53; i++) {
    //         // var modi = i % 52;
    //         // if (modi === 0) {
    //         //     modi = 52;
    //         // }

    //         // $("#card").append("<img class='snap' alt='cardimage' src='assets/images/card" + modi + ".png'>");

    //         $("#card").append(cardArray[0].image);
    //     }
    //     console.log(cardArray[0].image);
    // }
    // displayCards();
});
