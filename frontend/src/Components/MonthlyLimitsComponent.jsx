import { Box, Card, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import ProgressBar from "./ui/ProgressBar";

const MonthlyLimitsComponent = ({ tagsData }) => {
  return (
    <Card
      sx={{ bgcolor: "#BCDBA5", borderRadius: "10px" }}
      className="m-5 p-4 w-full "
    >
      <Box className="flex justify-start mb-4">
        <Typography variant="h6" fontWeight="bold">
          Monthly Limits
        </Typography>
      </Box>
      <Box>
        <Grid container columns={{ xs: 4, sm: 4, md: 12 }} spacing={4}>
          {tagsData.map((tag) => {
            return (
              <Grid key={tag.id} item xs={6}>
                <ProgressBar
                  progress={tag.totalAmount}
                  height={4}
                  variant="limit"
                  total={tag.cap}
                  label={tag.name}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Card>
  );
};

MonthlyLimitsComponent.propTypes = {
  tagsData: PropTypes.array.isRequired,
};

export default MonthlyLimitsComponent;
