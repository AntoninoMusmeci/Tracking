import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import annotation from "chartjs-plugin-annotation"
import { Bar } from "react-chartjs-2";
import {useStateContext} from "../utils/context"


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotation
);

function WeekChart({weekly_data}) {
    const {goals} = useStateContext()
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weekly calorie consumption",
      },
      annotation: {
        annotations: {
            line1: {
              type: 'line',
              yMin: goals.calories,
              yMax: goals.calories,
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 2,
            }
          },
        drawTime: "afterDraw" // (default)
    }

    },
    scales: {
        y: {
            max: goals.calories + 250,
        
        },
        x: {
            grid:{
                display:false
            },
            barThickness: "10px"
        },

        
    },
    
  };

  const labels = [
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
  ];

  const data = {
    labels,
    datasets: [
      {
        maxBarThickness: 25,
        label: "Calories",
        data: weekly_data,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default WeekChart;
