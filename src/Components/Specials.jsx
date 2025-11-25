import React from "react";

const Specials = () => {
  return (
    <section className="px-6 md:px-10 py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <h2 className="text-3xl font-bold text-center md:text-left">
          This week’s specials!
        </h2>

        <button className="bg-[#f4ce14] text-black py-2 px-5 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Online Menu
        </button>
      </div>

      {/* Specials Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

        {/* Card 1 */}
        <div className="bg-neutral-200 shadow-md rounded-xl overflow-hidden hover:scale-105 transform transition">
          <img
            src="src/assets/food/greek-salad.webp"
            alt="Greek Salad"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Greek Salad</h3>
              <span className="text-yellow-400 font-semibold">$12.99</span>
            </div>
            <p className="text-sm mt-3 text-gray-600">
              The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese.
            </p>

            {/* Order Now Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-[#b89a08] transition">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-neutral-200 shadow-md rounded-xl overflow-hidden hover:scale-105 transform transition">
          <img
            src="src/assets/food/bruschetta.jpeg"
            alt="Bruschetta"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Bruschetta</h3>
              <span className="text-yellow-400 font-semibold">$5.99</span>
            </div>
            <p className="text-sm mt-3 text-gray-600">
              Grilled bread smeared with garlic and seasoned with olive oil and salt.
            </p>

            {/* Order Now Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-[#b89a08] transition">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-neutral-200 shadow-md rounded-xl overflow-hidden hover:scale-105 transform transition">
          <img
            src="src/assets/food/lemon-dessert.webp"
            alt="Lemon Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Lemon Dessert</h3>
              <span className="text-yellow-400 font-semibold">$5.00</span>
            </div>
            <p className="text-sm mt-3 text-gray-600">
              A refreshing recipe from grandma’s cookbook made with fresh lemons.
            </p>

            {/* Order Now Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-[#b89a08] transition">
                Order Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Specials;
