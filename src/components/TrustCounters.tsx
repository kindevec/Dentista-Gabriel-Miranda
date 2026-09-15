import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Star, ShieldCheck, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_STATS } from '../data/clinicData';

export const TrustCounters: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#00BFFF]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#00BFFF]" />;
      case 'Star':
        return <Star className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-500" />;
      default:
        return <Award className="w-6 h-6 text-[#00BFFF]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <div className="relative -mt-6 sm:-mt-10 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Open, Softly Curved Island - Cero Box-in-Box, Cero Líneas Rectas Rígidas */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-7 sm:p-9 shadow-2xl shadow-cyan-950/5 border border-white/60"
      >
        {/* 4 Main Metrics: Sin divisores rígidos rectos, flotando libremente */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CLINIC_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex flex-col items-center text-center transition-all"
            >
              <div className="w-13 h-13 rounded-full bg-cyan-50/80 flex items-center justify-center mb-2.5 text-[#005A9C]">
                {getStatIcon(stat.iconName)}
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A2540] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#005A9C] mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Pills: Formas de píldora redondeadas 100% orgánicas sin cajas anidadas */}
        <div className="mt-7 pt-6 border-t border-slate-100/80 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50/90 text-xs font-semibold text-slate-700 shadow-2xs"
          >
            <Cpu className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span>Escaneo Digital 3D</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50/90 text-xs font-semibold text-slate-700 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#005A9C]" />
            <span>Ortodoncia Invisible</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50/90 text-xs font-semibold text-slate-700 shadow-2xs"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Autoclave Clase B</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50/90 text-xs font-semibold text-slate-700 shadow-2xs"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0084DE]" />
            <span>Financiamiento Sin Intereses</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
