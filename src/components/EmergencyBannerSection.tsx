import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Clock } from 'lucide-react';
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
    <section id="urgencias" className="relative overflow-hidden py-14 sm:py-16 text-white bg-[#07192C]">
      {/* 1. Split Atmospheric Background: Right-side Full Bleed Medical Photo */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base dark medical canvas */}
        <div className="absolute inset-0 bg-[#07192C]" />

        {/* Right Half Clinical Photo - Top to Bottom, Bleeding to Right Edge */}
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-1/2 h-full">
          <img
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1600&auto=format&fit=crop"
            alt="Atención médica prioritaria en Odontología Gabriel Miranda"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.35] lg:brightness-[0.45] contrast-115 scale-105"
          />
          {/* Fades: Seamless horizontal gradient into #07192C on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07192C] via-[#07192C]/70 to-transparent" />
          {/* Vertical fades to protect section dividers at top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07192C] via-transparent to-[#07192C]" />
          {/* Cyan glow overlay requested by user */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-black/60" />
        </div>

        {/* Left atmospheric subtle glow */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* 2. Floating 3D Curved Dental Ribbons */}
      <OrganicDentalRibbon className="-top-12 -left-16 w-96 md:w-[32rem] opacity-70" variant="cyan" />
      <OrganicDentalRibbon className="-bottom-16 -right-20 w-96 md:w-[32rem] opacity-40" variant="white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
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

            {/* 3 Steps Triage - Diseño fluido y abierto sin cajitas cuadradas rígidas */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 sm:p-5 rounded-[1.8rem] sm:rounded-[2rem] bg-white/10 backdrop-blur-md text-left transition-all border border-white/10"
              >
                <div className="w-9 h-9 rounded-full bg-cyan-400/20 flex items-center justify-center mb-3 text-cyan-300">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider">1. Contacto 24/7</h3>
                <p className="text-[11px] text-cyan-100/80 mt-1 leading-relaxed text-justify">Escríbenos o llámanos; te atenderemos sin demoras.</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 sm:p-5 rounded-[1.8rem] sm:rounded-[2rem] bg-white/10 backdrop-blur-md text-left transition-all border border-white/10"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-400/20 flex items-center justify-center mb-3 text-emerald-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider">2. Alivio Inmediato</h3>
                <p className="text-[11px] text-cyan-100/80 mt-1 leading-relaxed text-justify">Anestesia guiada para suprimir el dolor de inmediato.</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 sm:p-5 rounded-[1.8rem] sm:rounded-[2rem] bg-white/10 backdrop-blur-md text-left transition-all border border-white/10"
              >
                <div className="w-9 h-9 rounded-full bg-amber-400/20 flex items-center justify-center mb-3 text-amber-300">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider">3. Tratamiento</h3>
                <p className="text-[11px] text-cyan-100/80 mt-1 leading-relaxed text-justify">Diagnóstico digital 3D y solución definitiva hoy mismo.</p>
              </motion.div>
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

          {/* Right Column: Floating Badge on Open Photographic Canvas (Zero Box-in-Box) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative flex items-center lg:items-end justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="max-w-sm w-full p-5 sm:p-6 rounded-[2rem] bg-slate-900/60 lg:bg-slate-950/50 backdrop-blur-xl border border-white/15 text-white shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 text-xs font-black text-cyan-300 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                <span className="tracking-wide">DISPONIBILIDAD INMEDIATA</span>
              </div>
              <p className="text-xs text-cyan-100/90 leading-relaxed text-justify">
                Ubicación estratégica en Quito con acceso camillero y parqueadero médico subterráneo.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Organic Curved Wave Transition into Doctor Profile Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CurvedSectionDivider position="bottom" fillColor="#F8FAFC" variant="smoothCurve" />
      </div>
    </section>
  );
};
