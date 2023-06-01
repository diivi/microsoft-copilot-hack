import React from 'react';
import Tasks from './Tasks';
import PersonalFin from './PersonalFin';


const Page1 = () => {
  return (
    <div className="bg-mainGray min-h-screen h-full w-4/5 text-black flex">
      <div className="w-3/5 flex flex-col">
        <Tasks />
        <PersonalFin />
        </div>
        </div>
        
  );
};

export default Page1;
