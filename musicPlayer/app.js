let forwardButton = document.querySelector('.forward');
let pauseButton = document.querySelector('.pause').querySelector('i');
let backwardButton = document.querySelector('.backward');
let songIndex = 0;
let song = document.getElementById('song');
let musicPlayer = document.querySelector('.musicPlayer').querySelector('input');
let name = document.querySelector('.name');
let songs = [
    {
        src: "./music/One Thing.mp3",
        name: "One Thing"
    },
    {
        src: "./music/Up All Night.mp3",
        name: "Up All Night"
    },
    {
        src: "./music/Forever Young.mp3",
        name: "Forever Young"
    },
    {
        src: "./music/And Live While We Young.mp3",
        name: 'And Live While We Young'
    }
]
let index = 0;
song.children[0].attributes[0].value = songs[0].src;
name.innerHTML = songs[index].name;
song.load();



song.onloadedmetadata = function () {
    musicPlayer.max = song.duration;
    musicPlayer.value = song.currentTime;
    song.volume = 0.1;
}


pauseButton.addEventListener('click', function () {
    console.dir(song)
    if (pauseButton.classList.contains("fa-pause")) {
        song.pause();
        pauseButton.classList.remove("fa-pause");
        pauseButton.classList.add("fa-play");
    }
    else if (pauseButton.classList.contains("fa-play")) {
        song.play();
        pauseButton.classList.add("fa-pause");
        pauseButton.classList.remove("fa-play");
    }
})

if (song.play()) {
    setInterval(() => {
        musicPlayer.value = song.currentTime;
    }, 500);
}

musicPlayer.onchange = function () {
    song.currentTime = musicPlayer.value;
    console.dir(song);
}

forwardButton.addEventListener('click', function () {
    console.log("forward");
    index = (index + 1) % songs.length;
    song.children[0].attributes[0].value = songs[index].src;
    name.innerHTML = songs[index].name;
    song.load();
    if (pauseButton.classList.contains("fa-play")) {
        song.pause();
    }
    else {
        song.play();
    }
})

backwardButton.addEventListener('click', function () {
    console.log("forward");
    index = (index - 1) % songs.length;
    song.children[0].attributes[0].value = songs[index].src;
    name.innerHTML = songs[index].name;
    song.load();
    if (pauseButton.classList.contains("fa-play")) {
        song.play();
    }
    else {
        song.pause();
    }
})