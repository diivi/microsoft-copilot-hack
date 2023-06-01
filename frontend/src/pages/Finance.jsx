import { Box, Paper } from "@mui/material";

const FinancePage = () => {
  return (
    <Box className="h-full flex">
      {/* First Column */}
      <Box className="flex-[1_1_10%] h-full flex flex-col">
        {/* finance graph content */}
        <Paper className="flex-[1_1_5%]">Infographics</Paper>
        {/* transactions history*/}
        <Paper className="flex-1">Transactions</Paper>
      </Box>

      {/* Second Column */}
      <Box className="flex-1 h-full flex">
        {/* credit card content */}
        <Paper className="flex-1">Credit Cards</Paper>
      </Box>
    </Box>
  );
};

export default FinancePage;
