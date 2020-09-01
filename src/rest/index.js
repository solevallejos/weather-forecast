import {WEATHER_API_KEY} from "../constants";

const API = {
 WEATHER_FORECAST: (latitude, longitude) => `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly&lang=es&appid=${WEATHER_API_KEY}`,
 CURRENT_LOCATION: "http://ip-api.com/json/?fields=country,city,lat,lon"
}

export default API
