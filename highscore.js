var highScoreButton = document.querySelector(".highscore-button")

function showHigh (){

    var showScore = document.createElement("div")
    var showInitials = document.createElement("div")
    var listInitials = document.createElement("tr");
    var listScore = document.createElement("tr");
    var initialCon = document.querySelector(".initials-container")
    var scoreCon = document.querySelector(".score-container")


    // showHighscore.forEach(function (showScore) {
    //     showScore.textContent = localStorage.getItem("Score");
    //     console.log(scoreCon);
    //    });
    
    listInitials.textContent = localStorage.getItem("initials");   
    showInitials.appendChild(listInitials);
    initialCon.appendChild(showInitials);
    showInitials.setAttribute("class", "initial-style")
    
    listScore.textContent = localStorage.getItem("Score")git
    showScore.appendChild(listScore);
    scoreCon.appendChild(showScore);
    showScore.setAttribute("class", "score-style")
 
};
showHigh();

highScoreButton.addEventListener("click", localStorage.clear);