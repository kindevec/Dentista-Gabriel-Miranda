import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Star, ShieldCheck, Cpu } from 'lucide-react';
import { CLINIC_STATS } from '../data/clinicData';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';

export const TrustCounters: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-[#00BFFF]" />;
      case 'Award':
        return <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#00BFFF]" />;
      case 'Users':
        return <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#00BFFF]" />;
      case 'Star':
        return <Star className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 fill-amber-400/20" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-500" />;
      default:
        return <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#00BFFF]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="confianza" className="py-14 sm:py-16 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Masked Texture */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1920&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.03] filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white/80 to-[#F8FAFC]" />
      </div>

      {/* Floating 3D Curved Dental Ribbons */}
      <OrganicDentalRibbon className="-top-12 -left-20 w-[30rem] opacity-35" variant="cyan" />
      <OrganicDentalRibbon className="bottom-0 -right-20 w-[28rem] opacity-30" variant="blue" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            Cifras Reales que Avalan Nuestra Experiencia
          </h2>
          <p className="text-sm sm:text-base text-slate-600 text-justify">
            Práctica clínica fundamentada en diagnósticos digitales 3D, bioseguridad hospitalaria y tratamientos indoloros.
          </p>
        </motion.div>

        {/* Central Trust Island - Open, Softly Curved Surface */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white/95 backdrop-blur-2xl rounded-[3rem] p-6 sm:p-8 lg:p-9 shadow-2xl shadow-cyan-950/5 border border-white"
        >
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
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex flex-col items-center text-center p-5 sm:p-6 rounded-[2.2rem] bg-gradient-to-b from-cyan-50/40 via-white/90 to-sky-50/30 border border-cyan-100/70 hover:border-cyan-300 shadow-xs hover:shadow-xl hover:shadow-[#005A9C]/10 relative overflow-hidden group transition-all duration-300"
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

                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-50 to-sky-100 border border-cyan-200/80 flex items-center justify-center mb-3 text-[#005A9C] shadow-xs group-hover:scale-110 transition-transform relative z-10">
                    {getStatIcon(stat.iconName)}
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight relative z-10">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#005A9C] mt-1.5 relative z-10">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 relative z-10 leading-snug">
                    {stat.sublabel}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
