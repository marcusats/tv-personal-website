import React, { useState, useEffect, useRef } from "react";
import parse from "html-react-parser"; 

export default function TyperEffect({ text, typingSpeed = 80 }: { text: string, typingSpeed?: number }) {
  const [displayedContent, setDisplayedContent] = useState("");
  const timerIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let currentIndex = 0; 

    const typeText = () => {
      if (currentIndex < text.length) {
        let charToAdd = text[currentIndex];
        if (charToAdd === "<") {

          const tagCloseIndex = text.indexOf(">", currentIndex);
          if (tagCloseIndex !== -1) {
            charToAdd = text.substring(currentIndex, tagCloseIndex + 1);
            currentIndex = tagCloseIndex; 
          }
        }
        setDisplayedContent((prev) => prev + charToAdd);
        currentIndex++; 
        timerIdRef.current = setTimeout(typeText, typingSpeed); 
      }
    };

    typeText(); 

    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, [text, typingSpeed]); 

  return (
    <div className="flex justify-start items-start ">
      {parse(displayedContent)}
    </div>
  ); 
}
