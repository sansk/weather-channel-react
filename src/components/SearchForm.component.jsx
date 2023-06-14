import { useRef } from "react";
import { MdMyLocation } from "react-icons/md";
import { Wrapper as SearchFormStyle } from "../style-components/SearchFormStyle";

export const SearchForm = ({ setLocation }) => {
  const locationRef = useRef();

  const handleLocationChange = (event) => {
    event.preventDefault();
    setLocation(locationRef.current.value);
  };

  return (
    <SearchFormStyle>
      <div className="section search-container">
        <form className="form" onSubmit={handleLocationChange}>
          <input
            className="form-input"
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
            ref={locationRef}
          />
          <button className="btn-search btn" type="submit">
            <MdMyLocation />
          </button>
        </form>
      </div>
    </SearchFormStyle>
  );
};
