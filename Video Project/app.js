let playButton=document.querySelector('.play')
let pauseButton=document.querySelector('.pause')
let video=document.querySelector('.videoContainer')

window.addEventListener('DOMContentLoaded', function(){
    playButton.classList.add('slidePlay')
})


playButton.addEventListener('click', function(){
    if(!playButton.classList.contains('slidePlay'))
    {
        playButton.classList.add('slidePlay')
        video.play()
        pauseButton.classList.remove('slidePause')
    }
})

pauseButton.addEventListener('click', function(){
    if(!pauseButton.classList.contains('slidePause'))
    {
        pauseButton.classList.add('slidePause')
        video.pause()
        playButton.classList.remove('slidePlay')
    }
})