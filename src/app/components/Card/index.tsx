'use client'
import  React,{ useState} from "react";
import { memo, useRef } from "react";
import { motion, useMotionValue, useInView, useAnimation} from "framer-motion";
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
  scrollReference: () => number;
}


const dismissDistance = 100;

const CardComponent = 
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
    scrollReference,
    onClick,
  }: Props) => {
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);
    const x = useMotionValue(0);
    const [topPosition, setTopPosition] = useState(0);



    const inverted = useInvertedBorderRadius(20);

    const cardRef = useRef<HTMLDivElement>(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    const isInView = useInView(cardRef,{once:true});

    const mainControls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    function checkSwipeToDismiss() {
      if(y.get() > dismissDistance){
        setIdSelected("");
        y.set(0);
        x.set(0);
      };
    }

    function findRelativePositionToViewportCenter() {
    
      const viewportCenterY = window.innerHeight / 2;
      const reference = scrollReference();
      
  
      return { top: viewportCenterY + reference};
    }



    

    function checkZIndex(latest: any) {
      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0);
      }
    }
    React.useEffect(() => {
      if (isSelected) {
        
        console.log(`y: ${y.get()}`);
      }
    }, [y, isSelected]);

    React.useEffect(() => {
      if (!isSelected) {
        y.set(0);
        zIndex.set(0);
        x.set(0);
      }
      
    }, [isSelected, y]);
    
    React.useEffect(() => {
      if (isSelected) {
        const { top } = findRelativePositionToViewportCenter();
        let windowCenter = window.innerHeight / 2;
        setTopPosition(windowCenter + 45);

        console.log(`top: ${top}`);
        console.log(`scrollReference: ${scrollReference}`);
      }
    }, [isSelected]);


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
        
        <div className={`card-content-container ${isSelected ? "open" : "cursor-pointer"}   hover:scale-105 transition-transform duration-300 `} onClick={onClick} style={isSelected ? { top: `${topPosition}px `, left: `0`, right: "0", position: "fixed", zIndex: "1", overflow: "hidden", padding: "40px 0", transform: "translateY(-50%)" } : {}}>
          
          <motion.div
            ref={cardRef}
            className="card-content pointer-events-none"
            style={{ ...inverted, zIndex, y }}
            layout
            transition={isSelected ? openSpring : closeSpring}
            drag={false}
            onUpdate={checkZIndex}
            initial="hidden"
            animate={mainControls}
            variants={{
                hidden: { opacity: 0, y:75 },
                visible: { opacity: 1, y: 0 },
            }}

          >
            <motion.div
            className=" md:"
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
            </motion.div>
              
            <Title title={title} category={category} isSelected={isSelected} />
            {isSelected ? <div onClick={(e) => { e.stopPropagation(); setIdSelected(""); }} className="absolute top-3 right-4 bg-black bg-opacity-50 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer">X</div> : null}
            <div style={{ pointerEvents: 'auto' }}>

              <Content text={description} githubLink={repo as string} submissionLink={submission as string} youtubeLink={link} />
            </div>
            
          </motion.div>
          
        </div>
        
      </li>
      
    );
}


CardComponent.displayName = "Card"; 

export const Card = memo(CardComponent, (prev, next) => prev.isSelected === next.isSelected);

