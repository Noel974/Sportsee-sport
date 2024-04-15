import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfilPerf from "../Pages/ProfilPerf/ProfilPerf"
import Error from "../Pages/Error/Error"
import Home from "../Pages/Home/Home";

function Routeindex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<ProfilPerf />} />
      <Route path="*" element={<Error />}/>
    </Routes>
  );
}
export default Routeindex