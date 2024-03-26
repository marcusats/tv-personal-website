'use client'
import * as React from "react";
import { memo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

import { useInvertedBorderRadius } from "../utils/use-inverted-border-radius";
import { CardData } from "../types/Card";
import { Content } from "./Content";
import { Title } from "./Title";
import { Image } from "./Image";
import { openSpring, closeSpring } from "./animations";
import { useScrollConstraints } from "../utils/use-scroll-constraints";
import { useWheelScroll } from "../utils/use-wheel-scroll";


interface Props extends CardData {
  isSelected: boolean;
  history?: {
    push: (route: string) => void;
  };
  onClick?: (e: any) => void;
  setIdSelected: React.Dispatch<React.SetStateAction<string>>;
}


const dismissDistance = 150;

export const Card = memo(
  ({
    isSelected,
    setIdSelected,
    id,
    title,
    category,
    pointOfInterest,
    backgroundColor,
    description,
    images,
    logo,
    link,
    submission,
    repo,
    onClick,
  }: Props) => {
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);
    const x = useMotionValue(0);

    const inverted = useInvertedBorderRadius(20);

    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkSwipeToDismiss() {
      if(y.get() > dismissDistance){
        setIdSelected("");
        y.set(0);
        x.set(0);
      };
    }

    function checkZIndex(latest: any) {
      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0);
      }
    }

    React.useEffect(() => {
      if (!isSelected) {
        y.set(0);
        zIndex.set(0);
        x.set(0);
      }
    }, [isSelected, y]);


    const containerRef = useRef(null);
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      isSelected
    );

    return (
      <li ref={containerRef} className={`card`}>
        <div className={`card-content-container ${isSelected && "open"}`} onClick={onClick}>
          <motion.div
            ref={cardRef}
            className="card-content"
            style={{ ...inverted, zIndex, y }}
            layout
            transition={isSelected ? openSpring : closeSpring}
            drag={false}
            onUpdate={checkZIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

          >
            <Image
              id={id}
              pointOfInterest={pointOfInterest}
              backgroundColor={backgroundColor}
              isSelected={isSelected}
              images={images}
              logo={logo}
              link={link}
            />
            <Title title={title} category={category} isSelected={isSelected} />
            {isSelected ? <div onClick={(e) => { e.stopPropagation(); setIdSelected(""); }} className="absolute top-3 right-4 bg-black bg-opacity-50 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer">X</div> : null}
            <Content text={description} githubLink={repo as string} submissionLink={submission as string} youtubeLink={link} />
          </motion.div>
        </div>
      </li>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);

