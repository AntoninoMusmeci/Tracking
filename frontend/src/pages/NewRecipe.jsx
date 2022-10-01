import React, { useState } from "react";
import Ingredient from "../components/Ingredient";
import styled from "styled-components";
import Button from "../components/Button";
import FoodDetail from "../components/FoodDetail";
import { v4 as uuid } from "uuid";
import Modal from "../components/Modal";
import { useStateContext } from "../utils/context";
import { toast } from "react-hot-toast";
function NewRecipe() {
  const [ingredient, setIngredient] = useState();
  const { ingredients, setRecipes } = useStateContext();
  const [showDetail, setShowDetail] = useState(false);
  console.log(ingredients);
  const [name, setName] = useState();
  const [showIngredient, setShowIngredient] = useState(false);
  const createRecipe = () => {
    const nutrients = { calories: 0, fat: 0, carbs: 0, protein: 0 };
    for (let i of ing) {
      console.log(i);
      nutrients.calories += i.calories;
      nutrients.fat += i.fat;
      nutrients.carbs += i.carbs;
      nutrients.protein += i.protein;
    }
    const recipe = {
      ingredient: ing,
      name: name,
      id: uuid(),
      nutrients: nutrients,
    };
    setRecipes((state) => [...state, recipe])
    toast.success("New recipe created")
  };
  const [ing, setIng] = useState([]);
  return (
    <div>
      <label> name </label>{" "}
      <input onChange={(e) => setName(e.target.value)}></input>
      <label> Ingredients: </label>
      <IngredientW>
        {ing.map((i) => (
          <Ingredient key={uuid()} ingredient={i}></Ingredient>
        ))}
        <Button handleClick={() => setShowIngredient(true)}>
          {" "}
          Add Ingredient{" "}
        </Button>
      </IngredientW>
      <Modal show={showIngredient} setShow={setShowIngredient}>
        {showDetail ? (
          <div>
            <button onClick={() => setShowDetail(false)}> back</button>
            <FoodDetail
              food={ingredient}
              handleSubmit={(e, ing) => {
                setIng((state) => [...state, ing]);
              }}
            ></FoodDetail>
          </div>
        ) : (
          <IngredientList>
            {ingredients["ingredients"].map((ing) => (
              <li
                key={ing.id}
                onClick={() => {
                  setIngredient(ing);
                  setShowDetail(true);
                }}
              >
                {ing.name}
              </li>
            ))}
          </IngredientList>
        )}
      </Modal>
      <Button handleClick={createRecipe}> Create Recipe </Button>
    </div>
  );
}

const IngredientW = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  button {
    font-size: 1rem;
  }
`;

const IngredientList = styled.ul`
  li {
    background-color: #f1f1f1;
    margin: 5px;
    list-style-type: none;
    cursor: pointer;
  }
  padding: 1rem;
`;
export default NewRecipe;
