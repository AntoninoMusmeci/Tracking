import React from "react";
import { Routes, Route } from "react-router-dom";
import Diary from "./Diary";
import HomePage from "./HomePage";
import NavBar from "../components/NavBar";
import Dashboard from "./Dashboard";
import Recipes from "./Recipes";
function Pages() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </>
  );
}

export default Pages;
