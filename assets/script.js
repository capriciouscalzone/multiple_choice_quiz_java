const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionsContainerEl = document.getElementById('questionCon')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var score = 0;

let shuffledQuestions, currentQuestionIndex;

const questions = [
    {
        question: 'Which command can you use inside gitbash terminal?',
        answers: [
            {text: 'git push' , correct: true },
            {text: 'got get my code', correct: false },
            {text: 'please do it for me' , correct: false },
            {text: 'marry me', correct: false }
        ]
    },
    {
        question: 'Where did bootstrap originate from?',
        answers: [
            {text: 'NASA', correct:false },
            {text: 'North Korea' , correct:false },
            {text: 'Twitter' , correct:true },
            {text: 'The Zuck' , correct:false }
        ]

    },
    {
        question:'When did Java come to be?',
        answers: [
            {text: '2001', correct:false },
            {text: '1995' , correct:true },
            {text: '1988', correct:false },
            {text: '1979' , correct:false }
        ]

    },
    {
        question:'Which answer would you use for a timer?',
        answers: [
            {text: 'setinterval', correct:true },
            {text: 'timegogogo', correct:false },
            {text: 'annnnnddddddddgonow!', correct:false },
            {text: 'bbbbbyyyyeeeee', correct:false }
        ]
    }
]

startButton.addEventListener('click',startGame);



function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(seconds === 0) {
            alert('Game Over!')
        }
    }, 1000);
}

startButton.addEventListener('click',startGame);
startButton.addEventListener('click', function(){
    var twoMinutes = 60 * 2,
    display = document.querySelector('#time');
    startTimer(twoMinutes, display);
});

function startGame(){

    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionsContainerEl.classList.remove('hide');
    currentQuestionIndex = 0;
    nextQuestion();
    nextButton.classList.remove('hide')
}

function ShowQuestion(questions) {
    questionElement.innerText = questions.question
    console.log(questions)
    question.answers.foreach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function questionsloop(questions) {
    for (var i=0; i < questions.length; i ++);
    questions.innerText('#question');
    if (answer.correct) {
        button.dataset.correct = answer.correct
        score ++;
    }
    score.innerText('Correct')
}

function nextQuestion() {
    ShowQuestion(shuffledQuestions[currentQuestionIndex]);
}