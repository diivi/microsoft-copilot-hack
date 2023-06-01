import React from 'react';
import { FaUser } from 'react-icons/fa';

const Box = ({ heading, subheading }) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-2xl p-4 shadow">
        <h2 className="text-boxHead text-base mb-2 font-mono">{heading}</h2>
        <p className="text-gray-600 text-sm font-mono">{subheading}</p>
      </div>
    </div>
  );
};

const Tasks = () => {
  return (
    <>
        <div className="flex flex-row items-center p-4">
          <div className="text-2xl px-2">
            <FaUser />
          </div>
          <div className="flex flex-col">
            <h4>Good Morning Ary Bha</h4>
            <h1>Mon, 15 May, 2023</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 m-4">
        <div className="p-4">
        <div className="bg-boxGreen rounded-2xl p-4 shadow">
        <h2 className="text-boxHead text-base mb-2 font-mono">Box 1</h2>
        <p className=" text-gray-600 text-sm font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam ab, necessitatibus nihil aliquid ullam!</p>
         </div>
        </div>
          <Box heading="Box 2" subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem similique fugiat iure officia sunt!"/>
          <Box heading="Box 3" subheading="Sed do eiusmod tempor incididunt."/>
          <Box heading="Box 4" subheading="Ut labore et dolore magna aliqua."/>
        </div>
    </>
  );
};

export default Tasks;
