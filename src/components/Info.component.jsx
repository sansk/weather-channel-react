import React from "react";

export const Info = ({ visibility, cloudiness, wind, pressure }) => {
  return (
    <section className="info-container">
      <div className="info-card">
        <p>Visibility</p>
        <span>{visibility / 1000} Km</span>
      </div>
      <div className="info-card">
        <p>Cloudiness</p>
        <span>{cloudiness} %</span>
      </div>
      <div className="info-card">
        <p>Wind</p>
        <span>
          {wind.speed} m/s {wind.direction}
        </span>
      </div>
      <div className="info-card">
        <p>Pressure</p>
        <span>{pressure} hPa</span>
      </div>
    </section>
  );
};
