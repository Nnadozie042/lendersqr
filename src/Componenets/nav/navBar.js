import React, { useState } from 'react';
import { FaSearch, FaUserCircle, FaRegBell } from 'react-icons/fa';

import dozie from '../nav/dozie.png'
const NavBar = () => {
    const [main, setMain] = useState('')
    const handleSubmit = (e) => e.preventDefault()

    return (
        <div className="h-[5em]   lg:h-[4em] w-[10em]  lg:h-[4em] lg:w-full lg:flex lg:flx-row lg bg-white">
            <div className="flex flex-row  ml-[1em] mt-[0.8em]">
                <p className=""><img className="h-[2.5em] w-[2em] lg:h-[3em] lg:w-[3em]" src={dozie} alt="" /></p>
                <h1 className='text-xl  text-blue-900 font-extrabold pl-[0.2em] lg:text-2xl'>lendsqr</h1>
            </div>

            <div className=' ml:ml-[3em] whitespace-nowrap lg:ml-[6em] whitespace-nowrap lg:mt-[1em] flex flex-row'>
              
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-row rouded-l-xl'>
                    <div>
                    <input type="text" 
                    value={main}
                    onClick={(e)=>setMain(e.target.value)}
                     placeholder="say something"className='bg-neutral-200 rounded-l-[0.2em]'/>
                     </div>
                     <div className='bg-blue-400 h-[1.8em] w-[2em] border-l-[0.3em] rounded-r-[0.4em] pt-[0.1em] pt-[0.4em] text-[0.8em]'><FaSearch className="text-white"/></div> 
                     </div>
                    </form>
                 
           
                {/*----------right-nav-------------*/}
                <div className="flex justify-between  lg:ml-[8em] pl-[2em]">
                    <div>
                        <span className="text-blue-800"><a href="#">Docs</a></span>
                    </div>
                    < div className='pl-[2em] pt-[0.3em]'>
                        <span><FaRegBell className="text-blue-800" /></span>
                    </div>
                    <div className="relative lg:pl-[3em] pt-[0.3em]">
                        <span className="text-[2em] text-gray-300"><FaUserCircle /></span>
                    </div>
                    <div className="lg:pl-[2em]">
                        <select className="text-[0.7em] text-blue-800">
                            <option value="">Adeleji</option>
                        </select>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default NavBar;