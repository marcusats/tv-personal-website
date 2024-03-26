import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import TyperEffect from "./typerEffect";
import HomeScreen from "../screens/homeScreen";

const FuzzyBackground = ({ delay = 2.6, children }: { delay?: number, children?: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="text-blue-50 relative overflow-hidden w-screen h-screen"
    >
      <FuzzyOverlay delay={delay} />
      <div className="overflow-y-scroll">
        {children}
      </div>
    </motion.div>
  );
};

const FuzzyOverlay = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ transform: "translateX(-15%) translateY(-15%)", opacity: 0.95 }}
      animate={{
        transform: "translateX(15%) translateY(15%)",
        opacity: 0.15,
      }}
      transition={{
        transform: {
          repeat: Infinity,
          duration: 0.2,
          ease: "linear",
          repeatType: "mirror",
          delay: delay,
        },
        opacity: {
          duration: 2,
          ease: "linear",
          delay: delay,
        },
      }}
      style={{
        backgroundImage: 'url("img/tv-noise.png")',
        zIndex: 9999, // Ensures it's on top in the z-index
      }}
      className="pointer-events-none absolute -inset-[200%]"
    />
  );
};
export default FuzzyBackground;
