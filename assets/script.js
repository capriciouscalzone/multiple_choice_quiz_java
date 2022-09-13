var startBtn = document.getElementById('start-btn');
var nextBtn = document.getElementById('nxt-btn');
var questionContEl = document.getElementById('questionBox')
var questionEl = document.getElementById('question')
var answerBtnsEl = document.getElementById('answer-buttons')

var score = 0;

var shuffledQuestions, currentQuestionIndex;

var questions = [
    {
        question: 'Which command can you use inside gitbash terminal?',
        answers: [
            {text: 'git push' , correct:true },
            {text: 'got get my code', correct:false },
            {text: 'please do it for me' , correct:false },
            {text: 'marry me', correct:false },
        ]
    },
    {
        question: 'Where did bootstrap originate from?',
        answers: [
            {text: 'NASA', correct:false },
            {text: 'North Korea' , correct:false },
            {text: 'Twitter' , correct:true },
            {text: 'The Zuck' , correct:false },
        ]

    },
    {
        question:'When did Java come to be?',
        answers: [
            {text: '2001', correct:false },
            {text: '1995' , correct:true },
            {text: '1988', correct:false },
            {text: '1979' , correct:false },
        ]

    },
    {
        question:'Which answer would you use for a timer?',
        answers: [
            {text: 'setinterval', correct:true },
            {text: 'timegogogo', correct:false },
            {text: 'annnnnddddddddgonow!', correct:false },
            {text: 'bbbbbyyyyeeeee', correct:false },
        ]
    }
]

startBtn.addEventListner('click',startGame);

function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(seconds === 0) {
            alert('Game Over!')
        }
    }, 1000);
}

startBtn.addEventListner('click',startGame);
startBtn.addEventListner('click',function(){
    var twoMinutes = 60 * 2,
    display = document.querySelector('#time');
    startTimer(twoMinutes, display);
});

function startGame(){

    startBtn.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionContEl.classList.remove('hide');
    currentQuestionIndex = 0;
    nextQuestion();
    nextBtn.classList.remove('hide')
}

function ShowQuestion(question) {
    questionEl.innerText = questions.question
    console.log(questions)
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnsEl.appendChild(button)
    })
}