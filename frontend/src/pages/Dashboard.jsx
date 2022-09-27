import { DoughnutChart } from "../components/Chart";
import { useStateContext } from "../utils/context";
import styled from "styled-components";
import WeekChart from "../components/WeekChart";
import { useEffect, useState } from "react";

function Dashboard() {
  const getDaysArray = function (start, end) {
    for (
      var arr = [], dt = new Date(start);
      dt <= new Date(end);
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  const { goals, nutrients, fetchdata, weekNutrients } = useStateContext();
  const [weeklyData, setWeeklyData] = useState([1000, 1000, 0, 0, 500, 123, 0])
  const [day, setDay] = useState();
  useEffect(() => {
    const date = new Date();
    setDay(date.getDay());
    const start = new Date();
    start.setDate(date.getDate() - date.getDay());
    const end = new Date();
    end.setDate(start.getDate() + 6);
    fetchdata(getDaysArray(start, end));
    setDay(date.getDay())

  }, []);

  useEffect(() => {
    const calories = []
    for(let data of weekNutrients){
      calories.push(data.calories)
    }
     setWeeklyData(calories)
  }, [weekNutrients]);
  return (
    <div>
      <Wrapper>
        <ChartWrapper>
          <h2> Calories </h2>

          <DivC>
            <DoughnutChart
              calories={1500}
              data={[
                weekNutrients[day]?.calories,
                weekNutrients[day]?.calories - goals["calories"],
              ]}
              colors={["blue", "grey"]}
            ></DoughnutChart>
          </DivC>
        </ChartWrapper>

        <NutrientsW>
          <h2> Nutrients </h2>
          <Nutrients>
            <DoughnutChart
              calories={goals["fat"]}
              data={[weekNutrients[day]?.fat,weekNutrients[day]?.fat - goals["fat"]]}
              colors={["purple", "grey"]}
            ></DoughnutChart>

            <DoughnutChart
              calories={goals["fat"]}
              data={[weekNutrients[day]?.protein, weekNutrients[day]?.protein - goals["fat"]]}
              colors={["orange", "grey"]}
            ></DoughnutChart>
            <DoughnutChart
              calories={goals["fat"]}
              data={[weekNutrients[day]?.carbs, weekNutrients[day]?.carbs - goals["fat"]]}
              colors={["green", "grey"]}
            ></DoughnutChart>
          </Nutrients>
        </NutrientsW>
      </Wrapper>

      <WrapperC>
        <div>
          <WeekChart weekly_data={weeklyData}></WeekChart>
        </div>
      </WrapperC>
    </div>
  );
}
const WrapperC = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 2rem;
  height: auto;
  div {
    width: 80%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  margin: 2rem;
  height: 220px;
  h2 {
    margin: 1rem;
  }
`;
const Nutrients = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  gap: 4rem;
  padding: 2rem;
`;
const NutrientsW = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
    height: 30%;
  }
`;
const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  border-right: solid 1px gray;
  align-items: center;
  h2 {
    height: 40%;
  }
`;
const DivC = styled.div`
  height: 40%;
  width: 150px;
  text-align: center;
`;

export default Dashboard;
