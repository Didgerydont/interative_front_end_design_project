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
| On/Off | This button will turn on and off the sound on the page. The sound starts as default to begin|


The game will consist of multiple buttons, there will a start button, a reset button and one button for each of the four colours. There is also be a button for turning on
and off the sound options on the colours.


## Existing Features
---

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

Features Left to Implement
Another feature idea
Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

## JQuery / Javascript
---
The project uses JQuery and Javascript for DOM manipulation.


## Testing
---
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

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
(GITHUB PAGES) This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

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
