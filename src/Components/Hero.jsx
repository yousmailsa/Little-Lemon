import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#526b63] text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-14 md:py-20 overflow-visible">

    
      <div className="md:w-1/2 max-w-lg text-center md:text-left z-10">
        <h1 className="text-5xl font-bold text-[#f4ce14]">Little Lemon</h1>
        <h2 className="text-2xl font-semibold mt-2">Chicago</h2>

        <p className="text-base mt-4 leading-6">
          We are a family owned Mediterranean restaurant focused on
          traditional recipes served with a modern twist.
        </p>

      
        <Link
          to="/reservation"
          className="mt-6 bg-[#f4ce14] text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition inline-block text-center"
        >
          Reserve a Table
        </Link>
      </div>

    
      <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          src="/src/assets/food/food10.jpg"
          alt="Food"
          className="w-[260px] h-[260px] object-cover rounded-xl shadow-xl relative md:-mb-16"
        />
      </div>

    </section>
  );
};

export default Hero;
