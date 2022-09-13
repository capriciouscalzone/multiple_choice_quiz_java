var startBtn = document.getElementById('start-btn');
var nextBtn = document.getElementById('nxt-btn');
var questionContEl = document.getElementById('questionBox')
var questionEl = document.getElementById('question')
var answerBtnsEl = document.getElementById('answer-buttons')

var score = 0;

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