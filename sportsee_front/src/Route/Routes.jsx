import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfilPerf from "../Pages/ProfilPerf/ProfilPerf"
import Home from "../Pages/Home/Home";

function Routeindex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<ProfilPerf />} />
    </Routes>
  );
}
export default Routeindex