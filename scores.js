//The variables specific to js on the scores.html page
var highScore = document.querySelector("#highscores");
var reset = document.querySelector("#reset");
var back = document.querySelector("#back");
// Function call and storage of the resetting of scores
reset.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});
//display and store name, scores of quiz history.
var totalScores = localStorage.getItem("totalScores");
totalScores = JSON.parse(totalScores);

if (totalScores !== null) {

    for (var i = 0; i < totalScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = totalScores[i].initials + " " + totalScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Return to the original page to begin quiz again
back.addEventListener("click", function () {
    window.location.replace("./index.html");
});