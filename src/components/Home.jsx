import React, { useContext, useEffect } from "react";
import search_icon from "../assets/search.svg";
import { Coincontext } from "../context/Coincontext";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const { allcoins, currency } = useContext(Coincontext);
  const [displaycoins, setDisplaycoins] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplaycoins(allcoins);
    }
  };

  const formhandler = (e) => {
    e.preventDefault();
    const coins = allcoins.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplaycoins(coins);
  };

  useEffect(() => {
    setDisplaycoins(allcoins);
  }, [allcoins]);

  return (
    <div>
      <div className="w-2xl mx-auto my-20">
        <div className=" w-2xl flex-col justify-center items-center gap-7">
          <h1 className="text-center text-5xl py-4">
            Largest Crypto Marketplace
          </h1>
          <p className="text-center text-xl py-3">
            Your gateway to the world of crypto-simple, fast, and trustworthy.
            Track top digital assets with confidence and real-time market
            insights.
          </p>
          <div className="py-3 px-3 mx-auto flex justify-evenly">
            <form onSubmit={formhandler} className="relative w-5/6 mx-auto">
              <input
                type="text"
                list="coinlist"
                onChange={inputHandler}
                value={input}
                placeholder="Search crypto..."
                className="bg-white pl-5 pr-20 py-2 w-full rounded-xl"
              />
              <datalist id="coinlist">
                {allcoins.map((item, index) => (
                  <option key={index} value={item.name} />
                ))}
              </datalist>

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
        <div>
          <h1 className="text-center"></h1>
        </div>
        <div className="max-w-3xl mx-auto mt-10 p-4">
          <div className="overflow-hidden rounded-2xl backdrop-blur-lg bg-white/30 shadow-lg">
            <table className="w-full text-left text-gray-800">
              <thead>
                <tr className="bg-white/40">
                  <th className="py-3 px-4 font-semibold">#</th>
                  <th className="py-3 px-4 font-semibold">Coins</th>
                  <th className="py-3 px-4 font-semibold">Price</th>
                  <th className="py-3 px-4 font-semibold">24h Change(%)</th>
                  <th className="py-3 px-4 font-semibold">Market Cap</th>
                </tr>
              </thead>

              {!displaycoins || displaycoins.length === 0 ? (
                <tbody>
                  <tr>
                    <td colSpan="5" className="text-center py-5 text-gray-700">
                      Loading coins...
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {displaycoins.slice(0, 10).map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/40 hover:bg-white/40 transition"
                    >
                      <th className="py-3 px-4">{item.market_cap_rank}</th>

                      <td className="py-3 px-4">
                        <Link
                          to={`/coin/${item.id}`}
                          className="flex items-center gap-1.5"
                        >
                          <img src={item.image} alt="coin symbol" width={25} />
                          {item.name}-{item.symbol}
                        </Link>
                      </td>

                      <td className="py-3 px-4">
                        {currency.symbol}
                        {item.current_price.toLocaleString()}
                      </td>
                      <td
                        className={`py-3 px-4 ${
                          item.price_change_percentage_24h >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {item.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      <td className="py-3 px-4">
                        {currency.symbol}
                        {item.market_cap.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
