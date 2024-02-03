import { useState } from "react";
import useCurrentTime from "./useCurrentTime";
import useWeather from "./useWeather";

export default function CurrentDayWeatherPreview() {
    const weatherData = useWeather("forecast");
    const currentTime = useCurrentTime();
    let weatherTime = [];

    function getHours(currentHour, currentDay) {
        let j = currentHour;
        let d = currentDay;

        for (let i = 0; i < 4; i++) {
            if (j + i >= 24) {
                j = j-24;
                d = d+1;
            }
            weatherTime.push({ hour: j + i, day: d });
        }
    }

    // Assuming currentTime is defined somewhere
    getHours(currentTime.getHours(), 0);

    // Check if weatherData is available before accessing its properties
    if (weatherData.loading || !weatherData.weatherData || !weatherData.weatherData.forecast) {
        return <>Loading...</>;
    }

    // Check if the necessary properties exist before accessing them
    const forecastDay = weatherData.weatherData.forecast.forecastday[weatherTime[0].day];
    if (!forecastDay || !forecastDay.hour || !forecastDay.hour[weatherTime[0].hour]) {
        return <>Weather data not available.</>;
    }

    return (
        <>
            <div className="currentDayWeather-section ">
                <div className="header-text-section">Today</div>
                <div className="currentDayWeather">
                    <div className="hour-currentDayWeather-current" >
                        <div>
                            {weatherData.weatherData.forecast.forecastday[weatherTime[0].day].hour[weatherTime[0].hour].temp_c}°
                        </div>
                        <div>
                            <img src={weatherData.weatherData.forecast.forecastday[weatherTime[0].day].hour[weatherTime[0].hour].condition.icon} alt="" />
                        </div>
                        <div className="hour">
                            {weatherTime[0].hour}H00
                        </div>
                    </div>
                    <div className="hour-currentDayWeather">
                        <div>
                            {weatherData.weatherData.forecast.forecastday[weatherTime[1].day].hour[weatherTime[2].hour].temp_c}°
                        </div>
                        <div>
                            <img src={weatherData.weatherData.forecast.forecastday[weatherTime[1].day].hour[weatherTime[1].hour].condition.icon} alt="" />
                        </div>
                        <div className="hour">
                            {weatherTime[1].hour}H00
                        </div>
                    </div>
                    <div className="hour-currentDayWeather">
                        <div>
                            {weatherData.weatherData.forecast.forecastday[weatherTime[2].day].hour[weatherTime[2].hour].temp_c}°
                        </div>
                        <div>
                            <img src={weatherData.weatherData.forecast.forecastday[weatherTime[2].day].hour[weatherTime[2].hour].condition.icon} alt="" />
                        </div>
                        <div className="hour">
                            {weatherTime[2].hour}H00
                        </div>
                    </div>
                    <div className="hour-currentDayWeather">
                        <div>
                            {weatherData.weatherData.forecast.forecastday[weatherTime[3].day].hour[weatherTime[3].hour].temp_c}°
                        </div>
                        
                        <div>
                            <img src={weatherData.weatherData.forecast.forecastday[weatherTime[3].day].hour[weatherTime[3].hour].condition.icon} alt="" />
                        </div>
                        <div className="hour">
                            {weatherTime[3].hour}H00
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
