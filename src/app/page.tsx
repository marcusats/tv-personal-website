'use client'

import React, { useState, useEffect, useRef } from "react";
import TurnOnEffect from "./components/effects/turnOnEffect";
import FuzzyBackground from "./components/effects/fuzzyBackground";
import ProjectsScreen from "./components/screens/projectsScreen";
import ContactSection from "./components/screens/contactScreen";
import HomeScreen from "./components/screens/homeScreen";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);


}

function Section({ children }: { children: React.ReactNode;}) {
  
  return (
    <section>
      <div >
        {children}
      </div>
    </section>
  );
}


export default function Home() {


  const divRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


 
  function scrollReference() {
    const rect = divRef.current?.getBoundingClientRect();
    
    if (rect) {
      return Math.abs(rect.y)
    }else{
      return 0
    }
  }
  
  let stages =  [<HomeScreen />, <div ref={divRef}><ProjectsScreen scrollReference={scrollReference} /></div>,<ContactSection />]

 

  return (
    <div className="">
      <TurnOnEffect />
      <FuzzyBackground delay={2.6}>
        <div ref={scrollRef} className="w-screen h-screen overflow-x-hidden overflow-y-scroll">
          {stages.map((stage, index) => (
            <Section key={index}>
              {stage}
            </Section>
          ))}
        </div>
      </FuzzyBackground>
    </div>
  );
}



