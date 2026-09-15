import React from 'react';
import { motion } from 'motion/react';

interface OrganicDentalRibbonProps {
  className?: string;
  variant?: 'cyan' | 'blue' | 'white';
}

export const OrganicDentalRibbon: React.FC<OrganicDentalRibbonProps> = ({
  className = '',
  variant = 'cyan'
}) => {
  const getGradients = () => {
    switch (variant) {
      case 'cyan':
        return {
          start: '#00BFFF',
          mid: '#38BDF8',
          stop: '#005A9C',
          opacity: 0.28,
        };
      case 'blue':
        return {
          start: '#005A9C',
          mid: '#0084DE',
          stop: '#00BFFF',
          opacity: 0.35,
        };
      case 'white':
        return {
          start: '#FFFFFF',
          mid: '#E0F2FE',
          stop: '#BAE6FD',
          opacity: 0.4,
        };
      default:
        return {
          start: '#00BFFF',
          mid: '#38BDF8',
          stop: '#005A9C',
          opacity: 0.28,
        };
    }
  };

  const grad = getGradients();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [-8, 8, -8],
        rotate: [-1.5, 1.5, -1.5],
      }}
      transition={{
        y: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
        rotate: { repeat: Infinity, duration: 10, ease: 'easeInOut' },
        opacity: { duration: 1 },
      }}
      className={`pointer-events-none select-none absolute ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 700 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-lg"
      >
        <defs>
          <linearGradient id={`ribbonGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={grad.start} stopOpacity={grad.opacity} />
            <stop offset="50%" stopColor={grad.mid} stopOpacity={grad.opacity * 0.8} />
            <stop offset="100%" stopColor={grad.stop} stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`ribbonStroke-${variant}`} x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor={grad.start} stopOpacity={grad.opacity * 1.5} />
            <stop offset="100%" stopColor={grad.mid} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Dynamic primary wave ribbon */}
        <path
          d="M20 180 C 140 40, 280 220, 440 90 C 560 -10, 640 120, 680 150"
          stroke={`url(#ribbonStroke-${variant})`}
          strokeWidth="38"
          strokeLinecap="round"
          fill="none"
        />

        {/* Secondary inner soft ribbon fill */}
        <path
          d="M50 190 C 160 70, 290 200, 430 110 C 530 40, 610 130, 650 160"
          stroke={`url(#ribbonGrad-${variant})`}
          strokeWidth="60"
          strokeLinecap="round"
          fill="none"
        />

        {/* Delicate light accent trail */}
        <path
          d="M80 200 C 190 90, 310 180, 420 120 C 500 70, 590 140, 620 170"
          stroke={grad.start}
          strokeWidth="2.5"
          strokeDasharray="8 8"
          strokeOpacity="0.55"
          fill="none"
        />
      </svg>
    </motion.div>
  );
};
