import React from "react";
import { useParams } from "react-router-dom";
import "./Coinpage.css";
export default function Coinpage() {
  const params = useParams();
  const [singleCoin, setSingleCoin] = React.useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?market_data=true`;

  React.useEffect(
    function () {
      async function getCoins() {
        const res = await fetch(url);
        const data = await res.json();
        setSingleCoin(data);
      }
      getCoins();
    },
    [url]
  );

  console.log(singleCoin.id);

  return (
    <div className="coin-page">
      <div className="img-detail">
        <div>
          {singleCoin.image ? (
            <img src={singleCoin.image.large} alt={singleCoin.name} />
          ) : null}
        </div>
        <div className="coin-detail">
          <h1>
            {singleCoin.name} ({singleCoin.symbol})
          </h1>

          <p>Market Cap Rank: #{singleCoin.market_cap_rank}</p>
          {singleCoin.market_data ? (
            <p>Current price: $ {singleCoin.market_data.current_price.usd}</p>
          ) : null}
          <p>Genesis date: {singleCoin.genesis_date}</p>
          {singleCoin.links ? (
            <p>
              {singleCoin.name}
              <a href={singleCoin.links.homepage}> Homepage </a>{" "}
            </p>
          ) : null}
          {singleCoin.market_data ? (
            <p>High 24h: $ {singleCoin.market_data.high_24h.usd}</p>
          ) : null}
          {singleCoin.market_data ? (
            <p>Low 24h: $ {singleCoin.market_data.low_24h.usd}</p>
          ) : null}
        </div>
      </div>
      <div className="coin-table">
        <h1>Price Change Percentage (usd)</h1>
        {singleCoin.market_data ? (
          <table>
            <thead>
              <th>24h</th>
              <th>7d</th>
              <th>14d</th>
              <th>30d</th>
              <th>60d</th>
              <th>1y</th>
            </thead>
            <tbody>
              <td>
                {
                  singleCoin.market_data.price_change_percentage_24h_in_currency
                    .usd
                }
              </td>
              <td>
                {
                  singleCoin.market_data.price_change_percentage_7d_in_currency
                    .usd
                }
              </td>
              <td>
                {
                  singleCoin.market_data.price_change_percentage_14d_in_currency
                    .usd
                }
              </td>
              <td>
                {
                  singleCoin.market_data.price_change_percentage_30d_in_currency
                    .usd
                }
              </td>
              <td>
                {
                  singleCoin.market_data.price_change_percentage_60d_in_currency
                    .usd
                }
              </td>
              <td>
                {
                  singleCoin.market_data.price_change_percentage_1y_in_currency
                    .usd
                }
              </td>
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}
