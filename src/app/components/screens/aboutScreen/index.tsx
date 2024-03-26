'use client';
import React, { useEffect, useRef } from "react";
import { Card } from "../../../components/Card";
import { Projects } from "../../Projects";

interface ListProps {
  idSelected: string;
  setIdSelected: React.Dispatch<React.SetStateAction<string>>;
}

const List: React.FC<ListProps> = ({ idSelected, setIdSelected }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <ul className="card-list">
        {Projects.map((card) => (
          <Card
            key={card.id}
            isSelected={idSelected === card.id}
            setIdSelected={setIdSelected}
            {...card}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              setIdSelected(card.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

const AboutScreen: React.FC = () => {
  const [idSelected, setIdSelected] = React.useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIdSelected("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [containerRef]);

  return (
    <div ref={containerRef}  onClick={()=>{setIdSelected("")}} className="flex-row  w-screen justify-center items-center p-9  ">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Projects!
        </h1>
        <p className="text-lg text-gray-500 mt-2">A showcase of my journey and accomplishments.</p>
      </div>
      <div className="max-w-6xl  mx-auto">
        <List idSelected={idSelected} setIdSelected={setIdSelected} />
      </div>
    </div>
  );
};

  
export default AboutScreen;
