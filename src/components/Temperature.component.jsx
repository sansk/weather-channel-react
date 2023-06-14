import { Wrapper as TemperatureStyle } from "../style-components/LocationStyle";
import {
  UilTemperature,
  UilTemperatureEmpty,
  UilTemperatureQuarter,
  UilSun,
  UilSunset,
  UilSnowFlake,
  UilRaindrops,
  UilDesert,
} from "@iconscout/react-unicons";

export const TemperatureComponent = ({ weatherData }) => {
  const { generalInfo, temperature, sunrise, sunset, rain, snow, humidity } =
    weatherData;
  return (
    <TemperatureStyle>
      <div className="section temp-container">
        <div className="temp-description">
          <h3>
            {generalInfo.description
              ? generalInfo.description
              : generalInfo.info}
          </h3>
        </div>
        <div className="temp-details">
          <div className="current-temp">
            <img src={generalInfo.image} alt={generalInfo.info} />
            <p className="temp">
              {`${temperature.currentTemp.toFixed()}°C`} <br />
              <span>{generalInfo.info}</span>
            </p>
          </div>
          <div className="max-min">
            <div className="info-row">
              <UilTemperature /> <span>Max: </span>{" "}
              <span>{temperature.maxTemp} °C</span>
            </div>
            <div className="info-row">
              <UilTemperatureQuarter /> <span>Min: </span>
              <span>{temperature.minTemp} °C</span>
            </div>
            <div className="info-row">
              <UilDesert /> <span>Humidity: </span>
              <span>{humidity}%</span>
            </div>
          </div>
          <div className="other-info">
            <div className="info-row">
              <UilTemperatureEmpty /> <span>Feels like: </span>{" "}
              {temperature.feelsLike}
            </div>
            <div className="info-row">
              <UilSun /> <span>Sunrise: </span> {sunrise}
            </div>
            <div className="info-row">
              <UilSunset /> <span>Sunset: </span> {sunset}
            </div>
          </div>
        </div>
        <div className="rain-snow">
          {snow ? (
            <>
              <div className="info-row">
                <UilSnowFlake />
                <span>Snow</span>
                <span>1h: {snow.one} mm</span>
                {snow.three ? <span>3h: {snow.three} mm</span> : null}
              </div>
            </>
          ) : null}
          {rain ? (
            <>
              <div className="info-row">
                <UilRaindrops />
                <span>Rain</span> <span>1h: {rain.one} mm</span>
                {rain.three ? <span>3h: {rain.three} mm</span> : null}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </TemperatureStyle>
  );
};
