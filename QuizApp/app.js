const questions = [
    // {
    //     ques: "Which is the largest animal on Earth ?",
    //     1: {
    //         name: "Dolphin",
    //         id: "wrong"
    //     },
    //     2: {
    //         name: "Elephant",
    //         id: "wrong"
    //     },
    //     3: {
    //         name: "Whale",
    //         id: "correct"
    //     },
    //     4: {
    //         name: "Rabbit",
    //         id: "wrong"
    //     }
    // },
    {
        ques: "What is the answer of 5 x 7 ?",
        1: {
            name: "35",
            id: "correct"
        },
        2: {
            name: "12",
            id: "wrong"
        },
        3: {
            name: "36",
            id: "wrong"
        },
        4: {
            name: "33",
            id: "wrong"
        }
    },
    {
        ques: "Which is the smallest country in the world ?",
        1: {
            name: "Bhutan",
            id: "wrong"
        },
        2: {
            name: "Nepal",
            id: "wrong"
        },
        3: {
            name: "Sri Lanka",
            id: "wrong"
        },
        4: {
            name: "Vatican City",
            id: "correct"
        }
    },
    {
        ques: "What is the largest desert in the world ?",
        1: {
            name: "Kalahari",
            id: "wrong"
        },
        2: {
            name: "Gobi",
            id: "wrong"
        },
        3: {
            name: "Sahara",
            id: "wrong"
        },
        4: {
            name: "Antartica",
            id: "correct"
        }
    },
    {
        ques: "What is the smallest continent in the world ?",
        1: {
            name: "Asia",
            id: "wrong"
        },
        2: {
            name: "Australia",
            id: "correct"
        },
        3: {
            name: "Arctic",
            id: "wrong"
        },
        4: {
            name: "Africa",
            id: "wrong"
        }
    },
    {
        ques: "Shivansh Raj kon sa porn dekhta hai ?",
        1: {
            name: "xhamster desi",
            id: "correct"
        },
        2: {
            name: "pornhub",
            id: "wrong"
        },
        3: {
            name: "jav porn",
            id: "wrong"
        },
        4: {
            name: "xvideos",
            id: "wrong"
        }
    }
]



let score = 0;
let liItems = document.querySelectorAll('li');
let ul = document.querySelector('ul');
let nextButton = document.querySelector('.nextButton').querySelector('button');
let index = 0;
let question = document.querySelector('.ques')

liItems.forEach(li => {
    li.addEventListener('click', function (e) {
        if (li.id === "wrong") {
            li.setAttribute('class', 'wrongAnswer')
            let correctAnswer = ul.querySelector('#correct')
            correctAnswer.setAttribute('class', 'correctAnswer')
        }
        else if (li.id === "correct") {
            li.setAttribute('class', 'correctAnswer')
            score++;
        }
        nextButton.style.display = "block"
    })
})

nextButton.addEventListener('click', function () {
    if (index < questions.length) {
        nextButton.style.display = "none";
        question.innerHTML = questions[index].ques;
        let option = 1;
        eachListItem(liItems, option);
        index++;
    }
    else {
        ul.style.display = "none";
        question.innerHTML = `Your score is : ${score}`;
        score = 0;
        nextButton.style.display = "none";
    }
})

const eachListItem = function (liItems, option) {
    liItems.forEach(li => {
        if (li.className === "wrongAnswer") {
            li.classList.remove('wrongAnswer');
        }
        if (li.className === "correctAnswer") {
            li.classList.remove('correctAnswer');
        }
        li.innerHTML = `${questions[index][option].name}`;
        li.id = `${questions[index][option].id}`;
        option++;
    })
}


























// for(let i=1;i<questions.length;i++)
// {
//     let palette=document.createElement('div');
//     palette.classList.add('.palette');
//     let heading=document.createElement('div');
//     heading.classList.add('.heading')
//     let mainBody=document.createElement('div');
//     mainBody.setAttribute('class', 'mainBody')
//     let ques=document.createElement('div');
//     ques.setAttribute('class', 'ques')
//     let options=document.createElement('div');
//     options.setAttribute('class', 'options')
//     let ul=document.createElement('ul');
//     for(let x=1;x<=4;x++)
//     {
//         let li=document.createElement('li');
//         li.innerHTML=questions[i].x.name;
//         li.setAttribute('id', `${questions[i].x.id}`);
//         ul.appendChild(li);
//     }
//     let nextButton=document.createElement('div');
//     nextButton.setAttribute('class', 'nextButton')
//     let button=document.createElement('button')
//     button.innerHTML="Next";
// }