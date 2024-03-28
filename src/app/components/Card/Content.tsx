import * as React from 'react';
import { motion, useDeprecatedInvertedScale } from 'framer-motion';
import Image from 'next/image';

interface ContentProps {
  text: string;
  githubLink: string;
  submissionLink: string;
  youtubeLink: string; 
}

const ContentComponent: React.FC<ContentProps> = ({ text, githubLink, submissionLink, youtubeLink }) => {
  const inverted = useDeprecatedInvertedScale();
  return (
    <motion.div className="content-container" style={{ ...inverted, originY: 0, originX: 0 }}>
      <div className="flex items-start mb-5 ml-2 space-x-2">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Image src="/icons/githubIcon.png" alt="GitHub" width={24} height={24} />
          </a>
        )}
        {youtubeLink && (
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Image src="/icons/youtubeIcon.png" alt="YouTube" width={24} height={24} />
          </a>
        )}
        {submissionLink && (
          <a href={submissionLink} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Image src="/icons/submissionIcon.png" alt="Submission" width={24} height={24} />
          </a>
        )}
      </div>
      <p style={{ color: 'whitesmoke', whiteSpace: 'pre-wrap', textAlign: 'justify' }}>{text}</p>
    </motion.div>
  );
};

ContentComponent.displayName = 'Content'; 

export const Content = React.memo(ContentComponent);

