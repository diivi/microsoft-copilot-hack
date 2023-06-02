import React from "react";
import Avatar from "boring-avatars";

const CreditCard = () => {
    
  return (
    // <div class="bg-white flex justify-center p-5">
    //   <div class="p-5">
        <div class="w-96 h-56 m-auto bg-blue-800 rounded-xl relative text-white shadow-2xl ">
        {/* transition-transform transform hover:scale-105 */}
         <div class="w-full h-full rounded-xl overflow-hidden">
          <Avatar
            size={400}
            name={Math.floor(Date.now() / 1000).toString()}
            variant="marble"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            square={true}
            
          />
          </div>
          {/* <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png"/> */}
          {/* <div class="relative object-cover w-full h-full rounded-xl"/> */}
          <div class="w-full px-8 absolute top-10">
            <div class="flex justify-between">
              <div class="">
                {/* <p class="font-light">
                                Name
                            </p> */}
                <p class="text-lg font-mono tracking-widest">Aryaman Shrm</p>
              </div>
              <img class="w-10 h-10" src="https://i.imgur.com/bbPHJVe.png" />
            </div>
            <div class="pt-1">
              {/* <p class="font-light">
                            Card Number
                        </p> */}
              <p class="text-3xl tracking-more-wider font-mono">4642 3489 9867 7632</p>
            </div>
            <div class="pt-6 pr-6">
              <div class="flex justify-between">
                
                <div class="">
                  <p class="font-mono text-xs text-xs">Expiry</p>
                  <p class="font-mono tracking-wider text-sm">03/25</p>
                </div>

                <div class="">
                  <p class="font-mono text-xs">CVV</p>
                  <p class="font-bold tracking-more-wider text-sm">···</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default CreditCard;
