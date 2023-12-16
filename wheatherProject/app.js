const key = "3162e0e90612cf71e1b256a451d0b7c0";
let searchInput = document.querySelector('#search-input')
let searchButton = document.querySelector('.fa-solid')
let temp = document.querySelector('.weatherTemp');
let city = document.querySelector('.weatherCity')
let humidity = document.querySelector('.humid')
let windSpeed = document.querySelector('.wind')
let weatherImage = document.querySelector('.weatherImage')

if(searchInput.value==="")
{
    humidity.innerHTML="NA";
    windSpeed.innerHTML="NA";
    temp.innerHTML="NA";
    city.innerHTML="Search city please"
}

searchButton.addEventListener('click', function () {
    let cityName = searchInput.value;
    console.log(cityName);
    searchInput.value = "";
    findDetails(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)
})

let findDetails = async function (url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + "km/h";
    temp.innerHTML = data.main.temp + "°C";
    city.innerHTML = data.name;
    if (data.weather[0].main === "Clouds") {
        weatherImage.children[0].outerHTML="<img src=\"./images/cloudy.png\" alt=\"\"></img>"
    }
    else if(data.weather[0].main==="Clear")
    {
        weatherImage.children[0].outerHTML="<img src=\"./images/sunny.png\" alt=\"\"></img>"
    }
    else if(data.weather[0].main==="Rainy")
    {
        weatherImage.children[0].outerHTML="<img src=\"./images/rainy.png\" alt=\"\"></img>"
    }
}