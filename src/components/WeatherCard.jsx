import { useState } from "react"

const WeatherCard = ({ weather, temperature }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemperature = () => setIsCelsius(!isCelsius)

  return (
    <div className="card">
      
      <h2 className="">{weather?.name}, {weather?.sys.country}</h2>
      <h1 className="temp info">
            {
              isCelsius
              ? `${temperature?.celsius} °C`
              : `${temperature?.farenheit} °F`
            }
        </h1>
      
      <section className="card temp">
            <img className="" src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            <ul>
                <h3>{weather?.weather[0].description}</h3>
                <li><span><strong>Win Speed: </strong></span>{weather?.wind.speed} meter/sec</li>
                <li><span><strong>Clouds: </strong></span>{weather?.clouds.all} %</li>
                <li><span><strong>Pressure: </strong></span>{weather?.main.pressure} hPa</li>
            </ul>
      </section>
 
        <button className="change"
          onClick={handleChangeTemperature}>
           <strong>Change to{isCelsius ? '°F' : '°C'}</strong>
        </button>
    </div>
  )
}

export default WeatherCard
