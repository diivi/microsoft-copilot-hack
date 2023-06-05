import { Box, Card } from "@mui/material";
import useData from "../hooks/swrHook";
import DoughnutInfoCard from "./DoughnutInfoCard";
import TransactionsStack from "./TransactionsStack";
const PersonalFin = () => {
  const { data, isLoading, isError, updateData } = useData(
    "http://20.198.105.30:8000/getusertags/",
    {},
    {
      "Content-Type": "application/json",
      userId: 123456,
    }
  );

  const {
    data: cardData,
    isLoading: cardLoading,
    postData,
  } = useData(
    "http://20.198.105.30:8000/getusercards/",
    {},
    {
      "Content-Type": "application/json",
      userId: 123456,
    }
  );

  if (!isLoading) {
    console.log(data);
  }

  return (
    <Card
      sx={{ borderRadius: "10px" }}
      className="flex flex-col mt-6 items-center gap-5 p-4 pt-8"
    >
      {data ? <DoughnutInfoCard tagsData={data.tags} /> : null}
      <Box
        sx={{
          width: "100%",
          borderRadius: "10px",
          bgcolor: "transparent",
          overflow: "auto",
        }}
      >
        {cardData ? (
          <TransactionsStack cardsData={cardData.cards} postData={postData} />
        ) : null}
      </Box>
    </Card>
  );
};

export default PersonalFin;
