import React, { Suspense } from "react";
import Logo from "../assets/WorldBrowse.png";
import flag1 from "../assets/flag1.png";
import flag2 from "../assets/flag2.png";
import flag3 from "../assets/flag3.png";
import flag4 from "../assets/flag4.png";
import Search from "../components/Search";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import CountrySelected from "../components/CountrySelected";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState(null);
  let navigate = useNavigate();

  const { data } = useFetch(
    submittedQuery
      ? `https://restcountries.com/v3.1/name/${submittedQuery}`
      : null,
  );

  const handleSubmit = () => {
    setSubmittedQuery(searchCountry);
  };

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center bg-primary relative overflow-hidden ">
      <img src={Logo} alt="Logo" className="w-50 h-50 absolute top-0 left-0" />
      <img
        src={flag1}
        alt="flag1"
        className="h-30 w-50 absolute lg:top-0 bottom-0 left-0 lg:translate-11/12 rotate-45 opacity-35"
      />
      <img
        src={flag2}
        alt="flag1"
        className="h-30 w-50 absolute bottom right-0 lg:translate-11/12 -translate-10/6 rotate-45 opacity-35"
      />
      <img
        src={flag2}
        alt="flag1"
        className="h-30 w-50 absolute translate-10/12 rotate-45 opacity-35"
      />
      <img
        src={flag3}
        alt="flag1"
        className="h-30 w-50 absolute top-0 lright-0 translate-11/12 rotate-45 opacity-35"
      />
      <img
        src={flag4}
        alt="flag1"
        className="h-30 w-50 absolute bottom-0 left-40 translate-11/12 rotate-45 opacity-35"
      />
      <h1 className="font-primary text-5xl md:text-5xl lg:text-7xl font-bold text-shadow-lg uppercase text-center z-20 :text-start">
        <span className="">Explore</span> Beyond Borders
      </h1>
      <p className="mb-10 text-sm text-center md:text-lg text-secondary px-4">
        Discover detailed insights about every nation — from population and
        region to culture and flags — all in one place
      </p>
      <div className="px-4 w-full md:max-w-2xl">
        <Search
          onChange={setSearchCountry}
          value={searchCountry}
          onSubmit={handleSubmit}
        />
      </div>
      {data && (
        <Suspense
          fallback={
            <svg
              className="mt-6 size-10 animate-spin text-tertiary z-50"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          }
        >
          <CountrySelected data={data} onClick={(data) => navigate("/details", {state: data})} />
        </Suspense>
      )}
    </div>
  );
};

export default LandingPage;
