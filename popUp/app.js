const submitButton = document.querySelector('.submit');
const card = document.querySelector('.card');
const okButton = document.querySelector('.okButton');

submitButton.addEventListener('click', function () {
    card.classList.add('openPopUp');
})

okButton.addEventListener('click', function () {
    card.classList.remove('openPopUp');
})