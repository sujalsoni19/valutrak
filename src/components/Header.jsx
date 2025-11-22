import React from "react";
import logo from "../assets/logo.png";
import signin from "../assets/signin.svg";
import {Coincontext} from '../context/Coincontext'
import { useContext } from "react";



export default function Header() {

  const {setCurrency} = useContext(Coincontext);

  const currencychanger = (e) => {
      let curr = e.target.value;

      if(curr == "eur"){
        setCurrency({name:curr,symbol:"€"})
      }else if(curr == "inr"){
        setCurrency({name:curr,symbol:"₹"})
      }else{
        setCurrency({name:curr,symbol:"$"})
      }
  }


  return (
    <div>
      <nav className="flex justify-between text-xl items-center pb-3 pt-4 border-b-2 border-gray-600">
        {/* LOGO */}
        <div className="ml-10 ">
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center">
            <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
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
        <div className="mr-10 flex gap-6.5">
          <select onChange={currencychanger} className=" px-2 py-2 rounded-xl outline-2 outline-white">
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
          <div>
            <button className="flex bg-white px-3 py-2 rounded-2xl hover:bg-purple-300 hover:cursor-pointer">
              Sign Up
              <img
                src={signin}
                className="ml-2"
                alt="sign-in icon"
                width="20px"
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
