import React from "react";
import search_icon from "../assets/search.svg";

function Home() {
  return (
    <div>
      <div className="w-2xl mx-auto my-20">
        <div className=" w-2xl flex-col justify-center items-center gap-7">
          <h1 className="text-center text-5xl py-4">
            Largest Crypto Marketplace
          </h1>
          <p className="text-center text-xl py-3">
            Your gateway to the world of crypto-simple, fast, and trustworthy.
            Trade top digital assets with confidence and real-time market
            insights.
          </p>
          <div className="py-3 px-3 mx-auto flex justify-evenly">
            <form className="relative w-5/6 mx-auto">
              <input
                type="text"
                placeholder="Search crypto..."
                className="bg-white pl-5 pr-20 py-2 w-full rounded-xl"
              />

              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-400 text-white px-3 py-1 rounded-lg"
              >
                <img src={search_icon} alt="search_icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-3xl mx-auto mt-10 p-4">
  <div className="overflow-hidden rounded-2xl backdrop-blur-lg bg-white/30 shadow-lg">
    <table className="w-full text-left text-gray-800">
      <thead>
        <tr className="bg-white/40">
          <th className="py-3 px-4 font-semibold">#</th>
          <th className="py-3 px-4 font-semibold">Coins</th>
          <th className="py-3 px-4 font-semibold">Price</th>
          <th className="py-3 px-4 font-semibold">24H Change</th>
          <th className="py-3 px-4 font-semibold">Market Cap</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b border-white/40 hover:bg-white/40 transition">
          <th className="py-3 px-4">1</th>
          <td className="py-3 px-4">Bitcoin</td>
          <td className="py-3 px-4">$43,200</td>
          <td className="py-3 px-4 text-green-600">+3.2%</td>
          <td className="py-3 px-4">$820B</td>
        </tr>

        <tr className="border-b border-white/40 hover:bg-white/40 transition">
          <th className="py-3 px-4">2</th>
          <td className="py-3 px-4">Ethereum</td>
          <td className="py-3 px-4">$2,250</td>
          <td className="py-3 px-4 text-red-600">-1.1%</td>
          <td className="py-3 px-4">$270B</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

      </div>
    </div>
  );
}

export default Home;
