import React, {FC, ReactElement} from "react"
import {
  CityContent,
  CityInfo,
  CityName,
  Container,
  Date,
  DateContainer,
  DayInfo,
  TemperatureContainer,
  Temperatures,
  WeatherImg,
  Weekday
} from "./weather.styled"
import {getDay, getDayMonth, setWeatherImage} from "../../helpers/days"

interface currentCityProps {
  city: string,
  country: string,
}

interface forecastDataProps {
  timezone_offset: number,
  daily: any[],
  current: {}[]
}

interface weatherProps{
  currentCity: currentCityProps,
  forecastData: forecastDataProps,
  isLoading: boolean
}

const Weather: FC<weatherProps> = ({ forecastData, isLoading, currentCity}): ReactElement => {
  const { timezone_offset, daily, current } = forecastData
  const { city, country } = currentCity
  const weatherArray = [current, ...daily]

  const setTemperatures = (item: any) => {
    if(item.temp.min) {
      return (
        <>
          <Temperatures> Min {Math.round(item.temp.min)} ºC</Temperatures>
          <Temperatures> Max {Math.round(item.temp.max)} ºC</Temperatures>
        </>
      )
    } else {
      return <Temperatures> Min {Math.round(item.temp)} ºC</Temperatures>
    }
  }

  return (
    <Container loading={isLoading}>
      <CityContent>
      <CityName>{city}, {country}</CityName>
        <CityInfo>
          {weatherArray.slice(0, 6).map((item, index) => (
          <DayInfo key={item.dt}>
            <DateContainer>
              <Weekday>{getDay(item.dt, timezone_offset)}</Weekday>
              <Date>{getDayMonth(item.dt, timezone_offset)}</Date>
            </DateContainer>
          <WeatherImg src={setWeatherImage(item.weather[0].icon)} />
            <TemperatureContainer>
              {setTemperatures(item)}
            </TemperatureContainer>
          </DayInfo>
          ))}
        </CityInfo>
      </CityContent>
    </Container>
  )
}

export default Weather
