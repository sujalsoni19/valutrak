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
    <div className="w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 my-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl text-center font-semibold py-2">
            Largest Crypto Marketplace
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-center text-gray-700 px-2">
            Your gateway to the world of crypto — simple, fast, and trustworthy.
            Track top digital assets with confidence and real-time market
            insights.
          </p>

          <div className="w-full px-3">
            <form
              onSubmit={formhandler}
              className="relative w-full"
              role="search"
              aria-label="Search crypto"
            >
              <input
                type="text"
                list="coinlist"
                onChange={inputHandler}
                value={input}
                placeholder="Search crypto..."
                className="block w-full rounded-xl bg-white pl-4 pr-24 py-3 text-sm sm:text-base shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />

              <datalist id="coinlist">
                {allcoins?.map((item, index) => (
                  <option key={index} value={item.name} />
                ))}
              </datalist>

              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-400 text-white px-3 py-1.5 rounded-lg flex items-center justify-center hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                aria-label="Search"
              >
                <img
                  src={search_icon}
                  alt="search icon"
                  className="h-4 sm:h-5 w-auto"
                />
              </button>
            </form>
          </div>

          <p className="text-xs text-gray-500 px-2 text-center hidden sm:block max-w-md">
            Tip: start typing a coin name (e.g. Bitcoin, Ethereum) to see
            suggestions.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-center"></h1>
        </div>
        <div className="max-w-5xl mx-auto mt-10 p-4">
          <div className="rounded-2xl backdrop-blur-lg bg-white/30 shadow-lg border border-white/30">
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                <div className="grid grid-cols-[60px_1fr_1fr_1fr_1fr] text-left text-gray-800 bg-white/40 rounded-t-2xl">
                  <div className="py-3 px-4 font-semibold">#</div>
                  <div className="py-3 px-4 font-semibold">Coins</div>
                  <div className="py-3 px-4 font-semibold">Price</div>
                  <div className="py-3 px-4 font-semibold">24h Change(%)</div>
                  <div className="py-3 px-4 font-semibold">Market Cap</div>
                </div>

                {!displaycoins || displaycoins.length === 0 ? (
                  <div className="py-6 text-center text-gray-700">
                    Loading coins...
                  </div>
                ) : (
                  <div className="divide-y divide-white/30">
                    {displaycoins.slice(0, 10).map((item, index) => (
                      <div
                        key={item.id ?? index}
                        className="grid grid-cols-[60px_1fr_1fr_1fr_1fr] items-center px-4 py-3 
                           hover:bg-white/40 transition"
                      >
                        <div className="text-gray-700 font-medium">
                          {item.market_cap_rank}
                        </div>

                        <Link
                          to={`/coin/${item.id}`}
                          className="flex items-center gap-2 whitespace-normal wrap-break-word"
                        >
                          <img
                            src={item.image}
                            alt={`${item.name} icon`}
                            className="w-6 h-6"
                          />
                          <span className="text-gray-800">
                            {item.name} — {String(item.symbol).toUpperCase()}
                          </span>
                        </Link>

                        <div className="text-gray-800 font-medium whitespace-normal wrap-break-word">
                          {currency.symbol}
                          {item.current_price.toLocaleString()}
                        </div>

                        <div
                          className={`font-semibold whitespace-normal wrap-break-word ${
                            item.price_change_percentage_24h >= 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {item.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className="text-gray-800 font-medium whitespace-normal wrap-break-word">
                          {currency.symbol}
                          {item.market_cap.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
