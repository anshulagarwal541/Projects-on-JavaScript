let buttons = document.querySelectorAll(".btns");
let contents = document.querySelectorAll(".con");
let aboutContent = document.querySelector(".aboutContent");

aboutContent.addEventListener("click", function (e) {
    let getId = e.target.dataset.id
    if (getId) {
        buttons.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        })
        contents.forEach(function (content) {
            content.classList.remove("activeContent");
            content.classList.add("noContent");
            let c = document.querySelector(`#${e.target.dataset.id}`);
            c.classList.remove("noContent");
            c.classList.add("activeContent");
        })
    }
})