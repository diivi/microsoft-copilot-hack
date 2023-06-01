import { Box, Card, Grid, Typography } from "@mui/material";
import ProgressBar from "./ui/ProgressBar";

const MonthlyLimitsComponent = () => {
  return (
    <Card sx={{ bgcolor: "#BCDBA5" }} className="m-5 mb-0 w-full p-4">
      <Box className="flex justify-start mb-4">
        <Typography variant="h6" fontWeight="bold">
          Monthly Limits
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <ProgressBar
              progress={60}
              height={4}
              variant="limit"
              total={120}
              label="EMIs"
            />
          </Grid>
          <Grid item xs={6}>
            <ProgressBar
              progress={60}
              height={4}
              variant="limit"
              total={120}
              label="EMIs"
            />
          </Grid>
          <Grid item xs={6}>
            <ProgressBar
              progress={60}
              height={4}
              variant="limit"
              total={120}
              label="EMIs"
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default MonthlyLimitsComponent;
