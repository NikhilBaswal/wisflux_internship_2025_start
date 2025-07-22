import React from 'react';
import Navbar from './components/navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';

function App() {
  return (
     <>             {/* // these brackets are called <React.Fragment></React.Fragment> */}
     <div className='w-full min-h-screen bg-zinc-900 text-white'>
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    <About/>
  </div>
 
  </>
  )
}

export default App
