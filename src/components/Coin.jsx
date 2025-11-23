import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Coincontext } from "../context/Coincontext";

function Coin() {
  const { coinid } = useParams();
  const [coindata, setCoindata] = useState();
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
      console.log(coindata);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchcoindata();
  }, [currency]);

  return (
    <div>
      {!coindata ? (
        <div className="flex justify-center items-center h-96 mt-20 mb-38">
          <div className="w-20 h-20 rounded-full border-4 border-cyan-200 border-t-cyan-400 flex justify-center items-center text-cyan-200 text-2xl font-bold animate-spin shadow-lg">
            $
          </div>
        </div>
      ) : (
        <div className="w-5/6 mx-auto">
          <div className="text-center bg-amber-400">
            <h1>coin : {coindata.name}</h1>
            <img src={coindata.image.large} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Coin;
