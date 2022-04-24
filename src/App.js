import "./App.css";
import React from "react";
import Coins from "./components/Coins";

function App() {
  const [coins, setCoins] = React.useState([]);

  React.useEffect(function () {
    async function getCoins() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"
      );
      const data = await res.json();
      setCoins(data);
    }
    getCoins();
  }, []);
  console.log(coins[0]);
  return (
    <div className="coins">
      {coins.map((coins) => {
        return (
          <Coins
            key={coins.id}
            name={coins.name}
            image={coins.image}
            price={coins.current_price}
            high24={coins.high_24h}
            low24={coins.low_24h}
            lastupdate={coins.last_updated}
          />
        );
      })}
    </div>
  );
}

export default App;
