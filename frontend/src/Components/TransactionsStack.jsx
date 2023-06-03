import { Box, Typography } from "@mui/material";
import useData from "../hooks/swrHook";
import TransactionsList from "./TransactionsList";
import AddTransactionModal from "./AddTransactionModal";

const TransactionsStack = ({ cardsData }) => {
  const { data, postData } = useData(
    "http://localhost:8000/getusertransactions/",
    {},
    {
      "Content-Type": "application/json",
      userId: 123456,
    }
  );
  return (
    <>
      <Box className="flex flex-col items-center w-full p-4">
        <Typography variant="h5" fontWeight={"bold"} className="self-start p-2">
          Transactions
        </Typography>
        <Box
          sx={{
            borderRadius: "10px",
            bgcolor: "transparent",
            overflow: "auto",
          }}
          className="flex flex-col mx-5 my-2 items-center p-2 pt-2 w-full"
          style={{ maxHeight: 400 }}
        >
          {data && (
            <TransactionsList
              transactionsData={data.transactions}
              variant="page"
            />
          )}
          {/* )} */}
        </Box>
        <Box className="w-full flex justify-end my-1">
          <AddTransactionModal cardsData={cardsData} postData={postData} />
        </Box>
      </Box>
    </>
  );
};

export default TransactionsStack;
