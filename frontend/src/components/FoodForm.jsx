import React from 'react'

function FoodForm({handleInput}) {
  return (
    <div>  Calories{" "}
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
    <button type="submit"> ADD FOOD </button></div>
  )
}

export default FoodForm