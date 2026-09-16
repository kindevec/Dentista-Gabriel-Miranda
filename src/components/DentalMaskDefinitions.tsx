import React from 'react';

/**
 * Global SVG ClipPath Mask Definitions for Dental & Clinical Aesthetics
 * Using clipPathUnits="objectBoundingBox" ensures all shapes scale proportionally
 * to any container element regardless of pixel dimensions.
 */
export const DentalMaskDefinitions: React.FC = () => {
  return (
    <svg
      aria-hidden="true"
      className="absolute w-0 h-0 overflow-hidden pointer-events-none"
      style={{ position: 'absolute', width: 0, height: 0 }}
    >
      <defs>
        {/* 1. Architectural Arch Portal Mask (Pórtico Arquitectónico con Cúpula Curva) */}
        <clipPath id="mask-arch-portal" clipPathUnits="objectBoundingBox">
          <path d="M 0,0.30 C 0,0.08 0.16,0 0.5,0 C 0.84,0 1,0.08 1,0.30 L 1,0.92 C 1,0.97 0.94,1 0.88,1 L 0.12,1 C 0.06,1 0,0.97 0,0.92 Z" />
        </clipPath>

        {/* 2. Organic Tooth Enamel Pebble Mask (Silueta de Esmalte Orgánico) */}
        <clipPath id="mask-enamel-pebble" clipPathUnits="objectBoundingBox">
          <path d="M 0.22,0.02 C 0.65,-0.04 0.98,0.12 0.98,0.45 C 0.98,0.82 0.82,0.98 0.48,0.99 C 0.18,1 0,0.82 0,0.48 C 0,0.18 0.08,0.04 0.22,0.02 Z" />
        </clipPath>

        {/* 3. Wave Header Cutout Mask (Máscara de Ola para Tarjetas Clínicas) */}
        <clipPath id="mask-wave-cut" clipPathUnits="objectBoundingBox">
          <path d="M 0,0.12 C 0,0.05 0.05,0 0.12,0 L 0.88,0 C 0.95,0 1,0.05 1,0.12 L 1,0.82 C 0.74,0.94 0.28,0.72 0,0.86 Z" />
        </clipPath>

        {/* 4. Capsule Lens Mask (Cápsula de Enfoque Clínico) */}
        <clipPath id="mask-capsule-lens" clipPathUnits="objectBoundingBox">
          <path d="M 0.24,0 L 0.76,0 C 0.90,0 1,0.22 1,0.5 C 1,0.78 0.90,1 0.76,1 L 0.24,1 C 0.10,1 0,0.78 0,0.5 C 0,0.22 0.10,0 0.24,0 Z" />
        </clipPath>

        {/* 5. Fluid Squircle Mask (Burbuja Orgánica Fluida) */}
        <clipPath id="mask-fluid-squircle" clipPathUnits="objectBoundingBox">
          <path d="M 0.22,0.04 C 0.55,-0.04 0.88,0.04 0.96,0.30 C 1.04,0.60 0.94,0.92 0.68,0.98 C 0.38,1.02 0.08,0.88 0.02,0.60 C -0.04,0.32 0.06,0.08 0.22,0.04 Z" />
        </clipPath>
      </defs>
    </svg>
  );
};
