import React, { useState } from "react";
import styled from "styled-components";
import TrackingForm from "./TrackingForm";
import { v4 as uuid } from "uuid";
import Button from "./Button";
function MealTable({ name, meals, addMeal, removeMeal, date }) {
  const [show, setShow] = useState(false);

  const handleSubmit = (e, info) => {
    e.preventDefault();
    addMeal(name, { ...info, id: uuid(), date: date });
  };
  return (
    <>
      <Wrapper>
        <Header>{name}</Header>
        <MealWrapper>
          {meals.map((meal) => (
            <Meal key={meal.id}>
              <h3 onClick={() => setShow(true)}> {meal?.name}</h3>
              <h4> {meal.calories}</h4>
              <button onClick={() => removeMeal(name, meal)}> remove </button>
            </Meal>
          ))}
        </MealWrapper>

        <TrackingForm
          show={show}
          setShow={setShow}
          handleSubmit={handleSubmit}
        />
        <Button text={"+"} handleClick={() => setShow(true)} />
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

export default MealTable;
