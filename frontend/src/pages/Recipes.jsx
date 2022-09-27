import React from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
import styled from "styled-components";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function Recipes() {
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
          <button> Add Your Recipe</button>
          <button>
            <Link to = {"ingredients/"}>Add Your Ingredient</Link>
          </button>
        </h1>
      </Modal>
      <Button text={"Add Meal"} handleClick={() => setShow(true)} />
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

export default Recipes;
