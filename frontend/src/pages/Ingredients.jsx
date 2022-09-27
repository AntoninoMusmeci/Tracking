import React from "react";
import MealTable from "../components/MealTable";
import { useStateContext } from "../utils/context";
function Ingredients() {
  const { ingredients, addIngredient, removeIngredient } = useStateContext();
  return (
    <div>
      <MealTable
        name={"Ingredients"}
        meals={ingredients["ingredients"]}
        addMeal={addIngredient}
        removeMeal={removeIngredient}
      ></MealTable>
    </div>
  );
}

export default Ingredients;
