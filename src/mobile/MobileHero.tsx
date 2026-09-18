import React from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  CreditCard,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import {
  createWhatsAppLink,
  BOOKING_WA_MESSAGE,
  DOCTOR_NAME,
  CLINIC_HOURS
} from '../data/clinicData';

export interface MobileHeroProps {
  onOpenBooking?: () => void;
  onOpenEmergency?: () => void;
}

export const MobileHero: React.FC<MobileHeroProps> = ({
  onOpenBooking,
}) => {
  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById('contacto');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open(createWhatsAppLink(BOOKING_WA_MESSAGE), '_blank');
      }
    }
  };

  const handleServicesClick = () => {
    const el = document.getElementById('servicios');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92dvh] bg-gradient-to-b from-[#FDFCF8] via-[#FAF9F5] to-[#FAF9F5] overflow-hidden flex flex-col justify-center px-4 pt-6 pb-12"
    >
      {/* Ambient Halo Background Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-[#D4AF37]/15 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-gradient-to-tr from-[#FAF7EE] to-[#D4AF37]/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center">
        {/* Author Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/35 shadow-2xs mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#84631E]" />
          <span className="text-[11px] font-black uppercase tracking-wider text-[#84631E]">
            Odontología de Autor • Quito
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-[2.25rem] xs:text-[2.5rem] font-black text-[#0D0D0D] tracking-tight leading-[1.12] mb-3"
        >
          Tu Sonrisa,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#84631E]">
            Nuestra Especialidad
          </span>
        </motion.h1>

        {/* Concise Clinical Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-xs xs:text-sm text-stone-600 font-normal leading-relaxed max-w-xs mb-5"
        >
          Rehabilitación oral, diseño de sonrisa y precisión digital con el <strong>{DOCTOR_NAME}</strong>.
        </motion.p>

        {/* 3D Tooth Interactive Sculpture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex items-center justify-center w-full my-2 h-64 xs:h-72"
        >
          {/* Animated concentric decorative rings */}
          <motion.div
            animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-44 h-44 rounded-full border-2 border-[#D4AF37]/35 pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1.02, 0.92, 1.02], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute w-56 h-56 rounded-full border border-[#D4AF37]/20 pointer-events-none"
          />

          {/* Floating Tooth Image */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-48 xs:w-56 aspect-square flex items-center justify-center"
          >
            <img
              src="/hero-3d-tooth.webp"
              alt="Escultura dental 3D"
              width={260}
              height={260}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(180,140,50,0.28)]"
            />
          </motion.div>
        </motion.div>

        {/* High-Value Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-3 gap-2 w-full my-4"
        >
          <div className="flex flex-col items-center justify-center bg-white/95 border border-[#D4AF37]/25 rounded-2xl p-2.5 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#84631E] mb-1" />
            <span className="text-[11.5px] font-black text-[#0D0D0D] leading-tight">
              Valoración $15
            </span>
            <span className="text-[9.5px] text-stone-500 font-medium leading-none mt-0.5">
              Fotos + Rayos X
            </span>
          </div>

          <div className="flex flex-col items-center justify-center bg-white/95 border border-[#D4AF37]/25 rounded-2xl p-2.5 shadow-xs">
            <CreditCard className="w-4 h-4 text-[#84631E] mb-1" />
            <span className="text-[11.5px] font-black text-[#0D0D0D] leading-tight">
              Crédito Directo
            </span>
            <span className="text-[9.5px] text-stone-500 font-medium leading-none mt-0.5">
              $400 a $2,000
            </span>
          </div>

          <div className="flex flex-col items-center justify-center bg-white/95 border border-[#D4AF37]/25 rounded-2xl p-2.5 shadow-xs">
            <Clock className="w-4 h-4 text-[#84631E] mb-1" />
            <span className="text-[11.5px] font-black text-[#0D0D0D] leading-tight">
              Lun a Dom
            </span>
            <span className="text-[9.5px] text-stone-500 font-medium leading-none mt-0.5">
              9am a 7pm
            </span>
          </div>
        </motion.div>

        {/* Conversion CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col gap-2.5 w-full mt-2"
        >
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleBookingClick}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-[#0D0D0D] font-black text-sm uppercase tracking-wider shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2 border border-[#D4AF37]/50 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0D0D0D]" />
            <span>Agendar Valoración $15</span>
            <ArrowRight className="w-4 h-4 text-[#0D0D0D]" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleServicesClick}
            className="w-full py-3.5 px-6 rounded-2xl bg-white/90 border border-stone-300 text-stone-800 font-bold text-xs uppercase tracking-wider shadow-2xs hover:bg-[#FAF7EE] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Explorar Servicios y Especialidades</span>
            <span className="text-base leading-none">↓</span>
          </motion.button>
        </motion.div>

        {/* Operating hours footer reminder */}
        <p className="text-[11px] text-stone-400 mt-4">
          {CLINIC_HOURS}
        </p>
      </div>
    </section>
  );
};
