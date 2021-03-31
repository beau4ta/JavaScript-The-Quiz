//setting global variables
var timerContain = document.querySelector(".timer-container");
var answerCon = document.querySelector(".answer-container");
var questCon = document.querySelector(".question-container");
var song = document.querySelector(".song")
var startCard = document.querySelector(".card");
var startTitle = document.querySelector(".start-title")
var subTitle = document.querySelector(".sub-title")
var timeCount = document.querySelector(".time-count");
var timeLeft = 120
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
    //shows starting score = 0
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
    timerContain = setInterval(function () {
        //takes times down one interval
        timeLeft--;
        //displays time on page
        timeCount.textContent = timeLeft
        //trigger functions when timer hits 0
        if (timeLeft <= 0) {
            clearInterval(timerContain);
            saveScore();
            stopAudio();
            endGame();
        }
        //counts by one second
    }, 1000);

};

//trigger functions on start
function startQuiz() {
    //hides title and sub title
    hideStart();
    //starts timer
    countdown();
    //gets first question
    getQuest();
    //plays music
    playAudio();

};

//function to cycle through questions
function getQuest() {
    //creating elements 
    var firstQuest = document.createElement("div");
    var someAns = document.createElement('div');
    var listQuest = document.createElement("h1");
    //appends question to button
    listQuest.textContent = questionAnswer[currentQuestion].question;
    listQuest.setAttribute("class", "question")
    firstQuest.appendChild(listQuest);
    //for each answer create a button with the answer listed
    questionAnswer[currentQuestion].answers.forEach(function (item) {
        //appends button 
        var listAns = document.createElement("button");
        //lists answer on button
        listAns.textContent = item;
        listAns.setAttribute("class", "answer-text")
        listAns.setAttribute("value", item)
        //triggers function for on click event
        listAns.onclick = answerClick;
        //appends answer to button and button to answer container
        someAns.appendChild(listAns);
        questCon.appendChild(firstQuest);
        answerCon.appendChild(someAns);
    });

};

function answerClick() {
    
    //advances to next question upon click of the correct answer
    if (this.value === questionAnswer[currentQuestion].correct) {
        //waits 1 second to change answer
        setTimeout(() => {
        //clears html for next input
        questCon.innerHTML = '';
        answerCon.innerHTML = '';
        //advances to next question
        currentQuestion++;
        //ends game if no more questions
        if (currentQuestion === questionAnswer.length) {
            console.log("end game")
            return endGame()
        } else {
            //gets next question
            console.log("get question")
            getQuest();
        }
    }, 1000);
        //changes correct answer green
        this.classList.add("correct");
        //scores points for every correct answer
        currentScore.textContent = score + scorePoints;
        score = score + scorePoints
        
    } else {
        //deducts time for every wrong answer
        timeCount.textContent = timeLeft - timeDeduct
        timeLeft = timeLeft - timeDeduct   
    };

    //changes every wrong answer red upon click
    if (this.value !== questionAnswer[currentQuestion].correct) {
        this.classList.add("incorrect");
    } 
  
};

//sets initials to local storage from prompt input
function getInitials() {
    initials = prompt("Enter Initials");
};


function endGame() {
    //stops timer
    clearInterval(timerContain);
    //calls prompt to store initials
    getInitials();
    //saves inttials and score to local storage
    saveScore();
    //stops music
    stopAudio();
    //hides stuff for new end screen
    startCard.classList.remove("hide");
    startButton.classList.add("hide");
    startTitle.classList.add("hide");
    refreshButton.classList.remove("hide");

}

//sets score to local storage
function saveScore() {
    console.log("run savescore")
    var highscores = JSON.parse(localStorage.getItem("Score")) || [];
    var newScore = {
        score: score + timeLeft,
        initials: initials
    }
    highscores.push(newScore)
    
    localStorage.setItem("Score", JSON.stringify(highscores))
};

//starts quiz on click, triggering other functions
startButton.addEventListener("click", startQuiz);