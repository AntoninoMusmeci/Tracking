import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { DoughnutChart } from "./Chart";
function FoodDetail({ food, handleSubmit }) {
  const computePercentage = (nutrients, value) => {
    const sum = nutrients.reduce((partialSum, a) => partialSum + a, 0);
    return Math.floor((value / sum) * 100);
  };
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(value);
  };
  console.log(food);
  const nutrients = [food.carbs, food.protein, food.fat];
  console.log(nutrients);
  return (
    <Detail>
    
      <ul>
        <li>
          <p>Food</p>
          <p> {food.name} </p>
        </li>
        <li>
          <p>quantity:</p>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </li>
        <li>          
            {/* <Calories>
            {food.calories * quantity}g <span>cal</span>
          </Calories> */}
          
          <DoughnutChart calories = {food.calories * quantity} nutrients={nutrients}/>

          <Legend>
            <p>
              <span style={{ color: "green" }}>
                {computePercentage(nutrients, food.carbs)}%{" "}
              </span>{" "}
              <>{(food.carbs * quantity).toFixed(2)}g</> <span>carbs</span>
            </p>

            <p>
              <span style={{ color: "orange" }}>
                {" "}
                {computePercentage(nutrients, food.protein)}%{" "}
              </span>
              {(food.protein * quantity).toFixed(2)}g <span>protein</span>
            </p>
            <p>
              <span style={{ color: "purple" }}>
                {" "}
                {computePercentage(nutrients, food.fat)}%{" "}
              </span>
              {(food.fat * quantity).toFixed(2)}g <span>fat</span>
            </p>
          </Legend>
        </li>
      </ul>

      <button onClick={(e) => handleSubmit(e, food)}>Add food</button>
    </Detail>
  );
}

export default FoodDetail;

    
const Detail = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    border: solid black 0.5px;
    align-items: center;
    padding-right: 5px;
  }
  input {
    width: 40%;
    height: 50%;
  }
`;
const Legend = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 15px;
  height: 5rem;

  p {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }

`;
