let allButtons = document.querySelectorAll('button');
let toast = document.querySelector('.toast');
const success = '<i class="fa-solid fa-check"></i> Success'
const error = '<i class="fa-solid fa-xmark"></i> Error'
const invalid = '<i class="fa-solid fa-circle-exclamation"></i> Invalid'


allButtons.forEach(button => {
    button.addEventListener('click', function () {
        let div = document.createElement('div');
        div.classList.add('notify');
        if (button.innerHTML === 'Success') {
            div.innerHTML = success;
            div.classList.add('success')
        } else if (button.innerHTML === 'Error') {
            div.innerHTML = error;
            div.classList.add('error');
        } else {
            div.innerHTML = invalid;
            div.classList.add('invalid');
        }
        toast.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 5000);
    })
})