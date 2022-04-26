import React from "react";
import "./Exchange.css";

export default function Exchange() {
  const [number, setNumber] = React.useState(1);
  const [getCoin, setGetCoin] = React.useState([]);
  const [primaryChosen, setPrimaryChosen] = React.useState("BTC");
  const [secondaryChosen, setSecondaryChosen] = React.useState("BTC");
  const [result, setResult] = React.useState({});

  React.useEffect(function () {
    async function getCoins() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"
      );
      const data = await res.json();
      setGetCoin(data);
    }
    getCoins();
  }, []);

  const url = `https://api.coinconvert.net/convert/${primaryChosen}/${secondaryChosen}?amount=${number}`;

  React.useEffect(
    function () {
      async function getConverter() {
        const res = await fetch(url);
        const data = await res.json();

        setResult(data);
      }
      getConverter();
    },
    [url]
  );

  return (
    <div className="converter">
      <h1>Crypto Converter</h1>
      <input
        type={"number"}
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <select
        name="primary-chosen"
        onChange={(e) => setPrimaryChosen(e.target.value)}
      >
        {getCoin.map((getsCoin, index) => (
          <option value={getsCoin.symbol} key={index} id={index}>
            {getsCoin.symbol.toUpperCase()}
          </option>
        ))}
      </select>

      <select
        name="secondary-chosen"
        onChange={(e) => setSecondaryChosen(e.target.value.toLocaleUpperCase())}
      >
        {getCoin.map((getsCoin) => (
          <option key={getsCoin.id} value={getsCoin.symbol}>
            {getsCoin.symbol.toUpperCase()}
          </option>
        ))}
      </select>
      <p>
        {number} {primaryChosen} = {""}
        {Object.entries(result)
          .slice(-1)
          .map((entry) => entry[1])}{" "}
        {""}
        {secondaryChosen}
      </p>
    </div>
  );
}
