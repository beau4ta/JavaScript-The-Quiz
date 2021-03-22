var timerContain = document.querySelector(".timer-container");
var timeCount = document.querySelector(".time-count");
var startBtn = document.querySelector(".start-button");
var submitBtn = document.querySelector(".submit-button");
var timeLeft;
var startCard = document.querySelector(".card");
var questCard = document.querySelector(".question");
var questTitle = document.querySelector(".question-title")
var answerDiv = document.querySelector(".answer-container")
var answerDiv2 = document.querySelector(".answer-container2")
var answerDiv3 = document.querySelector(".answer-container3")
var answerDiv4 = document.querySelector(".answer-container4")
var score = document.querySelector(".last-score");
var lastScore = 0;
var question = 0;
var answers = 0;
var questionAnswer = [
    {
        question: "What does JavaScript stand for?",
        answers: [
            "Just Average Video Applications Script",
            "JavaScript",
            "Nothing",
            "Join Amazing Versions of Awesome Script"
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
            "Highlight the element"
        ],
        correct: "document.querySelector()"
    }
]

function startQuiz() {
    timeLeft = 120;

    countdown();
    hideStartCard();
    hideQuest();
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
    saveScore();
};



function hideQuest() {
    questCard.classList.remove('hideQuestion');
    var currentQuest = questionAnswer [question]
    questTitle.textContent = currentQuest.question
    var listAnswer = questionAnswer [answers]
   var button1 = document.createElement("button");
   var button2 = document.createElement("button");
   var button3 = document.createElement("button");
   var button4 = document.createElement("button");
   var text1 = document.createTextNode(listAnswer.answers[0]);
   var text2 = document.createTextNode(listAnswer.answers[1]);
   var text3 = document.createTextNode(listAnswer.answers[2]);
   var text4 = document.createTextNode(listAnswer.answers[3]);
   button1.appendChild(text1);
   button2.appendChild(text2);
   button3.appendChild(text3);
   button4.appendChild(text4);
   answerDiv.appendChild(button1);
   answerDiv2.appendChild(button2);
   answerDiv3.appendChild(button3);
   answerDiv4.appendChild(button4);
   
};

function hideStartCard() {
    if (startCard.style.display === "none") {
        startCard.style.display = "block"
         
    } else {
        startCard.style.display = "none" 
    }

}


function saveScore() {
score.textContent = lastScore;
localStorage.setItem("Scores", lastScore);
}


startBtn.addEventListener("click", startQuiz);
