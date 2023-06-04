import { Box, useTheme } from "@mui/material";
import useData from "../hooks/swrHook";
import FinanceInfoCard from "../Components/FinanceInfographicsCard";
import SkeletonLoading from "../Components/ui/SkeletonLoading";
import { useState, useEffect } from "react";
import CardStack from "../Components/CardStack";
import TransactionsStack from "../Components/TransactionsStack";
import SkeletonLoading2 from "../Components/ui/SkeletonLoading2";

const FinancePage = () => {
  const [cards, setCards] = useState([]);
  const { data, isLoading, postData } = useData(
    "http://20.198.105.30:8000/getusercards/",
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
    <Box className="flex flex-col lg:flex-row gap-4">
      {/* First Column */}
      <Box className="flex flex-col">
        {/* finance graph content */}
        <Box
          className="flex-1"
          sx={{ bgcolor: theme.palette.background.default }}
        >
          <FinanceInfoCard />
        </Box>
        {/* transactions history*/}
        <Box
          className="flex-1 mt-2"
          sx={{ bgcolor: theme.palette.background.default }}
        >
          {data ? (
            <TransactionsStack cardsData={data.cards} postData={postData} />
          ) : null}
        </Box>
      </Box>

      {/* Second Column */}
      {isLoading ? (
        <SkeletonLoading2 />
      ) : data ? (
        <CardStack cardData={data.cards} postData={postData} />
      ) : (
        <h1>Error</h1>
      )}
    </Box>
  );
};

export default FinancePage;
