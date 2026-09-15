import React from 'react';
import { motion } from 'motion/react';
import { Calendar, AlertTriangle, ShieldCheck, Sparkles, Clock, CheckCircle2, PhoneCall, ArrowRight } from 'lucide-react';
import { DOCTOR_NAME, CLINIC_PHONE_DISPLAY, createWhatsAppLink, EMERGENCY_WA_MESSAGE } from '../data/clinicData';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { CurvedSectionDivider } from './CurvedSectionDivider';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenEmergency: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenEmergency }) => {
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
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28"
    >
      {/* 1. Full-Quality High-Definition Photographic Background (Dental Clinic Suite) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1920&auto=format&fit=crop"
          alt="Consultorio Odontología Gabriel Miranda"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[0.98]"
        />
        {/* Soft Medical Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50/96 via-white/94 to-cyan-50/90 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-200/25 via-transparent to-sky-100/30" />
      </div>

      {/* 2. Floating 3D Curved Dental Ribbon SVGs (Organics Curves) */}
      <OrganicDentalRibbon className="-top-10 -left-12 w-[34rem] md:w-[46rem] opacity-75" variant="cyan" />
      <OrganicDentalRibbon className="top-1/3 -right-24 w-[30rem] md:w-[42rem] opacity-60" variant="blue" />

      {/* 3. Subtle Atmospheric Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-[#00BFFF]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#005A9C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Animated Headline, Value Proposition & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Clinical Pill Badge with Soft Curves */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-100/80 text-[#005A9C] text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#00BFFF] animate-pulse" />
              <span>Odontología Digital 3D & Cirugía de Mínima Invasión</span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0A2540] tracking-tight leading-[1.12]">
              Tecnología 3D para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#00BFFF] to-[#0084DE]">
                sonrisas perfectas
              </span>{' '}
              y sin dolor
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              En el consultorio del <strong className="text-[#005A9C] font-semibold">{DOCTOR_NAME}</strong> combinamos escaneo intraoral 3D sin pastas, planificación digital computarizada y un trato profundamente empático para transformar tu salud bucal con tratamientos 100% indoloros.
            </motion.p>

            {/* Feature Highlights - Erradicado Box-in-Box con Píldoras Suaves */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-xs text-xs font-bold text-[#0A2540]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00BFFF] shrink-0" />
                <span>Escáner Intraoral 3D</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-xs text-xs font-bold text-[#0A2540]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00BFFF] shrink-0" />
                <span>Anestesia Guiada</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-xs text-xs font-bold text-[#0A2540]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00BFFF] shrink-0" />
                <span>Garantía Clínica Total</span>
              </motion.div>
            </motion.div>

            {/* Dual CTA Buttons with Ultra-Curved Pill Shapes */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              {/* Primary: Agendar Valoración */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#005A9C] via-[#0084DE] to-[#00BFFF] hover:from-[#004a82] hover:to-[#00a3da] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#005A9C]/25 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-cyan-200 group-hover:scale-110 transition-transform" />
                <span>Agendar Valoración Dental</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-200 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Secondary: Urgencias 24/7 */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={createWhatsAppLink(EMERGENCY_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpenEmergency}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border-2 border-red-500 text-red-600 bg-white/80 backdrop-blur-md hover:bg-red-50 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 group hover:border-red-600 cursor-pointer animate-halo-emergency"
              >
                <AlertTriangle className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                <span>Servicios de Urgencia 24/7</span>
              </motion.a>
            </motion.div>

            {/* Direct Telephone Info */}
            <motion.div variants={itemVariants} className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-600">
              <Clock className="w-3.5 h-3.5 text-[#00BFFF]" />
              <span>¿Prefieres llamar por teléfono? Línea directa</span>
              <a
                href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                className="font-bold text-[#005A9C] hover:text-[#00BFFF] transition-colors underline"
              >
                {CLINIC_PHONE_DISPLAY}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Organic Pebble-Shaped Clinical Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Doctor Image Container with Organic Rounded Corners (Not a stiff box!) */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-[3rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-50 to-sky-100 group">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
                alt="Dr. Gabriel Miranda especialista en odontología estética y digital"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] sm:h-[510px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom Gradient Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/85 via-[#0A2540]/20 to-transparent" />

              {/* Doctor Identification Card inside image with Curved Pill Shape */}
              <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-3xl bg-black/40 backdrop-blur-md">
                <p className="text-sm font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00BFFF]" />
                  {DOCTOR_NAME}
                </p>
                <p className="text-xs text-cyan-100 opacity-90 mt-0.5">
                  Director Clínico • Especialista en Estética Oral & Implantes
                </p>
              </div>
            </div>

            {/* Floating Card 1: 100% Indoloro with Smooth Curved Pill shape */}
            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
              }}
              className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-xl px-4 py-3 rounded-full shadow-xl hidden sm:flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-100 text-[#005A9C] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-[#005A9C]" />
              </div>
              <div className="pr-2">
                <p className="text-xs font-bold text-[#0A2540]">100% Sin Dolor</p>
                <p className="text-[11px] text-slate-500">Anestesia digital guiada</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Respuesta WhatsApp Inmediata with Pill shape */}
            <motion.div
              animate={{
                y: [6, -6, 6],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -right-2 sm:-right-4 bg-white/95 backdrop-blur-xl px-4 py-3 rounded-full shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-[#005A9C] text-[#00BFFF] flex items-center justify-center">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="pr-2">
                <p className="text-xs font-bold text-[#0A2540]">Citas Inmediatas</p>
                <p className="text-[11px] text-slate-500">Respuesta &lt; 5 min</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Organic Curved Wave Transition at bottom of Hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CurvedSectionDivider position="bottom" fillColor="#F8FAFC" variant="smoothCurve" />
      </div>
    </section>
  );
};
