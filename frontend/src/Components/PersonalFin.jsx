import { Card } from "@mui/material";
import useData from "../hooks/swrHook";
import DoughnutInfoCard from "./DoughnutInfoCard";
import TransactionsStack from "./TransactionsStack";
const PersonalFin = () => {
  const { data, isLoading, isError, updateData } = useData(
    "http://localhost:8000/getusertags/",
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
    "http://localhost:8000/getusercards/",
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
      className="flex flex-col mx-5 my-2 items-center p-4 pt-8"
    >
      {data ? <DoughnutInfoCard tagsData={data.tags} /> : null}
      {cardData ? (
        <TransactionsStack cardsData={cardData.cards} postData={postData} />
      ) : null}
    </Card>
  );
};

export default PersonalFin;
