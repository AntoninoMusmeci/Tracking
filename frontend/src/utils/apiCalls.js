export const getFoods = async (setFoodData, ing) => {
  const api = await fetch(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_FOOD_API_APP_ID}&app_key=${process.env.REACT_APP_FOOD_API_APP_KEY}&ingr=${ing}&nutrition-type=cooking`
  );
  let data = await api.json();
  data = data.hints;
  const result = data.map((food) => {
    return {
      name: food.food.label,
      nutrients: {
        calories: food.food.nutrients.ENERC_KCAL,
        carbs: food.food.nutrients.CHOCDF,
        protein: food.food.nutrients.PROCNT,
        fat: food.food.nutrients.FAT,
      },
      id: food.food.foodId,
    };
  });

  console.log("apifile", result);
  setFoodData(result);
};
