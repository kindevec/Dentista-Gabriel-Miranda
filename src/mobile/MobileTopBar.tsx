import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, AlertCircle } from 'lucide-react';
import { Logo } from '../components/Logo';
import { createWhatsAppLink, EMERGENCY_WA_MESSAGE, CLINIC_PHONE_RAW } from '../data/clinicData';

interface MobileTopBarProps {
  onOpenEmergency?: () => void;
}

export const MobileTopBar: React.FC<MobileTopBarProps> = ({ onOpenEmergency }) => {
  const handleCall = () => {
    window.location.href = `tel:+${CLINIC_PHONE_RAW}`;
  };

  const handleEmergencyClick = () => {
    if (onOpenEmergency) {
      onOpenEmergency();
    } else {
      window.open(createWhatsAppLink(EMERGENCY_WA_MESSAGE), '_blank');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F5]/92 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-[0_2px_15px_rgba(132,99,30,0.06)] transition-all duration-200">
      <div className="px-4 py-2.5 flex items-center justify-between gap-2 max-w-lg mx-auto">
        {/* Left: Official Clinic Brand */}
        <a href="#inicio" className="flex items-center gap-2 group active:opacity-85 transition-opacity">
          <Logo variant="light" size="sm" showText={true} />
        </a>

        {/* Right Actions: Live Status & Fast Urgencia */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Status pill */}
          <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-[10.5px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Abierto Hoy</span>
          </div>

          {/* Quick Call Direct Action */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={handleCall}
            aria-label="Llamar a la clínica"
            className="w-8 h-8 rounded-full bg-white border border-[#D4AF37]/35 text-[#84631E] flex items-center justify-center shadow-2xs hover:bg-[#FAF7EE] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
          </motion.button>

          {/* Quick Urgencia Dental CTA */}
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={handleEmergencyClick}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs font-bold shadow-xs shadow-red-600/20 active:opacity-90"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold">SOS</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
};
