let addButton = document.querySelector('.add')
let area = document.querySelector('.area');
let closeBtn = document.querySelector('fa-solid')
let listText = document.querySelector('.listText');
// To add new Note
addButton.addEventListener('click', function () {
    let newNote = document.createElement('div')
    newNote.classList.add('showHeight')

    let newText = document.createElement('div')
    newText.classList.add('text')
    newNote.appendChild(newText)

    let newCloseBtn = document.createElement('div')
    newCloseBtn.classList.add('closeButton')

    let newi = document.createElement('i');
    newi.classList.add('fa-solid')
    newi.classList.add('fa-trash')
    newi.style.color = 'bisque'

    newCloseBtn.appendChild(newi);
    newNote.appendChild(newCloseBtn);
    newText.innerHTML = listText.childNodes[1].value;
    listText.childNodes[1].value = "";
    area.appendChild(newNote)
    localStorage.setItem("data", area.children);
})


area.addEventListener('click', function(e){
    console.dir(e);
    if(e.target.localName==='i')
    {
        let parent=e.target.parentElement.parentElement;
        parent.classList.remove('showHeight');
        parent.remove()
        console.log("done..")
    }
})