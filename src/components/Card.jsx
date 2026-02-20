import React from "react";
import Button from "./Button";
import flag1 from "../assets/Flag1.png"
const Card = () => {
  return (
    <div className="bg-white/60 backdrop-blur-md border border-white/20 max-w-80 min-h-98 rounded-2xl shadow-lg">
      <div>
        <img src={flag1} alt="" />
      </div>
      <div className="p-8 font-primary text-black">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Philippines</h1>
          <p>Currency</p>
        </div>

      </div>
    </div>
  );
};

export default Card;
