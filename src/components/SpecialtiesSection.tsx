import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Smile,
  ShieldCheck,
  Activity,
  Droplets,
  Zap,
  HeartHandshake,
  Check,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { SPECIALTIES_DATA, createWhatsAppLink, DOCTOR_NAME } from '../data/clinicData';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { CurvedSectionDivider } from './CurvedSectionDivider';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking: (specialtyId: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyForBooking,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive items per view detection
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalItems = SPECIALTIES_DATA.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Keep index within bounds if itemsPerView changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Touch Swipe Handlers for mobile & tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getSpecialtyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#00BFFF]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#00BFFF]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#00BFFF]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#00BFFF]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#00BFFF]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#00BFFF]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#00BFFF]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#00BFFF]" />;
    }
  };

  return (
    <section id="especialidades" className="py-24 relative overflow-hidden bg-slate-50/70">
      {/* 1. Intercalated High-Definition Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1920&auto=format&fit=crop"
          alt="Tecnología dental Odontología Gabriel Miranda"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-[0.035] filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />
      </div>

      {/* 2. Floating 3D Curved Ribbon */}
      <OrganicDentalRibbon className="top-12 -right-16 w-96 md:w-[32rem] opacity-40" variant="blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <span className="px-5 py-2 rounded-full bg-cyan-100/80 text-[#005A9C] text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-md">
            Tratamientos Especializados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            Odontología integral con tecnología de vanguardia
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Cada procedimiento en el consultorio del {DOCTOR_NAME} es personalizado, empleando planificación digital computarizada, materiales de grado biomédico y protocolos de esterilización hospitalaria.
          </p>
        </motion.div>

        {/* 3. Carousel Container with Flanked Controls (Kindev Standard Ergonomics) */}
        <div className="relative px-2 sm:px-4">
          
          {/* Flanked Navigation Button: Left (Kindev Rule 2) */}
          <button
            onClick={handlePrev}
            aria-label="Tratamiento anterior"
            className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md shadow-xl text-[#005A9C] border border-cyan-100 flex items-center justify-center hover:bg-[#005A9C] hover:text-white transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Flanked Navigation Button: Right (Kindev Rule 2) */}
          <button
            onClick={handleNext}
            aria-label="Tratamiento siguiente"
            className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md shadow-xl text-[#005A9C] border border-cyan-100 flex items-center justify-center hover:bg-[#005A9C] hover:text-white transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track Overflow Wrapper */}
          <div
            className="overflow-hidden py-4 -my-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {SPECIALTIES_DATA.map((spec) => (
                <div
                  key={spec.id}
                  className="shrink-0 p-3 sm:p-4.5 flex flex-col"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    className="h-full bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-7 sm:p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group border border-white/80"
                  >
                    <div>
                      {/* Creative Masked Image Viewport Header */}
                      <div className="relative h-44 -mx-7 -mt-7 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-[2.5rem]">
                        <img
                          src={spec.image || "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop"}
                          alt={spec.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                        />
                        
                        {/* Architectural Fade Mask */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#005A9C]/25 via-transparent to-[#00BFFF]/20 mix-blend-overlay" />

                        {/* Floating Icon Portal on Image Edge */}
                        <div className="absolute bottom-2 left-6 z-10 w-13 h-13 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-cyan-100 flex items-center justify-center group-hover:bg-[#005A9C] transition-colors duration-300">
                          <span className="group-hover:brightness-200 transition-all">
                            {getSpecialtyIcon(spec.iconName)}
                          </span>
                        </div>

                        {/* Procedure Badge Top Right */}
                        {spec.badge && (
                          <div className="absolute top-4 right-4 z-10">
                            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-cyan-300 shadow-md border border-cyan-400/30">
                              {spec.badge}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-[#0A2540] mb-2 group-hover:text-[#005A9C] transition-colors">
                        {spec.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                        {spec.shortDesc}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-3 mb-6 text-xs text-slate-700">
                        {spec.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#00BFFF] shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons & WhatsApp Quick Link */}
                    <div className="pt-5 border-t border-slate-100 space-y-3">
                      {/* Estimated duration badge */}
                      <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#00BFFF]" />
                          {spec.estimatedTime || 'Según evaluación'}
                        </span>
                        <span className="text-[#005A9C] font-semibold">Diagnóstico 3D</span>
                      </div>

                      {/* Direct WhatsApp Consultation Button */}
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={createWhatsAppLink(`Hola ${DOCTOR_NAME}, deseo información específica sobre el tratamiento de ${spec.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                        <span>Consultar por WhatsApp</span>
                      </motion.a>

                      {/* Agendar en el formulario */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelectSpecialtyForBooking(spec.id)}
                        className="w-full py-3 px-5 rounded-full bg-slate-100 hover:bg-[#005A9C] hover:text-white text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>Agendar Consulta</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Ir al grupo ${dotIdx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === dotIdx
                    ? 'w-8 bg-gradient-to-r from-[#005A9C] to-[#00BFFF] shadow-xs'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Organic Curved Wave Transition into Casos Reales */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CurvedSectionDivider position="bottom" fillColor="#07182B" variant="wave1" />
      </div>
    </section>
  );
};
