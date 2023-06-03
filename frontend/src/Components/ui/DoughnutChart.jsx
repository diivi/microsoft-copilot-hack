import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const DoughnutChart = ({ data }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const values = data.map((item) => item.totalAmount);

    const chartOptions = {
      responsive: true,
      plugins: {
        legend: false,
        tooltips: {
          enabled: false,
        },
      },
    };

    const chartData = {
      datasets: [
        {
          data: values,
          backgroundColor: [
            "rgba(202, 165, 219, 1)",
            "rgba(0, 40, 90, 1)",
            "rgba(217, 217, 217, 1)",
            "rgba(188, 219, 165, 1)",
          ],
          borderWidth: 0,
          radius: "90%",
          cutout: "60%",
          innerRadius: "50%",
          hoverOffset: 2,
        },
      ],
      labels: data.map((item, index) => `${item.name}`),
    };

    setChartData(chartData);
    setChartOptions(chartOptions);
  }, [data]);

  return <Doughnut data={chartData} options={chartOptions} />;
};

DoughnutChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DoughnutChart;

// import "chart.js/auto";
// import { Doughnut } from "react-chartjs-2";
// import { useEffect, useState } from "react";

// const DoughnutChart = () => {
//   const [data, setData] = useState({
//     datasets: [],
//   });
//   const [config, setConfig] = useState(null); // Initialize config as null instead of undefined

//   useEffect(() => {
//     const chartOptions = {
//       responsive: true,
//       plugins: {
//         legend: false,
//         tooltips: {
//           enabled: false,
//         },
//       },
//     };

//     const chartData = {
//       datasets: [
//         {
//           data: [10, 20, 30, 40],
//           backgroundColor: [
//             "rgba(202, 165, 219, 1)",
//             "rgba(0, 40, 90, 1)",
//             "rgba(217, 217, 217, 1)",
//             "rgba(188, 219, 165, 1)",
//           ],
//           borderWidth: 0,
//           radius: "90%",
//           cutout: "60%",
//           innerRadius: "50%",
//           hoverOffset: 2,
//         },
//       ],
//       labels: ["Red", "Green", "Blue"],
//     };

//     setData(chartData);
//     setConfig(chartOptions);
//   }, []);

//   return <Doughnut data={data} options={config} />;
// };

// export default DoughnutChart;
