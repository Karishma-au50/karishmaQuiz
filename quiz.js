const quizData = [
    {
        question: "Q1: Lakshmana is considered to be the incarnation of whom?",
        a: "Lord Vishnu",
        b: "Lord Shiva",
        c: "Lord Brahma",
        d: "Sheshnag",
        correct: "d",
    },
    {
        question: "Q2: What was the name of the forest where Lord Rama, Lakshmana and Goddess Sita stayed during exile?",
        a: "Aranya",
        b: "Aranyak",
        c: "Dandakaranya",
        d: "Karanya",
        correct: "c",
    },
    {
        question: "Q3: Ravana was a devotee of who among the following God?",
        a: "Vishnu",
        b: "Brahma",
        c: "Shiva",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Q4: What was the name of Lord Rama's father?",
        a: "Shalishuka",
        b: "Nahapana",
        c: "Rajadhiraj",
        d: "Dasaratha",
        correct: "d",
    },
    {
        question: "Q5:Who has written Bhavartha Ramayana?",
        a: "Madhava Kandali",
        b: "Eknath",
        c: "Krittibas",
        d: "Buddha Reddy",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <div class=" container-fluid h-50 w-50 mt-5">
           <h2 class="head text-light py-5">You answered ${score}/${quizData.length} questions correctly</h2>
           <div class=" gap-2 col-6 justify-content-center mx-auto d-flex">
           <button class="btn btn-primary text-center my-5" onclick="location.reload()">Reload</button>
           </div>
           </div>
           `
       }
    }
})































// // alert("hello")
// const quizData = [
// ];



// const quiz = document.getElementById('quiz')
// const anwserEls = document.querySelectorAll('.answer')
// const questionEl = document.getElementById('question')
// const a_text = document.getElementById('a_text')
// const b_text = document.getElementById('b_text')
// const c_text = document.getElementById('c_text')
// const d_text = document.getElementById('d_text')
// const submitBtn = document.getElementById('submit')



// let currentQuiz = 0
// let score = 0


// loadQuiz()


// function loadQuiz(){

//     deselectAnswers()


//     const currentQuizData = quizData[currentQuiz]


//     questionEl.innerText = currentQuizData.question
//     a_text.innerText = currentQuizData.a
//     b_text.innerText = currentQuizData.b
//     c_text.innerText = currentQuizData.c
//     d_text.innerText = currentQuizData.d
// }

// function deselectAnswers(){
//     answerEls.forEach(answerEls => answerEls.checked = false)
// }

// function getSelected(){
//     let answer
//     anwserEls.forEach(answerEl => {
//         if(answerEl.checked){
//             answer = answerEl.id
//         }
//     })
//     return answer
// }


// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()
//     if(answer){
//         if(answer === quizData[currentQuiz].correct){
//             score++;
//         }
//         currentQuiz++

//         if(currentQuiz < quizData.length){
//             loadQuiz()
//         }
//         else {
//             quiz.innerHTML = `
//             <h2>You answered ${score}/${quizData.length} questions correctly</h2>

//             <button onclick="location.reload()">Reload</button>
//             `
//         }
//     }
// })







// // console.log(quizDB);
// //     const question=document.querySelector('.question');
// // const option1=document.querySelector('#option1');
// // const option2=document.querySelector('#option2');
// // const option3=document.querySelector('#option3');
// // const option4=document.querySelector('#option4');
// // const submit=document.querySelector('#submit');
// // const answers=document.querySelector('.answer');
// // const showScore=document.querySelector('#showScore');
// // let score=0;

// // let questionCount=0;
// // let loadQuestion=()=>{
// //     let questionList=quizDB[questionCount];
// //     question.innerHTML=questionList.question;
// //     option1.innerHTML=questionList.A;
// //     option2.innerHTML=questionList.B;
// //     option3.innerHTML=questionList.C;
// //     option4.innerHTML=questionList.D;
// // }
// // loadQuestion();
// // let getCheckAnswer = () => {
// //     let answer;
// //     answers.forEach((curAnsElem)=>{
// //     if(curAnsElem.checked){
// //       answer=curAnsElem.id;
// //     }
   
// //      });
// // return answer; 
// // };

// // let deselectAll=()=>{
// //     answers.forEach((curAnsElem)=>curAnsElem.checked=false);
// // }

// // submit.addEventListener('click',()=>{
// //     let checkedAnswer=getCheckAnswer();
// //     console.log(checkedAnswer);
// //     if(checkedAnswer===quizDB[questionCount].Ans){
// //         score++;
// //     };
// //     questionCount++; 
// //     deselectAll();
// //     if(questionCount<quizDB.length){
// //         loadQuestion();
// //     }
// //     else{
// //         showScore.innerHTML=`
// //         <h3> You Scpred ${score}/${quizDB.length} </h3>
        
// //         <button class="btn" onclick="loctaion.reload()">
// //          </button>`;
// //          showScore.classList.remove('scoreArea');
// //     }
// // });



// const quizData = [
//     {
//         question: "Q1:Lakshmana is considered to be the incarnation of whom?",
//         a: "Lord Vishnu",
//         b: "Lord Shiva",
//         c: "Lord Brahma",
//         d: "Sheshnag",
//         correct: "d",
//     },
//     {
        
//         question: "Q2: Which of the following are the parts of Ramcharitmanas?",
//         a: "Bal Kanda",
//         b: "Aranya Kanda",
//         c: "Kiskindha Kanda",
//         d: "All the above are correct",
//         correct: "d",
//     },
//     {
//         question: "Q3:Ravana was a devotee of who among the following God?",
//         a: "Vishnu",
//         b: "Brahma",
//         c: "Shiva",
//         d: "None of the above",
//         correct: "c",
//     },
//     {
//         question: "Q4:What was the name of Lord Rama's father?",
//         a: "Shalishuka",
//         b: "Nahapana",
//         c: "Rajadhiraj",
//         d: "Dasaratha",
//         correct: "d",
//     },
//     {
//         question: "Q5:Who has written Bhavartha Ramayana?",
//         a: "Madhava Kandali",
//         b: "Eknath",
//         c: "Krittibas",
//         d: "Buddha Reddy",
//         correct: "b",
//     },
// ];
// const quiz = document.getElementById('quiz');
// const answerEls = document.querySelectorAll('.answer');
// const questionEl = document.getElementById('question');
// const a_text = document.getElementById('a_text');
// const b_text = document.getElementById('b_text');
// const c_text = document.getElementById('c_text');
// const d_text = document.getElementById('d_text');
// const submitBtn = document.getElementById('submit');
// let currentQuiz = 0;
// let score = 0;
// loadQuiz()
// function loadQuiz() {
//     deselectAnswers()
//     const currentQuizData = quizData[currentQuiz]
//     questionEl.innerText = currentQuizData.question
//     a_text.innerText = currentQuizData.a
//     b_text.innerText = currentQuizData.b
//     c_text.innerText = currentQuizData.c
//     d_text.innerText = currentQuizData.d
// }
// function deselectAnswers() {
//     answerEls.forEach(answerEl => answerEl.checked = false)
// }
// function getSelected() {
//     let answer
//     answerEls.forEach(answerEl => {
//         if (answerEl.checked) {
//             answer = answerEl.id
//         }
//     })
//     return answer
// }
// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()
//     if (answer) {
//         if (answer === quizData[currentQuiz].correct) {
//             score++
//         }
//         currentQuiz++
//         if (currentQuiz < quizData.length) {
//             loadQuiz()
//         } else {
//             quiz.innerHTML = `
//            <h1 class="head">You answered ${score}/${quizData.length} questions correctly</h1>
//            <button class="reload" onclick="location.reload()">Reload</button>
//            `
//         }
//     }
// })
























































