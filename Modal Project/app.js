let openButton=document.querySelector('.openButton')
let container=document.querySelector('.container')
let closeButton=document.querySelector('.closeButton')
let overlay=document.querySelector('.overlay')
openButton.addEventListener('click', function(){
    container.classList.add('hideContainer')
    overlay.classList.add('showOverlay')
})
closeButton.addEventListener('click', function(){
    container.classList.remove('hideContainer')
    overlay.classList.remove('showOverlay')
})