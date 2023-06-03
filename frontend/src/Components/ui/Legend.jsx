import { Box, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const Legend = ({ label }) => {
  const theme = useTheme();
  return (
    <Box className="flex space-between items-center gap-2 min-w-[100px] ">
      <Box
        sx={{
          bgcolor: theme.palette.secondary.main,
        }}
        className={`h-4 w-4`}
      />
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
