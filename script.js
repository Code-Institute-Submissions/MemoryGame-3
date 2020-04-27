 
// 1. create and assign variables and retrieve necessary html ids.
var record = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var imgRec = [];

var rand;

var flipIndex = 0;

var cardTextrec = [];

var cardRec = [];

var cardNum;

var front;

var back;

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

var secsInput = 60;

var seconds = secsInput;

var gameOver = false; 

// 2. Make the flipping work.
memory.addEventListener("click", function(e) {
    var el = e.target.parentElement;
    var numId = el.id;
    if (Number.isInteger(parseInt(numId.replace("back",""), 10))){
        cardClick(el.parentElement.id);
    }
    else {
        cardClick(numId);
    }
    
});

function cardClick(cardId){
    var cardNum = cardId.replace("card", "");
    var cardNum = parseInt(cardNum,10);
    
    if(record[cardNum-1] == 0 && cardChk == 0 && gameOver == false) {
    
    var front = document.getElementById("front" + cardNum);
    
    var back = document.getElementById("back" + cardNum);
    
    front.style.transform = "rotateY(-180deg)";
   
    back.style.transform = "rotateY(0deg)";
        
    cardTextrec.push(back.innerHTML);
    cardRec.push(cardNum);
     
    flipIndex++;
     record[cardNum= 1] = 1;  
        
  // 3. basic game - no randomization, no timer. just the basic concepts ie. comparing and alert box
        
    if (flipIndex == 2 ) {
        // compare both flipped cards 
        if (cardTextrec[0] == cardTextrec[1]) {
            correct++;
            scoreEl.innerHTML = "score: " +correct;
            cardRec = [];
            cardTextrec = [];
            flipIndex = 0;
            
            if (correct == 10) {
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
            setTimeout(function(){flipBack();}, 1000);
            return;
        }
    }
} 
    
 if (gameOver == true) {
     alert("Game Over! Click the new game button to try again!");
 }   
       
}

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
    cardTextrec = [];
    cardRec = [];
    flipIndex = 0;
    cardChk = 0;
}





// 4. new game button
newGame.addEventListener("click", newClick);

function newClick(){
    window.location.reload();
}

// 5. randomize the game on loading - also create img.js file.
function newBoard (){ //caled on window load
    for (var i=0; i<20; i++){
        if(i==0){
            //Math.random -> generates decimal random numbers 0 - 1
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

// 6. create timer 
function startTimer(secs){
    timer.innerHTML = "00:" + secs;
    
    if (secs == 0){
        //stop timer.
        clearTimeout(countdown);
        setTimeout(function(){displayResult();}, 800);
        timer.innerHTML = "00:00";
        return;
    }
    
    secs--;
    // create recurring function so that it keeps calling itself with new arguments 
    //so that the timer goes down. 
    countdown = setTimeout(function(){startTimer(secs)}, 1000 );
}
// 7. make it pretty.

 function displayResult() {
     gameOver = true;
     
     var width = window.innerWidth;
     opacityD.style.display = "block";
     result.style.display = "block";
     result.style.left = (width/2) - (500/2) +"px";
     result.style.top = 150 +"px";
     
     if (correct == 10){
         h1Res.innerHTML = "Congrats! You win!";
         pRes.innerHTML = "You've scored " + correct + " points!";
     }
     
     else {
         h1Res.innerHTML = "Unlucky! Try again!";
         pRes.innerHTML = "You've scored " + correct + " points!";
         
     }
 } 

var popButton = document.getElementById("popButton");

popButton.addEventListener("click", okayClick);

function okayClick(){
    result.style.display = "none";
    opacityD.style.display = "none";
}

//call the new board function on loading.
window.onload = newBoard();


