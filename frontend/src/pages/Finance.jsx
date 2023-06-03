import { Box, Paper, useTheme } from "@mui/material";
import useData from "../hooks/swrHook";
import FinanceInfoCard from "../Components/FinanceInfographicsCard";
import CreditCard from "../Components/ui/CreditCard";
import ProgressBar from "../Components/ui/ProgressBar";
import AddCardModal from "../Components/AddCardModal";
import SkeletonLoading from "../Components/ui/SkeletonLoading";
import AddTransactionModal from "../Components/AddTaskModal";

const FinancePage = () => {
  const { data, isLoading, isError, postData } = useData(
    "http://localhost:8000/getusercards/",
    {},
    {
      "Content-Type": "application/json",
      userId: 123456,
    }
  );
  console.log(data);
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
          <Paper className="flex-1">
            Transactions
            <AddTransactionModal />
          </Paper>
        </Box>

        {/* Second Column */}
        <Box className="flex-1 h-full flex flex-col items-center">
          <AddCardModal postData={postData} />
          <h1>Your Cards</h1>

          {isLoading ? (
            <SkeletonLoading />
          ) : data ? (
            data.cards.map((card) => {
              return (
                <>
                  <CreditCard />
                  <ProgressBar
                    progress={60}
                    height={4}
                    variant="card"
                    total={120}
                    label=""
                  />
                </>
              );
            })
          ) : (
            <h1>Error</h1>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FinancePage;
