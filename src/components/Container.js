import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Store from "./Store";
import About from "./About";
import { useState } from "react";
import Payment from "./Payment";
const Container = (props) => {
  const [badges, setBadges] = useState(0);
  const [shops, setShops] = useState([]);
  return (
    <BrowserRouter>
      <Navbar badges={badges} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/Store"
          element={
            <Store shops={shops} setShops={setShops} setBadges={setBadges} />
          }
        ></Route>
        <Route path="/About" element={<About />}></Route>
        <Route
          path="/Payment"
          element={
            <Payment shops={shops} setShops={setShops} setBadges={setBadges} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Container;
