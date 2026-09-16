import React from 'react';
import { motion } from 'motion/react';
import { DOCTOR_PROFILE, DOCTOR_NAME, createWhatsAppLink } from '../data/clinicData';
import { Cpu, Shield, Heart, Calendar, CheckCircle2, Quote, ArrowRight } from 'lucide-react';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { CurvedSectionDivider } from './CurvedSectionDivider';

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
    <section id="nosotros" className="py-10 sm:py-12 relative overflow-hidden bg-[#F8FAFC]">
      {/* 1. Intercalated Background Photo Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop"
          alt="Instalaciones médicas Odontología Gabriel Miranda"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-[0.03] filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white/80 to-[#F8FAFC]" />
      </div>

      {/* 2. Floating 3D Curved Ribbon */}
      <OrganicDentalRibbon className="top-1/4 -left-16 w-96 md:w-[32rem] opacity-50" variant="cyan" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-2 sm:pb-3">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-5 sm:mb-7 space-y-2.5"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            Conoce al {DOCTOR_NAME} y su Filosofía de Atención
          </h2>
          <p className="text-sm sm:text-base text-slate-600 text-justify">
            Especialista comprometido con la excelencia científica, la innovación tecnológica y un trato empático donde tu tranquilidad es la máxima prioridad.
          </p>
        </motion.div>

        {/* Doctor Main Profile - Erradicado Box-in-Box, Superficie Abierta y Orgánica */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-10 sm:mb-12"
        >
          {/* Left Doctor Photo with Architectural Arch Portal Mask & Glowing Rim */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Outer Architectural Arch Frame with Medical Cyan-Sky Gradient */}
              <div className="p-2 rounded-t-[16rem] rounded-b-[3.5rem] bg-gradient-to-b from-cyan-300 via-sky-100 to-white shadow-[0_25px_60px_-15px_rgba(0,90,156,0.25)] relative group">
                
                {/* Inner Masked Viewport */}
                <div className="relative rounded-t-[15.5rem] rounded-b-[3rem] overflow-hidden bg-slate-900 h-[480px] sm:h-[530px]">
                  <img
                    src={DOCTOR_PROFILE.image}
                    alt={`${DOCTOR_NAME} - Especialista en Odontología`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent p-7 text-white">
                    <h3 className="text-2xl sm:text-3xl font-black">{DOCTOR_NAME}</h3>
                    <p className="text-xs font-semibold text-cyan-300 mt-0.5">{DOCTOR_PROFILE.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Doctor Bio, Credentials & Quote - Open Layout Without Nested Containers */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00BFFF]">
                {DOCTOR_PROFILE.role}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540]">
                Salud, Estética y Tranquilidad en un Solo Lugar
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 text-justify">
                {DOCTOR_PROFILE.bio}
              </p>
            </motion.div>

            {/* Academic Credentials List with Animation */}
            <motion.div variants={itemVariants} className="space-y-3 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#005A9C]">
                Formación y Certificaciones Destacadas:
              </p>
              {DOCTOR_PROFILE.credentials.map((cred, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 transition-transform"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00BFFF] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{cred}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Philosophy Quote with Soft Rounded Pebble */}
            <motion.div
              variants={itemVariants}
              className="p-4 sm:p-6 rounded-[1.8rem] sm:rounded-[2rem] bg-cyan-50/70 relative shadow-2xs"
            >
              <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-[#00BFFF]/20 absolute top-4 right-4" />
              <p className="text-xs sm:text-sm italic text-[#005A9C] font-medium pr-6 sm:pr-8 leading-relaxed text-justify">
                {DOCTOR_PROFILE.philosophy}
              </p>
            </motion.div>

            {/* Action Button */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={createWhatsAppLink(`Hola ${DOCTOR_NAME}, quisiera agendar una consulta personalizada directamente con usted.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#005A9C] to-[#0084DE] hover:from-[#004b83] hover:to-[#0070bc] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#005A9C]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-cyan-200" />
                <span>Agendar consulta</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-200" />
              </motion.a>
            </motion.div>
          </div>

        </motion.div>

        {/* Clinical Technology & Infrastructure Showcase - Open Soft Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="bg-white/95 backdrop-blur-2xl rounded-[3rem] p-6 sm:p-9 lg:p-10 shadow-2xl shadow-cyan-950/5 border border-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Infrastructure Features */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                Instalaciones diseñadas para tu máxima bioseguridad y bienestar
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">
                Nos alejamos del concepto tradicional de clínica fría o estresante. Nuestro consultorio cuenta con diseño acústico sereno, música ambiental relajante y equipamiento digital no invasivo.
              </p>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-4 p-4 rounded-[2rem] bg-slate-50/80 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#005A9C] text-white shrink-0 flex items-center justify-center shadow-xs">
                    <Cpu className="w-5 h-5 text-cyan-200" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">Escáner Óptico Intraoral 3D</h4>
                    <p className="text-xs text-slate-500 mt-1 text-justify">Mapeo milimétrico de tus dientes en solo 3 minutos. Sin pastas ni náuseas.</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-4 p-4 rounded-[2rem] bg-slate-50/80 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#005A9C] text-white shrink-0 flex items-center justify-center shadow-xs">
                    <Heart className="w-5 h-5 text-cyan-200" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">Odontología de Mínima Invasión</h4>
                    <p className="text-xs text-slate-500 mt-1 text-justify">Preservamos al máximo el tejido sano y la estructura biológica natural del diente.</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-4 p-4 rounded-[2rem] bg-slate-50/80 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#005A9C] text-white shrink-0 flex items-center justify-center shadow-xs">
                    <Shield className="w-5 h-5 text-cyan-200" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">Bioseguridad de Grado Hospitalario</h4>
                    <p className="text-xs text-slate-500 mt-1 text-justify">Esterilización certificada en Autoclave Clase B con sellado al vacío de todo el instrumental.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Overlapping Dual-Mask Architectural Composition */}
            <div className="relative flex items-center justify-center pt-4 lg:pt-0">
              {/* Primary Architectural Arch Mask: Clinical Suite */}
              <div className="relative w-full max-w-md rounded-t-[14rem] rounded-b-[3rem] overflow-hidden shadow-2xl p-1.5 bg-gradient-to-b from-cyan-200 via-sky-100 to-white">
                <div className="relative w-full h-[400px] sm:h-[440px] rounded-t-[13.5rem] rounded-b-[2.6rem] overflow-hidden bg-slate-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop"
                    alt="Instalaciones clínicas de Odontología Gabriel Miranda"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md text-[#0A2540] text-center border border-white/60">
                    <p className="text-xs font-bold">Unidad Odontológica Ergonómica 3D</p>
                    <p className="text-[11px] text-slate-500">Diseño acústico sereno y luz natural</p>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Squircle Mask: Sterilization & 3D Lab */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-6 sm:-bottom-8 right-0 sm:-right-6 z-20 w-32 sm:w-44 h-32 sm:h-44 rounded-[2rem] sm:rounded-[2.5rem] rounded-tr-lg p-1.5 bg-gradient-to-br from-white via-cyan-100 to-emerald-200 shadow-2xl shadow-cyan-950/20"
              >
                <div className="relative w-full h-full rounded-[2.2rem] rounded-tr-md overflow-hidden bg-slate-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
                    alt="Instrumental quirúrgico y bioseguridad"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Organic Curved Wave Transition into FAQ Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CurvedSectionDivider position="bottom" fillColor="#FFFFFF" variant="deepCurve" />
      </div>
    </section>
  );
};
