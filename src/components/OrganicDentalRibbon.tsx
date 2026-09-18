import React from 'react';
import { motion } from 'motion/react';

interface OrganicDentalRibbonProps {
  className?: string;
  variant?: 'gold' | 'champagne' | 'white' | 'cyan' | 'blue';
}

export const OrganicDentalRibbon: React.FC<OrganicDentalRibbonProps> = ({
  className = '',
  variant = 'gold'
}) => {
  const getGradients = () => {
    switch (variant) {
      case 'gold':
        return {
          start: '#F3E5AB',
          mid: '#D4AF37',
          stop: '#997328',
          opacity: 0.35,
        };
      case 'champagne':
        return {
          start: '#FFFFFF',
          mid: '#F3E5AB',
          stop: '#C5A059',
          opacity: 0.30,
        };
      case 'white':
        return {
          start: '#FFFFFF',
          mid: '#FAF9F6',
          stop: '#F3E5AB',
          opacity: 0.45,
        };
      default:
        return {
          start: '#F3E5AB',
          mid: '#D4AF37',
          stop: '#997328',
          opacity: 0.35,
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
      className={`absolute pointer-events-none select-none z-0 ${className}`}
    >
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_15px_25px_rgba(212,175,55,0.15)]"
      >
        <defs>
          <linearGradient id={`ribbonGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={grad.start} stopOpacity={grad.opacity} />
            <stop offset="45%" stopColor={grad.mid} stopOpacity={grad.opacity * 1.2} />
            <stop offset="100%" stopColor={grad.stop} stopOpacity={grad.opacity * 0.7} />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 3D Organic Smooth Fluid Ribbon Ribbon Track */}
        <path
          d="M 50 320 C 180 180, 260 460, 420 280 C 580 100, 680 420, 780 240 C 720 380, 560 220, 410 400 C 250 560, 150 220, 50 320 Z"
          fill={`url(#ribbonGrad-${variant})`}
          filter="url(#softGlow)"
        />

        {/* Dynamic Light Specular Edge */}
        <path
          d="M 50 320 C 180 180, 260 460, 420 280 C 580 100, 680 420, 780 240"
          stroke={grad.start}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity={0.6}
        />
      </svg>
    </motion.div>
  );
};
