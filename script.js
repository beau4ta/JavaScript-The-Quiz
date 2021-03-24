//setting global variables
var timerContain = document.querySelector(".timer-container");
var timeCount = document.querySelector(".time-count");
var timeLeft;
var score = document.querySelector(".current-score");
var currentScore = 0;
var startButton = document.querySelector(".start-button");

var currentQuestion = 0;
var correctAns = true;

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
        correct: "Javascript"
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
    
    questionAnswer.forEach(function (item) {
        console.log(item);
        var listQuest = document.createElement("h1");
        listQuest.textContent = item.question;
        firstQuest.appendChild(listQuest);

        var listAns = document.createElement("p");
        listAns.textContent = item.answers;
        someAns.appendChild(listAns);

        console.log(listQuest);
        console.log(listAns);

        var questCon = document.querySelector(".question-container");
        questCon.appendChild(firstQuest);

        var answerCon = document.querySelector(".answer-container");
        answerCon.appendChild(someAns);

        listQuest.setAttribute("class", "question")
        listAns.setAttribute("class", "answer-text")
       
     });
    };
 
function hideStart() {
    // hides start button/card
    var startCard = document.querySelector(".card");
    if (startCard.style.display === "none") {
        startCard.style.display = "block"
    } else {
        startCard.style.display = "none"
    };
};

    
function countdown() {
    //set timer
    timerContain = setInterval(function() {
        timeLeft--;
        timeCount.textContent = timeLeft

        if (timeLeft === 0) {
            clearInterval(timerContain);
            alert("Time Up!");
        }
    }, 500);
    // saveScore();
};

function playAudio() {
    var song = document.querySelector(".song")
    song.play();
}


// function saveScore() {
// score.textContent = currentScore;
// localStorage.setItem("Scores", currentScore);
// }

//starts quiz on click, triggering other functions
startButton.addEventListener("click", startQuiz);