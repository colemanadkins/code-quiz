// KEEPING TRACK OF QUIZ STATE
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

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

    questionChoices.textContent = "";

    //*** Alternate using "for loop" instead of "forEach" */
for (var i=0; i < currentQuestion.choice.length; i++) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", currentQuestion.choice[i]);

    choiceNode.textContent = i + 1 + ". " + currentQuestion.choice[i];

    questionChoices.appendChild(choiceNode);
}
}

// startBtn.onclick = startQuiz;
startBtn.addEventListener("click", startQuiz);