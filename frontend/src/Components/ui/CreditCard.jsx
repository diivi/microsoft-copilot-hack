import React, { useEffect, useState } from "react";
import Avatar from "boring-avatars";
import ProgressBar from "./ProgressBar";
import { Typography } from "@mui/material";

const CreditCard = ({ card }) => {
  const [avatarSize, setAvatarSize] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 680) {
        setAvatarSize(250);
      } else if (screenWidth < 900) {
        setAvatarSize(300);
      } else if (screenWidth < 1024) {
        setAvatarSize(450);
      } else if (screenWidth < 1050) {
        setAvatarSize(220);
      } else if (screenWidth < 1280) {
        setAvatarSize(250);
      } else if (screenWidth < 1300) {
        setAvatarSize(300);
      } else {
        setAvatarSize(400);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div key={card.id} className="hidden sm:flex  justify-center p-0 ">
        <div className="p-5 w-full">
          <div className="w-full  max-w-lg h-56 m-auto bg-blue-800 rounded-xl relative text-white shadow-2xl">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <Avatar
                size={avatarSize}
                name={card.id}
                variant="marble"
                colors={["#bcdba5", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                square={true}
                style={{ width: "100%" }}
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
                  className=" w-10 h-10"
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
                    <p className="font-mono text-xs">Bank</p>
                    <p className="font-mono tracking-wider text-sm">
                      {card.bank}
                    </p>
                  </div>
                  <div>
                    <p className="hidden lg:block font-mono text-xs">CVV</p>
                    <p className="font-bold tracking-more-wider text-sm"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-1 flex flex-col sm:hidden w-full">
        <div className="flex w-full justify-between ">
          <Typography>Bank Name</Typography>
          <Typography>Card Number</Typography>
        </div>
        <ProgressBar
          progress={card.currentSpent}
          height={4}
          variant="card"
          total={card.cap}
          label=""
        />
      </div>
      <div className="hidden sm:block w-full px-16">
        <ProgressBar
          progress={card.currentSpent}
          height={4}
          variant="card"
          total={card.cap}
          label=""
        />
      </div>
    </div>
  );
};

export default CreditCard;
