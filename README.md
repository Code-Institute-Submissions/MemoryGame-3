#MEMORY GAME 

Memory Game is an interactive front end website which tests the users memory. 
Built with Javaascript, the user has 90 seconds to mactch 10 pairs of cards.

The website has an introductions page, with instructions on how to play the game. The 'PLAY' button then takes the user to a new page with the interactive game on it. 

Either after the users matches all ten cards OR the timer runs out an alert will show telling the user their scores, with an option to play a new game. 

#UX

The project is aimed at the younger generation or anyone who is wanting to improve their memory. 
It is made with bright colours to engage the user from the beginning. 
The timer is incorporated to motivate the user to complete the game as fast as possible so they can win. 

#USER STORIES 
As a user, I want clear instructions, so that I know how to play the game before I start.

As a user, I want a timer displayed, so that I know how much time I have left to match all the pairs.

As a user, I was my score displayed, so that I know what my score is throughout the game. 

As a user, I want the total score to be displayed at the end, so that I know what I have to beat the next time I play. 

As a user, I want a 'new game' button, so that I have the option to play again. 

As a user, I want the cards to be randomly shuffled each game, so that it is different every time. 

#FEATURES 
1. Cards reshuffled every new game:
To do this I used the math.random and math.round method. This allows the user to have a unique experience every time they play the game.

2. Score count. 
This increments the score variable by one everytime a match is made to allow the user to track progress. The maximum score a user can achieve it 10. 

3. Timer 
The timer starts at 90 seconds. It was made using the setInterval method to decrement the seconds input by one with a delay of 1000milliseconds. 

5. Alert if users wins or loses. 
An alert is shown if the user matches all 10 cards or if the timer runs out. The alert tells the user what their final score is and gives an option to play again. 

###FEATURES LEFT TO IMPLEMENT 
A feature I would like to add is differnt levels that the user can choose from:
Easy - gives the user 120 seconds to complete the game.
Intermediate - gives the user 90 seconds to complete the game.
Hard - gives the user 60 seconds to complete the game.

Another feature I would like to use in the future is the external library JQuery to help simplify the code and 'tidy' it up by writing less. 

#TECHNOLOGIES USED 
1.Font awesome. I used icons from font awesome on the introduction page.https://fontawesome.com/icons?d=gallery

2. Google fonts. I used the font 'pernament marker' throughout the website. https://fonts.google.com/

3. Bootstrap. An external library to help with the styling of the website and making it mobile resonsive. https://getbootstrap.com/

4. Figma. Used to make mock-ups of the website. 

5. Trello. Used as a project management tool to divide the task up to make it more manageable.

#TESTING 
I ran test throughout my writing to make sure that all the codes worked correctly:
1. The "PLAY" button was linked correctly. 
2. The cards flipped back over if they were a match. 
3. The cards stay flipped if they were a match. 
4. The congrats alert showed ONLY if all the cards were matched in time.
5. The unlucky alert showed ONLY if the timer ran out before the user matched all the cards. 
6. I then used the W3C html and css checker https://validator.w3.org on the code for each page of my website, I then fixed any errors.

#DEPLOYMENT 
I used GitHub as the local repository for my website. I made sure to commit any new work frequently to ensure that no work was lost and that it was all kept up-to-date.
The code was then locally deployed by going into the settings on my repository and publishing the code to get a local link. https://cnridley.github.io/MemoryGame/.

#MEDIA
I found all the pictures of the flags on the icon archive website. http://www.iconarchive.com/

#ACKNOWLEDGEMENTS
I recieved inspiration for this project from Tania Rascia who has a GitHub page and a blog on coding, she has a mario inspired memory game. 







