import { useState, useEffect } from "react";
import { getFormattedWeatherData } from "./utils/weatherUtils";
import { SearchForm } from "./components/SearchForm.component";
import { Location } from "./components/Location.component";
import { TemperatureComponent } from "./components/Temperature.component";
import { Info } from "./components/Info.component";

function App() {
  const [location, setLocation] = useState("chennai");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({
      q: location,
      units: "metric",
    });
    setWeatherData({ ...data });
  };

  useEffect(() => {
    fetchWeather();
  }, [location]);

  return (
    <>
      <main>
        <SearchForm setLocation={setLocation} />
        {weatherData ? (
          <>
            <Location
              location={weatherData.location}
              country={weatherData.country}
              dateAndTime={weatherData.dateAndTime}
            />
            <TemperatureComponent weatherData={weatherData} />
            <Info
              visibility={weatherData.visibility}
              cloudiness={weatherData.cloudiness}
              wind={weatherData.wind}
              pressure={weatherData.pressure}
            />
          </>
        ) : (
          <>
            <div className="loading"></div>
          </>
        )}
        <section className="personal-info">
          <p>
            Made with ❤ <a href="https://github.com/sansk">SK</a>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
