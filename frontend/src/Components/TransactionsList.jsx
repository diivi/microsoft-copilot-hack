import React from 'react';
import Transaction from './ui/Transaction';
import Button from '@mui/material/Button';

const TransactionsList = ({ variant }) => {
    const transactions = [
      {
        id: 1,
        amount: 50,
        category: 'Income',
        description: 'Salary',
      },
      {
        id: 2,
        amount: -20,
        category: 'Expense',
        description: 'Groceries',
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
        <Button variant="contained" color="secondary">Add Transaction</Button>
      </div>
    );
  };
  
  export default TransactionsList;