'use client'

import React, { useState, useEffect } from "react";
import TurnOnEffect from "./components/effects/turnOnEffect";
import HomeScreen from "./components/screens/homeScreen";
import FuzzyBackground from "./components/effects/fuzzyBackground";
import AboutScreen from "./components/screens/aboutScreen";
import Reveal from "./components/effects/reveal";


export default function Home() {

  const [showFuzzyBackground, setShowFuzzyBackground] = useState(false);

  useEffect(() => {    const timer = setTimeout(() => {
      setShowFuzzyBackground(true);
    }, 2600);


    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className=" ">
      <TurnOnEffect /> 
      {/* <FuzzyBackground delay={2.6}> */}
        <div className="overflow-x-hidden overflow-y-scroll">
          <HomeScreen />
          <Reveal width="100%">
            <AboutScreen />
          </Reveal>
          
          
        </div>
      {/* </FuzzyBackground> */}
    </div>
  );
}
