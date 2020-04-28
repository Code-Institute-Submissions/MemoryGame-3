 
// 1. create and assign variables and retrieve necessary html ids.
var record = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // array to store all the images.

var imgRec = [];

var rand;

var flipIndex = 0; //increases every time a card is clicked

var cardTextrec = []; //empty array which is altered everytime a card is clicked

var cardRec = []; //empty array which is altered everytime a card is clicked

var cardNum;

var front; //the front of the card. i.e the ?

var back; // back of the card i.e the flag.

var cardChk = 0;

var correct = 0; //score

var memory = document.getElementById("game");

var timer = document.getElementById("timer");

var scoreEl = document.getElementById("score");

var newGame = document.getElementById("new");

var result = document.getElementById("result");

var opacityD = document.getElementById("opacityD");

var h1Res = document.getElementById("h1Res");

var pRes = document.getElementById("pRes");

var status = 0;

var countdown;

var secsInput = 90; //how many seconds you have to complete the game

var seconds = secsInput;

var gameOver = false; // set as false unless all cards are matched or time runs out. will then be changed to true. Which will trigger the alert display.

// 2. Make the flipping work.
// addeventlistener on the entire game grid which triggers the event function.
// el variable is the parent element of the clicked area. i.e the div
memory.addEventListener("click", function(e) {
    var el = e.target.parentElement;
    // numId is the id of the clicked div. ie either back+no. or front+no.
    var numId = el.id;
    //replaces the back with an empty string so that it is just the number. it is then changed into an integer, and checked it is an integer
    if (Number.isInteger(parseInt(numId.replace("back",""), 10))){
        cardClick(el.parentElement.id);
    }
    else {
        cardClick(numId);
    }
    
});

// defines the cardclick function that is used when flipping the card.
function cardClick(cardId){
    var cardNum = cardId.replace("card", ""); //replaces the card with and empty string
    var cardNum = parseInt(cardNum,10); //turns the remaining number into an integer
    
    if(record[cardNum-1] == 0 && cardChk == 0 && gameOver == false) {
    
    var front = document.getElementById("front" + cardNum); //retrieves the front card
    
    var back = document.getElementById("back" + cardNum); //retrieves back card.
    
    front.style.transform = "rotateY(-180deg)"; //changes the style of the front card to flip it
   
    back.style.transform = "rotateY(0deg)"; //changes the style of the back card to flip it
        
    cardTextrec.push(back.innerHTML);
    cardRec.push(cardNum); //pushes the cardnum variable into the cardrec array
     
    flipIndex++; // increments the flip index by one every click
     record[cardNum= 1] = 1;  
        
  // 3. basic game - no randomization, no timer. just the basic concepts ie. comparing and alert box
        
    if (flipIndex == 2 ) {
        // compare both flipped cards 
        if (cardTextrec[0] == cardTextrec[1]) {
            correct++; //if matched increase the score by 1
            scoreEl.innerHTML = "score: " +correct; //manipulates the DOM to alter score.
            cardRec = []; //if macthed refresh all following to orginal values so a new comparison can be made
            cardTextrec = [];
            flipIndex = 0;
            
            if (correct == 10) { //if all pairs are matched, stop time out and display results
                // stop timer call here!
                clearTimeout(countdown);
                //display result and stop game. 
                setTimeout(function(){displayResult();}, 800); //delay display by 600 milliseconds
            }
            return;
        }
        else {
            //flip back because they are not the same.
            cardChk = 1;
            //call flipback function on a delay of 600 milliseconds
            setTimeout(function(){flipBack();}, 500);
            return;
        }
    }
} 
    
 if (gameOver == true) {
     alert("Game Over! Click the new game button to try again!");
 }   
       
}

//defines the flip back function which is called if cards do not match
function flipBack(){
    front = document.getElementById("front" + cardRec[0]);
    back = document.getElementById("back" + cardRec[0]);
    front.style.transform = "rotateY(0deg)";
    back.style.transform = "rotateY(180deg)";
    
    front = document.getElementById("front" + cardRec[1]);
    back = document.getElementById("back" + cardRec[1]);
    front.style.transform = "rotateY(0deg)";
    back.style.transform = "rotateY(180deg)";
    
    record[cardRec[0]-1] = 0;
    record[cardRec[1]-1] = 0;
    cardTextrec = []; //refreshes variables to original so that a new click and comparison can be done.
    cardRec = [];
    flipIndex = 0;
    cardChk = 0;
}

// 4. new game button
newGame.addEventListener("click", newClick); //addeventlistener onto button to reload page

function newClick(){
    window.location.reload(); // reloads page every time the new game button is clicked.
}

// 5. randomize the game on loading - also create img.js file.
function newBoard (){ //called on window load
    for (var i=0; i<20; i++){ //i<20 because we have 20 cards.
        if(i==0){
            //Math.random -> generates decimal random numbers 0 - 1
            //math.round then rounds the number to the closest integer.
            rand = Math.round(Math.random() * images.length);
            while (rand == images.length) {
                rand = Math.round(Math.random() * images.length);
            }
            
            imgRec[i] = rand;
        }
        else { //generate unique random values - not in imgRec array 
            while (status == 0){
                rand = Math.round(Math.random() * images.length);
                if (rand !== images.length){
                    for (var j=0; j<imgRec.length; j++){
                        if(rand == imgRec[j]) {
                            break;
                        }
                        else if(j == imgRec.length - 1){
                            status = 1;
                            imgRec[i] = rand;
                        }
                            
                        
                    }
                }
            }
        }
      status = 0;  
        document.getElementById("back" + (i+1)).innerHTML = images[rand];
    }
    //call timer
    startTimer(seconds);
}

// 6. create timer using the settimeout function.
function startTimer(secs){
    timer.innerHTML = secs + " secs";
    
    if (secs == 0){
        //stop timer.
        clearTimeout(countdown);
        setTimeout(function(){displayResult();}, 800);
        timer.innerHTML = "0 secs";
        return;
    }
    
    secs--;
    // create recurring function so that it keeps calling itself with new arguments 
    //so that the timer goes down. 
    countdown = setTimeout(function(){startTimer(secs)}, 1000 ); //puts a delay of one secod on the timer function so it decreases one second at a time.
}

 function displayResult() {
     gameOver = true; //removes the display none css styling so that it shows once the gameover = true
     
     var width = window.innerWidth;
     opacityD.style.display = "block";
     result.style.display = "block";
     result.style.left = (width/2) - (500/2) +"px"; // centres it in middle of page
     result.style.top = 150 +"px";
     
     if (correct == 10){ // if all are matched a congrats alert will show
         h1Res.innerHTML = "Congrats! You win!";
         pRes.innerHTML = "You've scored " + correct + " points!";
     }
     
     else { // if they are not all matched an 'unlucky' alert will show
         h1Res.innerHTML = "Unlucky! Try again!";
         pRes.innerHTML = "You've scored " + correct + " points!";
         
     }
 } 

var popButton = document.getElementById("popButton");

popButton.addEventListener("click", okayClick);

// adding an event listener to the button.

function okayClick(){ // changes display back to none so that it is hidden and game grid is on view again.
    result.style.display = "none";
    opacityD.style.display = "none";
}

//call the new board function on loading. whenever page is refreshed the newboard function is called to shuffle cards.
window.onload = newBoard();




