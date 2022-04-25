import "./App.css";
import React from "react";
import Coins from "./components/Coins";
import Coinpage from "./components/Coinpage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<Coins />} />
        <Route path="coin" element={<Coinpage />}>
          <Route path=":coinId" element={<Coinpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
