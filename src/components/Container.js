import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Store from "./Store";
import About from "./About";
import { useState } from "react";
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
          element={<Store setShops={setShops} setBadges={setBadges} />}
        ></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Container;
