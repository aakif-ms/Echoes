import { useState } from "react";
import Button from "./Button";

import logo from '../assets/echoes.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container flex justify-between items-center p-5 px-8 md:px-20 max-w-full font-gummy">
      {/* Large Screen Display */}
      <div>
        <a href="#" className="text-2xl font-medium">
          <img src={logo} alt="" className="w-32"/>
        </a>
      </div>
      <div className="hidden md:flex items-center space-x-4 md:space-x-8 font-medium text-blueShade">
        <a href="#" className="text-lg">
          Home
        </a>
        <a href="#" className="text-lg">  
          Features
        </a>
        <a href="#" className="text-lg">
          About
        </a>
        <a href="#" className="text-lg">
          Contact Us
        </a>
      </div>
      <div className="hidden md:flex space-x-4 md:space-x-6">
        <Button animate={true}>Sign Up</Button>
        <Button animate={true}>Login</Button>
      </div>

      {/* Small Screen Display */}
      <div className="md:hidden flex items-center">
        <button
          className="text-blueShade"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="4" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="18" width="24" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-beige flex flex-col items-center md:hidden z-50 shadow-lg">
          <a href="#" className="p-4 text-lg">
            Home
          </a>
          <a href="#" className="p-4 text-lg">
            Features
          </a>
          <a href="#" className="p-4 text-lg">
            About
          </a>
          <a href="#" className="p-4 text-lg">
            Contact Us
          </a>
          <div className="p-4 flex flex-col space-y-2">
            <Button animate={true}>Sign Up</Button>
            <Button animate={true}>Login</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
