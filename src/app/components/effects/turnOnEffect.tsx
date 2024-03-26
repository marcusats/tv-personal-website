'use client'
import { motion } from "framer-motion";
import React from "react";

const TurnOnEffect = () => {
  return (
    <motion.div
      initial={{ borderRadius: "100%", width: 10, height: 10, backgroundColor: "white" }}
      animate={{
        width: "100%", 
        height: "100%",
        borderRadius: "0%",
        opacity: 0,
      }}
      transition={{
        borderRadius: {
          duration: 0.5,
          ease: [1, 0.1, 0.73, 0.72], 
        },
        width: {
          duration: 1,
          delay: 0.5, 
          ease: [0.22, 1, 0.36, 1],
        },
        height: {
          duration: 1,
          delay: 1.5,
          ease: [0.22, 1, 0.36, 1],
        },
        opacity:{
          duration: 1,
          delay: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }

      }}
      className=" pointer-events-none fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default TurnOnEffect;
