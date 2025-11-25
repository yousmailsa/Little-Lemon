import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Reservation = () => {
  // Form state
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Success message
  const [success, setSuccess] = useState("");

  // Load from localStorage (optional)
  useEffect(() => {
    const savedData = localStorage.getItem("reservationForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Clear success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.guests || formData.guests < 1)
      newErrors.guests = "Number of guests must be at least 1";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Save to localStorage
      localStorage.setItem("reservationForm", JSON.stringify(formData));
      setSuccess("Table booked successfully!");
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: 1,
        occasion: "",
      });
      setErrors({});
    } else {
      setSuccess("");
    }
  };

  return (
    
    <div className="mt-10 max-w-xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Book a Table</h1>

      {success && <p className="mb-4 text-yellow-400">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date}</p>
          )}
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.time && (
            <p className="text-red-500 text-sm">{errors.time}</p>
          )}
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Guests</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            min="1"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.guests && (
            <p className="text-red-500 text-sm">{errors.guests}</p>
          )}
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Occasion</label>
          <select
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
          </select>
        </div>

        
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-500 transition"
        >
          Book Table
        </button>
      </form>
    </div>
  );
};

export default Reservation;
