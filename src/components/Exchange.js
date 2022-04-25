import React from "react";
import Select from "react-select";

export default function Exchange() {
  const [number, setNumber] = React.useState(1);
  const [getCoin, setGetCoin] = React.useState([]);
  const [primaryChosen, setPrimaryChosen] = React.useState(null);
  const [secondaryChosen, setSecondaryChosen] = React.useState(null);
  const [result, setResult] = React.useState("");

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

  const handleConvert = () => {
    if (getCoin.symbol == primaryChosen) {
      setResult(number * primaryChosen);
    }
    //setResult((number * primaryChosen) / (number2 * secondaryChosen));
  };

  return (
    <div>
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
        {getCoin.map((getsCoin) => (
          <option value={getsCoin.symbol} key={getsCoin.id}>
            {getsCoin.symbol.toUpperCase()}
          </option>
        ))}
      </select>

      <select
        name="secondary-chosen"
        onChange={(e) => setSecondaryChosen(e.target.value)}
      >
        {getCoin.map((getsCoin) => (
          <option key={getsCoin.id} value={getsCoin.symbol}>
            {getsCoin.symbol.toUpperCase()}
          </option>
        ))}
      </select>
      <button onClick={handleConvert}>CONVERT</button>
      <h1>{result}</h1>
    </div>
  );
}
