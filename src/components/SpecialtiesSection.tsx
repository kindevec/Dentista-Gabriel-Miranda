import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
import { cn } from '../lib/utils';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking?: (specialtyId: string) => void;
}

const AUTO_PLAY_INTERVAL = 4200;
const ITEM_HEIGHT = 70;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyForBooking: _onSelectSpecialtyForBooking,
}) => {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalItems = SPECIALTIES_DATA.length;
  const currentIndex = ((step % totalItems) + totalItems) % totalItems;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const prevStep = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + totalItems) % totalItems;
    if (diff !== 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = totalItems;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return 'active';
    if (normalizedDiff === -1) return 'prev';
    if (normalizedDiff === 1) return 'next';
    return 'hidden';
  };

  // Touch Swipe Handlers for mobile
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
      nextStep();
    } else if (distance < -minSwipeDistance) {
      prevStep();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getSpecialtyIcon = (iconName: string, className = 'w-5 h-5 text-[#00BFFF]') => {
    switch (iconName) {
      case 'Layers':
        return <Layers className={className} />;
      case 'Smile':
        return <Smile className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Activity':
        return <Activity className={className} />;
      case 'Droplets':
        return <Droplets className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      case 'HeartHandshake':
        return <HeartHandshake className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <section id="especialidades" className="py-14 sm:py-20 relative overflow-hidden bg-slate-50/70">
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100/70 text-[#005A9C] text-xs font-bold mb-1">
            <span className="w-2 h-2 rounded-full bg-[#00BFFF]" />
            <span>Tratamientos Odontológicos Avanzados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            Odontología integral con tecnología de vanguardia
          </h2>
          <p className="text-sm sm:text-base text-slate-600 text-justify">
            Cada procedimiento en el consultorio del {DOCTOR_NAME} es personalizado, empleando planificación digital computarizada, materiales de grado biomédico y protocolos de esterilización hospitalaria.
          </p>
        </motion.div>

        {/* 3. Luxury 3D Feature Carousel Showcase */}
        <div
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] flex flex-col lg:flex-row min-h-[580px] lg:min-h-[640px] border border-cyan-200/80 bg-white/95 backdrop-blur-2xl shadow-2xl shadow-cyan-950/10">
            
            {/* Left Column: Interactive Wheel of Specialties */}
            <div className="w-full lg:w-[40%] relative z-30 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#005A9C] via-[#0A2540] to-[#003B66] p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-cyan-400/20">
              {/* Panel Top Title */}
              <div className="relative z-40 mb-3 lg:mb-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-cyan-300 text-xs font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse" />
                  <span>Navegación 3D</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
                  Especialidades <span className="text-[#00BFFF]">Digitales</span>
                </h3>
                <p className="text-xs sm:text-sm text-cyan-100/70 mt-1 hidden sm:block">
                  Selecciona una especialidad para ver su tecnología y plan clínico.
                </p>
              </div>

              {/* Desktop Vertical Spring Wheel (hidden on mobile, visible on lg) */}
              <div className="hidden lg:flex relative w-full h-[380px] items-center justify-start overflow-hidden my-auto">
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#005A9C] via-[#005A9C]/80 to-transparent z-40 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/80 to-transparent z-40 pointer-events-none" />

                <div className="relative w-full h-full flex items-center justify-start z-20">
                  {SPECIALTIES_DATA.map((spec, index) => {
                    const isActive = index === currentIndex;
                    const distance = index - currentIndex;
                    const wrappedDistance = wrap(
                      -(SPECIALTIES_DATA.length / 2),
                      SPECIALTIES_DATA.length / 2,
                      distance
                    );

                    return (
                      <motion.div
                        key={spec.id}
                        style={{
                          height: ITEM_HEIGHT,
                          width: '100%',
                        }}
                        animate={{
                          y: wrappedDistance * ITEM_HEIGHT,
                          opacity: 1 - Math.abs(wrappedDistance) * 0.28,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 90,
                          damping: 22,
                          mass: 1,
                        }}
                        className="absolute flex items-center justify-start w-full pr-4"
                      >
                        <button
                          onClick={() => handleChipClick(index)}
                          className={cn(
                            'relative flex items-center gap-3.5 w-full px-5 py-3.5 rounded-2xl transition-all duration-500 text-left group border cursor-pointer',
                            isActive
                              ? 'bg-white text-[#0A2540] shadow-xl shadow-cyan-950/25 border-white z-10 scale-102'
                              : 'bg-white/5 text-white/70 border-white/10 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white'
                          )}
                        >
                          <div
                            className={cn(
                              'w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0',
                              isActive
                                ? 'bg-[#005A9C] text-white shadow-xs'
                                : 'bg-white/10 text-cyan-300 group-hover:text-white'
                            )}
                          >
                            {getSpecialtyIcon(spec.iconName, isActive ? 'w-5 h-5 text-white' : 'w-5 h-5 text-cyan-300')}
                          </div>

                          <div className="flex flex-col min-w-0">
                            <span
                              className={cn(
                                'font-bold text-sm tracking-tight truncate',
                                isActive ? 'text-[#0A2540]' : 'text-white'
                              )}
                            >
                              {spec.title}
                            </span>
                            <span
                              className={cn(
                                'text-[11px] truncate',
                                isActive ? 'text-slate-500' : 'text-cyan-200/60'
                              )}
                            >
                              {spec.estimatedTime || 'Evaluación 3D'}
                            </span>
                          </div>

                          {isActive && (
                            <span className="ml-auto w-2 h-2 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF]" />
                          )}
                        </button>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Horizontal Pill Scroller (visible on < lg) */}
              <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none py-1">
                {SPECIALTIES_DATA.map((spec, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <button
                      key={spec.id}
                      onClick={() => handleChipClick(index)}
                      className={cn(
                        'flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold shrink-0 transition-all border cursor-pointer',
                        isActive
                          ? 'bg-white text-[#005A9C] border-white shadow-md'
                          : 'bg-white/10 text-white/80 border-white/15'
                      )}
                    >
                      {getSpecialtyIcon(spec.iconName, isActive ? 'w-4 h-4 text-[#005A9C]' : 'w-4 h-4 text-cyan-300')}
                      <span className="truncate max-w-[130px]">{spec.title.split(' ')[0]} {spec.title.split(' ')[1] || ''}</span>
                    </button>
                  );
                })}
              </div>

              {/* Left Panel Footer: Index and Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-white/15 text-xs text-white/70">
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-cyan-300 font-bold">0{currentIndex + 1}</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/50">0{totalItems}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevStep}
                    aria-label="Especialidad anterior"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextStep}
                    aria-label="Especialidad siguiente"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Stack / Card Perspective Showcase */}
            <div
              className="flex-1 relative flex items-center justify-center py-8 sm:py-12 lg:py-10 px-4 sm:px-8 lg:px-10 overflow-hidden bg-slate-900/5 min-h-[580px] lg:min-h-[640px]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-full max-w-[480px] h-[520px] sm:h-[560px] flex items-center justify-center">
                {SPECIALTIES_DATA.map((spec, index) => {
                  const status = getCardStatus(index);
                  const isActive = status === 'active';
                  const isPrev = status === 'prev';
                  const isNext = status === 'next';

                  return (
                    <motion.div
                      key={spec.id}
                      initial={false}
                      animate={{
                        x: isActive ? 0 : isPrev ? -85 : isNext ? 85 : 0,
                        scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.72,
                        opacity: isActive ? 1 : isPrev || isNext ? 0.45 : 0,
                        rotate: isPrev ? -3 : isNext ? 3 : 0,
                        zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                        pointerEvents: isActive ? 'auto' : isPrev || isNext ? 'auto' : 'none',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 240,
                        damping: 24,
                        mass: 0.8,
                      }}
                      onClick={() => {
                        if (isPrev) prevStep();
                        if (isNext) nextStep();
                      }}
                      className={cn(
                        'absolute inset-0 rounded-[2.5rem] overflow-hidden border-2 shadow-2xl transition-shadow duration-500 bg-slate-950 flex flex-col justify-between select-none cursor-default',
                        isActive
                          ? 'border-cyan-400/50 shadow-cyan-950/25'
                          : 'border-white/10 hover:border-cyan-300/40 cursor-pointer'
                      )}
                    >
                      {/* Full-bleed clinical image with zero margin / zero padding */}
                      <img
                        src={spec.image || 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop'}
                        alt={spec.title}
                        referrerPolicy="no-referrer"
                        className={cn(
                          'absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none',
                          isActive ? 'scale-100 brightness-100' : 'scale-105 brightness-75 blur-[1px]'
                        )}
                      />

                      {/* Luxury contrast gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 via-55% to-slate-950/35 pointer-events-none" />

                      {/* Top Bar inside Card */}
                      <div className="relative z-20 p-5 sm:p-6 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-cyan-300 shadow-md">
                            {getSpecialtyIcon(spec.iconName, 'w-5 h-5 text-cyan-300')}
                          </div>
                          {spec.badge && (
                            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-[#005A9C] text-white text-[10px] sm:text-[11px] font-extrabold shadow-sm tracking-wide">
                              {spec.badge}
                            </span>
                          )}
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-cyan-200 text-[11px] font-semibold border border-white/15">
                          <Clock className="w-3.5 h-3.5 text-[#00BFFF]" />
                          <span>{spec.estimatedTime || 'Evaluación 3D'}</span>
                        </div>
                      </div>

                      {/* Bottom Content inside Card */}
                      <div className="relative z-20 p-5 sm:p-6 pt-0 flex flex-col justify-end">
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.35 }}
                            >
                              <div className="inline-block bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider mb-2 backdrop-blur-md">
                                Especialidad {index + 1} de {totalItems}
                              </div>

                              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
                                {spec.title}
                              </h3>

                              <p className="text-xs sm:text-[13px] text-slate-200 mb-3.5 line-clamp-2 leading-relaxed text-justify">
                                {spec.shortDesc}
                              </p>

                              {/* Highlights Bullet Points */}
                              <div className="space-y-1.5 mb-5">
                                {spec.features.slice(0, 3).map((feat, fIdx) => (
                                  <div key={fIdx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-100 font-medium">
                                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 border border-cyan-400/50 text-cyan-300 flex items-center justify-center shrink-0 shadow-2xs">
                                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                                    </div>
                                    <span className="truncate">{feat}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Direct WhatsApp CTA */}
                              <motion.a
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                href={createWhatsAppLink(spec.waMessage || `Hola ${DOCTOR_NAME}, deseo información y solicitar una cita sobre el tratamiento de ${spec.title}.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0f7a6d] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/30 group/btn cursor-pointer"
                              >
                                <WhatsAppIcon className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
                                <span>Consultar por WhatsApp</span>
                                <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover/btn:translate-x-1 transition-transform" />
                              </motion.a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
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