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
// async method to get data about a city
const getCity = async (city) =>{          

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    //submit in the query - key and name of the city
    const query = `?apikey=${key}&q=${city}`;    

    const response = await fetch(base + query);
    const data = await response.json();   

    return data[0];   //return the first city
};
         
