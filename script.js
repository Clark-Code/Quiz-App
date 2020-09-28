
// Questions and Answer
const quizData = [
    {
        question: 'What is the capital city of Switzerland?',
        a: 'Bern',
        b: 'Geneva',
        c: 'Lucerne',
        d: 'Basel',
        correct: 'a'
    },
    {
        question: 'How many permanent teeth does a dog have?',
        a: '36',
        b: '22',
        c: '54',
        d: '42',
        correct: 'd'
    },
    {
        question: 'Which country in the world is believed to have the most miles of motorway?',
        a: 'United States',
        b: 'China',
        c: 'Canada',
        d: 'Germany',
        correct: 'b'
    },
    {
        question: 'Who played Gunther in Friends?',
        a: 'James Michael Tyler',
        b: 'Matt LeBlanc',
        c: 'Elliott Gould',
        d: 'Paul Rudd',
        correct: 'a'
    },
    {
        question: 'What’s the smallest country in the world?',
        a: 'Principality of Monaco',
        b: 'Tuvalu',
        c: 'Vatican City',
        d: 'Italy',
        correct: 'c'
    },
]

// variables
const quiz = document.getElementById('quiz');
const answerElement = document.querySelectorAll('.answer');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.querySelector('button');
let currentQuiz = 0;
let score = 0;


// load quiz
loadQuiz();

// on load function 
function loadQuiz() {

    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

//grab selected radio
function selectedRadio() {

    let answer = undefined;

    answerElement.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}


//deselect radio on next question
function deselectAnswer() {
    answerElement.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

//submit answer -> next question
submitBtn.addEventListener('click', () => {

    const answer = selectedRadio();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>Your score is ${score}/${quizData.length}</h2><button id='retry'>Retry</button>`;
            const retry = document.getElementById('retry');
            retry.addEventListener('click', () => {
                window.location.reload();
            })
        }
    }
})






