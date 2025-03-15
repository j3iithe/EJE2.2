const apiKey = "4409ba80194c592bddc806bed7c0ffba"; // Reemplaza con tu clave de OpenWeatherMap

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Por favor, ingresa una ciudad.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Ciudad no encontrada");

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById("weatherResult");
    weatherDiv.classList.remove("hidden");

    weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <h3>${data.weather[0].description}</h3>
        <h2>🌡 ${data.main.temp}°C</h2>
        <p>Humedad: ${data.main.humidity}%</p>
        <p>Viento: ${data.wind.speed} m/s</p>
    `;
}

