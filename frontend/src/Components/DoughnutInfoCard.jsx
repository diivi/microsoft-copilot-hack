import { Box, Grid, Typography } from "@mui/material";
import DoughnutChart from "./ui/DoughnutChart";
import Legend from "./ui/Legend";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const DoughnutInfoCard = ({ tagsData }) => {
  const bgColors = [
    "rgba(202, 165, 219, 1)",
    "rgba(0, 40, 90, 1)",
    "rgba(217, 217, 217, 1)",
    "rgba(188, 219, 165, 1)",
  ];

  const getColor = (index) => {
    const colorIndex = index % bgColors.length;
    return bgColors[colorIndex];
  };
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let total = 0;
    tagsData.forEach((tag) => {
      total += tag.totalAmount;
    });

    setSum(total);
  }, []);

  return (
    <Box className=" gap-5 flex justify-start items-center lg:items-start w-full">
      <Box className="h-52 hidden md:block">
        <DoughnutChart data={tagsData} total={sum} />
      </Box>
      <Box className="flex flex-col gap-2 mt-4 w-full">
        <Typography
          className="self-center md:self-start text-center md:text-start"
          variant="h5"
          fontWeight={"semi-bold"}
        >
          This Month: <span className="font-bold">${sum}</span>
        </Typography>
        <Box className="hidden md:block">
          <Grid container columns={{ xs: 4, sm: 4, md: 4, lg: 8 }} spacing={2}>
            {tagsData.map((tag, index) => {
              return (
                <Grid key={tag.id} item xs={12} sm={12} md={4}>
                  <Legend label={tag.name} color={getColor(index)} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

DoughnutInfoCard.propTypes = {
  tagsData: PropTypes.array.isRequired,
};

export default DoughnutInfoCard;
