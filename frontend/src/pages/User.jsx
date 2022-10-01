import React from "react";
import { useStateContext } from "../utils/context";
import styled from "styled-components";
import {Link} from "react-router-dom"
function User() {
  const { goals } = useStateContext();
  return (
    <GoalWrapper>
      <h3>Goals</h3>
      <h3> Daily Calories</h3>
      <h3> {`${goals.calories} Cal`} </h3>
      <p>
        {" "}
        {`carbs: ${goals.carbs}, protein: ${goals.protein}, fat: ${goals.fat}`}{" "}
      </p>
      <button> <Link to="edit-goals"> Update Your Goals </Link> </button>
    </GoalWrapper>
  );
}

const GoalWrapper = styled.div`
    background-color: white;
    margin: 2rem;
    p {
        margin:0;
        padding: 0;
    }
    h3 {
        margin:0;
        padding: 0;
    }
`;
export default User;
