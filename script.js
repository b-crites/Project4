// Questions
// ----------------------------------------------------------
const quizData = [
    {
        Question: 'What does HTML stand for?',
        a:'How to Make Lasagna',
        b: 'Hyper Text Markup Language',
        c: 'Houston to Montana Louisiana',
        d: 'Howard Texting Me Late',
        correct: "b",
    },
    {
        Question: 'What does CSS stand for?',
        a:"Can't Stand Slides",
        b: 'Could Stan Sing',
        c: 'Cascading Style Sheets',
        d: 'Cascade Style Shift',
        correct: "c",
    },
    {
        Question: 'What year was JavaScript lauched?',
        a:'1956',
        b: '2002',
        c: '1994',
        d: '1990',
        correct: "c",
    },
    {
        Question: 'What is not a coding language?',
        a:'C++',
        b: 'C',
        c: 'Java',
        d: 'LavaScript',
        correct: "d",
    },
    {
        Question: 'Which one is correct?',
        a:'1 + 1 = 3',
        b: 'A = g',
        c: 'Coding is difficult',
        d: '9 + 10 = 21',
        correct: "c",
    }
];
// variables
// --------------------------------------------------------------------------
const quiz = document.getElementById('quiz')
const ansEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const aText = document.getElementById('aText')
const bText = document.getElementById('bText')
const cText = document.getElementById('cText')
const dText = document.getElementById('dText')
const submitButton = document.getElementById('submit')
const timer = document.getElementById('time');
const startButton = document.getElementById('startButton');
const titleEl = document.getElementById('timer');


// Quiz scores at start of game
// ------------------------------------------------------------------------
let currentQuiz = 0
let score = 0
// Game on load
// -------------------------------------------------------------------------
loadQuiz()

function loadQuiz(){
    deselectAns()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.Question
    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d
}
function deselectAns(){
    ansEl.forEach(ansEl=> ansEl.checked = false)
}

function getSelected () {
    let answer
    ansEl.forEach(ansEl => {
        if (ansEl.checked){
            answer = ansEl.id
        }
    })
    return answer;
}
// start game
// ----------------------------------------------------------
function startGame(){
    startButton.classList.add('hide')
    submit.classList.remove('hide');
    quiz.classList.remove('hide');
    titleEl.classList.remove('hide');
    
    console.log(this)
    
    
}
startButton.addEventListener('click', startGame)

// timer function
// ----------------------------------------------------------


let timesecond = 40;
displayTime(timesecond)
startButton.addEventListener('click', () =>{
const countDown = setInterval(()=>{
    timesecond--;
    displayTime(timesecond);
    if(timesecond <= 0 || timesecond <1){
        endTime();
        clearInterval(countDown);
    }
},1000)
})


function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timer.innerHTML= `${min<10 ? '0': ''}${min}:${sec<10?'0':''}${sec}`
}
function endTime(){
    timer.innerHTML = 'TIME'
    if(!loadQuiz()){
    clearInterval(timesecond)
        
    }
}

// High Scores
// --------------------------------------------------------------
const username = document.getElementById('username')
const saveScore = document.getElementById('submit-score')
// const finalScore = ;
var highScores = [];


// username.addEventListener('keyup',() => {
//     saveScoreBtn.disabled = !username.value
// });
// submit
// -------------------------------------------------------------

submitButton.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }else{
            timesecond = timesecond - 5
        }
    }
   
    currentQuiz++
    if(currentQuiz < quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML= `
        <h2>You answered ${score}/${quizData.length} questions correctly!</h2>
        <button onclick="location.reload()">Reload</button>`,
        endTime();

    }
})
    