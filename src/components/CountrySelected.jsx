import React from "react";
import { use } from "react";
const CountrySelected = ({ data, onClick }) => {

  const countries = use(data);
  const country = countries[0];

  return (
    <div className="z-20 mt-10 hover:scale-110 duration-200 cursor-pointer" onClick={() => onClick(country)}>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2 className="text-center font-bold font-primary">{country.name.common}</h2>
    </div>
  );
};

export default CountrySelected;
