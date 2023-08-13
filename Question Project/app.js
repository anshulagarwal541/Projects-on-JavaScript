// Using dom
// const questionButtons=document.querySelectorAll('.questionButton')
// questionButtons.forEach(function(questionButton){
//     questionButton.addEventListener('click', function(e){
//         const ques=e.currentTarget.parentElement.parentElement
//         const questions=document.querySelectorAll('ques')
//         questions.forEach(function(question){
//             if(question.classList.contains('showAnswer'))
//                 question.classList.remove()
//         })
//         ques.classList.toggle('showAnswer')

//     })
// })


// Using Selectors
const questions = document.querySelectorAll('.question')
questions.forEach(function (question) {
    const questionButton = question.querySelector('.questionButton')
    questionButton.addEventListener('click', function () {
        questions.forEach(function (q) {
            if (q !== question) {
                q.classList.remove('showAnswer')
            }
        })
        question.classList.toggle("showAnswer")
    })
})