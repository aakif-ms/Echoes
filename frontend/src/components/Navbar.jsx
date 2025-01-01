import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

import logo from "../assets/echoes.png";
import { EchoContext } from "../store/cart-context";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { token } = useContext(EchoContext);

  useEffect(() => {
    if (token) {
      console.log("User has logged In");
    } else {
      console.log("User has logged out");
    }
  }, [token]);

  return (
    <nav className="container flex justify-between items-center p-5 px-8 md:px-20 max-w-full font-gummy">
      {/* Large Screen Display */}
      <div>
        <Link href="#" className="text-2xl font-medium">
          <img src={logo} alt="" className="w-32" />
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-4 md:space-x-8 font-medium text-blueShade">
        <Link to="/home" href="#" className="text-lg">
          Home
        </Link>
        <Link href="#" className="text-lg">
          Features
        </Link>
        <Link href="#" className="text-lg">
          About
        </Link>
        <Link href="#" className="text-lg">
          Contact Us
        </Link>
      </div>
      <div className="hidden md:flex space-x-4 md:space-x-6">
        {!token && (
          <>
            <Button animate={true} to="/signUp">Sign Up</Button>
            <Button animate={true} to="/login">Login</Button>
          </>
        )}
        {token && <Button animate={true} to="/" logout={true}>Log Out</Button>}
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
          <Link to="/home" className="p-4 text-lg">
            Home
          </Link>
          <Link href="#" className="p-4 text-lg">
            Features
          </Link>
          <Link href="#" className="p-4 text-lg">
            About
          </Link>
          <Link href="#" className="p-4 text-lg">
            Contact Us
          </Link>
          <div className="p-4 flex flex-col space-y-2">
            <Button animate={true}>Sign Up</Button>
            <Button animate={true}>Login</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
