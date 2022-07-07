var questions = [
    {
        title: "All of the following are JavaScript Date Types EXCEPT:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within what?",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        title: "Arrays in Javascript can be used to store what?",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal/bash", "for-loops", "console-log"],
        answer: "console-log"
    },
  
  ];


  var score = 0;
  
  var qNum = 0;
  
  var exactTime = document.querySelector("#timer");
  
  var timer = document.querySelector("#startTimer");
  
  var questionsDiv = document.querySelector("#questions");
  
  var container = document.querySelector("#container");
  
  var secondsLeft = 75;

  var keepCost = 0;

  var cost = 15;

  var ulNew = document.createElement("ul");
  
  timer.addEventListener("click", function () {
    if (keepCost === 0) {
        keepCost = setInterval(function () {
            secondsLeft--;
            exactTime.textContent = "Time: " + secondsLeft;
  
            if (secondsLeft <= 0) {
                clearInterval(keepCost);
                allDone();
                exactTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(qNum);
  });
  
  function render(qNum) {
    
    questionsDiv.innerHTML = "";
    ulNew.innerHTML = "";
  
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[qNum].title;
        var userChoices = questions[qNum].choices;
        questionsDiv.textContent = userQuestion;
    }
   
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulNew);
        ulNew.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
  }
  
  function compare(event) {
    var element = event.target;
  
    if (element.matches("li")) {
  
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
      
        if (element.textContent == questions[qNum].answer) {
            score++;
            createDiv.textContent = "Correct! The answer was:  " + questions[qNum].answer;
        } else {
          
            secondsLeft = secondsLeft - cost;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[qNum].answer;
        }
  
    }
  
    qNum++;
  
    if (qNum >= questions.length) {
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(qNum);
    }
    questionsDiv.appendChild(createDiv);
  
  }
  
  function allDone() {
    questionsDiv.innerHTML = "";
    exactTime.innerHTML = "";
  
    
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"
  
    questionsDiv.appendChild(createH1);
  
   
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");
  
    questionsDiv.appendChild(createP);
  
 
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(keepCost);
        createP.textContent = "Your final score is: " + timeRemaining;
  
        questionsDiv.appendChild(createP2);
    }
  
  
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";
  
    questionsDiv.appendChild(createLabel);
  
 
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";
  
    questionsDiv.appendChild(createInput);
  
    
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";
  
    questionsDiv.appendChild(createSubmit);
  
  
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;
  
        if (initials === null) {
  
            console.log("No value entered!");
  
        } else {
            var endScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(endScore);
            var totalScores = localStorage.getItem("totalScores");
            if (totalScores === null) {
                totalScores = [];
            } else {
                totalScores = JSON.parse(totalScores);
            }
            totalScores.push(endScore);
            var newScore = JSON.stringify(totalScores);
            localStorage.setItem("totalScores", newScore);
            window.location.replace("./scores.html");
        }
    });
  
  }