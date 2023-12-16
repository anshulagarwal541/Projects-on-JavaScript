// Toggle Button
let toggleButton = document.querySelector(".toggleButton");
let links = document.querySelector(".links");
let linksContainer=document.querySelector(".linksContainer");
let navContainer = document.querySelector(".navContainer")
if (document.body.style.width <= '750px') {
    toggleButton.addEventListener("click", function () {
        links.classList.toggle('toggleLinks')
        linksContainer.classList.toggle("showLinks")
        
    })
}