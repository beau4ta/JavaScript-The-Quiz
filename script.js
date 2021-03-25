//setting global variables
var timerContain = document.querySelector(".timer-container");
var timeCount = document.querySelector(".time-count");
var timeLeft;

var currentScore = 0;
var startButton = document.querySelector(".start-button");
var clearButton = document.querySelector(".highscore-button")
var initials;

var currentQuestion = 0;
var correctAns = true;
var showHighscore = [];

//creating an array containing questions and answers
var questionAnswer = [
    {
        question: "What does JavaScript stand for?",
        answers: [
        " Just Average Video Applications Script",
        " JavaScript",
        " Nothing",
        " Join Amazing Versions of Awesome Script", 
    ],
        correct: "JavaScript"
    },
    {
        question: "How do you hide an element?",
        answers: [
        " You just do",   
        " You can't",
        " You can change the visibility by changing the CSS via JavaScript",
        " You can use a switch function that toggles visibility",
        ],
        correct: "You can change the visibility by changing the CSS via JavaScript"
    },
    {
        question: "What is an event listener?",
        answers: [
        " A function that 'listens' for an event to occur", 
        " A function that always makes an action happen on click",
        " An object inside of your HTML",
        " A cool, fast way to style your CSS",
        ],
        correct: "A function that 'listens' for an event to occur"
    },
    {
        question: "How do you select an element?",
        answers: [
        " document.querySelector()",
        " Click on it",
        " document.selectElement()",
        " Highlight the element",
        ],
        correct: "document.querySelector()"
    },
    {
        question: "How do you create a function?",
        answers: [
        " function myFunction();",
        " 2 + 2 = function",
        " ()function[example]",
        " All the above",
        ],
        correct: "function myFunction();"
    }
];

var scorePoints = 10;

function startQuiz() {
    hideStart();

    timeLeft = 120;
    countdown();

    currentScore = 0;
    getQuest();

    playAudio();

};



function getQuest() {

    var firstQuest = document.createElement("div");
    var someAns = document.createElement('div');
    var listQuest = document.createElement("h1");

        
        listQuest.textContent = questionAnswer[currentQuestion].question;
        listQuest.setAttribute("class", "question")
        firstQuest.appendChild(listQuest);

        questionAnswer[currentQuestion].answers.forEach(function (item) {
            console.log(item);
        var listAns = document.createElement("button");
        listAns.textContent = item;
        listAns.setAttribute("class", "answer-text")
        listAns.setAttribute("value", item)
        listAns.onclick = answerClick();
        someAns.appendChild(listAns);
        var questCon = document.querySelector(".question-container");
        questCon.appendChild(firstQuest);
        var answerCon = document.querySelector(".answer-container");
        answerCon.appendChild(someAns);
 
     });
     
     function answerClick() {
        console.log(this.value)
        }

        if (this.value === questionAnswer[currentQuestion].correct) {
               currentQuestion++;
               questCon.innerHTML = ''
               answerCon.innerHTML = ''
               getQuest();
           } else { 
               
        };
    
    }

  
        

    
 
function hideStart() {
    // hides start button/card
    var startCard = document.querySelector(".card");
    if (startCard.style.display === "none") {
        startCard.style.display = "block"
    } else {
        startCard.style.display = "none"
    };
};

function getInitials() {
    initials = prompt("Enter Initials");

    if (initials)
    initials = localStorage.setItem("initials")


        };

        console.log(localStorage.setItem("initials", initials));

    

function showHigh (){

    var showScore = document.createElement("div")
    var showInitials = document.createElement("div")
    var listInitials = document.createElement("td");
    var listScore = document.createElement("td");
    var initialCon = document.querySelector(".initials-container")
    var scoreCon = document.querySelector(".score-container")


    showHighscore.forEach(function (showScore) {
        showScore.textContent = localStorage.getItem("scores");
        console.log(scoreCon);
       });
    
    listInitials.textContent = localStorage.getItem("initials");   
    showInitials.appendChild(listInitials);
    initialCon.appendChild(showInitials);
    showInitials.setAttribute("class", "initial-style")
    
    listScore.textContent = localStorage.getItem("Scores")
   showScore.appendChild(listScore);
   scoreCon.appendChild(showScore);
   showScore.setAttribute("class", "score-style")

   
   
    
};

function countdown() {
    //set timer
    timerContain = setInterval(function() {
        timeLeft--;
        timeCount.textContent = timeLeft

        if (timeLeft === 0) {
            clearInterval(timerContain);
            getInitials();
            saveScore();
        }
    }, 1000);
    
};

function playAudio() {
    var song = document.querySelector(".song")
    song.play();

};


function saveScore() {
score.textContent = currentScore;
localStorage.setItem("scores", currentScore);
};

//starts quiz on click, triggering other functions
startButton.addEventListener("click", startQuiz);