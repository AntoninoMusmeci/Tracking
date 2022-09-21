import React, { useState } from "react";
import styled from "styled-components";
function TrackingForm({handleSubmit, show, setShow  }) {
  const [mealInfo, setMealInfo] = useState({name: "Manual Add"});
  const handleInput = (e) => {
    console.log(e.target.value, e.target.name);
    setMealInfo({ ...mealInfo, [e.target.name]: e.target.value });
  };

  if (!show) return null;

  return (
    <FormWrapper onSubmit={(e) => {console.log("form", mealInfo); handleSubmit(e,mealInfo)}}>
      <Content>
        Calories{" "}
        <input
          type="text"
          id="calories"
          name="calories"
          onChange={handleInput}
          placeholder="Enter calorie amount"
        />
        Fat{" "}
        <input
          type="text"
          id="fat"
          name="fat"
          onChange={handleInput}
          placeholder="Enter fat amount"
        />
        Protein{" "}
        <input
          type="text"
          id="protein"
          name="protein"
          onChange={handleInput}
          placeholder="Enter protein amount"
        />
        Carbohydrates{" "}
        <input
          type="text"
          id="carbohydrates"
          name="carbohydrates"
          onChange={handleInput}
          placeholder="Enter carbohydrates amount"
        />
        <button type="submit"> ADD FOOD </button>
      </Content>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: white;
  padding: 10px;
  button{
    padding: 5px;
    background: var(--secondary);
    margin: 5px;
    border-radius: 0.5rem;
    color: white;
  }
`;





export default TrackingForm;
