let allInputs = document.querySelector('form').querySelectorAll('input');
let textArea = document.querySelector('#message');
let error = document.querySelector('#error');
let button = document.querySelector('button');
let alltickMarks = document.querySelectorAll('.fa-circle-check');

allInputs.forEach(input => {
    input.addEventListener('change', function (event) {
        const inputValue = event.srcElement.value;
        checkIds(input, inputValue);
        checkTick();
    })
})

textArea.addEventListener('change', function (event) {
    const inputValue = event.srcElement.value;
    let tickmark = textArea.parentElement.querySelector('.fa-circle-check');
    let crossmark = textArea.parentElement.querySelector('.fa-circle-xmark');
    if (inputValue.length !== 0) {
        console.log("true");
        tickmark.style.visibility = "visible";
        crossmark.style.visibility = "hidden";
    }
    else {
        console.log("fase");
        crossmark.style.visibility = "visible";
        tickmark.style.visibility = "hidden";
    }
    checkTick();
})

function checkTick() {
    let flag=true;
    alltickMarks.forEach(tickmark => {
        if (tickmark && tickmark.style.visibility === "hidden") {
            flag = false;
        }
    })
    if(flag===true)
    {
        error.style.visibility="hidden";
        button.style.visibility="visible";
    }
    else{
        error.style.visibility="visible";
        button.style.visibility="hidden";
    }
}


function positiveInput(msg, input) {
    let tickmark = input.parentElement.querySelector('.fa-circle-check');
    let crossmark = input.parentElement.querySelector('.fa-circle-xmark');
    console.log("true");
    tickmark.style.visibility = "visible";
    crossmark.style.visibility = "hidden";
}

function negativeInput(msg, input) {
    let tickmark = input.parentElement.querySelector('.fa-circle-check');
    let crossmark = input.parentElement.querySelector('.fa-circle-xmark');
    console.log("fase");
    crossmark.style.visibility = "visible";
    tickmark.style.visibility = "hidden";
}

function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

function checkIds(input, inputValue) {
    console.log(input);
    if (input.id === "name") {
        inputValue.trim();
        if (inputValue.indexOf(' ') >= 1 && inputValue.indexOf(' ') < inputValue.length - 1) {
            positiveInput(inputValue, input);
        }
        else {
            negativeInput(inputValue, input);
        }
    }
    else if (input.id === "number") {
        if (inputValue.length == 10) {
            positiveInput(inputValue, input);
        }
        else {
            negativeInput(inputValue, input);
        }
    }
    else if (input.id === "email") {
        if (isValidEmail(inputValue)) {
            positiveInput(inputValue, input);
        }
        else {
            negativeInput(inputValue, input);
        }
    }
}