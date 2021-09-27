import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Casos em Umuarama", "Bairros com Foco", "Total de Denúncias"],
  datasets: [
    {
      label: "dengue",
      data: [10587, 125, 1148],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
  <Pie
    data={data}
    options={{ responsive: false, maintainAspectRatio: true }}
    width={400}
    height={300}
  />
);

export default PieChart;
