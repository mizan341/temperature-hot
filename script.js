const locationSubmit = document.getElementById("locationSubmit");
let locationInput = document.getElementById("locationInput");
locationSubmit.addEventListener("click", function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationInput.value + '&appid=e7b52a76fe020c052fc460ab6401f5f3')
        .then(res => res.json())
        .then(data => {
            const information = document.getElementById("information");
            information.innerHTML = '';

            let cityValue = data['name'];
            let temperatureValue = data['main']['temp'];
            let descriptionValue = data['weather'][0]['description'];
            let descriptionMainValue = data['weather'][0]['main'];
            let icon = data['weather'][0]['icon'];
            let tempChangeValue = temperatureValue - 273.15;
            let temFinalValue = tempChangeValue.toFixed(0);

            information.innerHTML += `<img id = "weatherImg" src="https://openweathermap.org/img/wn/${icon}.png" alt="">
                   <h1 class="text-uppercase">${cityValue}</h1>
                    <h3><span">${temFinalValue}</span>&deg;C</h3>
                    <h1 class="lead text-uppercase">${descriptionMainValue}</h1>
                    <h1 class="lead text-capitalize pb-0 mb-0">${descriptionValue}</h1>`;

                    document.getElementById("informationOff").style.display = "none";
                    
                    locationInput.value = '';
        })
        .catch(err => alert('Please give a valid city name!'))
});
