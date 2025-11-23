import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Coincontext } from "../context/Coincontext";
import Lchart from "./Chart";

function Coin() {
  const { coinid } = useParams();
  const [coindata, setCoindata] = useState();
  const [historicaldata, setHistoricaldata] = useState();
  const { currency } = useContext(Coincontext);

  const fetchcoindata = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinid}`;
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setCoindata(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHistoricaldata = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`;
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setHistoricaldata(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchcoindata(), fetchHistoricaldata();
  }, [currency]);

  return (
    <div>
      {!coindata || !historicaldata ? (
        <div className="flex justify-center items-center h-96 mt-20 mb-38">
          <div className="w-20 h-20 rounded-full border-4 border-cyan-200 border-t-cyan-400 flex justify-center items-center text-cyan-200 text-2xl font-bold animate-spin shadow-lg">
            $
          </div>
        </div>
      ) : (
        <div className="w-3/7 mx-auto mt-2 ">
          <div className="text-center ">
            <img
              src={coindata.image.large}
              alt="coin_icon"
              width="100px"
              className="mx-auto"
            />
            <h1 className="text-3xl">
              {coindata.name}-{coindata.symbol}
            </h1>
          </div>
          <div className="mt-2">
            <Lchart historicaldata={historicaldata} />
          </div>
          <div className="mt-3 w-full px-4">
            <div className="grid grid-cols-2 gap-y-0">
              <div className="col-span-2 grid grid-cols-2 items-center py-2 border-b border-gray-200">
                <p>Current Market Rank</p>
                <p className="justify-self-end">
                  {coindata?.market_cap_rank ?? "—"}
                </p>
              </div>

              <div className="col-span-2 grid grid-cols-2 items-center py-2 border-b border-gray-200">
                <p>Current Price</p>
                <p className="justify-self-end">
                  {currency.symbol}
                  {coindata?.market_data?.current_price?.[
                    currency.name
                  ]?.toLocaleString() ?? "—"}
                </p>
              </div>

              <div className="col-span-2 grid grid-cols-2 items-center py-2 border-b border-gray-200">
                <p>Market Cap</p>
                <p className="justify-self-end">
                  {currency.symbol}
                  {coindata?.market_data?.market_cap?.[
                    currency.name
                  ]?.toLocaleString() ?? "—"}
                </p>
              </div>

              <div className="col-span-2 grid grid-cols-2 items-center py-2 border-b border-gray-200">
                <p>24 hour High</p>
                <p className="justify-self-end">
                  {currency.symbol}
                  {coindata?.market_data?.high_24h?.[
                    currency.name
                  ]?.toLocaleString() ?? "—"}
                </p>
              </div>

              <div className="col-span-2 grid grid-cols-2 items-center pt-2">
                <p>24 hour Low</p>
                <p className="justify-self-end">
                  {currency.symbol}
                  {coindata?.market_data?.low_24h?.[
                    currency.name
                  ]?.toLocaleString() ?? "—"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Coin;
