import React from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { Logo } from '../components/Logo';

interface MobileTopBarProps {
  onOpenBooking?: () => void;
  onOpenEmergency?: () => void;
}

export const MobileTopBar: React.FC<MobileTopBarProps> = ({ onOpenBooking }) => {
  const handleBooking = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById('contacto');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F5]/92 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-[0_2px_15px_rgba(132,99,30,0.06)] transition-all duration-200">
      <div className="px-4 py-2.5 flex items-center justify-between gap-2 max-w-lg mx-auto">
        {/* Left: Official Clinic Brand */}
        <a href="#inicio" className="flex items-center gap-2 group active:opacity-85 transition-opacity">
          <Logo variant="light" size="sm" showText={true} />
        </a>

        {/* Right Action: Solo Agendar Cita con cambio de color PC */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.94 }}
          onClick={handleBooking}
          className="flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0D0D0D] font-black text-xs uppercase tracking-wider shadow-sm shadow-[#D4AF37]/25 border border-[#D4AF37]/50 cursor-pointer active:opacity-90 transition-all duration-300 shrink-0"
        >
          <Calendar className="w-3.5 h-3.5 text-[#0D0D0D]" />
          <span>Agendar Cita</span>
        </motion.button>
      </div>
    </header>
  );
};
