import React from 'react'
import food from '../assets/food.png'
import trv from '../assets/trv.png'
import emi from '../assets/emi.png'
import ent from '../assets/ent.png'
const PersonalFin = () => {
  return (
    <div className="bg-white rounded-lg m-8 p-4">
        
    <h2 className="text-xl text-center mb-4 font-mono">Personal Finances</h2>
    <div className="flex">
      <div className="w-1/3">
        <img src="path" alt="Finances" />
      </div>
      <div className="w-1/3 flex flex-col">
        <div className="flex flex-col">
            <div className="flex mb-5">
            <img className='object-cover mr-2' src={food} alt="" />
            <h3 className="text-base font-mono">Food</h3>
            </div>
            <div className="flex">
            <img className='object-cover mr-2' src={ent} alt="" />
            <h3 className="text-base font-mono">Entertainment</h3>
            </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col">
        <div className="flex flex-col">
        <div className="flex mb-5">
            <img className='object-cover mr-2' src={trv} alt="" />
            <h3 className="text-base font-mono">Travel</h3>
            </div>
            <div className="flex">
            <img className='object-cover mr-2' src={emi} alt="" />
            <h3 className="text-base font-mono">EMIs</h3>
            </div>
        </div>
      </div>
    </div>
    <h2 className="text-base my-4 font-mono">Transactions</h2>
    <div className="flex flex-col justify-center items-center">
      <div className="bg-zinc-300 rounded-lg w-11/12 h-1/4 p-4 mb-4"></div>
      <div className="bg-zinc-300 rounded-lg w-11/12 h-1/4 p-4 mb-4"></div>
      <div className="bg-zinc-300 rounded-lg w-11/12 h-1/4 p-4 mb-4"></div>
    </div>
  </div>
  )
}

export default PersonalFin