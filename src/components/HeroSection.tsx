import React from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Clock,
  AlertTriangle
} from 'lucide-react';
import {
  DOCTOR_NAME,
  CLINIC_PHONE_DISPLAY,
  createWhatsAppLink,
  EMERGENCY_WA_MESSAGE
} from '../data/clinicData';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { CurvedSectionDivider } from './CurvedSectionDivider';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenEmergency: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenEmergency,
}) => {
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
      className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-sky-50/60 via-white to-[#F8FAFC]"
    >
      {/* Subtle Organic Dental Ribbons for Atmospheric Depth */}
      <OrganicDentalRibbon className="-top-12 -left-16 w-[36rem] opacity-35" variant="cyan" />
      <OrganicDentalRibbon className="top-1/3 -right-20 w-[32rem] opacity-30" variant="blue" />

      {/* Main Canvas - 100% Open Space (Zero Box-in-Box) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: Clean Typography, Proposition & Direct CTAs */}
          {/* ============================================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Clinical Authority Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50/90 border border-cyan-200/70 text-[#005A9C] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00BFFF]" />
              <span>Odontología Digital 3D • {DOCTOR_NAME}</span>
            </motion.div>

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
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
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
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#005A9C] via-[#0084DE] to-[#00BFFF] hover:from-[#00477b] hover:to-[#009cd1] text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-[#005A9C]/25 flex items-center justify-center gap-2.5 group cursor-pointer transition-all duration-300"
              >
                <Calendar className="w-4 h-4 text-cyan-200 group-hover:scale-110 transition-transform" />
                <span>Agendar Cita Dental</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-200 group-hover:translate-x-1 transition-transform" />
              </motion.button>

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
          {/* RIGHT COLUMN: Expansive 3D Tooth Visual with Generous Air */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Cyan Halo */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-[#00BFFF]/20 rounded-full blur-3xl pointer-events-none scale-110" />

            {/* Majestic 3D Tooth Molar with Splash */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[480px]"
            >
              <div
                className="relative w-full aspect-square flex items-center justify-center"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle at center, black 72%, transparent 98%)',
                  maskImage: 'radial-gradient(circle at center, black 72%, transparent 98%)',
                }}
              >
                <img
                  src="/hero-3d-tooth.jpg"
                  alt="Odontología digital 3D de alta definición"
                  className="w-full h-full object-contain mix-blend-multiply filter contrast-[1.03] drop-shadow-[0_25px_40px_rgba(0,90,156,0.25)]"
                  loading="eager"
                />
              </div>

              {/* Minimal floating seal */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute bottom-4 left-4 z-20 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-cyan-100 shadow-lg shadow-cyan-950/10 flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-black text-[#0A2540]">100% Sin Dolor</span>
              </motion.div>
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
