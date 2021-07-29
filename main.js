const dogButton = document.querySelector('.btn-primary');
const dogImg = document.querySelector('.card-img-top');
const submitButton = document.querySelector('#submitButton');
const newDiv = document.querySelector('.city-weather');
const paraDiv = document.querySelector('.paraCity');




dogButton.addEventListener('click',() =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    
    // Run the following after receiving a response from the API
    .then(function (rawData) {
        return rawData.json();
    })
    
    // Run the following after parsing the data form the response
    .then(function (data) {
        dogImg.src = data.message;
    });
});



submitButton.addEventListener('click',(e) =>{
    e.preventDefault();
    const cityName = document.querySelector('input').value;
    fetch('https://goweather.herokuapp.com/weather/' + cityName)
    
    // Run the following after receiving a response from the API
    .then(function (rawData) {
        return rawData.json();
    })
    
    // Run the following after parsing the data form the response
    .then(function (data) {
        const temperature = document.createElement('div');
        temperature.innerText = data.temperature;
        newDiv.appendChild(temperature);

        const wind = document.createElement('div');
        wind.innerText = data.wind;
        newDiv.appendChild(wind);

        const description = document.createElement('div');
        description.innerText = data.description;
        newDiv.appendChild(description);

        const forecastDayOne = document.createElement('div');
        forecastDayOne.innerText = 'Day: ' + data.forecast[0].day + ' temperature:' + data.forecast[0].temperature + ' Wind:' + data.forecast[0].wind;
        newDiv.appendChild(forecastDayOne);

        const forecastDayTwo = document.createElement('div');
        forecastDayTwo.innerText =  'Day: ' + data.forecast[1].day + ' temperature:' + data.forecast[1].temperature + ' Wind:' + data.forecast[1].wind;
        newDiv.appendChild(forecastDayTwo);

        const forecastDayThree = document.createElement('div');
        forecastDayThree.innerText =  'Day: ' + data.forecast[2].day + ' temperature:' + data.forecast[2].temperature + ' Wind:' + data.forecast[2].wind;
        newDiv.appendChild(forecastDayThree);
    });
    
});