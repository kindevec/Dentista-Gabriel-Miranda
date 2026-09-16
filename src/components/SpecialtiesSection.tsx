import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Layers,
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
  onSelectSpecialtyForBooking?: (specialtyId: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyForBooking: _onSelectSpecialtyForBooking,
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
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#00BFFF]" />;
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
        return <Layers className="w-6 h-6 text-[#00BFFF]" />;
    }
  };

  return (
    <section id="especialidades" className="py-14 sm:py-16 relative overflow-hidden bg-slate-50/70">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-4 sm:pb-6">
        
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            Odontología integral con tecnología de vanguardia
          </h2>
          <p className="text-sm sm:text-base text-slate-600 text-justify">
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
                  className="shrink-0 p-2.5 sm:p-3.5 flex flex-col"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.012 }}
                    className="h-full rounded-[2.6rem] shadow-xl shadow-slate-950/15 hover:shadow-2xl hover:shadow-[#005A9C]/25 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group border border-slate-700/40 hover:border-cyan-400/50 bg-slate-950 min-h-[540px]"
                  >
                    {/* Background High-Resolution Image (Covering Full Width & Full Height, No Margin, No Padding) */}
                    <img
                      src={spec.image || "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop"}
                      alt={spec.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    />

                    {/* Gradient Overlay for Immersive Contrast & Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 via-50% to-slate-950/45 pointer-events-none group-hover:via-slate-950/75 transition-colors duration-500" />

                    {/* Subtle Ambient Radial Glow on Hover */}
                    <div className="absolute -right-16 -top-16 w-44 h-44 bg-gradient-to-br from-[#00BFFF]/20 via-cyan-400/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

                    {/* Card Content (Layered over the full-bleed image) */}
                    <div className="relative z-10 p-5 sm:p-7 flex flex-col justify-between h-full">
                      <div>
                        {/* Top Bar: Specialty Icon & Procedure/Badge Tags */}
                        <div className="flex items-center justify-between gap-2 mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-cyan-300 shadow-md group-hover:bg-[#005A9C] group-hover:text-white transition-all duration-300">
                            {getSpecialtyIcon(spec.iconName)}
                          </div>

                          <div className="flex items-center gap-2">
                            {spec.badge && (
                              <span className="px-3 py-1 rounded-full bg-cyan-500/90 text-white text-[10px] sm:text-[11px] font-extrabold shadow-sm tracking-wide">
                                {spec.badge}
                              </span>
                            )}
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-cyan-200 text-[11px] font-semibold border border-white/15">
                              <Clock className="w-3.5 h-3.5 text-[#00BFFF]" />
                              <span>{spec.estimatedTime || 'Evaluación 3D'}</span>
                            </div>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-xl sm:text-2xl font-black text-white mb-2.5 group-hover:text-cyan-300 transition-colors leading-snug">
                          {spec.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-200 mb-4 leading-relaxed text-justify">
                          {spec.shortDesc}
                        </p>

                        {/* Clinical Highlights List */}
                        <div className="space-y-2 mb-6">
                          {spec.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-100 font-medium leading-snug">
                              <div className="w-4 h-4 rounded-full bg-cyan-400/20 border border-cyan-400/50 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Single Direct WhatsApp CTA (Space-Optimized) */}
                      <div className="pt-4 border-t border-white/15 mt-auto">
                        <motion.a
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          href={createWhatsAppLink(spec.waMessage || `Hola ${DOCTOR_NAME}, deseo información y solicitar una cita sobre el tratamiento de ${spec.title}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0f7a6d] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 group/btn cursor-pointer"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
                          <span>Consultar por WhatsApp</span>
                          <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover/btn:translate-x-1 transition-transform" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
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
