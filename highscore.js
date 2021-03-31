//selects highscore button from html
var highScoreButton = document.querySelector(".highscore-button")

function showHigh (){
    //gets score/initials from local storage
    var score = JSON.parse(localStorage.getItem("Score"));
    //for each highscore creates a space for initals and score to be listed
    score.forEach(function (person) {
       //creates container, rows, and score/initial areas
        var initialCon = document.querySelector(".initials-container")
        var scoreCon = document.querySelector(".score-container")
        var showScore = document.createElement("div")
        var showInitials = document.createElement("div")
        var listInitials = document.createElement("td");
        var listScore = document.createElement("td");
        //adds score/initials to corresponding areas
        listInitials.textContent = person.initials
        listScore.textContent = person.score 
        //appends rows and score/initial areas to page containers
        showScore.appendChild(listScore);
        showInitials.appendChild(listInitials);
        scoreCon.appendChild(showScore);
        initialCon.appendChild(showInitials);
        //styles score/intials
        showInitials.setAttribute("class", "initial-style")
        showScore.setAttribute("class", "score-style")
    })
};
//calls function to show highscores
showHigh();
