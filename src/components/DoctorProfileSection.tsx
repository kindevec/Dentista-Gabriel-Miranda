import React from 'react';
import { motion } from 'motion/react';
import { DOCTOR_PROFILE, DOCTOR_NAME, createWhatsAppLink, GENERAL_WA_MESSAGE, DOCTOR_SENESCYT } from '../data/clinicData';
import { Cpu, Shield, Heart, Calendar, CheckCircle2, Quote, ArrowRight, Award } from 'lucide-react';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';

export const DoctorProfileSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section id="nosotros" className="py-8 sm:py-12 relative overflow-hidden bg-[#FAF9F5]">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5] via-white/80 to-[#FAF9F5]" />
      </div>

      {/* Floating 3D Curved Ribbon in Gold */}
      <OrganicDentalRibbon className="top-1/4 -left-16 w-96 md:w-[32rem] opacity-30" variant="gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-2">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-5 sm:mb-7 space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/45 text-[#84631E] text-xs font-black uppercase tracking-wider shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Perfil Profesional & Trayectoria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Conoce al <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#84631E]">{DOCTOR_NAME}</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            Especialista con formación en rehabilitación oral y estética dental, enfocado en odontología biomimética y confort integral.
          </p>
        </motion.div>

        {/* Doctor Main Profile - Open Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-8 sm:mb-10"
        >
          {/* Left Doctor Photo with Architectural Arch Frame in Gold & White */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer Architectural Arch Frame with Gold & Champagne Gradient */}
              <div className="p-2 rounded-t-[16rem] rounded-b-[3.5rem] bg-gradient-to-b from-[#D4AF37] via-[#F3E5AB] to-[#FFFFFF] shadow-[0_20px_50px_-15px_rgba(132,99,30,0.18)] relative group">
                
                {/* Inner Masked Viewport */}
                <div className="relative rounded-t-[15.5rem] rounded-b-[3rem] overflow-hidden bg-stone-900 h-[400px] sm:h-[450px]">
                  <img
                    src={DOCTOR_PROFILE.image}
                    alt={`${DOCTOR_NAME} - Odontólogo Especialista`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Info Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent p-7 text-white">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#D4AF37]/25 text-[#F3E5AB] text-[10px] font-mono font-bold uppercase mb-1 border border-[#D4AF37]/40">
                      C.N.S.I.T.: {DOCTOR_SENESCYT}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">{DOCTOR_NAME}</h3>
                    <p className="text-xs font-semibold text-[#D4AF37] mt-0.5">{DOCTOR_PROFILE.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Doctor Bio, Credentials & Official Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#84631E]">
                {DOCTOR_PROFILE.role}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0D0D] tracking-tight">
                Salud, Estética y Armonía Natural
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pt-2 text-justify">
                {DOCTOR_PROFILE.bio}
              </p>
            </motion.div>

            {/* Academic Credentials List with Animation */}
            <motion.div variants={itemVariants} className="space-y-2.5 pt-1">
              <p className="text-xs font-black uppercase tracking-wider text-[#84631E]">
                Formación Académica & Residencias Internacionales:
              </p>
              {DOCTOR_PROFILE.credentials.map((cred, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 transition-transform"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#84631E] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-stone-700 font-medium">{cred}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Official Philosophy Card (Cita Textual del PDF) */}
            <motion.div
              variants={itemVariants}
              className="p-5 sm:p-6 rounded-2xl bg-[#FAF7EE] border border-[#D4AF37]/40 relative shadow-xs"
            >
              <Quote className="w-7 h-7 text-[#D4AF37]/35 absolute top-3 right-4" />
              <p className="text-xs sm:text-sm font-serif italic text-stone-700 leading-relaxed text-justify relative z-10">
                {DOCTOR_PROFILE.philosophy}
              </p>
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#D4AF37]/20">
                <span className="text-xs font-black text-[#84631E] uppercase tracking-wider">
                  — Filosofía de Atención de Miranda Dental Studio
                </span>
              </div>
            </motion.div>

            {/* Direct CTA */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row gap-3.5">
              <a
                href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0B0B0B] font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-950/15 cursor-pointer border border-[#D4AF37]/50 active:scale-98"
              >
                <Calendar className="w-4 h-4 text-[#0B0B0B]" />
                <span>Agendar Valoración $15 con el Dr. Miranda</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Facilities & Infrastructure (Directly on Canvas, No Outer Box-in-Box) */}
        <div className="pt-6 sm:pt-10 border-t border-stone-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Infrastructure Features */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black tracking-widest text-[#84631E] uppercase mb-1.5 block">
                  Infraestructura, Ubicación & Bioseguridad
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0D0D] tracking-tight">
                  Instalaciones Diseñadas para tu Máxima Tranquilidad
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed text-justify mt-2">
                  Ubicados en Av. 19 de Mayo y Velasco Ibarra (Edificio gris, Planta Baja con parqueadero para pacientes). Ofrecemos un consultorio sereno con diseño acústico relajante y equipamiento de diagnóstico digital 3D.
                </p>
              </div>

              <div className="space-y-3.5 pt-1">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] shrink-0 flex items-center justify-center shadow-xs">
                    <Cpu className="w-5 h-5 text-[#84631E]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D0D0D]">Diagnóstico Integral & Radiografías ($15)</h4>
                    <p className="text-xs text-stone-600 mt-1 text-justify leading-relaxed">
                      Fotografías clínicas de alta definición y radiografías dentales para un diagnóstico certero sin sorpresas.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] shrink-0 flex items-center justify-center shadow-xs">
                    <Heart className="w-5 h-5 text-[#84631E]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D0D0D]">Odontología de Mínima Invasión</h4>
                    <p className="text-xs text-stone-600 mt-1 text-justify leading-relaxed">
                      Preservamos al máximo el tejido sano y la estructura biológica natural del diente con técnicas biomiméticas.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] shrink-0 flex items-center justify-center shadow-xs">
                    <Shield className="w-5 h-5 text-[#84631E]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D0D0D]">Bioseguridad & Parqueadero Exclusivo</h4>
                    <p className="text-xs text-stone-600 mt-1 text-justify leading-relaxed">
                      Esterilización certificada de todo el instrumental y parqueadero privado gratuito en planta baja para tu comodidad.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Overlapping Dual-Mask Architectural Composition */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
              {/* Primary Architectural Arch Mask */}
              <div className="relative w-full max-w-md rounded-t-[14rem] rounded-b-[3rem] overflow-hidden shadow-2xl p-1.5 bg-gradient-to-b from-[#D4AF37] via-[#F3E5AB] to-white">
                <div className="relative w-full h-[320px] sm:h-[360px] rounded-t-[13.5rem] rounded-b-[2.6rem] overflow-hidden bg-stone-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                    alt="Consultorio Clínico Miranda Dental Studio"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md text-[#0D0D0D] text-center border border-[#D4AF37]/30 shadow-lg">
                    <p className="text-xs font-bold text-[#0D0D0D]">Consultorio Dental Ergonómico</p>
                    <p className="text-[11px] text-stone-500">Av. 19 de Mayo y Velasco Ibarra • Planta Baja</p>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Overlapping Window */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-6 sm:-bottom-8 right-0 sm:-right-4 z-20 w-32 sm:w-44 h-32 sm:h-44 rounded-[2rem] sm:rounded-[2.5rem] rounded-tr-lg p-1.5 bg-gradient-to-br from-white via-[#F3E5AB] to-[#D4AF37] shadow-2xl shadow-amber-950/20"
              >
                <div className="relative w-full h-full rounded-[2.2rem] rounded-tr-md overflow-hidden bg-stone-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop"
                    alt="Equipamiento y Bioseguridad en Miranda Dental Studio"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                    <span className="text-[10px] font-bold text-white uppercase tracking-tight">
                      Bioseguridad
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
