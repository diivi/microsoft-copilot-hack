import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Legend = ({ label }) => {
  return (
    <Box className="flex space-between items-center gap-2 min-w-[100px] ">
      <Box className="h-4 w-4 bg-cyan-700" />
      <Typography variant="subtitle2" fontWeight={"bold"}>
        {label}
      </Typography>
    </Box>
  );
};

Legend.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Legend;
