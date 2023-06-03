import { Box, Paper, useTheme } from "@mui/material";
import FinanceInfoCard from "../Components/FinanceInfographicsCard";
import CreditCard from "../Components/ui/CreditCard";
import ProgressBar from "../Components/ui/ProgressBar";
import AddCardModal from "../Components/AddCardModal";

const FinancePage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: theme.palette.background.default }} className="flex ">
      <Box className="flex mt-[10%] w-full">
        {/* First Column */}
        <Box className="flex-[1_1_10%] h-full flex flex-col">
          {/* finance graph content */}

          <Paper
            className="flex-[1_1_5%]"
            sx={{ bgcolor: theme.palette.background.default }}
          >
            <FinanceInfoCard />
          </Paper>
          {/* transactions history*/}
          <Paper className="flex-1">Transactions
          <TransactionsList variant="page" />
          </Paper>
          
        </Box>

        {/* Second Column */}
        <Box className="flex-1 h-full flex flex-col items-center">
          <AddCardModal />
          <h1>Your Cards</h1>
          <CreditCard />
          <ProgressBar
            progress={60}
            height={4}
            variant="card"
            total={120}
            label=""
          />
          <CreditCard />
          <ProgressBar
            progress={60}
            height={4}
            variant="card"
            total={120}
            label=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FinancePage;
