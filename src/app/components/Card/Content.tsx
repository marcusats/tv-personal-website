import * as React from "react";
import { motion, useDeprecatedInvertedScale } from "framer-motion";

interface ContentProps {
  text: string;
  githubLink: string;
  submissionLink: string;
  youtubeLink: string; // Added YouTube link to the interface
}

export const Content = React.memo<ContentProps>(({ text, githubLink, submissionLink, youtubeLink }) => {

  const inverted = useDeprecatedInvertedScale();
  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      <div className="flex items-start mb-5 ml-2 space-x-2 ">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src="/icons/githubIcon.png" alt="GitHub" className="w-6 h-6" />
          </a>
        )}
        {youtubeLink && (
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
            <img src="/icons/youtubeIcon.png" alt="YouTube" className="w-6 h-6" />
          </a>
        )}
        {submissionLink && (
          <a href={submissionLink} target="_blank" rel="noopener noreferrer">
            <img src="/icons/submissionIcon.png" alt="Submission" className="w-6 h-6" />
          </a>
        )}
        
      </div>
      <p style={{color:"whitesmoke", whiteSpace: "pre-wrap", textAlign: "justify" }}>
        {text}
      </p>
    </motion.div>
  );
});
