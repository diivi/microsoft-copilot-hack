import { Box, Card, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import ProgressBar from "./ui/ProgressBar";

const MonthlyLimitsComponent = ({ tagsData }) => {
  return (
    <Card
      sx={{ bgcolor: "#BCDBA5", borderRadius: "10px" }}
      className="m-5 mb-0 w-full p-4"
    >
      <Box className="flex justify-start mb-4">
        <Typography variant="h6" fontWeight="bold">
          Monthly Limits
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
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

          {/* <Grid item xs={6}>
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
          </Grid> */}
        </Grid>
      </Box>
    </Card>
  );
};

MonthlyLimitsComponent.propTypes = {
  tagsData: PropTypes.array.isRequired,
};

export default MonthlyLimitsComponent;
