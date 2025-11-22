import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import CoincontextProvider from "./context/Coincontext";
import Footer from "./components/Footer";

function App() {
  return (
    <CoincontextProvider>
      <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
    </CoincontextProvider>
    
  );
}

export default App;
