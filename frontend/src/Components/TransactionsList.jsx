import React from 'react';
import Transaction from './ui/Transaction';
import Button from '@mui/material/Button';
import useData from '../hooks/swrHook';
import SkeletonLoading from './ui/SkeletonLoading';

const TransactionsList = ({ variant }) => {
  const { data, isLoading, isError, postData } = useData(
    "http://localhost:8000/getusertransactions/",
    {},
    {
      "Content-Type": "application/json",
      userId: 123456,
    }
  );
  console.log(data);

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
        {isLoading ? (
            <SkeletonLoading />
          ) : data ? (
            data.transactions.map((transaction) => {
              return (
              
                  <Transaction transaction={transaction} variant={variant} />
                  
               
              );
            })
          ) : (
            <h1>Error</h1>
          )}


        {/* {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            amount={transaction.amount}
            category={transaction.category}
            description={transaction.description}
            variant={variant}
          />
        ))} */}
      </div>
    );
  };
  
  export default TransactionsList;