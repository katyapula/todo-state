import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Settings from "../pages/settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
