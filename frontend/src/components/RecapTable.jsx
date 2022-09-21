import React from "react";
import { useStateContext } from "../utils/context";
function RecapTable() {
    
  const { totalCalories } = useStateContext();
  console.log(totalCalories)
  return <div>{totalCalories}</div>;
}

export default RecapTable;
