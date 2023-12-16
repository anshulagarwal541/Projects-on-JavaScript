let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('.display');
let symbol = "";
let num1 = 0;
let num2 = 0;
let e = "";

console.dir(buttons);
buttons.forEach(button => {
    button.innerHTML = button.id;
})

buttons.forEach(button => {
    button.addEventListener('click', function () {
        addValue(button.id);
    })
})


const addValue = function (id) {
    if (id === 'AC') {
        display.innerHTML = "";
    }
    else if (id === 'DEL') {
        display.innerHTML = display.innerHTML.slice(0, -1);
    }
    else if (id === '=') {
        display.innerHTML=eval(display.innerHTML);
    }
    else {
        display.innerHTML += id;
    }
}