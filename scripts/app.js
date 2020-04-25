//capture data from the form
const cityForm = document.querySelector('form');  
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    console.log(data);
    const cityDetails = data.cityDetails;
    const weather = data.weather;

    //Alternative = Destructuring properties
    //const {cityDetails, weather} = data;

    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    `;

    //update icon images
    const iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconsrc);

    // update night/day images
    let timesrc = null;
    if(weather.IsDayTime){
        timesrc = 'img/day.svg';
    }else{
        timesrc = 'img/night.svg';
    }
    //change the card image to day or night
    
    time.setAttribute('src', timesrc);   
    //remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

const updateCity = async (city)=>{      //async because the methods inside returns promises

    const cityDetails = await getCity(city);     
    const weather = await getWeather(cityDetails.Key);

    return{
        cityDetails: cityDetails,
        weather: weather
    };
};

cityForm.addEventListener('submit', e=>{
    //prevent default value
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update UI with the submitted city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error));

    //set local storage
    localStorage.setItem('city', city);
});

//show the recent city every refresh
if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
        .then(data =>{ updateUI(data)})
        .catch(error =>console.log(error));
}
