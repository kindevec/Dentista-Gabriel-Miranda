import React from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import {
  createWhatsAppLink,
  BOOKING_WA_MESSAGE,
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
            Odontología de Autor • La Maná
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-[2.25rem] xs:text-[2.5rem] font-black text-[#0D0D0D] tracking-tight leading-[1.12] mb-3"
        >
          El arte de<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#84631E]">
            sonreír con confianza
          </span>
        </motion.h1>

        {/* Clinical Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-xs xs:text-sm text-stone-600 font-normal leading-relaxed max-w-xs mb-5 text-justify"
        >
          Dar el paso hacia una nueva sonrisa es fácil cuando estás con el experto indicado. El Dr. Gabriel Miranda te guiará con maestría clínica y empatía hacia resultados naturales y duraderos. Descubre una odontología pensada exclusivamente para ti.
        </motion.p>

        {/* Doctor Photo with Golden Halos & Pedestal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center w-full my-3 max-w-[280px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/25 to-transparent blur-2xl -z-10" />
          
          <div className="relative z-10 w-full flex justify-center -mb-5">
            <img
              alt="Dr. Gabriel Miranda - Odontólogo Especialista"
              width={420}
              height={500}
              className="w-full h-auto max-h-[320px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(132,99,30,0.18)]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              src="/dr-gabriel-miranda.webp"
            />
          </div>

          {/* Cajita de Autor Doradita y Redondeada en la parte inferior */}
          <div className="relative z-20 w-[92%] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] border border-[#D4AF37]/70 rounded-3xl sm:rounded-full py-2.5 px-4 shadow-xl shadow-amber-950/20 text-center">
            <h3 className="text-sm font-black text-[#0B0B0B] tracking-tight leading-tight">
              Dr. Gabriel Miranda
            </h3>
            <p className="text-[10px] font-bold text-[#42310B] uppercase tracking-wider mt-0.5">
              Rehabilitación Oral y Estética
            </p>
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
            <span>Agendar Cita</span>
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

        {/* Operating hours & location */}
        <div className="space-y-1 text-center text-[11px] text-stone-500 mt-4">
          <p>{CLINIC_HOURS}</p>
          <p className="font-semibold text-stone-700">Av. 19 de Mayo (Ruta E30) y Velasco Ibarra • Edif. Color Gris, PB (Junto a IntegralMedic)</p>
        </div>
      </div>
    </section>
  );
};
