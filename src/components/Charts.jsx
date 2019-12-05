import React from "react";
import Chart from "./Chart";

const Charts = props => {
  return (
    <div className="charts">
      {props.coinData
        .filter(chart => chart.name.includes(props.search))
        .map(coin => (
          <div className="chart__container" key={coin.name}>
            <h2 className="coin__title">{coin.name}</h2>
            <h4 className="coin__symbol">{coin.symbol}</h4>
            <h4 className="coin__symbol">
              Current Price: ${coin.current_price}
            </h4>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
            <Chart sparklineData={coin.sparkline_in_7d.price} />
          </div>
        ))}
    </div>
  );
};
export default Charts;
