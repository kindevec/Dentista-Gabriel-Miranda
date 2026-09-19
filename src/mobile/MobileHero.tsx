import React from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  ArrowRight
} from 'lucide-react';
import {
  createWhatsAppLink,
  BOOKING_WA_MESSAGE,
  CLINIC_HOURS
} from '../data/clinicData';
import { OrganicDentalRibbon } from '../components/OrganicDentalRibbon';

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
      className="relative min-h-[92dvh] bg-gradient-to-b from-[#FDFCF8] via-[#FAF9F5] to-[#FAF9F5] overflow-hidden flex flex-col justify-center px-4 pt-6 pb-5"
    >
      {/* Subtle Organic Golden Dental Ribbons from PC */}
      <OrganicDentalRibbon className="-top-10 -left-20 w-80 opacity-25 pointer-events-none" variant="gold" />
      <OrganicDentalRibbon className="top-1/3 -right-24 w-72 opacity-20 pointer-events-none" variant="champagne" />

      {/* Ambient Halo Background Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-[#D4AF37]/15 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-gradient-to-tr from-[#FAF7EE] to-[#D4AF37]/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center pt-2">
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
          className="text-xs xs:text-sm text-stone-600 font-normal leading-relaxed max-w-xs mb-4 text-justify"
        >
          Dar el paso hacia una nueva sonrisa es fácil cuando estás con el experto indicado. El Dr. Gabriel Miranda te guiará con maestría clínica y empatía hacia resultados naturales y duraderos. Descubre una odontología pensada exclusivamente para ti.
        </motion.p>

        {/* Doctor Photo with Golden Halos, Pulsing Ring & Pedestal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center w-full my-3 max-w-[280px]"
        >
          {/* Subtle Golden Ring Pulse from PC view */}
          <motion.div
            animate={{
              scale: [0.94, 1.06, 0.94],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              ease: 'easeInOut',
            }}
            className="absolute w-56 h-56 rounded-full border-2 border-[#D4AF37]/35 pointer-events-none -z-10"
          />

          {/* Ambient Glowing Halo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/30 via-[#F3E5AB]/15 to-transparent blur-2xl -z-10" />
          
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-full flex justify-center -mb-5"
          >
            <img
              alt="Dr. Gabriel Miranda - Odontólogo Especialista"
              width={420}
              height={500}
              className="w-full h-auto max-h-[320px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(132,99,30,0.18)] transition-transform duration-300 active:scale-102"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              src="/dr-gabriel-miranda.webp"
            />
          </motion.div>

          {/* Cajita de Autor Doradita y Redondeada en la parte inferior */}
          <motion.div
            animate={{
              boxShadow: [
                "0 10px 25px -5px rgba(212, 175, 55, 0.25)",
                "0 15px 35px 0px rgba(212, 175, 55, 0.45)",
                "0 10px 25px -5px rgba(212, 175, 55, 0.25)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-[92%] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] border border-[#D4AF37]/70 rounded-3xl sm:rounded-full py-2.5 px-4 shadow-xl shadow-amber-950/20 text-center"
          >
            <h3 className="text-sm font-black text-[#0B0B0B] tracking-tight leading-tight">
              Dr. Gabriel Miranda
            </h3>
            <p className="text-[10px] font-bold text-[#42310B] uppercase tracking-wider mt-0.5">
              Rehabilitación Oral y Estética
            </p>
          </motion.div>
        </motion.div>

        {/* Conversion CTA Action Buttons with PC-grade transitions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col gap-2.5 w-full mt-2"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookingClick}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0D0D0D] font-black text-sm uppercase tracking-wider shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2 border border-[#D4AF37]/50 cursor-pointer group active:opacity-95 transition-all duration-300"
          >
            <Calendar className="w-4 h-4 text-[#0D0D0D] group-hover:scale-110 transition-transform" />
            <span>Agendar Cita</span>
            <ArrowRight className="w-4 h-4 text-[#0D0D0D] group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleServicesClick}
            className="w-full py-3.5 px-6 rounded-2xl bg-white/90 hover:bg-[#FAF7EE] hover:border-[#D4AF37]/60 border border-stone-300 text-stone-800 font-bold text-xs uppercase tracking-wider shadow-2xs transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer group"
          >
            <span>Explorar Servicios y Especialidades</span>
            <span className="text-base leading-none group-hover:translate-y-0.5 transition-transform">↓</span>
          </motion.button>
        </motion.div>

        {/* Operating hours & location */}
        <div className="space-y-1 text-center text-[11px] text-stone-500 mt-4 mb-2">
          <p>{CLINIC_HOURS}</p>
          <p className="font-semibold text-stone-700">Av. 19 de Mayo (Ruta E30) y Velasco Ibarra • Edif. Color Gris, PB (Junto a IntegralMedic)</p>
        </div>

        {/* 3D Dental Tooth Sculpture from PC Hero (Giro continuo de 360 grados en círculos) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative w-52 xs:w-60 max-w-[260px] aspect-square flex items-center justify-center my-2"
        >
          {/* Sutil halo dorado amplio detrás del diente */}
          <div className="absolute inset-1 bg-gradient-to-tr from-[#D4AF37]/30 via-[#F3E5AB]/20 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

          {/* Animación continua de flotación y giro completo en círculos 360° más rápido */}
          <motion.div
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 360],
            }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 6, repeat: Infinity, ease: 'linear' },
            }}
            className="w-full h-full flex items-center justify-center relative z-10 transform-gpu"
          >
            <img
              alt="Escultura dental 3D de alta estética"
              width={420}
              height={420}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain filter contrast-[1.04] drop-shadow-[0_20px_35px_rgba(180,140,50,0.30)] active:scale-105 transition-transform"
              src="/hero-3d-tooth.webp"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
