import useCurrentTime from "./useCurrentTime";
import useLocation from "./useLocation";
import useWeather from "./useWeather";


export function CurrentTimeWeatherPreview(){
    const location = useLocation();
    const currentWeather = useWeather("current");
    console.log(currentWeather.weatherData)

    if(currentWeather.loading){
        return (
        <>
            <div><h1>Loading...</h1></div>
        </>)
    }else{
        return (
            <>
                <div className="currentTimeWeather">
                    <div className="position-currentTimeWeather">
                        <div><img src='/icons-8-location-961.png' alt="icon position"/></div>
                        <div>{currentWeather.weatherData.location.name}</div>
                    </div>
                    <div className="header-currentTimeWeather">
                        <div><img src={currentWeather.weatherData.current.condition.icon} alt="condtion weather icon"/></div>
                        <div className="temp-prev">{currentWeather.weatherData.current.temp_c}<span className="temp-prev-val">°</span></div>
                        <div className="text-prev">{currentWeather.weatherData.current.condition.text}</div>
                    </div>
                    <div className="info-currentTimeWeather">
                        <div>
                            <img src="/wind.svg"></img>
                            <h5>{currentWeather.weatherData.current.wind_kph} kp/h</h5>
                            <h6 className="info-text">Wind</h6>
                        </div>
                        <div className="line"></div>
                        <div>
                            <img src="/drop-removebg-preview.png"></img>
                            <h5>{currentWeather.weatherData.current.humidity} %</h5>
                            <h6 className="info-text">Humidity</h6>
                        </div>
                    </div>
                </div>
            </>
        );
    
    }

}




