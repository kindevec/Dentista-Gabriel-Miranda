import React from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Sparkles,
  Clock,
  ArrowRight,
  ChevronDown,
  Star,
  ShieldCheck,
  Award
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
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const marqueeItems = [
    "Ortodoncia Invisible 3D",
    "Implantes Dentales Guiados",
    "Diseño de Sonrisa Digital",
    "Blanqueamiento Láser",
    "Rehabilitación Oral",
    "Escaneo Intraoral sin Pastas",
    "Estética Dental",
    "Urgencias Odontológicas 24/7",
    "Cirugía de Mínima Invasión",
  ];

  const handleScrollToSpecialties = () => {
    const element = document.getElementById('especialidades');
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-3 sm:pt-6 pb-12 sm:pb-16 bg-[#F8FAFC]"
    >
      {/* Background Atmosphere & Subtle Ribbons */}
      <OrganicDentalRibbon className="-top-12 -left-16 w-[36rem] opacity-40" variant="cyan" />
      <OrganicDentalRibbon className="top-1/2 -right-20 w-[32rem] opacity-35" variant="blue" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* =================================================================== */}
        {/* THE CREATIVE HERO STAGE CARD (Ultra-HD 3D Canvas Inspired by Reference) */}
        {/* =================================================================== */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 lg:p-12 bg-gradient-to-b from-[#EBF5FB]/90 via-[#F3F8FC]/80 to-white/95 border border-cyan-100/90 shadow-2xl shadow-cyan-950/5 overflow-hidden">
          
          {/* 1. GIANT TYPOGRAPHIC WATERMARK ("CADA SONRISA CUENTA" / "EVERY SMILE MATTERS") */}
          <div
            className="absolute top-6 sm:top-10 inset-x-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden"
            aria-hidden="true"
          >
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[10.5rem] font-black tracking-tighter text-[#00BFFF]/12 sm:text-[#00BFFF]/15 whitespace-nowrap uppercase leading-none">
              CADA SONRISA CUENTA
            </span>
          </div>

          {/* 2. THREE-COLUMN HERO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
            
            {/* ------------------------------------------------------------- */}
            {/* LEFT COLUMN: Catchy Headline, Value Card, Schedule & CTA */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="lg:col-span-4 space-y-5 text-center lg:text-left"
            >
              {/* Doctor Authority Pill */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-cyan-200/80 text-[#005A9C] text-xs font-black uppercase tracking-wider shadow-2xs backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#00BFFF] animate-pulse" />
                <span>{DOCTOR_NAME} • Quito</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0A2540] tracking-tight leading-[1.14]"
              >
                Tecnología 3D para una{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#0084DE] to-[#00BFFF]">
                  sonrisa perfecta
                </span>{' '}
                y sin dolor
              </motion.h1>

              {/* Friendly Value Proposition Card (Inspired by Left Card in Reference) */}
              <motion.div
                variants={itemVariants}
                className="p-4 sm:p-5 rounded-[2rem] bg-white/90 backdrop-blur-xl border border-white shadow-md shadow-sky-950/5 text-slate-600 text-xs sm:text-sm leading-relaxed"
              >
                En nuestro consultorio dental de alta gama combinamos escaneo intraoral digital, ortodoncia invisible y sedación guiada para ofrecerte un cuidado integral en un ambiente sereno y 100% libre de dolor.
              </motion.div>

              {/* Schedule Status Box (Inspired by "We're Open" in Reference) */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-slate-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-xs shadow-emerald-400" />
                  <span>Consultorio Abierto Hoy:</span>
                  <span className="text-[#005A9C] font-extrabold">08:30 AM – 19:00 PM</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Atención de Urgencias Odontológicas disponible 24/7
                </p>
              </motion.div>

              {/* High-Conversion Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1"
              >
                {/* Primary: Energetic Orange Pill Button (Inspired by "BOOK APPOINTMENT" in Reference) */}
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 group cursor-pointer transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 text-orange-100 group-hover:scale-110 transition-transform" />
                  <span>Agendar Cita Dental</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-100 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Secondary: Smooth Scroll to Explore Services */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleScrollToSpecialties}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white/90 hover:bg-cyan-50/80 border border-cyan-200/80 text-[#005A9C] font-bold text-xs uppercase tracking-wider shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                >
                  <span>Ver Servicios</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#00BFFF]" />
                </motion.button>
              </motion.div>

            </motion.div>

            {/* ------------------------------------------------------------- */}
            {/* CENTER COLUMN: Hyper-Realistic 3D Molar Tooth with Blue Splash */}
            {/* ------------------------------------------------------------- */}
            <div className="lg:col-span-5 relative flex items-center justify-center py-2 lg:py-0">
              
              {/* Ambient Glowing Aura behind 3D Tooth */}
              <div className="absolute w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-[#00BFFF]/20 rounded-full blur-3xl pointer-events-none scale-105" />
              
              {/* Floating 3D Sculpture Wrapper */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotate: [0, 1.2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[430px]"
              >
                {/* 3D Render Image with Smooth Multiply Mask Blend */}
                <div
                  className="relative w-full aspect-square flex items-center justify-center"
                  style={{
                    WebkitMaskImage: 'radial-gradient(circle at center, black 72%, transparent 98%)',
                    maskImage: 'radial-gradient(circle at center, black 72%, transparent 98%)',
                  }}
                >
                  <img
                    src="/hero-3d-tooth.jpg"
                    alt="Odontología digital 3D y salud dental de alta definición"
                    className="w-full h-full object-contain mix-blend-multiply filter contrast-[1.03] drop-shadow-[0_20px_35px_rgba(0,90,156,0.25)]"
                    loading="eager"
                  />
                </div>

                {/* Floating Micro-Badge: Anestesia Digital 100% Sin Dolor */}
                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  className="absolute bottom-2 -left-2 sm:-left-4 z-20 px-4 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-white shadow-xl shadow-cyan-950/10 flex items-center gap-2 text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold text-[#0A2540]">100% Sin Dolor</p>
                    <p className="text-[9px] text-slate-500 font-medium">Anestesia guiada digital</p>
                  </div>
                </motion.div>

                {/* Floating Micro-Badge: Especialista Certificado */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute top-4 -right-2 sm:-right-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-cyan-100 shadow-xl shadow-cyan-950/10 flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5 text-[#00BFFF]" />
                  <span className="text-[10px] font-extrabold text-[#005A9C] uppercase tracking-wide">
                    Rehabilitación & Estética
                  </span>
                </motion.div>

              </motion.div>

            </div>

            {/* ------------------------------------------------------------- */}
            {/* RIGHT COLUMN: Bold Vertical Statistics (Inspired by Reference) */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="lg:col-span-3 space-y-6 text-center lg:text-left flex flex-col justify-center"
            >
              {/* Stat 1: 12+ Años de Especialidad */}
              <motion.div variants={itemVariants} className="space-y-0.5">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-orange-500 tracking-tight">
                  +12
                </div>
                <div className="text-sm font-black text-[#0A2540]">
                  Años de Especialidad
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Rehabilitación oral y estética avanzada
                </p>
              </motion.div>

              {/* Stat 2: 4,500+ Pacientes */}
              <motion.div variants={itemVariants} className="space-y-0.5">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#005A9C] tracking-tight">
                  +4,500
                </div>
                <div className="text-sm font-black text-[#0A2540]">
                  Pacientes Atendidos
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Sonrisas saludables restauradas en Quito
                </p>
              </motion.div>

              {/* Stat 3: 100% Tratamientos Sin Dolor */}
              <motion.div variants={itemVariants} className="space-y-0.5">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00BFFF] tracking-tight">
                  100%
                </div>
                <div className="text-sm font-black text-[#0A2540]">
                  Tratamientos Indoloros
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Protocolo de mínima invasión y confort
                </p>
              </motion.div>

              {/* Google Verified Review Badge */}
              <motion.div
                variants={itemVariants}
                className="p-3 rounded-[1.8rem] bg-white/95 backdrop-blur-md border border-cyan-100 shadow-xs flex items-center justify-center lg:justify-start gap-3"
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-xs font-black text-[#0A2540]">4.9 / 5.0 Estrellas</p>
                  <p className="text-[10px] text-slate-500">Reseñas clínicas verificadas</p>
                </div>
              </motion.div>

            </motion.div>

          </div>

          {/* =================================================================== */}
          {/* 3. BOTTOM MARQUEE BAR: Interactive Treatment Ticker (As in Reference) */}
          {/* =================================================================== */}
          <div
            onClick={handleScrollToSpecialties}
            className="mt-10 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 lg:-mx-12 lg:-mb-12 py-3.5 bg-gradient-to-r from-sky-100/90 via-cyan-100/80 to-sky-100/90 border-t border-cyan-200/70 overflow-hidden cursor-pointer group transition-colors hover:bg-cyan-100"
            title="Haz clic para explorar todas nuestras especialidades"
          >
            <div className="flex items-center space-x-6 overflow-hidden select-none whitespace-nowrap">
              {/* Continuous Running Strip */}
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
                className="flex items-center space-x-6 shrink-0"
              >
                {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-6 shrink-0">
                    <span className="text-xs sm:text-sm font-extrabold text-[#005A9C] group-hover:text-[#0A2540] tracking-wide uppercase transition-colors">
                      {item}
                    </span>
                    <span className="text-sm font-black text-orange-500 shrink-0">
                      +
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
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
