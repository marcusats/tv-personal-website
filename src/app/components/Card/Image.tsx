import React from "react";
import { motion, useDeprecatedInvertedScale } from "framer-motion";
import { closeSpring } from "./animations";
import CarouselComponent from "./CarouselComponent";

interface ImageProps {
  id: string;
  isSelected?: boolean;
  pointOfInterest?: number;
  backgroundColor: string;
  images: string[];
  logo: string;
  link: string;
}

export const Image = ({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor,
  logo,
  images,
  link,
}: ImageProps) => {
    const inverted = useDeprecatedInvertedScale();
  
    return (
      <motion.div
  className="card-image-container"
  style={{ 
    ...inverted, 
    ...(!isSelected ? {
      backgroundImage: `url(${logo})`, 
      backgroundSize: '100% 100%', // Logo grows with the div
      backgroundPosition: 'center center', 
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      originX: 0.5, 
      originY: 0.5,
      scale: 1.17,
    } : {}),
  }}
>
  {isSelected ? (
    <CarouselComponent images={images} pointOfInterest={pointOfInterest} closeSpring={closeSpring} link={link} />
  ) : null}
</motion.div>

    );
};
