import { MdLocationPin } from "react-icons/md";
import { Wrapper as LocationStyle } from "../style-components/LocationStyle";

export const Location = ({ location, country, dateAndTime }) => {
  return (
    <LocationStyle>
      <div className="location-container section">
        <div className="location">
          <MdLocationPin style={{ fontSize: "2rem" }} />{" "}
          <h4>
            {location}, {country}
          </h4>
        </div>
        <div className="time">{dateAndTime}</div>
      </div>
    </LocationStyle>
  );
};
