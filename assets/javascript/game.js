$(document).ready(function() {

    var cardArray = [];
    

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
                    var modcounter = counter%52;
                    if (modcounter === 0)
                    {
                    	modcounter = 52;
                    }
                    
                    cardArray.push(new cards(this.values[j], this.suits[i], this.face[j] + " of " + this.suits[i], "<img class='snap' alt='cardimage' src='assets/images/card" + modcounter + ".png'>"));

                }
            }
        }
        console.log(cardArray);
    }


    buildDecks(1);
    for (var i = 1; i < 53; i++) {
    	var modi = i%52;
    	if (modi === 0)
    	{
    		modi = 52;
    	}
    	
        $("#card").append("<img class='snap' alt='cardimage' src='assets/images/card" + modi + ".png'>");
    }

    function hand() {

        var x = Math.floor(Math.random() * 52);
        var y = Math.floor(Math.random() * 52);
        $("#card").append(cardArray[x].image);
        $("#card").append(cardArray[y].image);
        $("#card").append("<br>");

        console.log(cardArray[x]);
        console.log(cardArray[y]);
    }
    

});
