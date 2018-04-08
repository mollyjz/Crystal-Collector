//GLOBAL VARIABLES & FUNCTIONS

var wins = 0;
var losses = 0;
var targetScore = Math.floor(Math.random()*(120-19+1)+19);
var userScore = 0;
var crystalValueIndex = Math.floor(Math.random()*(12-1+1)+1);
var crystalImageOptions = [
    "assets/images/crystal1.jpg",
    "assets/images/crystal2.jpg",
    "assets/images/crystal3.jpg",
    "assets/images/crystal4.jpg"
];

function startGame() { //load 4 crystal images and their values
    userScore = 0; //reset user score 
    targetScore = Math.floor(Math.random()*(120-19+1)+19); //reset target score
    $("#scoreboard").text(userScore);
    $("#target-number").text(targetScore); //print target score to corresponding div
    $(".crystals").empty();
    for (var i = 0; i < crystalImageOptions.length; i++) {  //run for-loop function 4 times (once for each crystal)
        var crystalValueIndex = Math.floor(Math.random()*(12-1+1)+1);
        var crystalImage = $("<img>");
        crystalImage.addClass("crystal-image"); //add label for CSS class
        crystalImage.attr({
            "src": crystalImageOptions[i],
            "data-crystalvalue": crystalValueIndex
        });
        $(".crystals").append(crystalImage); //append crystal image to the page
    }
}

////////////////////////////////////////////////////

//CALLING MAIN GAME FUNCTIONS

$(document).ready(function() {
    startGame();
    //console.log("testing"); (***WORKS***)
    $(".crystals").on("click", ".crystal-image", function() {
        var crystalValue = ($(this).attr("data-crystalvalue")); //grab value of each crystal
        //console.log("testing");
        crystalValue = parseInt(crystalValue); //convert from string to integer
        userScore += crystalValue; //add crystal's value to user's score each time any crystal is clicked
        $("#scoreboard").text(userScore); //print updated user score
        if (userScore === targetScore) { //if user's score is equal to target score...
            $("#win-loss-msg").text("You won!"); //display win message, add 1 to wins, restart game
            wins++;
            $("#wins").text(wins);
            startGame();
        } else if (userScore > targetScore) { //if user's score exceeds target score...
            $("#win-loss-msg").text("You lost!"); //display loss message, add 1 to losses, restart game
            losses++;
            $("#losses").text(losses);
            startGame();
        }
    });
});