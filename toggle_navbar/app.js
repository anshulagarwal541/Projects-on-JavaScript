let toggleButton = document.querySelector('.toggleButton')
let links = document.querySelector('.links')
if (document.body.style.width <= '750px') {
    toggleButton.addEventListener('click', function () {
        links.classList.toggle('showLinks')
    })
}