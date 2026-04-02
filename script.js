const apiKey = "400f368228841dbc9838afa814800c2f";
document.getElementById('btn').addEventListener('click', function () {
    const city = document.querySelector('input').value
    checkWeather(city)
})

async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    const data = await response.json()

    if (data.cod === "404") {
        alert("City not found");
        return;
    }

    document.querySelector('.city').innerHTML = data.name;
    document.getElementById('temp').innerHTML = data.main.temp + "°C";
    document.getElementById('humidity').innerHTML = data.main.humidity + "%";
    document.getElementById('wind').innerHTML = data.wind.speed + " km/h";
}
