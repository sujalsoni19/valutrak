import { createContext, useEffect, useState } from "react";

export const Coincontext = createContext();

const CoincontextProvider = (props) => {
  const [allcoins, setAllcoins] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllcoins = async () => {
    const url =
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`;
    const options = {
      method: "GET",
      headers: {
        "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setAllcoins(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    fetchAllcoins();
  },[currency])

  const ContextValue = {
    allcoins,
    currency,
    setCurrency
  };

  return (
    <Coincontext.Provider value={ContextValue}>
      {props.children}
    </Coincontext.Provider>
  );
};

export default CoincontextProvider;
