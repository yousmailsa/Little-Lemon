import React from "react";

const Menu = () => {
  return (
    <div className="mt-10">
    <section className="px-6 py-12 max-w-6xl mx-auto flex flex-col items-center">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Our Menu</h1>
      <p className="text-gray-700 text-center mb-8">
        Explore our carefully crafted Mediterranean dishes. From traditional recipes to modern twists, 
        there’s something for everyone.
      </p>

      <img
        src="src\assets\menu.webp"
        alt="Menu"
        className="w-full max-w-4xl h-auto rounded-xl shadow-lg"
      />
    </section>
    </div>
  );
};

export default Menu;
