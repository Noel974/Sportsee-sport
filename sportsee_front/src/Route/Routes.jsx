import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfilPerf from "../Pages/ProfilPerf/ProfilPerf"
import Home from "../Pages/Home/Home";

function Routeindex() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/user/:id" component={ProfilPerf} />
    </Routes>
  );
}
export default Routeindex