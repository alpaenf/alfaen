'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
  flourish?: boolean;
}

export function FlourishText({ text, className = '' }: { text: string; className?: string }) {
  if (!text || typeof text !== 'string') return <>{text}</>;

  const words = text.split(' ');

  return (
    <span className={`inline-flex flex-wrap items-baseline justify-center gap-x-4 ${className}`}>
      {words.map((word, index) => {
        if (!word) return null;
        const firstLetter = word[0];
        const restOfWord = word.slice(1);
        const isCapital = /^[A-Z]/.test(firstLetter);

        if (isCapital) {
          return (
            <span key={index} className="inline-flex items-baseline whitespace-nowrap">
              <span className="font-script text-[1.55em] font-normal leading-none select-none inline-block align-baseline -mb-1 transform scale-105 pr-0.5">
                {firstLetter}
              </span>
              <span className="font-bold tracking-tight text-[0.85em] -ml-0.5">
                {restOfWord}
              </span>
            </span>
          );
        }

        return (
          <span key={index} className="inline-block font-bold tracking-tight text-[0.85em]">
            {word}
          </span>
        );
      })}
    </span>
  );
}

export default function SectionHeading({ 
  children, 
  title, 
  className = '', 
  flourish = true 
}: SectionHeadingProps) {
  const content = children ?? title;

  const renderContent = () => {
    if (flourish && typeof content === 'string') {
      return <FlourishText text={content} />;
    }
    return content;
  };

  return (
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-slate-900 dark:text-slate-100 ${className}`}
    >
      {renderContent()}
    </motion.h2>
  );
}