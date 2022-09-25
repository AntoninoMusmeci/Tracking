import React from "react";
import { useParams } from "react-router-dom";
import MealTable from "../components/MealTable";
import styled from "styled-components";
import RecapTable from "../components/RecapTable";
import { useStateContext } from "../utils/context";

function Diary() {
  const { meals } = useStateContext();

  return (
    <>
      <Header>Diary Page</Header>
      <RecapTable />
      {Object.entries(meals).map(([key, value]) => {
        return <MealTable name={key} meals={value} />;
      })}
    </>
  );
}

const Header = styled.h1`
  text-align: center;
`;

export default Diary;
