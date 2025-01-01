import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";

import { EchoContext } from "../store/cart-context";

export default function Button({ animate, children, to, logout }) {
  const classes = "hover:text-white group hover:bg-gray-50";
  const { saveToken } = useContext(EchoContext);

  return (
    <>
      {logout && (
        <Link
          onClick={() => {
            localStorage.removeItem("token");
            saveToken(null);
            Navigate("/login");
          }}
          className={`relative flex items-center px-2 py-1 overflow-hidden text-lg font-medium text-purpleBlue border-2 border-purpleBlue rounded-xl ${
            animate && classes
          } ${!animate && "bg-purpleBlue text-white py-2"}`}
        >
          {animate && (
            <>
              <span className="absolute left-0 block w-full h-0 transition-all bg-purpleBlue opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease-in-out"></span>
            </>
          )}
          <span className="relative">{children}</span>
        </Link>
      )}
      {!logout && (
        <Link
          to={to}
          className={`relative flex items-center px-2 py-1 overflow-hidden text-lg font-medium text-purpleBlue border-2 border-purpleBlue rounded-xl ${
            animate && classes
          } ${!animate && "bg-purpleBlue text-white py-2"}`}
        >
          {animate && (
            <>
              <span className="absolute left-0 block w-full h-0 transition-all bg-purpleBlue opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease-in-out"></span>
            </>
          )}
          <span className="relative">{children}</span>
        </Link>
      )}
    </>
  );
}
