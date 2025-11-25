import React from "react";


export default function Footer() {
  return (
    <footer className="bg-[#526b63] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        
        <div className="flex flex-col items-start text-center sm:text-left">
          <img src="src/assets/logo3f.png" alt="Little Lemon Logo" className="w-32 mb-4" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Bringing Mediterranean flavors to your table in Chicago.
          </p>
        </div>

       
        <div className="text-center sm:text-left">
          <h2 className="text-yellow-400 font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
            <li><a href="/reservations" className="hover:text-yellow-400">Reservations</a></li>
            <li><a href="/menu" className="hover:text-yellow-400">Menu</a></li>
            <li><a href="/order" className="hover:text-yellow-400">Order Online</a></li>
            <li><a href="/login" className="hover:text-yellow-400">Login</a></li>
          </ul>
        </div>

       
        <div className="text-center sm:text-left">
          <h2 className="font-semibold text-lg mb-4 text-yellow-400">Contact Us</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>2395 Maldove Way</li>
            <li>Chicago, Illinois</li>
            <li>(629) 243-6827</li>
            <li>
              <a href="mailto:info@littlelemon.com" className="hover:text-yellow-400">
                info@littlelemon.com
              </a>
            </li>
          </ul>
        </div>

        
        <div className="text-center sm:text-left">
          <h2 className="font-semibold text-lg mb-4 text-yellow-400">Follow Us</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:text-yellow-400">Facebook</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-yellow-400">Instagram</a></li>
            <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:text-yellow-400">YouTube</a></li>
          </ul>
        </div>

      </div>

      
      <div className="mt-10 text-center text-gray-300 text-xs">
        © {new Date().getFullYear()} Little Lemon • All Rights Reserved
      </div>
    </footer>
  );
}
