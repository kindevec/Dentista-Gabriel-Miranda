import React from 'react';
import { motion } from 'motion/react';
import { Clock, Bandage, Syringe } from 'lucide-react';
import { DOCTOR_NAME, createWhatsAppLink, EMERGENCY_WA_MESSAGE } from '../data/clinicData';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { CurvedSectionDivider } from './CurvedSectionDivider';

interface EmergencyBannerSectionProps {
  onOpenEmergency?: () => void;
}

export const EmergencyBannerSection: React.FC<EmergencyBannerSectionProps> = ({ onOpenEmergency }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="urgencias" className="relative overflow-hidden py-12 sm:py-14 lg:py-16 text-white bg-[#07192C]">
      {/* Top Organic Wave Transition from Specialties Section (Masks background & photo) */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <CurvedSectionDivider position="top" fillColor="#EDF4FA" variant="wave1" />
      </div>

      {/* 1. Split Atmospheric Background: Right-side Full Bleed Medical Photo */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base dark medical canvas */}
        <div className="absolute inset-0 bg-[#07192C]" />

        {/* Right Half Clinical Photo - Full HD Crisp Quality from Middle to Right Edge */}
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-1/2 h-full">
          <img
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=85&w=1600&auto=format&fit=crop"
            alt="Atención médica prioritaria en Odontología Gabriel Miranda"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-100 contrast-[1.03]"
          />
          {/* Mobile Overlay only (protects readability on single column mobile) */}
          <div className="lg:hidden absolute inset-0 bg-[#07192C]/85" />

          {/* Desktop Left Edge Seamless Blend */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#07192C] to-transparent" />
        </div>

        {/* Left atmospheric subtle glow */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* 2. Floating 3D Curved Dental Ribbon (Left side only) */}
      <OrganicDentalRibbon className="-top-12 -left-16 w-96 md:w-[32rem] opacity-70" variant="cyan" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 sm:pb-3">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Urgencia Headline & Rapid Triage Steps */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">

            {/* Title */}
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              ¿Dolor dental insoportable o una emergencia imprevista?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
                Te atendemos hoy mismo
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-cyan-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed text-justify">
              No dejes que el dolor de muela, un traumatismo, fractura o absceso empeore. En el consultorio del <strong className="text-white font-bold">{DOCTOR_NAME}</strong> disponemos de un protocolo médico de intervención prioritaria con respuesta en minutos.
            </motion.p>

            {/* 3 Steps Triage - Directamente sobre el lienzo sin contenedores */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-3">
              <div className="text-left space-y-2">
                <Clock className="w-7 h-7 text-cyan-300 drop-shadow-[0_0_10px_rgba(103,232,249,0.5)]" />
                <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">1. Contacto 24/7</h3>
                <p className="text-[11.5px] sm:text-xs text-cyan-100/80 leading-relaxed text-justify">Escríbenos o llámanos; te atenderemos sin demoras.</p>
              </div>

              <div className="text-left space-y-2">
                <Bandage className="w-7 h-7 text-emerald-300 drop-shadow-[0_0_10px_rgba(110,231,183,0.5)]" />
                <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">2. Alivio Inmediato</h3>
                <p className="text-[11.5px] sm:text-xs text-cyan-100/80 leading-relaxed text-justify">Anestesia guiada para suprimir el dolor de inmediato.</p>
              </div>

              <div className="text-left space-y-2">
                <Syringe className="w-7 h-7 text-amber-300 drop-shadow-[0_0_10px_rgba(252,211,77,0.5)]" />
                <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">3. Tratamiento</h3>
                <p className="text-[11.5px] sm:text-xs text-cyan-100/80 leading-relaxed text-justify">Diagnóstico digital 3D y solución definitiva hoy mismo.</p>
              </div>
            </motion.div>

            {/* Direct Action Emergency Button */}
            <motion.div variants={itemVariants} className="pt-2 flex justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={createWhatsAppLink(EMERGENCY_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpenEmergency}
                className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-red-500 via-rose-600 to-red-600 hover:from-red-600 hover:to-rose-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-red-600/30 flex items-center justify-center gap-2.5 cursor-pointer animate-halo-emergency"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0" />
                <span>Solicitar urgencia dental</span>
              </motion.a>
            </motion.div>

          </div>

          {/* Right Column: Open Photographic Canvas for Full Quality Image */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-none" aria-hidden="true" />

        </motion.div>
      </div>

      {/* Bottom Organic Curved Wave Transition into Doctor Profile Section (Masks background & photo) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <CurvedSectionDivider position="bottom" fillColor="#F8FAFC" variant="wave1" />
      </div>
    </section>
  );
};
