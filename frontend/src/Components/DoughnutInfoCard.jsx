import { Box, Grid, Typography } from "@mui/material";
import DoughnutChart from "./ui/DoughnutChart";
import Legend from "./ui/Legend";

const DoughnutInfoCard = () => {
  return (
    <Box className=" gap-5 flex justify-start items-start w-full">
      <Box className="h-52">
        <DoughnutChart />
      </Box>
      <Box className="flex flex-col gap-2 mt-4">
        <Typography variant="h5" fontWeight={"semi-bold"}>
          This Month: <span className="font-bold">$345</span>
        </Typography>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Legend label="Food" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Legend label="Food" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Legend label="EMIs" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Legend label="Food" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DoughnutInfoCard;
