import React from "react";
import { useParams } from "react-router-dom";
import MealTable from "../components/MealTable";
import styled from "styled-components";
import RecapTable from "../components/RecapTable";
import { useStateContext } from "../utils/context";
function Diary() {
  let params = useParams();

  const { meals } = useStateContext();
  console.log("meals", meals);
  return (
    <>
      <Header>Diary Page</Header>
      <RecapTable />
      {/* <MealTable name = {"Breakfast"}/>
      <MealTable name = {"Lunch"}/>
      <MealTable name = {"Dinner"}/>
      <MealTable name = {"Snacks"}/> */}
      {Object.entries(meals).map(([key, value]) => {
        return <MealTable name={key} meals = {value}/>;
      })}
    </>
  );
}

const Header = styled.h1`
  text-align: center;
`;

export default Diary;
