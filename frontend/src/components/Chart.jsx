import React from "react";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
ChartJS.register(ArcElement);

export function DoughnutChart({ data, colors, calories }) {
  const formatted_data = {
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        borderWidth: 0,

      },
    ],
  };
  return (
    <ChartStyle>
      <Doughnut  options={{ cutout: "90%" }} data={formatted_data} />
      <div>
        {calories}
        <span>cal</span>
      </div>
    </ChartStyle>
  );
}

const ChartStyle = styled.div`
  position: relative;
  width: 100%;
  canvas{
    position: absolute;
    width: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
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
