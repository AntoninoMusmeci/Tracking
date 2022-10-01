import React from "react";
import styled from "styled-components";
function Ingredient({ ingredient }) {
  return (
    <IngredientW>
      <img src="https://www.panierebio.com/1448-large_default/uova-biologiche-allevamento-aperto.jpg" alt="" />
      <div>
        <h3>{ingredient.name}</h3>
        <p>
          {`Carbs: ${ingredient.carbs},Protein: ${ingredient.protein},Fat: ${ingredient.fat}`}
        </p>
        
      </div>
      <h3>{ingredient.calories}</h3>
 
    </IngredientW>
  );
}

const IngredientW = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  padding: 5px;
  margin: 5px;
  img{
    width: 50px;
    height: 50px;
  }
  h3{
    font-size: 1rem;
    margin:0;
  }
  p{
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
  }
`;
 

export default Ingredient;
