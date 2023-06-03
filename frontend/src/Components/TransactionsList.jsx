import Transaction from "./ui/Transaction";
import AddTransactionModal from "./AddTransactionModal";

const TransactionsList = ({ variant, cardsData }) => {
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
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          amount={transaction.amount}
          category={transaction.category}
          description={transaction.description}
          variant={variant}
        />
      ))}
      <AddTransactionModal cardsData={cardsData} />
    </div>
  );
};

export default TransactionsList;
