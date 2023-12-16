const generateButton = document.querySelector('.generateButton');
const input = document.querySelector('.passwordInput')
const copyButton = input.querySelector('i');
const characters = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890!@#$%^&*()_+[]<>?/~-=";
generateButton.addEventListener('click', function () {
    let string = "";
    for (let x = 1; x < 13; x++) {
        let randomNumber = characters[Math.floor(Math.random() * characters.length)];
        string += randomNumber;
    }
    input.children[0].value = string;
})

copyButton.addEventListener('click', function () {
    input.children[0].select();
    document.execCommand("copy");
})

let clipboard = async function (text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy:');
    }
}