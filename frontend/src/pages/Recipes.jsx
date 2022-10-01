import React from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
import styled from "styled-components";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useStateContext } from "../utils/context";
function Recipes() {
  const { recipes, removeRecipe } = useStateContext();
  const [show, setShow] = useState(false);
  return (
    <RecipePage>
      <IoFastFoodOutline />
      <h1> Meals </h1>

      <h4>
        Create your ingredient or recipe to save time logging them in the future
      </h4>
      <Modal show={show} setShow={setShow}>
        <h1>
          <button>
            {" "}
            <Link to={"create-recipe/"}>Create A recipe</Link>
          </button>
          <button>
            <Link to={"ingredients/"}>Add Your Ingredient</Link>
          </button>
        </h1>
      </Modal>
      <Button handleClick={() => setShow(true)} > Add Meal  </Button>

      <Wrapper>
        <MealWrapper>
          {recipes.map((recipe) => (
            <Meal key={recipe.id}>
              <h3> {recipe?.name}</h3>
              <h4> {recipe.calories}</h4>
              <button onClick={() => removeRecipe(recipe.id)}> remove </button>
            </Meal>
          ))}
        </MealWrapper>
      </Wrapper>
    </RecipePage>
  );
}

const RecipePage = styled.div`
  text-align: center;
  svg {
    width: 7rem;
    height: 7rem;
    margin-top: 2rem;
  }
`;
const Wrapper = styled.div`
  box-shadow: 0px 13px 15px -3px grey;
  margin: 3rem;
  background: white;
`;

const MealWrapper = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  border-top: none;
  background: white;
`;

const Meal = styled.li`
  border-bottom: solid gray 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  h3 {
    cursor: pointer;
  }
`;

export default Recipes;
