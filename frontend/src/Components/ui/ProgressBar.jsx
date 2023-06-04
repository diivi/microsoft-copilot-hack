import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ProgressBar = ({ total, progress, height, label, variant }) => {
  return (
    <Box
      className={`flex flex-col ${
        variant === "card" ? "w-full" : variant === "limit" ? "w-full" : ""
      }`}
    >
      <Box
        className={`h-${height} bg-gray-800 overflow-hidden border-2 border-black `}
      >
        <Box
          className={`h-full ${
            variant === "card"
              ? "bg-[#BCDBA5]"
              : variant === "limit"
              ? "bg-white"
              : ""
          }`}
          style={{ width: `${(progress / total) * 100}%` }}
        ></Box>
      </Box>
      <Box className="flex justify-between">
        <Typography variant="overline" fontWeight="bold">
          {label || ""}
        </Typography>
        <Typography variant="overline" fontWeight="bold">
          ${progress}/${total}
        </Typography>
      </Box>
    </Box>
  );
};

ProgressBar.propTypes = {
  total: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["card", "limit"]),
};

export default ProgressBar;
