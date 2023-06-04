import { Box, Card, Typography } from "@mui/material";
import CreditCard from "./ui/CreditCard";
import AddCardModal from "./AddCardModal";

const CardStack = ({ cardData, postData }) => {
  return (
    <Card
      sx={{ borderRadius: "10px" }}
      className="  self-center  flex  w-full  flex-col  items-center p-2 pt-8 h-full mb-6"
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
      <Box
        style={{ maxHeight: 800 }}
        className="w-full overflow-auto flex-1 mt-2"
      >
        {cardData.map((card) => {
          return (
            <>
              <CreditCard card={card} />
            </>
          );
        })}
      </Box>
    </Card>
  );
};

export default CardStack;
