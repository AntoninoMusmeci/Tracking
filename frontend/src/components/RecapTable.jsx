import React from "react";
import { useStateContext } from "../utils/context";
import styled from "styled-components";
function RecapTable() {
  const { totalCalories } = useStateContext();
  console.log(totalCalories);
  return (
    <Wrapper>
      <div>
        <h1>Calories consumed</h1>
        <CalorieWrapper>
          <div>
            <h1> 1500</h1>
            <h3>Goal </h3>
          </div>
          <div>
            <h1> - </h1>
          </div>
          <div>
            <h1>{totalCalories}</h1>
            <h3>Food </h3>
          </div>
          <div>
            <h1> = </h1>
          </div>
          <div>
            <h1>{1500 - totalCalories}</h1>
            <h3>Remaining </h3>
          </div>
        </CalorieWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 13px 15px -3px grey;
  
`;

const CalorieWrapper = styled.form`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  height: 6rem;
  div {
    display: flex;
    flex-direction: column;
  }
  h3 {
    text-align: center;
    font-size: 0.5rem;
    margin: 0;
  }
  h1 {
    margin: 0;
  }
`;

export default RecapTable;
