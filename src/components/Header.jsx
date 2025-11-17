import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="flex justify-between text-xl items-center pb-3 pt-4">
        {/* LOGO */}
        <div className="ml-10 ">
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="src/assets/logo.png"
              alt="logo"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* NAV LINKS */}
        <div>
          <ul className="flex justify-between gap-15 ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* SIGNUP BUTTON */}
        <div className="mr-10 ">
          <div className="space-x-5.5">
            <select className=" p-0.5 outline-1 outline-white">
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
            </select>
            <button className="bg-white px-3 py-2 rounded-2xl hover:bg-purple-300 hover:cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
