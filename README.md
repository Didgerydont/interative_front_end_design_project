# The "Simon" Memory game
---
This project is based on the memory game "Simon" invented by Ralph H. Baer and Howard J. Morrison, working for toy design firm Marvin Glass and Associates,
with software programming by Lenny Cope. The device creates a series of tones and lights and requires a user to repeat the sequence



## UX
---
The user interface for this project will remain as clear and simple as possible as the focus of the project is making the game work in the back end
whiles making sure that thw front end of the project remains interactive. The UX will utilise HTML and CSS with heavy use of the Bootstrap framework 
provided by the good people over at Twitter. 

## User Stories
---
"As someone who doesnt use computers very often I would like the game to be as simple as possible so I dont have to spend time figuring out how to play the game before I can dive in."

"Due to being color blind, I would like some extra features on the game so that I dont have to be relying soley on a colour based system for playing the game. Perhaps you could add
some lights or sounds to to the game. "

"Being a keen gamer and so competitively minded, I would like the game to tell me how Im doing on my current level and what the highest level that I have achieved in this current session is"


In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features
---
For my rendition of the Simon Game I have opted to add some new features and of course keep a recognisable features.

From the original game I have opted to go for the tradtional use of the primary colours for the game buttons.
I have also opted to use the original sounds from the game. These give a nice memorable noise associated with each button for added colour recognition. These are also turned off as default for people having game work.

For my own adaptation of the game I have include another accessibility option which will change the colour scheme of the buttons on the page to more friendly to people with colour blindness. 
I have also built two modes into the game. The standard mode is activated when the start button is activated. This begins the game lighting buttons for the user to play and move up the levels. In standard mode the game mode will allow you to get to level 20 and will then announce that you have won the game,
The second option is infinite mode. In this mode there is no max levek and the game doesnt end!

There is also a high contrast colour scheme being used in the project which makes it easy for the user to read the menus and find the buttons.

### Buttons && Existing usuable features
---
The game uses a total of 5 buttons.

See the table below for the list and their actions.

| Button | Action  |
|------------------------:  |------------------------: |
| Start | The start button begins the games with victory awaiting at level 20
|Infinite Mode| The Infinite Mode button removes the top level from the game for real memory champions.
| Turn on | Turn on is the activater for our colour blind accessibility function |
| Turn off| This will do undo the the previous button and revert our page to the standard theme|
| On/Off | This button will turn on and off the sound on the page. The sound starts as muted when the DOM is first loaded|


The game will consist of multiple buttons, there will a start button, a reset button and one button for each of the four colours. There is also be a button for turning on
and off the sound options on the colours.


### What makes it tick
---

This project is made using a 3 different technologies and frameworks.

The technologies used were HTML5 and CSS3 with the framework Bootstrap version 4.3 installed for formatting the page layout and stylin of the page. 

Javascript and JQuery were used for DOM manipulation. 


#### The Colour Blind Assist 

The colour blind option is made using jquery functions to manipulate the dom responding to two buttons.
"Turn on" && "Turn off" 

Turn on -->
```
    $("#accessibilityOn").click(colourBlindOn);
    function colourBlindOn() {
        $('#1').fadeOut(300).removeClass('one').addClass('colourBlind1').fadeIn(300);
        $('#2').fadeOut(300).removeClass('two').addClass('colourBlind2').fadeIn(300);
        $('#3').fadeOut(300).removeClass('three').addClass('colourBlind3').fadeIn(300);
        $('#4').fadeOut(300).removeClass("four").addClass('colourBlind4').fadeIn(300);
        
        // header colour change
        $('.header-flag-green').css('color', "#332288");
        $('.header-flag-red').css('color', "#44AA99");
        $('.header-flag-blue').css('color', "#AA3F99");
        $('.header-flag-yellow').css('color', "#DDCC77");
        // all buttons change
        $('button').css('background-color', '#332288');
    };
    
```

Turn off -->

```
    $("#accessibilityOff").click(colourBlindOff);
    function colourBlindOff() {
        $('#1').fadeOut(300).removeClass('colourBlind1').addClass('one').fadeIn(300);
        $('#2').fadeOut(300).removeClass('colourBlind2').addClass('two').fadeIn(300);
        $('#3').fadeOut(300).removeClass('colourBlind3').addClass('three').fadeIn(300);
        $('#4').fadeOut(300).removeClass('colourblind4').addClass('four').fadeIn(300);
        
        //header colour change
        $('.header-flag-green').css('color', "#1B5E20");
        $('.header-flag-red').css('color', "#B71C1C");
        $('.header-flag-blue').css('color', "#0D47A1");
        $('.header-flag-yellow').css('color', "#F57F17");
        // all buttons change back
        $('button').css('background-color', '#1B5E20');
    };
    
```
    
