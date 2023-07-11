import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <>
      <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto bg-slate-900">
        <Link to={"/"}>
          <div className="ml-5">
            <img src="./logo.png" className=" h-14" alt="" />
            {/* <h1 className="bg-gradient-to-br from-gray-300 to-green-300 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold logo cursor-pointer tracking-wider">
            Ecomzy
            </h1> */}
          </div>
        </Link>
        <div className="flex list-none items-center space-x-6 mr-5 text-slate-100 -tracking-tighterr font-medium">
          <Link to={"/"}>
            <li className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">Home</li>
          </Link>
          <Link to={"/cart"}>
            <div className="relative">
              <FaShoppingCart className="text-2xl cursor-pointer hover:text-green-400 transition transform duration-200" />

              {cart.length > 0 && (
                <div className="absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
