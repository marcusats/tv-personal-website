import React from "react";
import AboutScreen from "../components/screens/aboutScreen";
import FuzzyBackground from "../components/effects/fuzzyBackground";


const AboutPage = () => {
  return (
    <div className="container w-full h-full">
        <FuzzyBackground 
            children={<AboutScreen />}
            delay={0}
        />
    </div>
  );
};

export default AboutPage;
