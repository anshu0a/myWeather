import { useState } from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import WeatherData from './WeatherData.jsx'
import Loader from './loader.jsx';

import "./searchBox.css"

export default function SearchBox() {
  let [city, setCity] = useState("")
  let [loader, setloader] = useState(false)
  let [result, setResult] = useState({ is: false })

  const API_URL = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = "66a9f18efeb63c563cc49da730e6628a"
  async function getWeather() {
    try {
      let response = await fetch(`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`);
      let res = await response.json();
      setResult({
        is: true,
        error: false,
        temp: res.main.temp,
        feel: res.main.feels_like,
        ground: res.main.grnd_level,
        humidity: res.main.humidity,
        pressure: res.main.pressure,
        sea_level: res.main.sea_level,
        weather: res.weather[0].description,
        wind: res.wind.speed,
        city: res.name,
        country: res.sys.country,
      })
    } catch (err) {
      setResult({
        is: true,
        error: true,
      })
    }
  }


  function inputSearch(ev) {
    setCity(ev.target.value)
  }
  async function formSubmit(ev) {
    if(city.length===0){
      return
    }
    ev.preventDefault();
    setloader(true)
    await getWeather();
    setCity("")
    setloader(false)

  }
  return (<>
    <div className='SearchBox'>
      {loader ? <Loader cityx={city} /> : <></>}
      <form onSubmit={formSubmit}>
        <h1>Get Weather</h1>
        <TextField autoComplete="off" style={{ width: "calc(100% - 50px)",marginRight:"5px"}} size="small" id="city" onChange={inputSearch} value={city} label="Your city name" placeholder='Eg : delhi' varient="outlined" ></TextField>
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </form>
    </div>
    {result.is ?
      (result.error ?
        <div className='error'>
          <h2 >Oops! Somthing went wrong.</h2>
          <li>City may not be exist</li>
          <li>Check the spelling of City name</li>
          <li>Check internet connection</li>
        </div>
        :
        <WeatherData info={result} />
      )
      :
      <>
        <h1 className='noresult'>No Result</h1>
        <p>Search Weather in your city </p>
      </>}
  </>)

}