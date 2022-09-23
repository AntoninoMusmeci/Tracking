export const getFoods = async (setFoodData, ing) => {
  // const check = localStorage.getItem(name);
  // console.log("endpoint", endpoint)
  // if (check) {
  //   setRecipes(JSON.parse(check));
  // } else {

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
      },
      id: food.food.foodId,
    };
  });

  console.log("apifile", result);
  setFoodData(result);

  //   localStorage.setItem(name, JSON.stringify(data[value]));
  //   setRecipes(data[value]);
};