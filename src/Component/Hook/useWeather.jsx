import { useEffect, useState } from "react";
import useLocation from "./useLocation";

export default function useWeather(type){

    const apiKey = "477980426e8d445e870232829231412";
    let apiMethode;
    let url;
    const location = useLocation();
    const [weatherData , setWeatherData] = useState(null);
    const [loading , setLoading ]= useState(true);
    
    if(type === "current"){
        apiMethode = "current.json";
        url = `https://api.weatherapi.com/v1/${apiMethode}?key=${apiKey}&q=${location.latitude},${location.longitude}&lang=en`
    }else if(type === "forecast"){
        apiMethode = "forecast.json"
        url = `https://api.weatherapi.com/v1/${apiMethode}?key=${apiKey}&q=${location.latitude},${location.longitude}&lang=en&days=10&aqi=no&alerts=no`
    }else {
       console.log('Invalid type');
    }

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch(url);
                const data =  await response.json();
                setWeatherData(data);
            }catch(error){
                console.error("Error fetching weather data:", error);
                throw new Error("Cannot fetch data from the api",error);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    },[url]);

    return {weatherData, loading};

    
}       