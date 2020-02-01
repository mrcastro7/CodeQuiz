// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timer = document.getElementById('main-timer');
// const counter = document.getElementById("counter");
// const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const mainScore = document.getElementById("main-score");
const scoreContainer = document.getElementById('scoreContainer');

// create our questions
let questions = [
    {
        question : "What are JavaScript Data Types?",
        choiceA : "Number",
        choiceB : "Add",
        choiceC : "Test",
        choiceD : "Prompt",
        correct : "A"
    },{
        question : "Which of the following is not a reserved word in JavaScript?",
        choiceA : "interface",
        choiceB : "throws",
        choiceC : "program",
        choiceD : "short",
        correct : "C"
    },{
        question : "Which of the following is the correct way to display an alert?",
        choiceA : "alertbox();",
        choiceB : "msg();",
        choiceC : "msgbox();",
        choiceD : "alert();",
        correct : "D"
    },{
        question : "Which of the following is the correct way to display a box that asks the user to input something?",
        choiceA : "prompt()",
        choiceB : "alert()",
        choiceC : "msg()",
        choiceD : "msgbox()",
        correct : "A"
    },{
        question : "Which of the following is used for comments n Javascript",
        choiceA : "...",
        choiceB : "//",
        choiceC : "***",
        choiceD : "???",
        correct : "B"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
var count = 75;
let TIMER;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if( count < 76){
        count--
        timer.innerHTML = count;
    }
    if (count < 1){
        count = 0;
        clearInterval(TIMER);
        scoreRender();
}
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
        count = count - 5;
    }

    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
        localStorage.setItem('mostRecentScore', count);
    }
    
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    timer.style.display = 'none';
    scoreContainer.style.display = "block";
    quiz.style.display = 'none';
    /// print
}

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};

const highScoresList = document.getElementById("highScoresList");


highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

