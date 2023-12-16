const generateButton = document.querySelector('.generateButton').querySelector('button');
let inputText = document.querySelector('.input').querySelector('input');
let qrcode = document.querySelector('.qrcode')

generateButton.addEventListener('click', function () {
    console.log('clicked')
    if (inputText.value) {
        qrcode.style.display="flex";
        console.dir(qrcode);
        qrcode.children[0].src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}`;
    }
})