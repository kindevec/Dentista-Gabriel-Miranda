import React from 'react';
import { motion } from 'motion/react';
import { Clock, CreditCard, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { DOCTOR_NAME, createWhatsAppLink, GENERAL_WA_MESSAGE, CLINIC_HOURS } from '../data/clinicData';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';

interface EmergencyBannerSectionProps {
  onOpenEmergency?: () => void;
}

export const EmergencyBannerSection: React.FC<EmergencyBannerSectionProps> = ({ onOpenEmergency: _onOpenEmergency }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="urgencias" className="relative overflow-hidden py-10 sm:py-12 text-white bg-[#0D0D0D] border-y border-[#D4AF37]/30">

      {/* Atmospheric Background with Warm Gold Light */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#0D0D0D]" />

        {/* Right Half Clinical High-Aesthetic Image with Golden Shadowing */}
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-1/2 h-full opacity-35 lg:opacity-60">
          <img
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=85&w=1600&auto=format&fit=crop"
            alt="Miranda Dental Studio — Dr. Gabriel Mateo Miranda"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-90 contrast-[1.05]"
          />
          {/* Mobile Overlay */}
          <div className="lg:hidden absolute inset-0 bg-[#0D0D0D]/85" />
          {/* Desktop Blend */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-transparent" />
        </div>

        {/* Gold Atmospheric Radial Glow */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl" />
      </div>

      {/* Floating 3D Curved Ribbon in Gold */}
      <OrganicDentalRibbon className="-top-12 -left-16 w-96 md:w-[32rem] opacity-40" variant="gold" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 sm:pb-3">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Headline & Rapid Triage Steps */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">

            {/* Micro Kicker */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/50 text-[#F3E5AB] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Propuesta Exclusiva • Miranda Dental Studio</span>
            </motion.div>

            {/* Title */}
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Consulta de Valoración Médica por{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059]">
                solo $15
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Diagnóstico clínico completo con el <strong className="text-white font-bold">{DOCTOR_NAME}</strong>, fotografías dentales y radiografías por solo $15. Crédito directo disponible de $400 a $2,000.
            </motion.p>

            {/* 3 Pillars: Valoración, Crédito Directo, Horarios */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="text-left space-y-1.5 p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/25 backdrop-blur-xs">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-xs sm:text-sm font-black text-[#F3E5AB] uppercase tracking-wider">1. Diagnóstico $15</h3>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">Diagnóstico clínico, fotos y rayos X.</p>
              </div>

              <div className="text-left space-y-1.5 p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/25 backdrop-blur-xs">
                <CreditCard className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-xs sm:text-sm font-black text-[#F3E5AB] uppercase tracking-wider">2. Crédito Directo</h3>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">Financiamiento de $400 a $2,000.</p>
              </div>

              <div className="text-left space-y-1.5 p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/25 backdrop-blur-xs">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-xs sm:text-sm font-black text-[#F3E5AB] uppercase tracking-wider">3. Lun a Dom</h3>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">{CLINIC_HOURS}</p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0B0B0B] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-amber-950/30 cursor-pointer border border-[#D4AF37]/60"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#0B0B0B]" />
                <span>Reservar Valoración de $15 por WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
