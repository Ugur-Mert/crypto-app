import React from "react";
import Coin from "./Coin";
import "./Coins.css";
export default function Coins() {
  const [coin, setCoin] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(function () {
    async function getCoins() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"
      );
      const data = await res.json();
      setCoin(data);
    }
    getCoins();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const filteredCoins = coin.filter((coin) =>
    coin.name.toLowerCase().includes(search)
  );

  return (
    <div className="coins-page">
      <div className="search-box">
        <input
          type={"text"}
          placeholder="Search coin"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="coins">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              high24={coin.high_24h}
              low24={coin.low_24h}
              lastupdate={coin.last_updated}
              id={coin.id}
            />
          );
        })}
      </div>
    </div>
  );
}
