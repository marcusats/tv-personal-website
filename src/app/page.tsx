'use client'

import React, { useState, useEffect, useRef } from "react";
import TurnOnEffect from "./components/effects/turnOnEffect";
import FuzzyBackground from "./components/effects/fuzzyBackground";
import ProjectsScreen from "./components/screens/projectsScreen";
import ContactSection from "./components/screens/contactScreen";
import HomeScreen from "./components/screens/homeScreen";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'


export default function Home() {

  const [showFuzzyBackground, setShowFuzzyBackground] = useState(false);
  const parallax = useRef<IParallax>(null!);
  const divRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFuzzyBackground(true);
      
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

 
  function scrollReference() {
    const rect = divRef.current?.getBoundingClientRect();
    if (rect) {
      return Math.abs(rect.y)
    }else{
      return 0
    }
  }

 

  return (
    <div className=" ">
      <TurnOnEffect />
      <FuzzyBackground delay={2.6}>
        <div className="w-full h-full ">
          <Parallax className="hide-scroll-bar" ref={parallax} pages={5} style={{ top: "0", left: "0" }}>
            <ParallaxLayer offset={0} speed={0}>
              <HomeScreen />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0}>
                <div ref={divRef}>
                  <ProjectsScreen scrollReference={scrollReference} />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={0}>
              <ContactSection />
            </ParallaxLayer>
          </Parallax>
        </div>
      </FuzzyBackground>
      
    </div>
  );
}
