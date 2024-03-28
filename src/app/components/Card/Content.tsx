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
            <span style={{ display: 'inline-block', position: 'relative', width: 24, height: 24 }}>
              <Image src="/icons/githubIcon.png" alt="GitHub" layout="fill" objectFit="cover" />
            </span>
          </a>
        )}
        {youtubeLink && (
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="inline-block">
            <span style={{ display: 'inline-block', position: 'relative', width: 24, height: 24 }}>
              <Image src="/icons/youtubeIcon.png" alt="YouTube" layout="fill" objectFit="cover" />
            </span>
          </a>
        )}
        {submissionLink && (
          <a href={submissionLink} target="_blank" rel="noopener noreferrer" className="inline-block">
            <span style={{ display: 'inline-block', position: 'relative', width: 24, height: 24 }}>
              <Image src="/icons/submissionIcon.png" alt="Submission" layout="fill" objectFit="cover" />
            </span>
          </a>
        )}
      </div>
      {/* Adjusted the text size for responsiveness */}
      <p className="text-sm md:text-base text-whitesmoke whitespace-pre-wrap justify-text">
        {text}
      </p>
    </motion.div>
  );
};

ContentComponent.displayName = 'Content';

export const Content = React.memo(ContentComponent);

