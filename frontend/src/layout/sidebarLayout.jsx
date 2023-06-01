import { Box } from "@mui/material";
import Side from "../Components/Side";
import { PropTypes } from "prop-types";

const SidebarLayout = ({ children }) => {
  return (
    <Box className="flex w-full">
      <Side />
      <div className="flex-1">{children}</div>
    </Box>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default SidebarLayout;
