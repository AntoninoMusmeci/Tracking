import React, { useEffect, useState } from "react";
import { getFoods } from "../utils/apiCalls";
import styled from "styled-components";
import { BsPlusCircle, BsSearch} from "react-icons/bs";
import { reduceString } from "../utils/functions";
import { toast } from "react-hot-toast";

function SearchModal({addFood}) {
 
  const [ing, setIng] = useState("");
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    console.log("data", foods);
  }, [foods]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getFoods(setFoods, ing);
  };
  const notify = () => {
    toast.success(`Food added`);
  };
  const handleFood = (e, foods) => {

    const foodObject = {name: foods.name, id: foods.id, calories: Math.floor(foods.nutrients.calories)}
    addFood(e,foodObject)

  };

  return (
    <>
      <FormS onSubmit={handleSubmit}>
        <BsSearch/>
        <input 
          onChange={(e) => {
            setIng(e.target.value);
          }}
        />
      
      </FormS>
      <FoodList>
        {foods.map((food) => {
          return (
            <Food key={food.id} >
              <div>
                <p> {reduceString(food.name)}</p>
                <span> {Math.floor(food.nutrients.calories)} cal</span>
              </div>
              <BsPlusCircle onClick={(e) =>{notify(); handleFood(e,food)} }/>
       
           
            </Food>
          );
        })}
      </FoodList>
    </>
  );
}
const FoodList = styled.div`
  p {
    padding: 0;
    margin: 0;
  }
  h4 {
    padding: 0;
    margin: 0;
  }
`;

const FormS = styled.form`
  position: relative;
  text-align: center;
  
  input{
    height: 2rem;
    width: 15rem;
    padding-left: 2rem;
    border-radius: 100px 100px 100px 100px;
    outline: none;
    width:50%
    
  }
  svg{
    position: absolute;
    left: 24%;
    top: 30%
  

  }

`;
const Food = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 5px;
  background-color: #f1f1f1;
  border-radius: 0.5rem;
  border: solid black 0.5px;
  div {
    width: 80%;
  }
  p {
    margin: 0;
  }
  h4 {
    margin: 0;
  }
  button {
    align-content: center;
    border-radius: 100%;
  }
  svg {
    font-size: 2rem;
    color: var(--secondary);
    cursor: pointer;
  }
  
`;

export default SearchModal;
