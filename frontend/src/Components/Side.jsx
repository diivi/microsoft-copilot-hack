// write reactjs code for a side navigation bar with background colour #1F1F21, the navigation bar should have a company name on top and it should have these nav links: Dashboard, Tasks, Finances. use tailwindcss for styling.

// Path: frontend/src/Components/side.js
import {Link} from 'react-router-dom'
import dot from '../assets/dot.png'
function Side() {
  return (
    <>
      <div className="bg-sideBg text-mainGray min-h-full  w-1/5 pl-4">
        <div className="text-left text-2xl font-bold py-10 border-b-2">
          Swift.
        </div>
        <Link to='/'>
        <div className="flex gap-2 items-center py-4">
          <img className=' w-8 h-8' src={dot} alt="" />
          <h3 className='text-xl font-bold'>
          Dashboard
          </h3>
          </div>
        </Link>
        <Link to='/tasks'>
        <div className="flex gap-2 items-center py-4">
          <img className=' w-8 h-8' src={dot} alt="" />
          <h3 className='text-xl font-bold'>
          Tasks
          </h3>
          </div>
        </Link>
        <Link to='/finance'>
        <div className="flex gap-2 items-center py-4">
          <img className=' w-8 h-8' src={dot} alt="" />
          <h3 className='text-xl font-bold'>
          Finances
          </h3>
          </div>
        </Link>
        
        
      </div>
    </>
  );
}

export default Side;
