import "./WeatherData.css"


export default function WeatherData({ info = {} }) {
    let check = info.weather.toLowerCase();
    console.log(check)
    let secll = "imgx/" + check + "x.jpg";
    let svgx = "svg/sun.svg"
    if (check === "clear sky") {
        svgx = "svg/Clear Sky.svg"
    } else if (check.includes("clouds")) {
        svgx = "svg/Clouds.svg"
    } else if (check==="light rain") {
        svgx = "svg/rain.svg"
    } else if (check==="moderate rain") {
        svgx = "svg/rain2.svg"
    }else if (check==="drizzle") {
        svgx = "svg/Drizzle.svg"
    }else if (check==="thunderstorm") {
        svgx = "svg/Thunderstorm.svg"
    }else if (check==="snow") {
        svgx = "svg/Snow.svg"
    }else if (check==="sand") {
        svgx = "svg/Dust.svg"
    }else if (check==="tornado") {
        svgx = "svg/Tornado.svg"
    }else if (check==="ash") {
        svgx = "svg/Volcano.svg"
    }else if (check==="dust"||check==="smoke") {
        svgx = "svg/Smoke.svg"
    }

    return (
        <div className="WeatherData">
            <img src={secll} /><br/>
            <h2 style={{ display: "inline" }}>{info.city}, {info.country}</h2> <img style={{ width: "35px", objectFit: "contain" }} src={svgx}></img>
            <p>The weather can be described as {info.weather}. It feels like {info.feel}&deg;C</p><br></br>
            <p>
            <svg  viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/>
            </svg>
                <b>Humidity :</b>{info.humidity}%</p>
            <p>
            <svg  viewBox="0 0 320 512">
            <path  d="M160 64c-26.5 0-48 21.5-48 48l0 164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5L208 112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112l0 164.4c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6L48 112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L144 144c0-8.8 7.2-16 16-16s16 7.2 16 16l0 178.7c18.6 6.6 32 24.4 32 45.3z"/>
            </svg>
                <b >Tempeture : </b>{info.temp}&deg;C </p>
            <p>
            <svg   viewBox="0 0 512 512">
            <path d="M288 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/>
            </svg>
                <b>Wind Speed : </b>{info.wind} km/hr</p>
                <p>
            <svg  width="50"   viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
            </svg>
                <b>Pressure : </b>{info.pressure} hPa</p>
            <p>
            <svg  viewBox="0 0 576 512">
            <path d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/>
            </svg>
                <b>Sea Level : </b>{info.sea_level} hPa</p>
            
            <p>
            <svg   viewBox="0 0 576 512"><path d="M288 352c17.7 0 32-14.3 32-32l0-210.7 25.4 25.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-80-80c-12.5-12.5-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3 256 320c0 17.7 14.3 32 32 32zm-18.5 69.9C247 437.4 219.5 448 192 448c-26.9 0-55.3-10.8-77.4-26.1c0 0 0 0 0 0c-11.9-8.5-28.1-7.8-39.2 1.7c-14.4 11.9-32.5 21-50.6 25.2c-17.2 4-27.9 21.2-23.9 38.4s21.2 27.9 38.4 23.9c24.5-5.7 44.9-16.5 58.2-25C126.5 501.7 159 512 192 512c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9c33 0 65.5-10.3 94.5-25.8c13.4 8.4 33.7 19.3 58.2 25c17.2 4 34.4-6.7 38.4-23.9s-6.7-34.4-23.9-38.4c-18.1-4.2-36.2-13.3-50.6-25.2c-11.1-9.4-27.3-10.1-39.2-1.7c0 0 0 0 0 0C439.4 437.2 410.9 448 384 448c-27.5 0-55-10.6-77.5-26.1c-11.1-7.9-25.9-7.9-37 0zM192 192L48 192c-26.5 0-48 21.5-48 48L0 425c5.3-3.1 11.2-5.4 17.5-6.9c13.1-3.1 26.7-9.8 37.3-18.6c22.2-18.7 54.3-20.1 78.1-3.4c18 12.4 40.1 20.3 59.1 20.3L192 192zm384 48c0-26.5-21.5-48-48-48l-144 0 0 224.5s0 0 0 0c19 0 41.2-7.9 59.2-20.3c23.8-16.7 55.8-15.4 78.1 3.4c10.6 8.8 24.2 15.6 37.3 18.6c6.3 1.5 12.1 3.8 17.5 6.9l0-185z"/>
            </svg>
                <b>Ground Level : </b>{info.ground} hPa</p>

        </div>
    )
}