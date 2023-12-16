const createButton = document.querySelector('.createButton');
let notes = document.querySelector('.notes');

const showText = function () {
    notes.innerHTML = localStorage.getItem('notes');
}
showText();

const setInnerHTML = function () {
    localStorage.setItem('notes', notes.innerHTML);
}

const setNote = function () {
    let note = document.createElement('div');
    note.setAttribute('class', 'note');
    let p = document.createElement('p');
    note.appendChild(p);
    let noteDelete = document.createElement('div');
    noteDelete.setAttribute('class', 'noteDelete');
    let i = document.createElement('i');
    i.classList.add('fa-trash')
    i.classList.add('fa-solid')
    i.style.color = "black";
    noteDelete.appendChild(i);
    note.appendChild(noteDelete);
    notes.appendChild(note);
}

createButton.addEventListener('click', function () {
    setNote();
    setInnerHTML();
})

notes.addEventListener('click', function (e) {
    if (e.target.localName === 'i') {
        e.target.parentElement.parentElement.remove();
        setInnerHTML();
    }
    else if (e.target.localName === 'p') {
        let allP = document.querySelectorAll('p');
        console.log(allP);
        allP.forEach(p => {
            p.addEventListener('keypress', (text) => {
                
            })
        })
    }
})