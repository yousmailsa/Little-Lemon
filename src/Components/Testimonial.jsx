import React from "react";

const Testimonial = () => {
  const data = [
    {
      name: "John D.",
      text: "Amazing place! The food was fresh and full of flavor. Highly recommended!",
    },
    {
      name: "Sarah P.",
      text: "A lovely dining experience. The staff was friendly and the atmosphere was perfect.",
    },
    {
      name: "Mark R.",
      text: "Great service and delicious meals. I will definitely come back again!",
    },
  ];

  return (
    <section className="text-white py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">Testimonials</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#526b63] px-6 py-6 rounded-xl shadow-md"
          >
            <h3 className="font-bold text-lg">{item.name}</h3>
            <div className="text-yellow-400 text-sm mb-3">★★★★★</div>

            <p className="text-sm leading-6 text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
