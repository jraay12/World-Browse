import React from "react";
import search from "../assets/search.png";
import arrow from "../assets/right-arrow.png";
const Search = ({ value, onChange, onSubmit }) => {
  const handleChange = (e) => {
    const input = e.target.value;
    onChange(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full min-h-20 md:min-h-20 bg-white z-50 relative flex items-center rounded-xl">
        <img src={search} alt="" className="w-4 h-4 absolute top-3 left-2" />
        <input
          type="text"
          placeholder="e.x Philippines"
          value={value}
          onChange={handleChange}
          className="outline-none min-w-11/12 absolute top-2 left-8"
        />
        <div className="border border-gray-100 w-full"></div>
        <button
          className="flex items-center justify-center w-16 h-8 rounded-xl bg-white shadow-sm absolute bottom-1 right-4 cursor-pointer"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
