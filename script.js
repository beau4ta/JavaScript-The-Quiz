//setting global variables
var timerContain = document.querySelector(".timer-container");
var answerCon = document.querySelector(".answer-container");
var questCon = document.querySelector(".question-container");
var song = document.querySelector(".song")
var startCard = document.querySelector(".card");
var startTitle = document.querySelector(".start-title")
var subTitle = document.querySelector(".sub-title")
var timeCount = document.querySelector(".time-count");
var timeLeft = 10
var timeDeduct = 10;
var score = 0;
var scorePoints = 10;
var currentScore = document.querySelector(".current-score")
var startButton = document.querySelector(".start-button");
var highScoreButton = document.querySelector(".highscore-button")
var refreshButton = document.querySelector(".refresh-button")
var initials;
//setting the questions to the start of the array
var currentQuestion = 0;

//creating an array containing questions and answers
var questionAnswer = [
    {
        question: "What does JavaScript stand for?",
        answers: [
        "Just Average Video Applications Script",
        "JavaScript",
        "Nothing",
        "Join Amazing Versions of Awesome Script", 
    ],
        correct: "JavaScript"
    },
    {
        question: "How do you hide an element?",
        answers: [
        "You just do",   
        "You can't",
        "You can change the visibility by changing the CSS via JavaScript",
        "You can use a switch function that toggles visibility",
        ],
        correct: "You can change the visibility by changing the CSS via JavaScript"
    },
    {
        question: "What is an event listener?",
        answers: [
        "A function that 'listens' for an event to occur", 
        "A function that always makes an action happen on click",
        "An object inside of your HTML",
        "A cool, fast way to style your CSS",
        ],
        correct: "A function that 'listens' for an event to occur"
    },
    {
        question: "How do you select an element?",
        answers: [
        "document.querySelector()",
        "Click on it",
        "document.selectElement()",
        "Highlight the element",
        ],
        correct: "document.querySelector()"
    },
    {
        question: "How do you create a function?",
        answers: [
        "function myFunction();",
        "2 + 2 = function",
        "()function[example]",
        "All the above",
        ],
        correct: "function myFunction();"
    }
];
//hide refresh button at page load
function init() {
    refreshButton.classList.add("hide");
    currentScore.textContent = score; 
};
init();

//play audio on start
function playAudio() {
    song.play();
};

//stop audio at endGame();
function stopAudio() {
    song.pause();
}

function hideStart() {
    // hides start button/card
    startCard.classList.add("hide");
    //hides subtitle
    subTitle.classList.add("hide");
    //hides refresh button
    
};

function countdown() {
    //set timer
    timerContain = setInterval(function() {
        timeLeft--;
        timeCount.textContent = timeLeft

        //trigger functions when timer hits 0
        if (timeLeft <= 0) {
            clearInterval(timerContain);
            saveScore();
            stopAudio();
            endGame();
        }
    }, 1000);
    
};

//trigger functions on start
function startQuiz() {
    hideStart();
    countdown();
    getQuest();
    playAudio();

};

//function to cycle through questions
function getQuest() {

    var firstQuest = document.createElement("div");
    var someAns = document.createElement('div');
    var listQuest = document.createElement("h1");

        if (currentQuestion > questionAnswer.length) {
            endGame();
        };

        listQuest.textContent = questionAnswer[currentQuestion].question;
        listQuest.setAttribute("class", "question")
        firstQuest.appendChild(listQuest);

        questionAnswer[currentQuestion].answers.forEach(function (item) {
            
    var listAns = document.createElement("button");
        listAns.textContent = item;
        listAns.setAttribute("class", "answer-text")
        listAns.setAttribute("value", item)
        listAns.onclick = answerClick;
        someAns.appendChild(listAns);
        questCon.appendChild(firstQuest);
        answerCon.appendChild(someAns);

        function answerClick() {
        
            if (this.value === questionAnswer[currentQuestion].correct) {
                   currentQuestion++;
                   questCon.innerHTML = '';
                   answerCon.innerHTML = '';
                   getQuest();
                   listAns.classList.add("correct");
                   currentScore.textContent = score + scorePoints;
                   score = score + scorePoints;

                   if (currentQuestion > 4) {
                       endGame();
                   }
    
               } else {
                timeCount.textContent = timeLeft - timeDeduct
                timeLeft = timeLeft - timeDeduct
               };
            
            if (this.value !== questionAnswer[currentQuestion].correct) {
                listAns.classList.add("incorrect");
            }  
        };
     });
            
    };

    

function getInitials() {
    initials = prompt("Enter Initials");

    if (initials)
    initials = localStorage.setItem("initials", initials);
};


function endGame() {
    getInitials();
    stopAudio();
    saveScore();
    startCard.classList.remove("hide");
    startButton.classList.add("hide");
    startTitle.classList.add("hide");
    refreshButton.classList.remove("hide");
    score = currentScore;
}

function saveScore() {
localStorage.setItem("Score", score)
};

//starts quiz on click, triggering other functions
startButton.addEventListener("click", startQuiz);