import React, { useState } from 'react';
import { createWhatsAppLink, GENERAL_WA_MESSAGE } from '../data/clinicData';
import { OfficialWhatsAppLogo } from './OfficialSocialLogos';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden lg:flex fixed bottom-8 right-8 z-40 flex-col items-end gap-2 select-none">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-cyan-200/80 text-xs font-bold text-[#0A2540] flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>¡Chatea con nosotros en WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 cursor-pointer"
            aria-label="Cerrar tooltip"
          >
            ×
          </button>
        </div>
      )}

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
