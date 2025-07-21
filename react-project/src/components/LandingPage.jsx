import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
   <React.Fragment>
    <div className="w-full h-screen bg-zinc-900 pt-2 ">
      <div className="textstructure mt-40 px-20">
        {["We create","eye-opening","presentations"].map((item,index)=>{
          return <div className="masker ">
                  <div className='w-fit flex items-center'>
                    {index===1 && (<div className="mr-[1vw] w-[8vw] rounded-md h-[5vw] bg-red-500 relative"></div>)}
                  <h1 className="uppercase text-[7vw] leading-[7vw] tracking-tighter font-bold font-['Pacifico'] ">{item}</h1>
                  </div>
                 </div>
        
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between item-center py-5 px-20">
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
          return <p className="text-md font-light tracking-tight leading-none">{item}</p>
        })}
        <div className="start flex items-center gap-5">
           <div className="px-4 py-2 border-[1px] border-zinc-400 font- light text-md uppercase rounded-full">
            Start the project
            </div>
           <div className='w-10 h-10  flex justify-center items-center border-[1px] border-zinc-400 rounded-full'>
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
           </div>
        </div>
      </div>
    </div>
   </React.Fragment> 
  )
}

export default LandingPage