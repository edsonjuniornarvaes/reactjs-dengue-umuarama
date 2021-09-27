import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  datasets: [
    {
      label: "Número de Casos",
      data: [120, 70, 80, 67, 100, 110, 120, 200, 300, 100, 80, 98],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => (
  <>
    <Bar
      data={data}
      options={options}
      options={{ responsive: false, maintainAspectRatio: true }}
      width={400}
      height={300}
    />
  </>
);

export default VerticalBar;
