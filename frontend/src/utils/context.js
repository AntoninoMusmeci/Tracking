import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
export const StateContext = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
  });

  const addMeal = (key, meal) => {
    key = key.toLowerCase();
    let mealsCopy = { ...meals };
    mealsCopy[key] = [...mealsCopy[key], meal];

    setMeals(mealsCopy);
  };

  const removeMeal = (key, meal) => {
    key = key.toLowerCase();
    let mealsCopy = { ...meals };
    console.log("key", key, "id", meal);
    mealsCopy[key] = mealsCopy[key].filter((m) => m.id !== meal.id);
    console.log(mealsCopy);
    setMeals(mealsCopy);

    setTotalCalories((currValue) => currValue - meal.calories);
  };

  return (
    <AppContext.Provider
      value={{
        totalCalories,
        setTotalCalories,
        meals,
        addMeal,
        foods,
        setFoods,
        removeMeal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useStateContext = () => useContext(AppContext);
