import React from "react";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
ChartJS.register(ArcElement);

export function DoughnutChart({ nutrients, calories }) {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: nutrients,
        backgroundColor: ["green", "orange", "purple"],
        borderColor: ["green", "orange", "purple"],
        borderWidth: 1,
        legend: { display: false },
        Tooltip: { display: false },
      },
    ],
  };
  return (
    <ChartStyle>
      <Doughnut options={{ cutout: 27 }} data={data} />
      <div>
        {calories}
        <span>cal</span>
      </div>
    </ChartStyle>
  );
}

const ChartStyle = styled.div`
  position: relative;
  width: 15%;
  padding: 10px;
  div {
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  p {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }
`;
