import React from "react";
import { useLocation, useNavigate } from "react-router";
import Arrow from "../assets/right-arrow.png";

const FlagDisplays = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state;

  if (!country) return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <p className="text-secondary text-4xl">No country selected.</p>
    </div>
  );

  const currency = country.currencies
    ? Object.values(country.currencies)[0]
    : null;

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const nativeName = country.name?.nativeName
    ? Object.values(country.name.nativeName)[0]?.common
    : null;

  return (
    <div className="min-h-screen bg-primary text-black overflow-hidden">

     
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={country.flags?.png}
          alt={country.flags?.alt}
          className="w-full h-full object-cover"
        />
       
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary" />

       
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 flex items-center gap-2 font-bold uppercase text-sm text-white tracking-widest bg-tertiary px-4 py-2 rounded-full backdrop-blur-sm hover:bg-tertiary/50 duration-200 cursor-pointer"
        >
          <img src={Arrow} alt="" className="rotate-180 w-4 h-4 invert-100" />
          Back
        </button>
      </div>

      
      <div className="px-6 md:px-16 lg:px-32 pb-16 -mt-6 relative z-10">

        
        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl">{country.flag}</span>
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold font-primary uppercase tracking-wide">
              {country.name?.common}
            </h1>
            {nativeName && (
              <p className="text-secondary opacity-60 text-sm">{nativeName}</p>
            )}
          </div>
        </div>

        <p className="text-secondary opacity-50 uppercase tracking-widest text-xs mb-10">
          {country.region} · {country.subregion}
        </p>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Capital", value: country.capital?.[0] ?? "N/A" },
            { label: "Population", value: country.population?.toLocaleString() },
            { label: "Area", value: `${country.area?.toLocaleString()} km²` },
            { label: "Continent", value: country.continents?.[0] ?? "N/A" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-secondary opacity-50 text-xs uppercase tracking-widest mb-1">{label}</p>
              <p className="font-bold text-lg">{value}</p>
            </div>
          ))}
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left col */}
          <div className="flex flex-col gap-4">
            <Detail label="Official Name" value={country.name?.official} />
            <Detail label="Languages" value={languages} />
            <Detail
              label="Currency"
              value={currency ? `${currency.name} (${currency.symbol})` : "N/A"}
            />
            <Detail label="Driving Side" value={country.car?.side ?? "N/A"} />
            <Detail label="Timezones" value={country.timezones?.join(", ")} />
          </div>

        
          <div className="flex flex-col items-center gap-4">
            {country.coatOfArms?.png && (
              <>
                <p className="text-secondary opacity-50 uppercase tracking-widest text-xs">
                  Coat of Arms
                </p>
                <img
                  src={country.coatOfArms.png}
                  alt="Coat of Arms"
                  className="w-40 h-40 object-contain drop-shadow-lg"
                />
              </>
            )}
            <div className="flex gap-3 mt-4 flex-wrap justify-center">
              {country.altSpellings?.map((name) => (
                <span
                  key={name}
                  className="text-xs border border-white/20 px-3 py-1 rounded-full opacity-60"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


const Detail = ({ label, value }) => (
  <div className="flex flex-col border-b border-white/10 pb-3">
    <p className="text-secondary opacity-50 text-xs uppercasetracking-widest">{label}</p>
    <p className="font-semibold mt-1">{value ?? "N/A"}</p>
  </div>
);

export default FlagDisplays;