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
        {/* 4 Main Metrics: Cápsulas de Esmalte Enmascaradas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CLINIC_STATS.map((stat, idx) => {
            const statPhotos = [
              "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop",
            ];
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col items-center text-center p-4 sm:p-5 rounded-[2rem] bg-gradient-to-b from-cyan-50/40 via-white/80 to-cyan-50/20 border border-cyan-100/60 shadow-xs relative overflow-hidden group transition-all"
              >
                {/* Subtle Masked Micro-Photo Background */}
                <div
                  className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none"
                  style={{
                    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
                    maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
                  }}
                >
                  <img
                    src={statPhotos[idx % statPhotos.length]}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>

                <div className="w-13 h-13 rounded-full bg-cyan-50/90 border border-cyan-100/80 flex items-center justify-center mb-2.5 text-[#005A9C] shadow-xs group-hover:scale-110 transition-transform relative z-10">
                  {getStatIcon(stat.iconName)}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A2540] tracking-tight relative z-10">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#005A9C] mt-1 relative z-10">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 relative z-10">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
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
