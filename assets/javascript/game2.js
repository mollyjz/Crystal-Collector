//GLOBAL VARIABLES & FUNCTIONS


// after win/loss message is displayed and the user clicks a crystal for the first time, message should be cleared -- use timer??


//initial values (on load)
$("#win-loss-msg").text("");
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

function clearMsg() {
    $("#win-loss-msg").text("");
};

function restartGame() { //load 4 new crystal images and their values
    userScore = 0; //reset user score 
    targetScore = Math.floor(Math.random()*(120-19+1)+19); //reset target score
    $("#scoreboard").text(userScore); //print score
    $("#target-number").text(targetScore); //print target score
    $(".crystals").empty(); //display crystals and assign values
    for (var i = 0; i < crystalImageOptions.length; i++) {  //run for-loop function 4 times (once for each crystal)
        var crystalValueIndex = Math.floor(Math.random()*(12-1+1)+1);
        var crystalImage = $("<img>");
        crystalImage.addClass("crystal-image"); //add label for CSS class
        crystalImage.attr({
            "src": crystalImageOptions[i],
            "data-crystalvalue": crystalValueIndex
        });
        $(".crystals").append(crystalImage); //append crystal image to the page
    };
    setTimeout(clearMsg, 4000);
};

////////////////////////////////////////////////////

//CALLING MAIN GAME FUNCTIONS

$(document).ready(function() {
    //on load...
    $("#scoreboard").text(userScore); //print user score
    $("#target-number").text(targetScore); //print target score to corresponding div
    $(".crystals").empty();
    for (var i = 0; i < crystalImageOptions.length; i++) {  //append crystal images to page
        var crystalValueIndex = Math.floor(Math.random()*(12-1+1)+1);
        var crystalImage = $("<img>");
        crystalImage.addClass("crystal-image"); //add label for CSS class
        crystalImage.attr({
            "src": crystalImageOptions[i],
            "data-crystalvalue": crystalValueIndex
        });
        $(".crystals").append(crystalImage); //append crystal image to the page
    };

    $(".crystals").on("click", ".crystal-image", function() { //on click, add to score based on crystal's value
        var crystalValue = ($(this).attr("data-crystalvalue")); //grab value of each crystal
        crystalValue = parseInt(crystalValue);
        userScore += crystalValue; //add crystal's value to user's score
        $("#scoreboard").text(userScore); //print updated score
        if (userScore === targetScore) { //if user's score is equal to target score...
            $("#win-loss-msg").text("You won!"); //display win message, add 1 to wins, restart game
            wins++;
            $("#wins").text(wins);
            restartGame();
        } else if (userScore > targetScore) { //if user's score exceeds target score...
            $("#win-loss-msg").text("You lost!"); //display loss message, add 1 to losses, restart game
            losses++;
            $("#losses").text(losses);
            restartGame();
        }
    });

});