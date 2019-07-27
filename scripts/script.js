$(document).ready(function() {

    $("#accessibilityOn").click(function() {
        $('#1').fadeOut(300).removeClass('one').addClass('colourBlind1').fadeIn(300);
        $('#2').fadeOut(300).removeClass('two').addClass('colourBlind2').fadeIn(300);
        $('#3').fadeOut(300).removeClass('three').addClass('colourBlind3').fadeIn(300);
        $('#4').fadeOut(300).removeClass("four").addClass('colourBlind4').fadeIn(300);
    });

    $("#accessibilityOff").on('click', function() {
        $('#1').fadeOut(300).removeClass('colourBlind1').addClass('one').fadeIn(300);
        $('#2').fadeOut(300).removeClass('colourBlind2').addClass('two').fadeIn(300);
        $('#3').fadeOut(300).removeClass('colourBlind3').addClass('three').fadeIn(300);
        $('#4').fadeOut(300).removeClass('colourblind4').addClass('four').fadeIn(300);
    });
    
    

    var newPattern = [];
    var spentPattern = [];
    var level = 0;
    var gameChecker = false;
    var finish = true; // add a function for finish = false for infinite game mode
    var maxLevel = level + 3;


    //random number generator
    function randomNumber(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }

    //pValue is a random number between one and four
    function addPattern() {
        var pValue = randomNumber(1, 4);

        // push a new number to newPattern array
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
        var itemSound = document.getElementById('clip' + item);
        itemSound.play();
        gameChecker = true;



        // pops and removes first item of array and animates the square eg. #2, #3 etc. 
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
            // item = Index 0 of spentPattern
            var item = spentPattern.shift();
            // optionId = clicked square
            var optionId = $(this).attr('id');

            $(this).animate({ opacity: .2 }, 200).animate({ opacity: 1 }, 100) // animate the clicked the box
            // if the click matches the item remove it from spentPattern and add it to newPattern
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
                    setTimeout(playPattern, 800);
                }

                if (finish == true && level == 3) {
                    $('p').html('Winner alright! Winner alright!<br>You reached the maximum level. <br>Press start to play again');
                    alert("You have finished the game!!");
                    gameChecker = false;
                    removeClicks();
                    resetGame();


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
                removeClicks();
                //resetGame();
                addPattern();
                playPattern();
                newPattern = [];
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
        $('h1').html('The Simon Game').css({
            fontSize: 40
        });
        $('p').html('Memorise the patterns used on the game board above and repeat by clicking the same colours. Test your skills and enjoy!');
        $('#level').html('Level: 0');
    }

    function resetGame() {
        level = 0;
        newPattern = [];
        spentPattern = [];

    }


    $('.startButton').click(function() {
        if (gameChecker === false) {
            startGame();
        }
    });


    //Sound starts as muted but can be turned on via the sound button.
    $("audio").prop('muted', true);
    $("#mute-audio").click(function() {
        if ($("audio").prop('muted')) {
            $("audio").prop('muted', false);
        }
        else {
            $("audio").prop('muted', true);
        }
    });

    function gameComplete(finish) {
        finish = true;
        var isFinished = level + 3;

        if (isFinished) {
            alert("You have completed the game");
            gameChecker = false;
        }
    }

});
