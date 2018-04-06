//GLOBAL VARIABLES & FUNCTIONS

var wins = 0; //only on load
var losses = 0; //only on load
var targetScore = Math.floor(Math.random()*(120-19+1)+19);
var userScore = 0;
var crystals = $("#crystals");
var crystalValueIndex = Math.floor(Math.random()*(12-1+1)+1);
var crystalImageOptions = [ //array of crystal images
    "assets/images/crystal1.jpg",
    "assets/images/crystal2.jpg",
    "assets/images/crystal3.jpg",
    "assets/images/crystal4.jpg"
];
var crystalImageIndex = Math.floor(Math.random()*4+1); //to select random image from the 4 options

function startGame() { //load 4 crystal images and their values
    $("#target-number").text(targetScore); //print target score to corresponding div
    for (var i = 0; i < 4; i++) {  //run for-loop function 4 times (once for each crystal)
        var crystalImage = $("<img>"); //create image tag for crystal
        crystalImage.addClass("crystal-image"); //add label for CSS class
        crystalImage.attr("src", crystalImageOptions[crystalImageIndex]); //assign randomly selected image
        crystalImage.attr("data-crystalvalue", crystalValueIndex); //assign random value to crystal image
        crystals.append(crystalImage); //append crystal image to the page
    }
}

////////////////////////////////////////////////////

//CALLING MAIN GAME FUNCTIONS

$(document).ready(function() {
    startGame();
    //console.log("testing"); (***WORKS***)
    crystals.on("click", ".crystal-image", function() {   //THIS DOESN'T WORK!!!!!!!!!!!!!!!!!!!!!!!!!
        var crystalValue = ($(this).attr("data-crystalvalue")); //grab value of each crystal
        //console.log("testing");   //THIS DOESN'T WORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
        crystalValue = parseInt(crystalValue); //convert from string to integer
        userScore += crytalValue; //add crystal's value to user's score each time any crystal is clicked
        $("#scoreboard").text(userScore); //print updated user score
        if (userScore === targetScore) { //if user's score is equal to target score...
            $("#win-loss-msg").text("You won!"); //display win message, add 1 to wins, restart game
            wins++;
            startGame();
        } else if (userScore > targetScore) { //if user's score exceeds target score...
            $("#win-loss-msg").text("You lost!"); //display loss message, add 1 to losses, restart game
            losses++;
            startGame();
        }
    });
});