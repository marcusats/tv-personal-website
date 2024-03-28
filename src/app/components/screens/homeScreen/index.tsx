import React from 'react';
import TyperEffect from '../../effects/typerEffect';
import MainDock from './mainDock';
import { motion } from 'framer-motion';


const HomeScreen = () => {

  const introductionText = `
    <div className="flex flex-col items-start w-1/2 space-y-4 justify-start ml-11 mt-5">
      <div className="w-screen" >
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-800 to-pink-900">Hey! My name is Marcos Salazar.</h2>
      </div>
      <div className="mt-5" >
        <p className="">
          Co-founder of <a href='https://caballabs.com/' target='_blank' rel="noopener noreferrer">Cabal Labs</a> and a passionate computer engineer based in the New York.
        </p>
        <br />
        <p className="text-base">
          At Stevens Institute of Technology, I've balanced academic and entrepreneurial efforts. I was part of the founding team from <a href='https://www.securemeeting.org/' target='_blank' rel="noopener noreferrer">SecureMeeting</a>, a non-profit videoconferencing platform used in over 110 countries, leading to a mentorship role in the university's accelerator program. In the Web3 space, I contributed to <a href='https://www.impactmarket.com/' target='_blank' rel="noopener noreferrer">ImpactMarket's</a> microcredit platform, enhancing my software engineering and blockchain skills. Additionally, I established Cabal Labs, focusing on Web3 and AI research and development.
        </p>
      </div>
    <div>
        
  `;

  return (
    <div className="relative flex flex-col justify-center items-center space-y-4 min-h-screen ">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className='' >
        <MainDock />
        <motion.div className='absolute w-min-[100%] flex items-start justify-start pl-12 ml-9 ' initial={{ height: 0 }} animate={{ height: 'auto' }} transition={{ duration: 3 }}>
          <TyperEffect typingSpeed={15} text={introductionText} />      
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomeScreen;
