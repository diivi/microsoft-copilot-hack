import Transaction from "./ui/Transaction";

const TransactionsList = ({ transactionsData, variant }) => {
  return (
    <div className="w-full">
      {transactionsData.map((transaction) => {
        return (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            variant={variant}
          />
        );
      })}
    </div>
  );
};

export default TransactionsList;
