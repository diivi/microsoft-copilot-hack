import { Card, Typography } from "@mui/material";
import CreditCard from "./ui/CreditCard";
import AddCardModal from "./AddCardModal";

const CardStack = ({ cardData, postData }) => {
  return (
    <Card
      sx={{ borderRadius: "10px" }}
      className=" bg-red-300 flex flex-col my-2 items-center p-2 pt-8 "
    >
      <Typography
        mb={2}
        variant="h5"
        fontWeight={"bold"}
        className="self-start w-full px-7"
      >
        Your Cards
      </Typography>
      <AddCardModal cardsData={cardData} postData={postData} />
      {cardData.map((card) => {
        return (
          <>
            <CreditCard card={card} />
          </>
        );
      })}
    </Card>
  );
};

export default CardStack;
