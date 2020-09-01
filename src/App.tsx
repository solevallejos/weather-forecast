import React, {useEffect, useState} from 'react'
import {Container, Response, Error} from './components/container/container.styled'
import Cities from './components/cities'
import Weather from './components/weather'
import GlobalFonts from './assets/fonts/fonts'
import API from "./rest/index"
import axios from "axios"
import {Reset} from 'styled-reset'
import {cities as cityList} from './../src/helpers/cities'

// todo:

//  3. Selected city opacity
//  4. Test



function App() {
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('')
  const [error, setError] = useState('')
  const [cities, setCities] = useState(cityList)
  const [currentCity, setCurrentCity] = useState()
  const [forecastData, setForecastData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError('')
        setLoading(true)
        setLoadingMessage('Retrieving data')
        const { data } = await axios.get(API.CURRENT_LOCATION)
        setCities([data, ...cities])
      } catch(e){
        setError('There was an error. Please try again.')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(()=>{
    setCurrentCity(cities[0])
  }, [cities])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError('')
        setLoading(true)
        setLoadingMessage('Retrieving data')
        const {lat, lon} = currentCity
        const responseWeather = await axios.get(API.WEATHER_FORECAST(lat, lon))
        setForecastData(responseWeather.data)
      } catch(e){
        setError('There was an error. Please select another city.')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [currentCity])

  const returnCityData = (city: {}) => setCurrentCity(city)

  return (
    <>
      <Reset />

      <GlobalFonts/>
      <Container>
        {error && <Error error> {error}</Error>}
        {loading && <Response isLoading={loading}>{loadingMessage}</Response>}
        <Cities onClick={returnCityData} cityList={cities} />
        {forecastData && <Weather forecastData={forecastData} isLoading={loading} currentCity={currentCity}/>}
      </Container>
    </>
  )
}

export default App
