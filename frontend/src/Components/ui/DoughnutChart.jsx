import "chart.js/auto";

import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

const DoughnutChart = () => {
  const [data, setData] = useState({
    datasets: [],
  });
  const [config, setConfig] = useState();

  useEffect(() => {
    // const DATA_COUNT = 5;
    // const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Doughnut Chart",
        },
      },
    };

    const chartData = {
      datasets: [
        {
          data: [10, 20, 30],
          backgroundColor: [
            "rgba(255, 99, 1, 0.5)",
            "rgba(255, 205, 86, 0.5)",
            "rgba(54, 162, 235, 0.5)",
          ],
          borderColor: [
            "rgb(255, 99, 80)",
            "rgb(255, 205, 86)",
            "rgb(54, 162, 235)",
          ],
          borderWidth: 1,
        },
      ],
      labels: ["Red", "Green", "Blue"],
    };
    setData(chartData);
    setConfig(chartOptions);
  }, []);

  return <Doughnut data={data} config={config} className="h-2" />;
};

export default DoughnutChart;
