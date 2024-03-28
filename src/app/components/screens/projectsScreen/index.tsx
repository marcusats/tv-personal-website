'use client';
import React, { useEffect, useRef } from "react";
import { Card } from "../../Card";
import { Projects } from "../../Projects";
import Reveal from "../../effects/reveal";


interface ListProps {
  idSelected: string;
  setIdSelected: React.Dispatch<React.SetStateAction<string>>;
  scrollReference: () => number;
}
interface ProjectsScreenProps{
  scrollReference: () => number;
}

const List: React.FC<ListProps> = ({ idSelected, setIdSelected, scrollReference }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <ul className="card-list">
        {Projects.map((card) => (
          <Card
            scrollReference={scrollReference}
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

const ProjectsScreen: React.FC<ProjectsScreenProps>= ({ scrollReference} ) => {
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
      <Reveal width="100%">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-800 to-pink-900">
            My Projects!
          </h1>
          <p className="text-lg text-gray-500 mt-2">A showcase of my journey and accomplishments.</p>
        </div>
      </Reveal>
      <div className="max-w-6xl  mx-auto">
        <List  scrollReference={scrollReference} idSelected={idSelected} setIdSelected={setIdSelected} />
      </div>
    </div>
  );
};

  
export default ProjectsScreen;
