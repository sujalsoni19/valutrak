import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CoincontextProvider from "./context/Coincontext";

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
