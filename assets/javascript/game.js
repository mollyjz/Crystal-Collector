//GLOBAL VARIABLES & FUNCTIONS

var wins = 0; //only on load
var losses = 0; //only on load
var targetScore = Math.floor(Math.random()*(120-19+1)+19); //to generate target score  (***WORKS***)
var userScore = 0;
var crystals = $("#crystals");
//var crystalValue;   // (***NOT WORKING***)
var crystalValueIndex = Math.floor(Math.random()*(12-1+1)+1);   //((***WORKS***))
//var crystalImage;
var crystalImageOptions = [ //array of crystal images
    "assets/images/crystal1.jpg",
    "assets/images/crystal2.jpg",
    "assets/images/crystal3.jpg",
    "assets/images/crystal4.jpg"
];
var crystalImageIndex = Math.floor(Math.random()*4+1); //to select random image from the 4 options (***WORKS***)

function createCrystals() {   //(***NOT WORKING***)
    //console.log("testing"); (***WORKS***)
    for (var i = 0; i < 4; i++) {  //run for-loop function 4 times (once for each crystal)
        var crystalImage = $("<img>"); //create image tag for crystal
        crystalImage.addClass("crystal-image"); //add label for CSS class
        crystalImage.attr("src", crystalImageOptions[crystalImageIndex]); //assign randomly selected image
        crystalImage.attr("data-crystalvalue", crystalValueIndex); //assign random value to crystal image
        crystals.append(crystalImage); //append crystal image to the page
        //console.log("testing"); (***WORKS***)
    }
}

function startGame() { //start game
    //console.log("testing"); (***WORKS***)
    createCrystals(); //for-loop to create images)
    $("#target-number").text(targetScore); //print target score to corresponding div
    crystals.on("click", ".crystal-image", function() { //(***NOT SURE IF WORKS SINCE CAN'T CLICK ON CRYSTALS***)
        var crystalValue = ($(this).attr("data-crystalvalue")); //grab value of each crystal
        crystalValue = parseInt(crystalValue); //convert from string to integer
        userScore += crytalValue; //add crystal's value to user's score each time any crystal is clicked
        $("#scoreboard").text(userScore); //print updated user score
        //console.log("testing"); (***NOT WORKING***)
        if (userScore === targetScore) { //if user's score is equal to target score...
            $("#win-loss-msg").text("You won!"); //display win message, add 1 to wins, restart game
            wins++;
            startGame();
        } else if (userScore > targetScore) { //if user's score exceeds target score...
            $("#win-loss-msg").text("You lost!"); //display loss message, add 1 to losses, restart game
            losses++;
            startGame();
        }
        //console.log("testing"); (***NOT WORKING***)
    });
}



////////////////////////////////////////////////////

//CALLING MAIN GAME FUNCTION

$(document).ready(function() {
    startGame();
});