import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/">
          <img src={Logo} alt="Little Lemon Logo" className="w-[150px] h-auto" />
        </Link>

        
        <ul className="hidden md:flex gap-8 font-medium text-sm">
          <li className="cursor-pointer hover:text-yellow-400">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-400">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-400">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-400">
  <Link to="/reservation">Reservation</Link>
</li>

          <li className="cursor-pointer hover:text-yellow-400">
            <Link to="/orderonline">Order Online</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-400">
            <Link to="/login">Login</Link>
          </li>
        </ul>

        
        <button className="md:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
          <img src={navbarOpen ? Close : Hamburger} alt="menu toggle" className="w-7" />
        </button>
      </div>

      
      {navbarOpen && (
        <ul className="md:hidden bg-white w-full flex flex-col gap-6 px-6 pb-6 font-medium text-sm">
          <li className="cursor-pointer border-b py-2">
            <Link to="/" onClick={() => setNavbarOpen(false)}>Home</Link>
          </li>
          <li className="cursor-pointer border-b py-2">
            <Link to="/about" onClick={() => setNavbarOpen(false)}>About</Link>
          </li>
          <li className="cursor-pointer border-b py-2">
            <Link to="/menu" onClick={() => setNavbarOpen(false)}>Menu</Link>
          </li>
          <li className="cursor-pointer border-b py-2">
            <Link to="/reservation" onClick={() => setNavbarOpen(false)}>Reservation</Link>

          </li>
          <li className="cursor-pointer border-b py-2">
            <Link to="/orderonline" onClick={() => setNavbarOpen(false)}>Order Online</Link>
          </li>
          <li className="cursor-pointer border-b py-2">
            <Link to="/login" onClick={() => setNavbarOpen(false)}>Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
