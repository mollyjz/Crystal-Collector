//GLOBAL VARIABLES

var wins = 0; //only on load
var losses = 0; //only on load
var targetScore = Math.floor(Math.random()*(120-19+1)+19);
var userScore;
var crystals = $("#crystals");
var crystalValue;
var crystalValueOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //need to list randomly??
var crystalImageOptions = [
    "assets/images/crystal1.jpg",
    "assets/images/crystal2.jpg",
    "assets/images/crystal3.jpg",
    "assets/images/crystal4.jpg"
];
var imageIndex = Math.floor(Math.random()*4+1); //to select random image from the 4 options


////////////////////////////////////////////////////

//GLOBAL FUNCTION

function startGame() { //restart game, but don't reset wins & losses!
    $("#target-number").text(targetScore); //print target score to corresponding div
    for (var i = 0; i < 4; i++) {  //run for-loop function 4 times (once for each crystal)
        var imageCrystal = $("<img>"); //create image for crystal
        imageCrystal.addClass("crystal-image"); //add CSS class to crystal image
        imageCrystal.attr("src", crystalImageOptions[imageIndex]); //assign randomly selected src to crystal image
        imageCrystal.attr("data-crystalvalue", crystalValueOptions[i]); //assign random value to crystal image
        crystals.append(imageCrystal); //append crystal image to the page
    }
    crystals.on("click", ".crystal-image", function() {
        var crystalValue = ($(this).attr("data-crystalvalue")); //grab value of each crystal
        crystalValue = parseInt(crystalValue); //convert from string to integer
        userScore += crytalValue; //add crystal's value to user's score each time any crystal is clicked
        $("#scoreboard").text(userScore); //print new user score to scoreboard
        if (userScore === targetScore) { //if user's score is equal to target score...
            $("#win-loss-msg").html("You won!"); //display win message, add 1 to wins, restart game
            wins++;
            startGame();
        } else if (userScore > targetScore) { //if user's score exceeds target score...
            $("#win-loss-msg").html("You lost!"); //display loss message, add 1 to losses, restart game
            losses++;
            startGame();
        }
    });
}


//this all needs to be in jQuery!!!! Do in JS and then translate to jQuery? And get ideas from last assignment! And from "solved" version, and class assignments! And solved crystals game from class!



////////////////////////////////////////////////////

//MAIN FUNCTIONALITY

$(document).ready(function() {
    startGame();
});