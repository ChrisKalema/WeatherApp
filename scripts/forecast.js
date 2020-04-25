//api key from accu-weather
const key = '95UcSEjYQGif6xGvtvSCkvrSNDDi9TBu';    

//get weather information
const getWeather = async (id) =>{

    const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;
    const query = `?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    
    return data[0];
;}

//Get City information
const getCity = async (city) =>{          // async method to get data about a city

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;    //submit in the query - key and name of the city

    const response = await fetch(base + query);
    const data = await response.json();   

    return data[0];   //return the first city
};

// getCity('New York')
//     .then(data => {return getWeather(data.Key);})       //use the getWeather method to get the City Key
//     .then(data =>{console.log(data);})
//     .catch(error => console.log(error));              
