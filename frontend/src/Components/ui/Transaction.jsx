import React from "react";

const Transaction = ({ transaction, variant }) => {
  const pillColor =
    transaction.type == "incoming" ? "bg-[#BCDBA5]" : "bg-[#FF6D6D]";

  return (
    <div
      className={`flex items-center rounded-2xl p-4 mb-4 ${
        variant === "page"
          ? "bg-white"
          : variant === "dashboard"
          ? "bg-[#BCDBA5]"
          : ""
      }`}
    >
      <div
        className={`rounded-full h-8 w-20 flex items-center justify-center ${pillColor}`}
      >
        <p className="text-lg font-semibold text-center">
          {transaction.type == "incoming" >= 0
            ? `+$${transaction.amount}`
            : `-$${transaction.amount}`}
        </p>
      </div>
      <div className="ml-4 flex flex-row space-x-4">
        {transaction.tags.map((tag) => {
          return (
            <p className="text-base font-semibold mb-1">{tag.tags.name}</p>
          );
        })}
        {/* <p className="text-base text-gray-600 mb-1">{transaction.tags}</p> */}
        <p className="text-base  text-gray-600 mb-1">{transaction.label}</p>
      </div>
    </div>
  );
};

export default Transaction;
