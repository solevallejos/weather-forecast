import {MONTHS, WEEKDAYS} from "../constants"
import {Clouds, Rain, Snow, Sun, Wind} from './../assets/img/weather/index'

export const getDayMonth = (dt: number, timezone_offset: number) => {
  let unixDate = new Date((dt + timezone_offset) * 1000)
  return unixDate.getDate() +  MONTHS[unixDate.getMonth()]
}

export const getDay = (dt: number, timezone_offset: number) => {
  let newDate = new Date((dt + timezone_offset) * 1000)
  return WEEKDAYS[newDate.getDay()]
}

export const setWeatherImage = (weather: string) => {
  switch(weather) {
    case '01d':
    case '01n':
      return Sun
    case '02d':
    case '02n':
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return Clouds
    case '09d':
    case '09n':
    case '10d':
    case '10n':
    case '11d':
    case '11n':
      return Rain
    case '13d':
    case '13n':
      return Snow
    case '50d':
    case '50n':
      return Wind
    default:
    // code block
  }
}
