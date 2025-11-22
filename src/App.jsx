import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import CoincontextProvider from "./context/Coincontext";

function App() {
  return (
    <CoincontextProvider>
      <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
    </CoincontextProvider>
    
  );
}

export default App;
