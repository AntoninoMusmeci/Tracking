import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MealTable from "../components/MealTable";
import styled from "styled-components";
import RecapTable from "../components/RecapTable";
import { useStateContext } from "../utils/context";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useEffect } from "react";
import { getFormattedDate } from "../utils/functions";

function Diary() {
  const {
    meals,
    addMeal,
    removeMeal,

    setNutrients,
  } = useStateContext();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const [date, setDate] = useState(new Date(query.get("date")));
  // const [meals,setMeals] = useState([])
  const navigate = useNavigate();
  let totCalories = 0;

  useEffect(() => {
    const nutrients = { calories: 0, fat: 0, protein: 0, carbs: 0 };
    for (let [key, value] of Object.entries(meals)) {
      for (let v of value) {
        console.log(value);
        if (v.date === getFormattedDate(date)) nutrients.calories += v.calories;
      }
    }
    console.log("useEffect", nutrients);
    setNutrients(nutrients);
  }, [date, meals, setNutrients]);

  const changeDate = (days) => {
    setDate(new Date(date.setDate(date.getDate() + days)));
    navigate(`/diary?date=${getFormattedDate(date)}`);
  };
  return (
    <>
      <Data>
        <AiOutlineArrowLeft
          onClick={() => {
            changeDate(-1);
          }}
        ></AiOutlineArrowLeft>
        <p>Data </p>
        <AiOutlineArrowRight
          onClick={() => {
            changeDate(1);
          }}
        ></AiOutlineArrowRight>
      </Data>
      <Header>Diary Page</Header>
      <RecapTable />
      {Object.entries(meals).map(([key, value]) => {
        const filtered_value = value.filter((item) => {
          if (item.date === getFormattedDate(date))
            totCalories += item.calories;
          return item.date === getFormattedDate(date);
        });

        return (
          <MealTable
            name={key}
            meals={filtered_value}
            addMeal={addMeal}
            removeMeal={removeMeal}
            date={getFormattedDate(date)}
          />
        );
      })}
    </>
  );
}

const Header = styled.h1`
  text-align: center;
`;

const Data = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`;

export default Diary;
