import "./App.css";
import InputBox from "./components/InputBox";
// import { useEffect } from "react";
import useCurrencyExchange from "./hooks/useCurrencyExchange";

function App() {
  return (
    <>
      <div id="main-section">
        <div className="container">
          <div className="form-wrapper">
            <form action="#">
              <h1 className="main-title">Currency Converter</h1>
              <InputBox />
              <InputBox />
              <button className="convertBtn">Convert usd to npr</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
