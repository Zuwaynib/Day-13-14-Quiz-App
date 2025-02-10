let question = document.querySelector("#question");
let options = document.querySelector(".options");
let nextBtn = document.querySelector(".next-btn");
let restartBtn = document.querySelector(".restart-btn");
let scoreDisplay = document.querySelector("#score");

let currentQuestion = 0;
let score = 0;
function startQuiz() {
    question.textContent = quizQuestions[currentQuestion].question;
    
    options.innerHTML = "";
    
    quizQuestions[currentQuestion].options.forEach((opt) => {
        let btn = document.createElement("button");
        btn.classList.add("option");
        btn.textContent = opt;
        btn.addEventListener("click", function() {
            checkAnswer(btn, opt);
        });
        options.appendChild(btn);
    })
};

function checkAnswer(selectedBtn, selectedOption) {
    let correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    
    let allButtons = document.querySelectorAll(".option");
    allButtons.forEach((btn) => {
        if (btn.textContent === correctAnswer) {
            btn.style.backgroundColor = "green"; 
        }
    });
    if (selectedOption === correctAnswer) {
        selectedBtn.style.background = "green";
        score++;
    } else {
        selectedBtn.style.background = "red";
    }

    allButtons.forEach((btn) => btn.disabled = true);
    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        startQuiz();
    } else {
        question.textContent = `Quiz Completed! Your final score: ${score}/${quizQuestions.length}`;;
        options.innerHTML = "";
        nextBtn.style.display = "none";
        restartBtn.style.display = "block";

    }
}

nextBtn.addEventListener("click", nextQuestion);

function restartQuiz() {
    currentQuestion = 0; 
    score = 0;
    startQuiz();
    restartBtn.style.display = "none";
}
restartBtn.addEventListener("click", restartQuiz);
startQuiz();