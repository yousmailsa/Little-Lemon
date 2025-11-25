import React from "react";


const Abouta = () => {
  return (
    <article className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-12 max-w-6xl mx-auto">

      
      <section className="max-w-lg">
        <h1 className="text-4xl font-bold text-[#f4ce14]">Little Lemon</h1>
        <h2 className="text-xl font-semibold mt-1">Chicago</h2>

        <p className="mt-4 leading-7 text-gray-700">
          Little Lemon was founded in 1995 by two Italian brothers, Adrian and Mario. 
          Although Chicago is known for its cultural variety, they noticed that authentic 
          Mediterranean flavors were hard to find. Their passion for sharing the tastes of 
          their hometown in Italy inspired them to open the restaurant. Nearly thirty years 
          later, the brothers remain actively involved in running Little Lemon.
        </p>
      </section>

      
      <section className="relative w-full flex justify-center md:justify-end">
        <img
          src="src/assets/food/food1.png"
          alt="Little Lemon cuisine"
          className="w-[260px] h-[320px] object-cover rounded-xl shadow-lg relative z-20 border-2 border-white"
        />
        <img
          src="src/assets/food/food2.jpeg"
          alt="Little Lemon cuisine 2"
          className="w-[260px] h-[320px] object-cover rounded-xl shadow-lg absolute top-10 right-[-20px] opacity-95 z-10 border-2 border-white"
        />
      </section>

    </article>
  );
};

export default Abouta;
