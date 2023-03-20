const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '18cd2740d1msh9a72d0affd6467bp19a1bcjsn4e0b2cff15ab',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    // const cityName = city
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then( response => response.json())
	.then((response) => { 
        console.log(response)
        //cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp 
        temp1.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like 
        humidity.innerHTML = response.humidity 
        humidity1.innerHTML = response.humidity 
        min_temp.innerHTML = response.min_temp 
        max_temp.innerHTML = response.max_temp 
        wind_speed.innerHTML = response.wind_speed 
        wind_speed1.innerHTML = response.wind_speed 
        wind_degrees.innerHTML = response.wind_degrees 
        sunrise.innerHTML = response.sunrise 
        sunset.innerHTML = response.sunset 
    })
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Kathmandu")