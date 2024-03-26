import React from 'react';
import TyperEffect from '../../effects/typerEffect';
import MainDock from './mainDock';
import { motion } from 'framer-motion';


const HomeScreen = () => {

  const introductionText = `
    <div className="flex flex-col items-start w-1/2 space-y-4 justify-start ml-11 mt-5">
      <div className="w-screen" >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-800 to-pink-900">Hey! My name is Marcos Salazar.</h2>
      </div>
      <div className="mt-5" >
        <p className="text-md">
          Co-founder of <a href='https://caballabs.com/' target='_blank' rel="noopener noreferrer">Cabal Labs</a> and a passionate computer engineering student based in the New York City area.
        </p>
        <br />
        <p className="text-md">
          As a senior at Stevens Institute of Technology, I've embarked on a journey that blends academic rigor with entrepreneurial spirit. Starting with SecureMeeting and progressing to a mentor role in our university's accelerator, I've delved deep into the startup ecosystem.
        </p>
      </div>
    <div>
        
  `;

  return (
    <div className="relative flex flex-col justify-center items-center space-y-4 min-h-screen">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} >
        <MainDock />
        <motion.div className='absolute w-min-[100%] flex items-start justify-start pl-12 ' initial={{ height: 0 }} animate={{ height: 'auto' }} transition={{ duration: 3 }}>
          <TyperEffect typingSpeed={15} text={introductionText} />      
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomeScreen;
