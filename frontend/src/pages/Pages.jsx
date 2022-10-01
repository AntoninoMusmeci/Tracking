import React from "react";
import { Routes, Route } from "react-router-dom";
import Diary from "./Diary";
import HomePage from "./HomePage";
import NavBar from "../components/NavBar";
import Dashboard from "./Dashboard";
import Recipes from "./Recipes";
import Ingredients from "./Ingredients";
import NewRecipe from "./NewRecipe";
import User from "./User";
import EditGoals from "./EditGoals";
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
        <Route path="/recipes/create-recipe" element={<NewRecipe />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/edit-goals" element={<EditGoals />} />
      </Routes>
    </>
  );
}

export default Pages;
