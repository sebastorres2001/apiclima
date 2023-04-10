import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'

function App() {

  const [latlon, setLatlon] = useState()
  const [weather, setweather] = useState()
  const [temperature, setTemperature] = useState()

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }
      setLatlon(obj)
    }
    const error = err => {
      console.log(err)
    }
    navigator.geolocation.getCurrentPosition(success, error)
  }, [])

  useEffect(() => {
    if(latlon) {
      const apiKey = 'd55a1f9c19f651738d0a688e58e87929'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${apiKey}`
      axios.get(url)
      .then(res => {
        const celsius = (res.data.main.temp - 273.15).toFixed(1)
        const farenheit = (celsius * 9 / 5 + 32).toFixed(1)

        setTemperature({ celsius, farenheit })
        setweather(res.data)
      })
      .catch(err => console.log(err))
    }
  }, [latlon])
  


  return (
    <div className="App">
      {
        weather ?
          <WeatherCard
            weather={weather}
            temperature={temperature}
          />
          :
          <Loading />
        }
    </div>
  )
}

export default App
