document.querySelector('button').addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://localhost:7156/WeatherForecast');
    xhr.send();
    xhr.onload = () => {
        const arr = JSON.parse(xhr.response);
        const weather = document.querySelector(".weather");
        for (i = 0; i < arr.length; i++) {
            let span = document.createElement('span');
            span.textContent = JSON.stringify(arr[i]);
            weather.appendChild(span);
        }
    };
})