let toggleButton=document.querySelector('.toggleButton')
let closeButton=document.querySelector('.closeButton')
let asideBar=document.querySelector('.sideBar')
toggleButton.addEventListener('click', function(){
    asideBar.classList.toggle('showSideBar')
})
closeButton.addEventListener('click', function(){
    asideBar.classList.toggle('showSideBar')
})