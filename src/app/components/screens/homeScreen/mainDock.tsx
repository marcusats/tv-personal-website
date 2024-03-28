import { useMotionValue, motion, useTransform, MotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

export default function MainDock() {
    return (
        <motion.div
          className="w-screen h-auto flex flex-col jusify-end pb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
            <Dock/>
        </motion.div>
    )
}

function Dock() {
    let mousex = useMotionValue(Infinity);
    
    const appIcons = [
        { img: "/icons/githubIcon.png", link: "https://github.com/marcusats" },
        { img: "/icons/mediumIcon.png", link: "https://blog.marcosalazar.xyz/" },
        { img: "/img/Marcos1.png", link: "https://marcosalazar.xyz/" },
        { img: "/icons/xIcon.png", link: "https://twitter.com/Marcsast" },
        { img: "/icons/linkedinIcon.png", link: "https://www.linkedin.com/in/marcos-aurelio-salazar-torres-mast/" },
    ];

    return (
        <div 
            onMouseMove={(e)=>{
                mousex.set(e.clientX);
                console.log(e.clientX, e.clientY);
            }}
            onMouseLeave={()=>{
                mousex.set(Infinity);
            }}
            className="w-3/4 justify-between mx-auto flex h-16 items-end gap-4 rounded-2xl px-4 pb-3">
                {
                    appIcons.map((icon, index) => (
                        <AppIcon mousex={mousex} index={index} key={index} img={icon.img} link={icon.link} />
                    ))
                }
        </div>
    )
}

function AppIcon({mousex, index, img, link}:{mousex:MotionValue, index:number, img:string, link:string}) {
    let ref = useRef<HTMLDivElement>(null);
    let distance = useTransform(mousex, val=>{
        if(ref.current === null) return val;
        let rect = ref.current?.getBoundingClientRect() ?? {x:0, y:0};

        return val - rect.x - ref.current?.offsetWidth/2;
    });

    let widthValues = index === 2 ? [280, 320, 280] : [60, 100, 60];
    let widthSync = useTransform(distance , [-200, 0, 200], widthValues);
    let newWidth = useSpring(widthSync, {stiffness: 200, damping: 15, mass: 0.1});
    return (
        <motion.div ref={ref} style={{width:newWidth}} className="aspect-square w-10 bg-black rounded-full cursor-pointer" onClick={() => window.open(link, "_blank")}>
            <Image alt="" src={img} className={`rounded-full ${index === 2 ? "border-4" : ""}`} />
        </motion.div>
    )
}