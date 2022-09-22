import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
export const StateContext = ({ children }) => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
  });

  const addMeal = (key, meal) => {
    key = key.toLowerCase()
    let mealsCopy = { ...meals };
    console.log("copy", mealsCopy[key])
    mealsCopy[key] = [...(mealsCopy[key]), meal];
    setMeals(mealsCopy);
  };

  return (
    <AppContext.Provider value={{ totalCalories, setTotalCalories, meals, addMeal}}>
      {children}
    </AppContext.Provider>
  );
};

export const useStateContext = () => useContext(AppContext);
