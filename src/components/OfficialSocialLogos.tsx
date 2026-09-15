import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
}

/**
 * Logotipo oficial completo de WhatsApp
 * Conforme a las directrices de marca oficiales de Meta/WhatsApp.
 */
export const OfficialWhatsAppLogo: React.FC<LogoProps> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* WhatsApp Official Green Circle Base */}
    <circle cx="24" cy="24" r="23" fill="#25D366" />
    {/* Subtle Inner Glow */}
    <circle cx="24" cy="24" r="23" stroke="#22bf5b" strokeWidth="1" />
    {/* Official Phone Handset & Bubble Contour */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 8.5C15.44 8.5 8.5 15.44 8.5 24C8.5 26.83 9.27 29.54 10.73 31.9L9.25 37.5L15.02 36.05C17.29 37.38 19.89 38.08 22.56 38.08H22.57C31.13 38.08 38.08 31.14 38.08 22.58C38.08 18.43 36.46 14.52 33.53 11.58C30.59 8.64 26.69 8.5 24 8.5ZM24 35.5C21.68 35.5 19.41 34.88 17.43 33.7L17.02 33.46L12.92 34.49L13.99 30.49L13.73 30.08C12.44 28.02 11.75 25.62 11.75 23.14C11.75 16.38 17.25 10.88 24.01 10.88C27.28 10.88 30.36 12.16 32.67 14.47C34.98 16.78 36.25 19.86 36.25 23.13C36.25 29.89 30.76 35.5 24 35.5ZM30.73 26.88C30.36 26.7 28.55 25.81 28.21 25.69C27.87 25.56 27.63 25.5 27.38 25.87C27.13 26.24 26.43 27.06 26.22 27.31C26.01 27.56 25.79 27.59 25.42 27.4C25.05 27.22 23.86 26.83 22.45 25.57C21.35 24.59 20.61 23.38 20.39 23.01C20.18 22.64 20.37 22.44 20.55 22.25C20.72 22.08 20.92 21.82 21.11 21.6C21.3 21.38 21.36 21.22 21.48 20.98C21.6 20.73 21.54 20.51 21.45 20.33C21.36 20.15 20.62 18.33 20.31 17.59C20.01 16.87 19.7 16.97 19.48 16.96H18.77C18.52 16.96 18.12 17.05 17.78 17.42C17.44 17.79 16.48 18.69 16.48 20.52C16.48 22.35 17.81 24.12 17.99 24.36C18.18 24.61 20.6 28.34 24.3 29.94C25.18 30.32 25.87 30.55 26.4 30.72C27.28 31 28.08 30.96 28.71 30.87C29.42 30.76 30.89 29.98 31.19 29.13C31.5 28.27 31.5 27.53 31.41 27.38C31.31 27.22 31.1 27.07 30.73 26.88Z"
      fill="white"
    />
  </svg>
);

/**
 * Isotipo / Icono vectorial blanco o coloreable de WhatsApp
 * Ideal para botones de acción directa.
 */
export const WhatsAppIcon: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.004 2C6.479 2 2 6.478 2 12.004c0 1.868.517 3.618 1.416 5.122L2.057 22l5.023-1.317a9.96 9.96 0 0 0 4.924 1.321h.004c5.525 0 10.004-4.478 10.004-10.004C22.008 6.478 17.529 2 12.004 2zm5.793 14.156c-.244.685-1.42 1.312-1.956 1.393-.509.077-1.15.109-1.853-.117-.428-.137-.98-.321-1.688-.626-2.981-1.287-4.927-4.288-5.076-4.486-.149-.198-1.213-1.615-1.213-3.074 0-1.463.768-2.181 1.04-2.479.272-.298.594-.372.792-.372.198 0 .396.002.57.01.182.009.427-.069.669.51.247.595.841 2.058.916 2.206.075.149.124.323.025.521-.099.199-.149.323-.3.495-.149.174-.312.388-.446.521-.148.148-.303.309-.13.606.173.298.77 1.271 1.653 2.059 1.135 1.013 2.093 1.326 2.39 1.475.297.149.471.124.644-.074.173-.198.743-.868.941-1.165.198-.298.396-.248.669-.149.273.099 1.734.818 2.031.967.298.149.496.223.57.347.075.124.075.719-.173 1.414z" />
  </svg>
);

/**
 * Logotipo oficial completo de Instagram
 * Conforme a las directrices de marca oficiales de Meta/Instagram.
 */
export const OfficialInstagramLogo: React.FC<LogoProps> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="igOfficialRad" cx="20%" cy="110%" r="130%">
        <stop offset="0%" stopColor="#FFD600" />
        <stop offset="10%" stopColor="#FF7A00" />
        <stop offset="50%" stopColor="#FF0069" />
        <stop offset="70%" stopColor="#D300C5" />
        <stop offset="100%" stopColor="#7638FA" />
      </radialGradient>
    </defs>
    {/* Rounded Squircle Container */}
    <rect width="48" height="48" rx="14" fill="url(#igOfficialRad)" />
    {/* Inner White Camera Shape */}
    <rect
      x="10"
      y="10"
      width="28"
      height="28"
      rx="7.5"
      stroke="white"
      strokeWidth="3"
    />
    <circle cx="24" cy="24" r="6.5" stroke="white" strokeWidth="3" />
    <circle cx="31.5" cy="16.5" r="2" fill="white" />
  </svg>
);

/**
 * Logotipo oficial completo de Facebook
 * Conforme a las directrices de marca oficiales de Meta/Facebook.
 */
export const OfficialFacebookLogo: React.FC<LogoProps> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Facebook Blue Circle */}
    <circle cx="24" cy="24" r="23" fill="#1877F2" />
    {/* Official 'f' Silhouette */}
    <path
      d="M32.08 24.89L32.88 19.68H27.88V16.3C27.88 14.88 28.58 13.49 30.82 13.49H33.11V9.06C33.11 9.06 31.03 8.7 29.04 8.7C24.89 8.7 22.18 11.21 22.18 15.77V19.68H17.6V24.89H22.18V37.49C23.1 37.63 24.04 37.7 25 37.7C25.96 37.7 26.9 37.63 27.82 37.49V24.89H32.08Z"
      fill="white"
    />
  </svg>
);
