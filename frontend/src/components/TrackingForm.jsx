import React, { useState } from "react";
import styled from "styled-components";
import SearchModal from "./SearchModal";
import FoodDetail from "./FoodDetail";

import { AiOutlineArrowLeft } from "react-icons/ai";
function TrackingForm({ handleSubmit, show, setShow }) {
  const [mealInfo, setMealInfo] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [food, setFood] = useState({});

  const handleInput = (e) => {
    setMealInfo({ ...mealInfo, [e.target.name]: e.target.value });
  };

  if (!show) return null;

  return (
    <FormWrapper
      onClick={() => {
        setShow(false);
        setShowForm(false);
      }}
    >
      <Content
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {!showForm ? (
          !showDetails ? (
            <div>
              <ButtonS
                onClick={() => {
                  setShowForm(true);
                }}
              >
                Manual Add
              </ButtonS>
              <SearchModal
                setShowDetails={setShowDetails}
                addFood={handleSubmit}
                setFood={setFood}
              />
            </div>
          ) : (
            <div>
              <AiOutlineArrowLeft
                style={{ cursor: "pointer" }}
                onClick={() => setShowDetails(false)}
              />
              <FoodDetail food={food} handleSubmit={handleSubmit}></FoodDetail>
            </div>
          )
        ) : (
          <FormS
            onSubmit={(e) => {
              handleSubmit(e, mealInfo);
            }}
          >
            <AiOutlineArrowLeft onClick={() => setShowForm(false)} />
            Name{" "}
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInput}
              placeholder="Enter Food Name"
            />
            Calories{" "}
            <input
              type="text"
              id="calories"
              name="calories"
              onChange={handleInput}
              placeholder="Enter calorie amount"
            />
            Fat
            <input
              type="text"
              id="fat"
              name="fat"
              onChange={handleInput}
              placeholder="Enter fat amount"
            />
            Protein
            <input
              type="text"
              id="protein"
              name="protein"
              onChange={handleInput}
              placeholder="Enter protein amount"
            />
            Carbohydrates
            <input
              type="text"
              id="carbohydrates"
              name="carbohydrates"
              onChange={handleInput}
              placeholder="Enter carbohydrates amount"
            />
            <button type="submit"> ADD FOOD </button>
          </FormS>
        )}
      </Content>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
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
  width: 30rem;
  background-color: white;
  padding: 10px;
  overflow-y: scroll;
`;
const ButtonS = styled.button`
  width: 5rem;
  height: 5rem;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const FormS = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  button {
    padding: 5px;
    background: var(--secondary);
    margin: 5px;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
  }
  svg {
    margin: 3px;
    cursor: pointer;
  }
`;
export default TrackingForm;
