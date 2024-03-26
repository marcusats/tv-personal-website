import * as React from "react";
import { motion, useDeprecatedInvertedScale } from "framer-motion";
import { closeSpring, openSpring } from "./animations";

export const Title = ({ title, category, isSelected }: { title: string; category: string; isSelected?: boolean }) => {
  const inverted = useDeprecatedInvertedScale();
  const x = isSelected ? 30 : 15;
  const y = x;

  return (
    <motion.div
      className="title-container"
      initial={false}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
      transformTemplate={scaleTranslate}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      {isSelected ? (
        <>
          <h1 className="text-2xl font-bold text-white">{category}</h1>
          <h2 className="text-xs font-bold text-white">{title}</h2>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400 shine">{category}</h1>
          <h2 className=" text-sm text-transparent font-bold bg-clip-text bg-gradient-to-r from-gray-900 to-gray-900 shine">{title}</h2>
        </>
      )}
      
    </motion.div>
  );
};

/**
 * `transform` is order-dependent, so if you scale(0.5) before translateX(100px),
 * the visual translate will only be 50px.
 *
 * The intuitive pattern is to translate before doing things like scale and
 * rotate that will affect the coordinate space. So Framer Motion takes an
 * opinion on that and allows you to animate them
 * individually without having to write a whole transform string.
 *
 * However in this component we're doing something novel by inverting
 * the scale of the parent component. Because of this we want to translate
 * through scaled coordinate space, and can use the transformTemplate prop to do so.
 */
const scaleTranslate = ({ x, y, scaleX, scaleY }: { x: number; y: number; scaleX: number; scaleY: number }) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;
