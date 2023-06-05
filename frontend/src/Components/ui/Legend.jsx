import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Legend = ({ label, color }) => {
  return (
    <Box className="flex space-between items-center gap-2 min-w-[100px] ">
      <Box
        sx={{
          bgcolor: color,
        }}
        className={`h-4 w-4`}
      />
      <Typography noWrap variant="subtitle2" fontWeight={"bold"}>
        {label}
      </Typography>
    </Box>
  );
};

Legend.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Legend;
