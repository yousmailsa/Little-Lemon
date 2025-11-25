import React from "react";

const About = () => {
  return (
    <div className="mt-10">
    <article className="flex flex-col md:flex-row items-start justify-between gap-10 px-6 py-12 max-w-6xl mx-auto">
      
      
      <section className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold text-yellow-400">Little Lemon</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Chicago</h2>
        <p className="text-gray-600 leading-relaxed">
          Little Lemon is a family-owned Mediterranean restaurant founded in 1995 by Italian brothers Adrian and Mario. 
          Inspired by the flavors of their hometown in Italy, they bring authentic Mediterranean dishes to the heart of Chicago. 
          Decades later, the brothers continue to share their passion for food with the local community.
        </p>
      </section>

      
      <section className="md:w-1/2 relative flex justify-center md:justify-end">
        <img
          src="src/assets/food/food1.png"
          alt="Mediterranean dish 1"
          className="w-[260px] h-[320px] object-cover rounded-xl shadow-lg z-20 border-2 border-black"
        />
        <img
          src="src/assets/food/food2.jpeg"
          alt="Mediterranean dish 2"
          className="w-[260px] h-[320px] object-cover rounded-xl shadow-lg absolute top-10 right-[-20px] z-10 border-2 border-black"
        />
      </section>

    </article>
    </div>

  );
};


export default About;
