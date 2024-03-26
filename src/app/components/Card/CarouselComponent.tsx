import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CarouselComponentProps = {
    images: string[];
    pointOfInterest?: number;
    closeSpring: any; 
    link?: string;
};

const CarouselComponent = ({ images, pointOfInterest = 0, closeSpring, link }: CarouselComponentProps) => (
    <motion.div  className="card-image-container cursor-pointer max-w-3xl min-w-xl" >
        <motion.img
            src={images[2]}
            alt={`Image of ${images[0]}`}
            initial={false}
            animate={{ x: -pointOfInterest/2, y: 0 }}
            transition={closeSpring}
            className="object-cover object-center "
            style={{ scale: 0.9}}
        />
    </motion.div>
);

export default CarouselComponent;
