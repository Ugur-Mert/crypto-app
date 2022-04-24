import React from "react";
import "./Coin.css";
export default function Coin(props) {
  return (
    <div className="coin">
      <h1>{props.name}</h1>
      <img className="coin-icon" src={props.image} alt={props.name} />
      <p>Current price: $ {props.price} </p>
      <p>Highest in 24 hours: $ {props.high24} </p>
      <p>Lowest in 24 hours: $ {props.low24} </p>
      <h5>Last Update: {props.lastupdate}</h5>
    </div>
  );
}
