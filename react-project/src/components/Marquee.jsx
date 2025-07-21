import { motion } from 'framer-motion'
import React from 'react'
motion

function Marquee() {
  return (
    <React.Fragment>
        <div className="w-full py-20 rounded-tl-3xl  bg-[#004D43]">
            <div className="text flex border-t-2 border-b-2 border-zinc-300 gap-5 overflow whitespace-nowra">
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity, duration:5}} className="text-[9.5vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-semibold">we are ochi.</motion.h1> 
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity, duration:5}} className="text-[9.5vw] leading-none font-['Founders_Grotesk_X-Condensed']  font-semibold">we are ochi.</motion.h1>
            </div>
        </div>
    </React.Fragment>
  ) 
}

export default Marquee