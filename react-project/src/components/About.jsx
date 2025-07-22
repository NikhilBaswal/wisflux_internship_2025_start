import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  return (
    <React.Fragment>
        <div className="w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
          <h1 className="px-20 pt-20 pb-7 font-['Neue_Montreal'] text-[3.5vw] leading-[4vw] tracking-tight">
          Ochi is a strategic presentation agency for forward-
          thinking businesses that need to raise funds, sell 
          products, explain complex ideas, and hire great people.
          </h1>
          <div className="pl-20 py-5 w-full border-t-[1px] border-[#31351a] flex gap-110">
            <div>
              <h1 className="w-'1/2' text-2xl">Our approach:</h1>
              <button className="px-5 py-2 text-xs uppercase bg-zinc-900 text-white rounded-full flex justify-center items-center gap-5">
                <h1>Read More</h1>
                 <div className='w-2 h-2 bg-zinc-100 rounded-full'>
                 </div>
              </button>
            </div>
            <div className="w-1/2 h-auto">
            <img className='w-full h-[auto] rounded-3xl' src="https://img.freepik.com/free-photo/sexy-smiling-beautiful-woman-her-handsome-boyfriend-happy-cheerful-family-having-tender-momentsyoung-passionate-couple-hugging-sensual-pair-isolated-white-cheerful-happy_158538-22583.jpg?semt=ais_hybrid&w=740" />
            </div>
          </div>

        </div>

    </React.Fragment>
  )
}

export default About
