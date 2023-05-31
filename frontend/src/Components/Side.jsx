// write reactjs code for a side navigation bar with background colour #1F1F21, the navigation bar should have a company name on top and it should have these nav links: Dashboard, Tasks, Finances. use tailwindcss for styling.

// Path: frontend/src/Components/side.js
import React from 'react';

function Side() {
  return (
   <>
    <div className="bg-gray h-screen w-1/5 pl-4">
      <div className="text-white text-left text-2xl font-bold py-10 border-b-2">Swift.</div>
      <div className="text-white text-left text-xl font-bold py-4">Dashboard</div>
      <div className="text-white text-left text-xl font-bold py-4">Tasks</div>
      <div className="text-white text-left text-xl font-bold py-4">Finances</div>
    </div>
   </>
  );
}

export default Side;


