import Transaction from "./ui/Transaction";
import AddTransactionModal from "./AddTransactionModal";
import useData from "../hooks/swrHook";

const TransactionsList = ({ variant, cardsData }) => {
  const { data, isLoading, isError, postData } = useData(
    "http://localhost:8000/getusertransactions/",
    {},
    {
      "Content-Type": "application/json",
      userId: 123456,
    }
  );
  console.log("transactions", data);
  const transactions = [
    {
      id: 1,
      amount: 50,
      category: "Income",
      description: "Salary",
    },
    {
      id: 2,
      amount: -20,
      category: "Expense",
      description: "Groceries",
    },
    // Add more transactions as needed
  ];

  return (
    <div>
      {data &&
        data.transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            amount={transaction.amount}
            category={transaction.category}
            description={transaction.description}
            variant={variant}
          />
        ))}
      <AddTransactionModal cardsData={cardsData} postData={postData} />
    </div>
  );
};

export default TransactionsList;
