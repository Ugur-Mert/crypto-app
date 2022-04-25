import React from "react";
import "./Coin.css";
import { Link } from "react-router-dom";
import Coinpage from "./Coinpage";
export default function Coin(props) {
  return (
    <div className="coin">
      <Link
        to={`/coin/${props.id}`}
        className="coin-link"
        element={<Coinpage />}
      >
        <h1>{props.name}</h1>
        <img className="coin-icon" src={props.image} alt={props.name} />
        <p>
          Current price: <span className="price">$ {props.price}</span>
        </p>
        <p>
          Highest in 24 hours:<span className="price"> $ {props.high24}</span>
        </p>
        <p>
          Lowest in 24 hours:<span className="price"> $ {props.low24} </span>
        </p>
        <h5>Last Update: {props.lastupdate}</h5>
      </Link>
    </div>
  );
}
