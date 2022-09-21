import React from "react";
import { useParams } from "react-router-dom";
import MealTable from "../components/MealTable"
import styled from "styled-components";
import RecapTable from "../components/RecapTable";
function Diary() {
  let params = useParams();
  return (
    <>

      <Header>Diary Page</Header>
      <RecapTable/>
      <MealTable name = {"Breakfast"}/>
      <MealTable name = {"Launch"}/>
      <MealTable name = {"Dinner"}/>
      <MealTable name = {"Snacks"}/>
      
    </>
  );
}


const Header = styled.h1`
  text-align: center;
`;

export default Diary;
