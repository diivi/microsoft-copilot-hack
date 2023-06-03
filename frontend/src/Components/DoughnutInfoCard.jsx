import { Box, Grid, Typography } from "@mui/material";
import DoughnutChart from "./ui/DoughnutChart";
import Legend from "./ui/Legend";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const DoughnutInfoCard = ({ tagsData }) => {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let total = 0;
    tagsData.forEach((tag) => {
      total += tag.totalAmount;
    });

    setSum(total);
  }, []);

  return (
    <Box className=" gap-5 flex justify-start items-start w-full">
      <Box className="h-52">
        <DoughnutChart data={tagsData} total={sum} />
      </Box>
      <Box className="flex flex-col gap-2 mt-4">
        <Typography variant="h5" fontWeight={"semi-bold"}>
          This Month: <span className="font-bold">${sum}</span>
        </Typography>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={2}>
          {tagsData.map((tag) => {
            return (
              <Grid key={tag.id} item xs={12} sm={6} md={4}>
                <Legend label={tag.name} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

DoughnutInfoCard.propTypes = {
  tagsData: PropTypes.array.isRequired,
};

export default DoughnutInfoCard;
