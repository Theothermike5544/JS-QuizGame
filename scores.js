var highScore = document.querySelector("#highscores");
var reset = document.querySelector("#reset");
var back = document.querySelector("#back");

reset.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

var totalScores = localStorage.getItem("totalScores");
totalScores = JSON.parse(totalScores);

if (totalScores !== null) {

    for (var i = 0; i < totalScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = totalScores[i].initials + " " + totalScores[i].score;
        highScore.appendChild(createLi);

    }
}

back.addEventListener("click", function () {
    window.location.replace("./index.html");
});