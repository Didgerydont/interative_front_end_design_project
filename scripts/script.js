var newPattern = [];
var spentPattern = [];
var level = 0;
var gameChecker = false;


$(".accessibility").click(function() {
   $("#1").css("backgroundColor", "#332288");
   $("#2").css("backgroundColor", "#44AA99");
   $("#3").css("backgroundColor", "#AA3F99");
   $("#4").css("backgroundColor", "#DDCC77");
   
});

//random number generator
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
} 

//pValue is a random number being between one and four
function addPattern() {
    var pValue = randomNumber(1, 4);

    // adds a new Pattern to array
    newPattern.push(pValue);
}

function playPattern() {
    // takes newPattern array
    for (var i = 0; i < newPattern.length; i++) {
        var delayTime = i * 800;

        setTimeout(flashSquare, delayTime);
    }
}

function flashSquare() {

    var item = newPattern.pop();
    gameChecker = true;

    // pops and removes first item of array 
    $('#' + item).animate({
        opacity: 0.2
    }, 200).animate({
        opacity: 1
    }, 100);
    //animation takes 300 ms in total. The difference in opacity for different time lengths will create the "flash" effect

    spentPattern.push(item);
    // take the item  removed from newPattern and add it to spentPattern 

    if (newPattern.length <= 0) {
        // add the click event once cpu is finished showing the newPattern
        createClicks();
    }
} // end flashSquare()

function createClicks() {
    $('.option').click(function() {
        // check if clicked element is the right square
        var item = spentPattern.shift();
        // 
        var optionId = $(this).attr('id');

        $(this).animate({ opacity: .2 }, 200).animate({ opacity: 1 }, 100)

        // if yes remove from spentPattern and add to newPattern
        if (item == optionId) {
            //adds item back to newPattern array
            newPattern.push(item);

            if (spentPattern.length <= 0) {
                level++;
                $('#level').html('Level: ' + level);

                removeClicks();
                //user is finished clicking through the newPattern successfully
                // add new square to newPattern
                addPattern();

                // playPattern();
                setTimeout(playPattern, 800);
            }
        }
        else {
            // else game over
            gameChecker = false;
            $('h1').html('Game Over').css({
                fontSize: 60,
                marginBottom: 15,
                marginTop: 15
            });
            $('p').html('Click on "Start" to Restart');
            // clear out both new and spent pattern arrays
            pattern = [];
            spentPattern = [];
        }
    }); // end .option click
} // end create click

function removeClicks() {
    //removes all events from element 
    $('.option').unbind();
}

function startGame() {
    removeClicks();
    resetGame();
    addPattern();
    playPattern();
}

function resetGame() {
    level = 0;

    $('#level').html('Level: ' + level);
    $('h1').html('The Simon Game').css({
        fontSize: 40
    });
    $('p').html('Memorise the patterns used on the game board above and repeat by clicking the same colours. Test your skills and enjoy!<br>Click "Start" to begin your game');
}


$('.startButton').click(function() {
    if (gameChecker === false) {
        startGame();
    }
});

$('.resetButton').click(function(){
    resetGame();
});

