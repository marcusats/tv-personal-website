'use client'
import React from 'react';
import FuzzyBackground from '@/app/components/effects/fuzzyBackground';

const ResumePDFViewer = () => {
  return (

    <iframe
        src="/docs/Marcos-RESUME-2024.pdf"
        style={{ width: '100%', height: '100vh', top:"4rem" , left: 0, position: 'fixed'}}
        title="Resume"
    /> 

  );
};

export default ResumePDFViewer;
