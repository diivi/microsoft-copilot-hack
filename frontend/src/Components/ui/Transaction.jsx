import React from 'react';

const Transaction = ({ amount, category, description, variant }) => {
  const pillColor = amount >= 0 ? 'bg-green-200' : 'bg-red-200';

  return (
    <div className={`flex items-center rounded-2xl p-4 mb-4 ${
      variant === "page"
      ? "bg-white"
      : variant === "dashboard"
      ? "bg-[#BCDBA5]"
        : ""
    }`}>
      <div
        className={`rounded-full h-8 w-16 flex items-center justify-center ${pillColor}`}
      >
        <p className="text-lg font-semibold text-center">
          {amount >= 0 ? `+$${amount}` : `-$${Math.abs(amount)}`}
        </p>
      </div>
      <div className="ml-4 flex flex-row space-x-4">
        <p className="text-base text-gray-600 mb-1">{category}</p>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default Transaction;
