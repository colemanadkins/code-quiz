// KEEPING TRACK OF QUIZ STATE
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// DOM ELEMENTS
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");