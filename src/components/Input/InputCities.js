import React from "react";

const InputCities = ({ selectedCity, setSelectedCity, citiesArray }) => (
  <>
    <div className="option-city">
      <div className="col-35">
        {" "}
        <label>Ваш город</label>
      </div>
      <div className="col-65">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Ваш город</option>
          {/* Краще вище створи нову змінну яка буде називатися citiesAfterSortAndFilter
                   а тут будеш робити citiesAfterSortAndFilter.map(...)*/}
          {citiesArray
            .filter((city) => city.population >= 50000)
            .sort((a, b) => a.city.localeCompare(b.city, "ru-RU"))
            .map((city) => (
              <option key={city.city} value={city.city}>
                {city.city} ({city.population}){" "}
              </option>
            ))}
        </select>
      </div>
    </div>
  </>
);

export default InputCities;
