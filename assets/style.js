// KEEPING TRACK OF QUIZ STATE
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var correctAnswers = 0;


// DOM ELEMENTS
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");

// Create function to start the quiz
function startQuiz() {
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");
    // Unhide the questions
    questionsElement.removeAttribute("class");
    

    getCurrentQuestion();
}

// Get current question and choices
function getCurrentQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleElement = document.querySelector("#question-title");
    titleElement.textContent = currentQuestion.title;

    questionChoices.textContent = ""; // 

    //*** Alternate using "for loop" instead of "forEach" */
    // Creating the choice buttons
    // Create event listener 
for (var i=0; i < currentQuestion.choice.length; i++) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", currentQuestion.choice[i]);

    choiceNode.textContent = i + 1 + ". " + currentQuestion.choice[i];
    choiceNode.addEventListener("click", checkAnswer);
    questionChoices.appendChild(choiceNode);
}
}

function checkAnswer() {
    var chosen = this.value
    var answer = questions[currentQuestionIndex].answer 

    console.log(this.value);
    console.log(questions[currentQuestionIndex].answer);
    if (chosen === answer) {
        correctAnswers = correctAnswers + 10;
    }
    else { 
        time -=  10;
    }
    currentQuestionIndex += 1;
    getCurrentQuestion();

}



// startBtn.onclick = startQuiz;
startBtn.addEventListener("click", startQuiz);