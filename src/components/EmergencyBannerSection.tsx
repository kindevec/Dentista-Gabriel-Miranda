import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Clock, ArrowRight, PhoneCall } from 'lucide-react';
import { DOCTOR_NAME, CLINIC_PHONE_DISPLAY, createWhatsAppLink, EMERGENCY_WA_MESSAGE } from '../data/clinicData';
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
      {/* 1. Intercalated High-Definition Photographic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop"
          alt="Quirófano y atención médica de urgencia Odontología Gabriel Miranda"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-125 scale-105"
        />
        {/* Medical Deep Blue & Cyan Atmospheric Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07192C]/95 via-[#003B6F]/90 to-[#0A2540]/95 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-black/60" />
      </div>

      {/* 2. Floating 3D Curved Dental Ribbons */}
      <OrganicDentalRibbon className="-top-12 -left-16 w-96 md:w-[32rem] opacity-70" variant="cyan" />
      <OrganicDentalRibbon className="-bottom-16 -right-20 w-96 md:w-[32rem] opacity-50" variant="white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
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
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-5 rounded-[2rem] bg-white/10 backdrop-blur-md text-left transition-all border border-white/10"
              >
                <div className="w-9 h-9 rounded-full bg-cyan-400/20 flex items-center justify-center mb-3 text-cyan-300">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider">1. Contacto 24/7</h3>
                <p className="text-[11px] text-cyan-100/80 mt-1 leading-relaxed text-justify">Escríbenos o llámanos; te atenderemos sin demoras.</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-5 rounded-[2rem] bg-white/10 backdrop-blur-md text-left transition-all border border-white/10"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-400/20 flex items-center justify-center mb-3 text-emerald-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider">2. Alivio Inmediato</h3>
                <p className="text-[11px] text-cyan-100/80 mt-1 leading-relaxed text-justify">Anestesia guiada para suprimir el dolor de inmediato.</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-5 rounded-[2rem] bg-white/10 backdrop-blur-md text-left transition-all border border-white/10"
              >
                <div className="w-9 h-9 rounded-full bg-amber-400/20 flex items-center justify-center mb-3 text-amber-300">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider">3. Tratamiento</h3>
                <p className="text-[11px] text-cyan-100/80 mt-1 leading-relaxed text-justify">Diagnóstico digital 3D y solución definitiva hoy mismo.</p>
              </motion.div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={createWhatsAppLink(EMERGENCY_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpenEmergency}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-red-500 via-rose-600 to-red-600 hover:from-red-600 hover:to-rose-700 text-white font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-600/30 flex items-center justify-center gap-3 cursor-pointer animate-halo-emergency"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Solicitar Urgencia Dental por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-cyan-300" />
                <span>Llamar: {CLINIC_PHONE_DISPLAY}</span>
              </motion.a>
            </motion.div>

          </div>

          {/* Right Column: Organic Curved Shape Visual */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-[3rem] rounded-tl-[1.5rem] rounded-br-[1.5rem] overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop"
                alt="Atención médica prioritaria en Odontología Gabriel Miranda"
                referrerPolicy="no-referrer"
                className="w-full h-[430px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-80" />

              {/* Floating emergency badge card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-3xl bg-white/15 backdrop-blur-xl text-white">
                <div className="flex items-center gap-2 text-xs font-black text-cyan-300 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>DISPONIBILIDAD INMEDIATA</span>
                </div>
                <p className="text-xs text-white/90">
                  Ubicación estratégica en Quito con acceso camillero y parqueadero médico subterráneo.
                </p>
              </div>
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
