import React from "react";
import Avatar from "boring-avatars";
import ProgressBar from "./ProgressBar";

const CreditCard = ({ card }) => {
  return (
    <div className="flex flex-col items-center">
      
        <div
          key={card.id}
          className=" flex justify-center p-2"
        >
          <div className="p-5">
            <div className="w-96 h-56 m-auto bg-blue-800 rounded-xl relative text-white shadow-2xl">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <Avatar
                  size={400}
                  name={card.id}
                  variant="marble"
                  colors={[
                    "#92A1C6",
                    "#146A7C",
                    "#F0AB3D",
                    "#C271B4",
                    "#C20D90",
                  ]}
                  square={true}
                />
              </div>
              <div className="w-full px-8 absolute top-10">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-mono tracking-widest">
                      {card.label}
                    </p>
                  </div>
                  <img
                    className="w-10 h-10"
                    src="https://i.imgur.com/bbPHJVe.png"
                    alt="Card logo"
                  />
                </div>
                <div className="pt-1">
                  <p className="text-3xl tracking-more-wider font-mono">
                    {card.cardNumber}
                  </p>
                </div>
                <div className="pt-6 pr-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-mono text-xs">Expiry</p>
                      <p className="font-mono tracking-wider text-sm">
                        {card.expiry}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-xs">CVV</p>
                      <p className="font-bold tracking-more-wider text-sm">
                        {card.cvv}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProgressBar
                    progress={card.currentSpend}
                    height={4}
                    variant="card"
                    total={card.cap}
                    label=""
                  />
    </div>
  );
};

export default CreditCard;
