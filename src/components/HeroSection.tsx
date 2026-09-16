import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  Calendar,
  ArrowRight,
  Check,
  Clock,
  AlertTriangle,
  Droplets
} from 'lucide-react';
import {
  createWhatsAppLink,
  BOOKING_WA_MESSAGE,
  EMERGENCY_WA_MESSAGE
} from '../data/clinicData';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { CurvedSectionDivider } from './CurvedSectionDivider';

interface HeroSectionProps {
  onOpenBooking?: () => void;
  onOpenEmergency: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking: _onOpenBooking,
  onOpenEmergency,
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
      className="relative overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-14 bg-gradient-to-b from-sky-50/60 via-white to-[#F8FAFC]"
    >
      {/* Subtle Organic Dental Ribbons for Atmospheric Depth */}
      <OrganicDentalRibbon className="-top-12 -left-16 w-[36rem] opacity-35" variant="cyan" />
      <OrganicDentalRibbon className="top-1/3 -right-20 w-[32rem] opacity-30" variant="blue" />

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
            {/* H1 Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-black text-[#0A2540] tracking-tight leading-[1.14]"
            >
              Tecnología 3D para una{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0084DE] to-[#00BFFF]">
                sonrisa perfecta
              </span>{' '}
              y sin dolor
            </motion.h1>

            {/* Clean Subtitle - Free on Canvas without Box-in-Box */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal text-justify"
            >
              Transformamos tu salud dental con escaneo intraoral computarizado, ortodoncia invisible y rehabilitación de mínima invasión. Una experiencia médica precisa, serena y 100% confortable en Quito.
            </motion.p>

            {/* Minimalist Feature Bullet Points (Clean, No Heavy Cards) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-700 pt-1"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-100/80 text-[#005A9C] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Escáner 3D sin pastas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Anestesia guiada digital</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Financiamiento directo</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {/* Primary CTA */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={createWhatsAppLink(BOOKING_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#005A9C] via-[#0084DE] to-[#00BFFF] hover:from-[#00477b] hover:to-[#009cd1] text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-[#005A9C]/25 flex items-center justify-center gap-2.5 group cursor-pointer transition-all duration-300"
              >
                <Calendar className="w-4 h-4 text-cyan-200 group-hover:scale-110 transition-transform" />
                <span>Agendar Cita Dental</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-200 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Secondary CTA: Urgencias 24/7 */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={createWhatsAppLink(EMERGENCY_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpenEmergency}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border-2 border-red-500/80 text-red-600 bg-white/90 hover:bg-red-50 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
              >
                <AlertTriangle className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                <span>Urgencias 24/7</span>
              </motion.a>
            </motion.div>

            {/* Operating Schedule Line */}
            <motion.div
              variants={itemVariants}
              className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500"
            >
              <Clock className="w-3.5 h-3.5 text-[#00BFFF]" />
              <span>Horarios: Lun - Vie 08:30 a 19:00 | Sáb 09:00 a 15:00</span>
              <span className="text-slate-400">•</span>
              <span className="font-semibold text-slate-700">Edificio Platinum, Quito</span>
            </motion.div>
          </motion.div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: Interactive 3D Tooth Molar with Liquid Splash    */}
          {/* ============================================================== */}
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 relative flex items-center justify-center py-6 cursor-pointer select-none"
            style={{ perspective: 1000 }}
          >
            {/* 1. Dynamic Water Ripple Waves Radiating Outward */}
            <motion.div
              animate={{
                scale: [0.85, 1.25, 0.85],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
              }}
              className="absolute w-72 sm:w-88 h-72 sm:h-88 rounded-full border-2 border-cyan-400/35 pointer-events-none -z-10"
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
              className="absolute w-88 sm:w-96 h-88 sm:h-96 rounded-full border border-sky-400/25 pointer-events-none -z-10"
            />

            {/* 2. Interactive Ambient Glowing Halo (Follows Mouse Parallax) */}
            <motion.div
              style={{
                x: glowX,
                y: glowY,
              }}
              className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-[#00BFFF]/30 via-cyan-400/20 to-sky-300/10 rounded-full blur-3xl pointer-events-none -z-10 scale-110"
            />

            {/* 3. Floating Crystal Water Droplets in 3D Space */}
            <motion.div
              animate={{
                y: [-12, 12, -12],
                x: [-4, 4, -4],
                rotate: [0, 15, 0],
              }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute -top-3 left-8 z-20 w-7 h-7 rounded-full bg-gradient-to-br from-white via-cyan-200 to-sky-400/60 shadow-lg shadow-cyan-500/30 backdrop-blur-md border border-white/80 pointer-events-none flex items-center justify-center"
            >
              <Droplets className="w-3.5 h-3.5 text-cyan-700/80" />
            </motion.div>

            <motion.div
              animate={{
                y: [10, -10, 10],
                x: [5, -5, 5],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut', delay: 1 }}
              className="absolute top-12 right-6 z-20 w-5 h-5 rounded-full bg-gradient-to-tr from-white via-cyan-100 to-sky-300 shadow-md shadow-sky-400/30 backdrop-blur-md border border-white/90 pointer-events-none"
            />

            <motion.div
              animate={{
                y: [-8, 8, -8],
                scale: [1, 1.15, 1],
              }}
              transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-10 right-8 z-20 w-6 h-6 rounded-full bg-gradient-to-br from-white via-cyan-200 to-blue-400/50 shadow-md shadow-cyan-500/25 backdrop-blur-md border border-white/80 pointer-events-none"
            />

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
              {/* Pure Transparent PNG Container with Specular Sheen Pass */}
              <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
                <img
                  src="/hero-3d-tooth.png"
                  alt="Molar 3D con splash líquido hiperrealista"
                  className="w-full h-full object-contain filter contrast-[1.05] drop-shadow-[0_25px_45px_rgba(0,140,255,0.35)] transition-all duration-300"
                  loading="eager"
                />

                {/* Specular Light Flare / Gleam Sweep on Enamel */}
                <motion.div
                  animate={{
                    x: ['-120%', '220%'],
                    opacity: [0, 0.75, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Organic Curved Wave Transition into Specialties */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CurvedSectionDivider position="bottom" fillColor="#F8FAFC" variant="smoothCurve" />
      </div>
    </section>
  );
};
