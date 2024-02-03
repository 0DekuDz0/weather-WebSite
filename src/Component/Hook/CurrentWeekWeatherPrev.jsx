import useCurrentTime from "./useCurrentTime";
import useWeather from "./useWeather";

export default function CurrentWeekWeatherPrev(){
    const weatherData = useWeather("forecast");
    const currentTime = useCurrentTime();
    const dayOfWeek = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

    function getDayOfWeek(currentDay,prev){
        if(currentDay + prev>6){
             return dayOfWeek[currentDay + prev - 7];
        }
        return dayOfWeek[currentDay+prev];
    }
    // Check if weatherData is available before accessing its properties
    if (weatherData.loading || !weatherData.weatherData || !weatherData.weatherData.forecast) {
        return <>Loading...</>;
    }

    // Check if the necessary properties exist before accessing them
    const forecastDay = weatherData.weatherData.forecast.forecastday;
    if ( !forecastDay) {
        return <>Weather data not available.</>;
    }

    return(
        <>
            <div className="currentWeekWeather">
                <div className="day-currentWeekWeather">
                    <div className="day-name">{getDayOfWeek(currentTime.getDay(),-1)}</div>
                    <div className="day-condition">
                        <img src={weatherData.weatherData.forecast.forecastday[0].day.condition.icon} alt="" />
                        {weatherData.weatherData.forecast.forecastday[0].day.condition.text}
                    </div>
                    <div className="day-temp">
                        {weatherData.weatherData.forecast.forecastday[0].day.avgtemp_c}
                    </div>
                </div>
                <div className="day-currentWeekWeather">
                    <div className="day-name">{getDayOfWeek(currentTime.getDay(),0)}</div>
                    <div className="day-condition">
                        <img src={weatherData.weatherData.forecast.forecastday[1].day.condition.icon} alt="" />
                        {weatherData.weatherData.forecast.forecastday[1].day.condition.text}
                    </div>
                    <div className="day-temp">
                        {weatherData.weatherData.forecast.forecastday[1].day.avgtemp_c}
                    </div>
                </div>
                <div className="day-currentWeekWeather">
                    <div className="day-name">{getDayOfWeek(currentTime.getDay(),1)}</div>
                    <div className="day-condition">
                        <img src={weatherData.weatherData.forecast.forecastday[2].day.condition.icon} alt="" />
                        {weatherData.weatherData.forecast.forecastday[2].day.condition.text}
                    </div>
                    <div className="day-temp">
                        {weatherData.weatherData.forecast.forecastday[2].day.avgtemp_c}
                    </div>
                </div>
            </div>

        </>
    );
}