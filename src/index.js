import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [search, setSearch] = useState("");

  const handleChanges = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        setCoinData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar handleChanges={handleChanges} search={search} />
      <Charts coinData={coinData} search={search} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
