import React from 'react';
import { createWhatsAppLink, GENERAL_WA_MESSAGE } from '../data/clinicData';
import { OfficialWhatsAppLogo } from './OfficialSocialLogos';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="hidden lg:flex fixed bottom-8 right-8 z-40 select-none">

      {/* Floating Button with Official WhatsApp Logo */}
      <a
        href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-halo-whatsapp cursor-pointer group flex items-center justify-center"
        aria-label="Contactar por WhatsApp Oficial"
      >
        <OfficialWhatsAppLogo className="w-14 h-14 drop-shadow-md group-hover:scale-105 transition-transform" />
      </a>
    </div>
  );
};
