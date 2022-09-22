import React, { useState } from "react";
import styled from "styled-components";
import TrackingForm from "./TrackingForm";
import { v4 as uuid } from "uuid";
import { useStateContext } from "../utils/context";

function MealTable({ name, meals }) {

  const [show, setShow] = useState(false);
  const { setTotalCalories, addMeal } = useStateContext();
  
  const handleSubmit = (e, info) => {
    e.preventDefault();
    console.log(info);
    setTotalCalories(state => state + parseInt(info.calories))


    addMeal(name,{ ...info, id: uuid() })
    setShow(false);
  };

  return (
    <>
      <Wrapper>
        <Header>{name}</Header>
        <MealWrapper>
          {meals.map((meal) => (
            <Meal key={meal.id}>
              <h3> {meal?.name}</h3>
              <h4> {meal.calories}</h4>
            </Meal>
          ))}
        </MealWrapper>

        <TrackingForm
          show={show}
          setShow={setShow}
          handleSubmit={handleSubmit}
        />
        <ButtonStyled>
          <button
            onClick={() => {
              setShow(true);
            }}
          >
            +
          </button>
        </ButtonStyled>
      </Wrapper>
    </>
  );
}

const Header = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: solid gray 1px;
  background: white;
`;

const Wrapper = styled.div`
  box-shadow: 0px 13px 15px -3px grey;
  margin: 3rem;
  background: white;
`;

const ButtonStyled = styled.div`
  justify-content: center;
  display: flex;
  padding: 1px;

  button {
    margin-top: 1rem;
    border-radius: 1.5rem;
    margin-bottom: 1rem;
    background: var(--secondary);
    font-weight: 1500;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    width: 50%;

    cursor: pointer;
    color: white;
  }
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
`;

export default MealTable;








