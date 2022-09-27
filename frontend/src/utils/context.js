import { createContext, useContext, useEffect, useState } from "react";
import { getFormattedDate } from "./functions";
const AppContext = createContext();
export const StateContext = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [ingredients, setIngredients] = useState({ ingredients: [] });
  const [weekNutrients, setWeekNutrients] = useState([])
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
  });

  const [nutrients, setNutrients] = useState({
    calories: 0,
    fat: 0,
    protein: 0,
    carbs: 0,
  });

  const [goals, setGoals] = useState({
    calories: 1500,
    fat: 50,
    protein: 50,
    carbs: 130,
  });

  const addIngredient = (key, ing) => {
    key = key.toLowerCase();
    let ingredientCopy = { ...ingredients };
    ingredientCopy[key] = [...ingredients[key], ing];
    setIngredients(ingredientCopy);
  };

  const removeIngredient = (key, ing) => {
    key = key.toLowerCase();
    let ingredientCopy = { ...meals };

    ingredientCopy[key] = ingredientCopy[key].filter((i) => i.id !== ing.id);

    setMeals(ingredientCopy);
  };

  const addMeal = (key, meal) => {
    key = key.toLowerCase();
    let mealsCopy = { ...meals };
    mealsCopy[key] = [...mealsCopy[key], meal];
    setMeals(mealsCopy);
    let nutrintsCopy = { ...nutrients };
    nutrintsCopy.fat += meal.fat;
    nutrintsCopy.calories += meal.calories;
    nutrintsCopy.protein += meal.protein;
    nutrintsCopy.carbs += meal.carbs;
    setNutrients(nutrintsCopy);
  };

  const removeMeal = (key, meal) => {
    key = key.toLowerCase();
    let mealsCopy = { ...meals };

    mealsCopy[key] = mealsCopy[key].filter((m) => m.id !== meal.id);
    setMeals(mealsCopy);
    let nutrintsCopy = { ...nutrients };
    nutrintsCopy.fat -= meal.fat;
    nutrintsCopy.calories -= meal.calories;
    nutrintsCopy.protein -= meal.protein;
    nutrintsCopy.carbs -= meal.carbs;
    setNutrients(nutrintsCopy);
  };

  const fetchdata = (dates) => {
   
    const all_meals = meals.breakfast.concat(meals.dinner, meals.snacks, meals.lunch)
    
    const localWeek = []
    console.log("meals", all_meals)
    for(let date of dates){
      date = getFormattedDate(date)
    
      const filteredNutrients = { calories: 0, fat: 0, protein: 0, carbs: 0 };
      for (let item of all_meals){
        console.log(date)
        if (item.date === date){
          filteredNutrients.calories += item.calories;
          filteredNutrients.fat += item.fat;
          filteredNutrients.protein += item.protein;
          filteredNutrients.carbs += item.carbs;
        }
      
        
      }
      localWeek.push( filteredNutrients)
    }
    console.log("meals", localWeek)
    setWeekNutrients(localWeek)
  };

  return (
    <AppContext.Provider
      value={{
        totalCalories,
        setTotalCalories,
        meals,
        addMeal,
        removeMeal,
        foods,
        setFoods,
        removeIngredient,
        addIngredient,
        ingredients,
        goals,
        nutrients,
        setNutrients,
        fetchdata,
        weekNutrients,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useStateContext = () => useContext(AppContext);
