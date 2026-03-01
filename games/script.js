const questions = [
    {
        question: "What is the Best description of fraction(s)?",
        answers: [
            { text:"It is part of a whole", correct: false},
            { text:"When broken into parts, the parts are fractions of a whole", correct: false},
            { text:"It is written with one number over another number", correct: false},
            { text:"all of these", correct: true}
        ]
    },
    {
     question: "What type of fraction is less than one whole?",
        answers: [
            { text:"Proper fraction", correct: true},
            { text:"Improper fraction", correct: false},
            { text:"Mixed number", correct: false},
            { text:"All of the above", correct: false}
        ]   
    },
    {
     question: "If the numerator of a fraction is either equal or more than its denominator, it is called?",
        answers: [
            { text:"Proper fraction", correct: false},
            { text:"Improper fraction", correct: true},
            { text:"Mixed number", correct: false},
            { text:"All of the above", correct: false}
        ]      
    },
    {
        question: "Below are the steps in converting improper fractions to mixed fractions. Which is the correct sequence?",
        answers: [
            { text:"Step 1,2 and 3", correct: true},
            { text:"Step 3,1 and 2", correct: false},
            { text:"Step 2,3 and 1", correct: false},
            { text:"Step 3,2 and 1", correct: false}
        ]   
    },
    {
      question: "Arrange the given fractions from descending order:5/6,5/3,5/8",
        answers: [
            { text:" 5/8,5/3,5/6", correct: false},
            { text:"5/8,5/6,5/3", correct: false},
            { text:"5/6,5/3,5/8", correct: false},
            { text:"5/3,5/6,5/8", correct: true}
        ]      
    },
];  

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButtton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestionIndex = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestionIndex.
    question;
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button")
        button,innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild("button")
        if (answer.correct){
            button.dataset.correct = answers.correct;
            button.addEventListener("click",selectAnswer);
        }
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
} 
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){}
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
    
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton(); 
    }else{
        startQuiz();
    }
});


startQuiz();

