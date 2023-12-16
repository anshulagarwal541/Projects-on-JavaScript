const date = document.querySelector('.operation').querySelector('input')
const calculateButton = document.querySelector('.operation').querySelector('button');


calculateButton.addEventListener('click', function () {
    let currentDate = Date.now();
    console.log(currentDate);
    let ageSeconds = currentDate - date.valueAsNumber;
    console.log(ageSeconds);
    const inYears = Math.floor(ageSeconds / (365 * 24 * 60 * 60 * 1000));
    console.log("Years = ", inYears);
    ageSeconds = ageSeconds % (365 * 24 * 60 * 60 * 1000);
    console.log(currentDate);
    const inMonths = Math.floor(ageSeconds / (30 * 24 * 60 * 60 * 1000));
    ageSeconds = ageSeconds % (30 * 24 * 60 * 60 * 1000);
    const inDays = Math.floor(ageSeconds / (24 * 60 * 60 * 1000));
    console.log("Dyas = ", inDays);
    let display = document.querySelector('.display');
    let s = "";
    s += "You are, ";
    if (inYears > 0) {
        s += `${inYears} years`;
    }
    if (inMonths > 0) {
        if (inYears > 0) {
            s += `, ${inMonths} months`;
        }
        else {
            s += `${inMonths} months`;
        }
    }
    if (inDays > 0) {
        if (inYears > 0 || inMonths > 0) {
            s += ` and ${inDays} days`;
        }
        else {
            s += `${inDays} days`;
        }
    }
    s += ' old.'
    display.innerHTML = s;
})