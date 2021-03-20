var timerContain = document.querySelector(".timer-container");
var timeCount = document.querySelector(".time-count");
var startBtn = document.querySelector(".start-button");
var timeLeft;
var startCard = document.querySelector(".card")
var questCard = document.querySelector(".question")
var emptyCard = "";

function init() {
    showHigh();
    hideCard();
};

function startQuiz() {
    timeLeft = 120;

    countdown();
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
};

function hideCard(questCard) {
    questCard.classList.remove('is-visible');
};

function switchCard() {
    if (startCard.style.display === "none") {
        startCard.style.display = "block" 
        
    } else {
        startCard.style.display = "none"
    }
};

startBtn.addEventListener("click", startQuiz);