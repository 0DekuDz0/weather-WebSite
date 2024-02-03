import './App.css';
import CurrentDayWeatherPreview from './Component/Hook/CurrentDayWeatherPreview.jsx';
import { CurrentTimeWeatherPreview } from './Component/Hook/CurrentTimeWeatherPreview.jsx';
import CurrentWeekWeatherPrev from './Component/Hook/CurrentWeekWeatherPrev.jsx';
import logoApp from "./image/BUDJ1.png"
import cloud from "./image/cloud.png"


function App() {
  
    return (
      <>
        <div className='root'>
          <div className='header-root'>
            <img src={logoApp}></img>
            <h5>Stay Ahead, Weather Wise: Your Forecast, Your Way!</h5>
          </div>
          <CurrentTimeWeatherPreview></CurrentTimeWeatherPreview>
          <CurrentDayWeatherPreview></CurrentDayWeatherPreview>
          <div className='bande' >
              <p>BÜDJ</p>
              <img src={cloud}></img>
          </div>
          <CurrentWeekWeatherPrev></CurrentWeekWeatherPrev>
        </div>
      </>
    );
  
}

export default App;
