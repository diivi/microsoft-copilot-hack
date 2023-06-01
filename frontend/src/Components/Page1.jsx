import React from 'react';
import Tasks from './Tasks';
import PersonalFin from './PersonalFin';
import Weather from './Weather';
import Url from './Url'

const Page1 = () => {
  return (
    <div className="bg-mainGray min-h-screen h-full w-4/5 text-black flex">
      <div className="w-3/5 flex flex-col">
        <Tasks />
        <PersonalFin />
        </div>
        <div className="w-2/5 flex flex-col">
          <Weather />
          <Url />
        </div>
        </div>
        
  );
};

export default Page1;
