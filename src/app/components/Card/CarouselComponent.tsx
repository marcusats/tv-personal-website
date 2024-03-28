import React from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CarouselComponentProps = {
    images: string[];
    pointOfInterest?: number;
    closeSpring: any; 
    link?: string;
};

const CarouselComponent = ({ images, pointOfInterest = 0, closeSpring }: CarouselComponentProps) => (
    <div className="card-image-container cursor-pointer w-full max-w-3xl mx-auto">
        <motion.div
            initial={false}
            animate={{ x: -pointOfInterest * 0.45, y: 0 }}
            transition={closeSpring}
            className="w-full h-full overflow-hidden translate-x-[50%] translate-y-[50%]"
        >
            <motion.img
                src={images[2]}
                alt={`Image of ${images[0]}`}
                className="w-full h-full object-cover"
                style={{ scale: 0.9 }}
            />
        </motion.div>
    </div>
);

export default CarouselComponent;



