document.querySelector('button').addEventListener('click', async () => {
    const response = await fetch(`https://localhost:7156/WeatherForecast`, {
        method: 'GET'
    })
    const json = await response.json();
    const weather = document.querySelector(".weather");
    for (let item of json) {
        let div = document.createElement("div");
        div.textContent = JSON.stringify(item);
        weather.appendChild(div);
    }
});
