import React from 'react';

interface CurvedSectionDividerProps {
  position?: 'top' | 'bottom';
  fillColor?: string; // e.g. '#F8FAFC', '#07182B', '#FFFFFF'
  className?: string;
  variant?: 'wave1' | 'wave2' | 'smoothCurve' | 'deepCurve';
}

export const CurvedSectionDivider: React.FC<CurvedSectionDividerProps> = ({
  position = 'bottom',
  fillColor = '#F8FAFC',
  className = '',
  variant = 'smoothCurve',
}) => {
  const isTop = position === 'top';

  const renderPath = () => {
    if (isTop) {
      switch (variant) {
        case 'wave1':
          return 'M0,0 L0,32 C360,96 720,-16 1080,48 C1260,80 1380,64 1440,48 L1440,0 Z';
        case 'wave2':
          return 'M0,0 L0,48 C320,12 640,84 960,36 C1200,-4 1360,56 1440,32 L1440,0 Z';
        case 'deepCurve':
          return 'M0,0 L0,0 C480,96 960,96 1440,0 L1440,0 Z';
        case 'smoothCurve':
        default:
          return 'M0,0 L0,24 C480,88 960,88 1440,24 L1440,0 Z';
      }
    }

    switch (variant) {
      case 'wave1':
        return 'M0,32 C360,96 720,-16 1080,48 C1260,80 1380,64 1440,48 L1440,96 L0,96 Z';
      case 'wave2':
        return 'M0,48 C320,12 640,84 960,36 C1200,-4 1360,56 1440,32 L1440,96 L0,96 Z';
      case 'deepCurve':
        return 'M0,0 C480,96 960,96 1440,0 L1440,96 L0,96 Z';
      case 'smoothCurve':
      default:
        return 'M0,24 C480,88 960,88 1440,24 L1440,96 L0,96 Z';
    }
  };

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${
        isTop ? '-mt-[1px]' : '-mb-[1px]'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-16 lg:h-20 block"
      >
        <path d={renderPath()} fill={fillColor} />
      </svg>
    </div>
  );
};
