import React from 'react';
import { motion } from 'motion/react';
import { DOCTOR_PROFILE, DOCTOR_NAME, createWhatsAppLink } from '../data/clinicData';
import { Award, Cpu, Shield, Heart, Calendar, CheckCircle2, Quote, ArrowRight } from 'lucide-react';
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
    <section id="nosotros" className="py-24 relative overflow-hidden bg-[#F8FAFC]">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="px-5 py-2 rounded-full bg-cyan-100/80 text-[#005A9C] text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-md">
            Autoridad & Humanismo Médico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            Conoce al {DOCTOR_NAME} y su Filosofía de Atención
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Especialista comprometido con la excelencia científica, la innovación tecnológica y un trato empático donde tu tranquilidad es la máxima prioridad.
          </p>
        </motion.div>

        {/* Doctor Main Profile - Erradicado Box-in-Box, Superficie Abierta y Orgánica */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20"
        >
          {/* Left Doctor Photo with Organic Curved Pebble Silhouette */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            <div className="rounded-[3.5rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] overflow-hidden shadow-2xl bg-slate-100 relative group">
              <img
                src={DOCTOR_PROFILE.image}
                alt={`${DOCTOR_NAME} - Especialista en Odontología`}
                referrerPolicy="no-referrer"
                className="w-full h-[470px] sm:h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Experience Tag with Rounded Pill Shape */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-extrabold text-[#005A9C] shadow-lg flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-[#00BFFF]" />
                <span>+{DOCTOR_PROFILE.experienceYears} Años de Trayectoria</span>
              </motion.div>

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent p-7 text-white">
                <h3 className="text-2xl sm:text-3xl font-black">{DOCTOR_NAME}</h3>
                <p className="text-xs font-semibold text-cyan-300 mt-0.5">{DOCTOR_PROFILE.title}</p>
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
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
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
              className="p-6 rounded-[2rem] bg-cyan-50/70 relative shadow-2xs"
            >
              <Quote className="w-7 h-7 text-[#00BFFF]/20 absolute top-4 right-4" />
              <p className="text-xs sm:text-sm italic text-[#005A9C] font-medium pr-8 leading-relaxed">
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
                <span>Agendar Consulta con el {DOCTOR_NAME.split(' ')[1]}</span>
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
          className="bg-white/95 backdrop-blur-2xl rounded-[3rem] p-8 sm:p-12 shadow-2xl shadow-cyan-950/5 border border-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Infrastructure Features */}
            <div className="space-y-6">
              <span className="px-5 py-2 rounded-full bg-cyan-100 text-[#005A9C] text-xs font-bold uppercase tracking-wider">
                Infraestructura & Tecnología
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                Instalaciones diseñadas para tu máxima bioseguridad y bienestar
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
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
                    <p className="text-xs text-slate-500 mt-1">Mapeo milimétrico de tus dientes en solo 3 minutos. Sin pastas ni náuseas.</p>
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
                    <p className="text-xs text-slate-500 mt-1">Preservamos al máximo el tejido sano y la estructura biológica natural del diente.</p>
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
                    <p className="text-xs text-slate-500 mt-1">Esterilización certificada en Autoclave Clase B con sellado al vacío de todo el instrumental.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Modern Clinical Equipment Photo with Organic Curved Frame */}
            <div className="relative">
              <div className="rounded-[3rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop"
                  alt="Instalaciones clínicas de Odontología Gabriel Miranda"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Bottom Quote */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#0A2540] text-white p-5 rounded-[2rem] shadow-xl max-w-sm hidden sm:block border border-white/10"
              >
                <p className="text-xs font-bold text-[#00BFFF] mb-1">Cero Temores, Cero Dolor</p>
                <p className="text-[11px] text-cyan-100 leading-snug">
                  "Te explicamos paso a paso cada detalle antes de intervenir para que vivas tu tratamiento con completa confianza."
                </p>
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
