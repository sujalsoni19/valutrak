import React, { useState } from "react";
import logo from "../assets/logo.png";
import signin from "../assets/signin.svg";
import menu from "../assets/menu.svg";
import { Coincontext } from "../context/Coincontext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header() {
  const { setCurrency } = useContext(Coincontext);
  const [menushow, setMenushow] = useState(false);

  const currencychanger = (e) => {
    const curr = e.target.value;
    if (curr === "eur") {
      setCurrency({ name: curr, symbol: "€" });
    } else if (curr === "inr") {
      setCurrency({ name: curr, symbol: "₹" });
    } else {
      setCurrency({ name: curr, symbol: "$" });
    }
  };

  return (
    <div>
      <nav className="w-full border-b-2 border-gray-600 px-10 relative">
        <div className="flex justify-between items-center text-xl">
          <div className="flex flex-1">
            <Link to="/">
              <div className="w-20 h-20 rounded-full">
                <img
                  src={logo}
                  alt="logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-10">
              <Link to="/">
                <li className="whitespace-nowrap">Home</li>
              </Link>
              <Link to="/about">
                <li className="whitespace-nowrap">About</li>
              </Link>
              <Link to="/contact">
                <li className="whitespace-nowrap">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="text-sm sm:text-lg flex flex-1 gap-6 items-center justify-end">
            <select
              onChange={currencychanger}
              className="px-2 py-2 rounded-xl ring-2 ring-white focus:outline-none"
            >
              <option className="bg-blue-300" value="usd">
                USD
              </option>
              <option className="bg-blue-300" value="inr">
                INR
              </option>
              <option className="bg-blue-300" value="eur">
                EUR
              </option>
            </select>

            <button className="flex bg-white px-3 py-2 rounded-2xl hover:bg-purple-300 hover:cursor-pointer items-center">
              Sign Up
              <img
                src={signin}
                className="ml-2 pr-1.5"
                alt="sign-in icon"
                width="25"
              />
            </button>
          </div>
          <button
            className="pl-3 shrink-0 md:hidden"
            onClick={() => {
              setMenushow(!menushow);
            }}
          >
            <img src={menu} alt="menu_icon" width="25" />
          </button>
          {menushow && (
            <div
              className="absolute right-2 top-20 px-4 py-4 rounded-2xl
                bg-white/20 backdrop-blur-lg border border-white/30 
                shadow-lg text-lg flex flex-col z-10"
            >
              <ul className="space-y-3">
                <Link to="/">
                  <li className="whitespace-nowrap px-2 py-1 hover:bg-white/30 rounded-md transition">
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li className="whitespace-nowrap px-2 py-1 hover:bg-white/30 rounded-md transition">
                    About
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="whitespace-nowrap px-2 py-1 hover:bg-white/30 rounded-md transition">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;

