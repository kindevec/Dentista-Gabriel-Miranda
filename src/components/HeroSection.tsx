import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  Calendar,
  ArrowRight,
  Check,
  Clock,
  Sparkles,
  MapPin,
  CreditCard
} from 'lucide-react';
import {
  createWhatsAppLink,
  BOOKING_WA_MESSAGE,
  CLINIC_HOURS
} from '../data/clinicData';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { CurvedSectionDivider } from './CurvedSectionDivider';

interface HeroSectionProps {
  onOpenBooking?: () => void;
  onOpenEmergency: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking: _onOpenBooking,
  onOpenEmergency: _onOpenEmergency,
}) => {
  // 3D Parallax Tilt Physics using Motion Values
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D Rotation angles based on cursor position (-12deg to +12deg)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ['-12deg', '12deg']);
  const glowX = useTransform(smoothMouseX, [-0.5, 0.5], ['-25px', '25px']);
  const glowY = useTransform(smoothMouseY, [-0.5, 0.5], ['-25px', '25px']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-[#FDFCF8] via-[#FAF9F5] to-[#F5F2EB]"
    >
      {/* Subtle Organic Golden Dental Ribbons for Atmospheric Depth */}
      <OrganicDentalRibbon className="-top-12 -left-16 w-[36rem] opacity-30" variant="gold" />
      <OrganicDentalRibbon className="top-1/3 -right-20 w-[32rem] opacity-25" variant="champagne" />

      {/* Main Canvas - 100% Open Space (Zero Box-in-Box) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: Clean Typography, Proposition & Direct CTAs */}
          {/* ============================================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-5 text-center lg:text-left"
          >
            {/* Doctor & Studio Pre-Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/45 text-[#84631E] text-xs font-black uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Miranda Dental Studio • Dr. Gabriel Mateo Miranda</span>
            </motion.div>

            {/* H1 Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-black text-[#0D0D0D] tracking-tight leading-[1.14]"
            >
              Odontología de Autor y{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#84631E]">
                Rehabilitación Oral
              </span>{' '}
              de Alta Gama
            </motion.h1>

            {/* Clean Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal text-justify"
            >
              Excelencia clínica, tecnología y calidez humana. Especialistas en prótesis fijas, carillas biomiméticas, endodoncia mecanizada y armonización facial. Reserva tu valoración médica completa con diagnóstico, fotografías y radiografías por solo <strong>$15</strong>.
            </motion.p>

            {/* Minimalist Feature Bullet Points (Gold & White) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-6 text-xs sm:text-sm font-semibold text-stone-700 pt-1"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Valoración $15 (Fotos + Rayos X)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Crédito directo $400 a $2,000</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Atención Domingos (9am - 2pm)</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {/* Primary CTA: Valoración $15 */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={createWhatsAppLink(BOOKING_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0B0B0B] font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-950/15 flex items-center justify-center gap-2.5 group cursor-pointer transition-all duration-300 border border-[#D4AF37]/50"
              >
                <Calendar className="w-4 h-4 text-[#0B0B0B] group-hover:scale-110 transition-transform" />
                <span>Agendar Valoración $15</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0B] group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Secondary CTA: Crédito Directo y Formas de Pago */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={createWhatsAppLink("Hola Dr. Gabriel Mateo Miranda, quisiera información sobre las formas de pago y el Crédito Directo Dental.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-stone-300 text-stone-800 bg-white/90 hover:bg-[#FAF7EE] hover:border-[#D4AF37]/60 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
              >
                <CreditCard className="w-4 h-4 text-[#84631E] group-hover:scale-110 transition-transform" />
                <span>Crédito Directo Dental</span>
              </motion.a>
            </motion.div>

            {/* Operating Schedule & Location Line */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xs text-stone-500 text-center lg:text-left"
            >
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#84631E] shrink-0" />
                <span>{CLINIC_HOURS}</span>
              </div>
              <span className="text-stone-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#84631E] shrink-0" />
                <span className="font-semibold text-stone-700">Av. 19 de Mayo y Velasco Ibarra (Planta Baja con Parqueadero)</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: Interactive 3D Tooth Molar with Gold Sheen       */}
          {/* ============================================================== */}
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 relative flex items-center justify-center py-4 sm:py-6 cursor-pointer select-none overflow-hidden sm:overflow-visible"
            style={{ perspective: 1000 }}
          >
            {/* 1. Dynamic Champagne Glow Waves Radiating Outward */}
            <motion.div
              animate={{
                scale: [0.85, 1.25, 0.85],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
              }}
              className="absolute w-60 sm:w-88 h-60 sm:h-88 rounded-full border-2 border-[#D4AF37]/30 pointer-events-none -z-10"
            />
            <motion.div
              animate={{
                scale: [1.2, 0.9, 1.2],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'easeInOut',
                delay: 1.5,
              }}
              className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-[#C5A059]/20 pointer-events-none -z-10"
            />

            {/* 2. Interactive Ambient Glowing Halo (Follows Mouse Parallax) */}
            <motion.div
              style={{
                x: glowX,
                y: glowY,
              }}
              className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-[#D4AF37]/25 via-[#F3E5AB]/20 to-amber-200/10 rounded-full blur-3xl pointer-events-none -z-10 scale-110"
            />

            {/* 3. Floating Gold Sparkle Accent */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 15, 0],
              }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute -top-2 left-6 z-20 px-3 py-1.5 rounded-full bg-white/95 shadow-md shadow-amber-950/10 backdrop-blur-md border border-[#D4AF37]/40 pointer-events-none flex items-center gap-1.5 text-[11px] font-black text-[#84631E]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Senescyt: 1042-2023-2642790</span>
            </motion.div>

            {/* 4. THE INTERACTIVE 3D TOOTH MOLAR SCULPTURE */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              animate={
                isHovered
                  ? { scale: 1.05 }
                  : {
                      y: [-8, 8, -8],
                      scale: 1,
                    }
              }
              transition={
                isHovered
                  ? { duration: 0.3 }
                  : { repeat: Infinity, duration: 6, ease: 'easeInOut' }
              }
              className="relative z-10 w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[480px]"
            >
              <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
                <img
                  src="/hero-3d-tooth.png"
                  alt="Escultura dental 3D de alta estética"
                  className="w-full h-full object-contain filter contrast-[1.03] drop-shadow-[0_25px_45px_rgba(180,140,50,0.25)] transition-all duration-300"
                  loading="eager"
                />

                {/* Specular Light Flare / Gleam Sweep on Enamel */}
                <motion.div
                  animate={{
                    x: ['-120%', '220%'],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/30 to-transparent skew-x-[-25deg] pointer-events-none"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Organic Curved Wave Transition into Services */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CurvedSectionDivider position="bottom" fillColor="#FAF9F5" variant="smoothCurve" />
      </div>
    </section>
  );
};
