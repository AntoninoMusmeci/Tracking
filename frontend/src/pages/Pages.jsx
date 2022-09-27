import React from "react";
import { Routes, Route } from "react-router-dom";
import Diary from "./Diary";
import HomePage from "./HomePage";
import NavBar from "../components/NavBar";
import Dashboard from "./Dashboard";
import Recipes from "./Recipes";
import Ingredients from "./Ingredients";
function Pages() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/ingredients" element={<Ingredients />} />
      </Routes>
    </>
  );
}

export default Pages;
