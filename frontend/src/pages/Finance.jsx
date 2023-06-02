import { Box, Paper } from "@mui/material";
import FinanceInfoCard from "../Components/FinanceInfographicsCard";
import CreditCard from "../Components/ui/CreditCard";

const FinancePage = () => {
  return (
    <Box className="h-full flex min-h-screen ">
      <Box className="flex mt-[10%] w-full">
        {/* First Column */}
        <Box className="flex-[1_1_10%] h-full flex flex-col">
          {/* finance graph content */}

          <Paper className="flex-[1_1_5%]">
            <FinanceInfoCard />
          </Paper>
          {/* transactions history*/}
          <Paper className="flex-1">Transactions</Paper>
        </Box>

        {/* Second Column */}
        <Box className="flex-1 h-full flex">
        <h1>Your Cards</h1>
        <CreditCard/>
        <ProgressBar progress={50} height={4}/>
        <CreditCard/>
        <ProgressBar progress={50} height={4}/>
        </Box>
      </Box>
    </Box>
  );
};

export default FinancePage;