#### The random number generator for setting the patterns for our arrays

```
    //Quite simple
    
    
    function randomNumber(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }


```

#### How the sound works

The sounds are stored in the head of the css style and the called as their
matching colour gets called by randomNumber function. The game starts as 
muted and can then be toggled. 

Sound On/Off button
```
    //HTML
    <head>
        <audio id="clip1" src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"></audio>
        <audio id="clip2" src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></audio>
        <audio id="clip3" src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"></audio>
        <audio id="clip4" src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"></audio>
    </head>

    //Our sound is programmed to be activated by our flashSquare function being called
    
function flashSquare() {
        var item = newPattern.pop();
        var itemSound = document.getElementById('clip' + item);
        itemSound.play();
        gameChecker = true;



    //jQuery 
    //Sound starts as muted but can be turned on via the sound button.
    $("audio").prop('muted', true);
    $("#mute-audio").click(function() {
        if ($("audio").prop('muted')) {
            $("audio").prop('muted', false);
            $('#mute-audio').css('background-color', '#B71C1C');
        }
        else {
            $("audio").prop('muted', true);
            $('#mute-audio').css('background-color', '#1B5E20');
        }
    });
    
        
```

#### Links to the tech




##### [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5 "HTML5 DOCS") 



##### [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS3 DOCS")

##### [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript "Javascript DOCS")

##### [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/ "Bootstrap DOCS")

##### [JQuery](https://api.jquery.com/ "JQuery DOCS")

##### [Jasmine](https://jasmine.github.io/ "Jasmine DOCS")



## Testing
---

I have tested the project by making sure that it runs on various browsers. 

  * Chrome --> The project was developed on Chrome and works as expected
  * Microsoft Edge --> Works as expected. 
  * Opera --> Works as expected.
  * FireFox --> Works as expected. 
  * Internet Explorer -> Works as expected. 

The page is also responsive due to the use of bootstrap and the mobile first design approach. 
The page holds its shape and shows no structural errors or overlapping on any of the devices that I have test on. 


The devices used for testing were... 
  * Samsung S7 --> Works as expected
  * Samsung S5 --> Works as expected
  * Pixel 2 --> Works as expected
  * Pixel 2 XL --> Works as expected
  * Iphone 5/SE --> Works as expected
  * Iphone 6/7/8 --> Works as expected
  * Iphone 6/7/8 Plus --> Works as expected
  * Iphone X --> Works as expected
  * IPad --> Works as expected
  * IPad Pro --> Works as expected

During the testing process for this project I have also automated my random number generator using the jasmine testing framework. 
I had intended on doing extensive automated testing on the project but as most of the DOM manipulation is written in Jquery, this proved to be diffcult. 
I tried to instal jasmine-jquery by velesin but unfortunately had no luck in getting this operational and had to the ditch this attempt due to time constraints. 
I do hope to come back to this project in future and get this system up and running as it does seem to be a super effective tool for testing when it can actually be made to run!

My jasmine test for now is 

```

describe("randomNumber to generate a random number 1 to 4", function(){
    
    
    let min =  1;
    let max = 4;
    
    it("should generate a random number 1 to 4", function(){
        let ranNum = Math.round(Math.random() * (max - min)) + min;
        
        expect(ranNum).toBeGreaterThan(0);
        expect(ranNum).toBeLessThan(5);
    });
});

```

## Contact form:
---
Using EmailJS, I will set up a contact the developer option for reporting encountered bugs with the game

Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment
---
In order to deploy the project I had to take a few steps.

1. Uploaded the file to my Github account
2. Go into my profile and find the project itself
3. Go into settings within the project file
4. Go down along the settings as far as GitHub pages
5. Choose "Master Branch" as the source for the file
6. Click deploy.
7. The project is deployed on https://didgerydont.github.io/interative_front_end_design_project/.

## Credits
---
## Content
---
The text for section Y was copied from the Wikipedia article Z
## Media
---

The photos used in this site were obtained from ...
## Acknowledgements
---
I received inspiration for this project from X
# interative_front_end_design_project
