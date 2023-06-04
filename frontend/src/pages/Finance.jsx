import { Box, useTheme } from "@mui/material";
import useData from "../hooks/swrHook";
import FinanceInfoCard from "../Components/FinanceInfographicsCard";
import SkeletonLoading from "../Components/ui/SkeletonLoading";
import { useState, useEffect } from "react";
import CardStack from "../Components/CardStack";
import TransactionsStack from "../Components/TransactionsStack";

const FinancePage = () => {
  const [cards, setCards] = useState([]);
  const { data, isLoading, postData } = useData(
    "http://localhost:8000/getusercards/",
    {},
    {
      "Content-Type": "application/json",
      userId: 123456,
    }
  );

  useEffect(() => {
    if (data) {
      setCards(data.cards);
      console.log(data);
    }
  }, [data]);

  const theme = useTheme();
  return (
    <Box
      sx={{ bgcolor: theme.palette.background.default }}
      className="flex flex-col md:flex-row"
    >
      <Box className="mt-24 flex flex-col md:flex-row">
        {/* First Column */}
        <Box className="flex-[1_1_20%] md:w-2/3 md:flex md:flex-col">
          {/* finance graph content */}
          <Box
            className="flex-1"
            sx={{ bgcolor: theme.palette.background.default }}
          >
            <FinanceInfoCard />
          </Box>
          {/* transactions history*/}
          <Box
            className="flex-1"
            sx={{ bgcolor: theme.palette.background.default }}
          >
            {data ? (
              <TransactionsStack cardsData={data.cards} postData={postData} />
            ) : null}
          </Box>
        </Box>

        {/* Second Column */}
        <Box className="flex-[1_3_0%] md:flex md:flex-col items-center ">
          {isLoading ? (
            <SkeletonLoading />
          ) : data ? (
            <CardStack cardData={data.cards} postData={postData} />
          ) : (
            <h1>Error</h1>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FinancePage;
