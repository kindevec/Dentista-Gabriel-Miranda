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
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { SPECIALTIES_DATA, createWhatsAppLink, DOCTOR_NAME } from '../data/clinicData';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { CurvedSectionDivider } from './CurvedSectionDivider';
import { cn } from '../lib/utils';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking?: (specialtyId: string) => void;
}

const ITEM_HEIGHT = 68;
const VIRTUAL_OFFSETS = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

const SPECIALTY_SHORT_TITLES: Record<string, string> = {
  ortodoncia: 'Ortodoncia 3D',
  'diseno-sonrisa': 'Diseño de Sonrisa',
  implantes: 'Implantes Guiados',
  endodoncia: 'Endodoncia',
  'limpieza-profilaxis': 'Limpieza Ultrasónica',
  blanqueamiento: 'Blanqueamiento Láser',
  odontopediatria: 'Odontopediatría',
};

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyForBooking: _onSelectSpecialtyForBooking,
}) => {
  const [step, setStep] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchStartYTrack = useRef<number | null>(null);
  const wheelCooldownRef = useRef<boolean>(false);
  const mobilePillsRef = useRef<HTMLDivElement>(null);

  const totalItems = SPECIALTIES_DATA.length;
  const currentIndex = ((step % totalItems) + totalItems) % totalItems;

  // Smoothly center the active pill strictly horizontally without ever scrolling the window vertically
  useEffect(() => {
    const container = mobilePillsRef.current;
    if (!container) return;
    const activeBtn = container.querySelector(`[data-pill-index="${currentIndex}"]`) as HTMLElement;
    if (activeBtn) {
      const scrollTarget = activeBtn.offsetLeft - (container.clientWidth / 2) + (activeBtn.clientWidth / 2);
      container.scrollTo({
        left: Math.max(0, scrollTarget),
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const prevStep = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  // Shortest signed difference to rotate directly to target item
  const handleChipClick = (index: number) => {
    let diff = index - currentIndex;
    if (diff > totalItems / 2) diff -= totalItems;
    if (diff < -totalItems / 2) diff += totalItems;
    if (diff !== 0) setStep((s) => s + diff);
  };

  // Mouse wheel listener with cooldown to step through infinite loop smoothly
  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    if (wheelCooldownRef.current) return;
    if (Math.abs(e.deltaY) < 16) return;

    wheelCooldownRef.current = true;
    setTimeout(() => {
      wheelCooldownRef.current = false;
    }, 180);

    if (e.deltaY > 0) {
      setStep((s) => s + 1);
    } else {
      setStep((s) => s - 1);
    }
  };

  // Touch Swipe Handlers for vertical wheel track
  const handleTouchStartTrack = (e: React.TouchEvent) => {
    touchStartYTrack.current = e.targetTouches[0].clientY;
  };

  const handleTouchEndTrack = (e: React.TouchEvent) => {
    if (touchStartYTrack.current === null) return;
    const endY = e.changedTouches[0].clientY;
    const diff = touchStartYTrack.current - endY;
    if (diff > 35) {
      setStep((s) => s + 1);
    } else if (diff < -35) {
      setStep((s) => s - 1);
    }
    touchStartYTrack.current = null;
  };

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
    <section id="servicios" className="py-14 sm:py-20 relative overflow-hidden bg-slate-50/70">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            Especialidades <span className="text-[#005A9C]">Digitales</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Selecciona una especialidad para ver su tecnología y plan clínico.
          </p>
        </motion.div>

        {/* 3. Luxury 3D Feature Carousel Showcase */}
        <div id="especialidades" className="w-full max-w-6xl mx-auto scroll-mt-24">
          {/* ========================================================================= */}
          {/* DESKTOP EXPERIENCE (lg:grid) — SOBRE EL LIENZO DIRECTAMENTE (SIN BOX-IN-BOX) */}
          {/* ========================================================================= */}
          <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-12 items-center min-h-[620px] py-4">
            {/* Left Column: Interactive Wheel of Specialties sobre el lienzo */}
            <div className="col-span-5 relative z-20 flex flex-col justify-center my-auto">

              {/* Desktop Infinite Loop Wheel con marcada presencia azulada */}
              <div
                onWheel={handleWheel}
                onTouchStart={handleTouchStartTrack}
                onTouchEnd={handleTouchEndTrack}
                className="relative w-full h-[460px] flex items-center justify-start overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-sky-100/75 via-blue-50/50 to-sky-100/75 border border-sky-200/90 shadow-xl shadow-[#005A9C]/8 backdrop-blur-md p-3 select-none my-auto"
              >
                {/* Top fade gradient */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-sky-100 via-sky-100/80 to-transparent z-30 pointer-events-none rounded-t-[2.5rem]" />
                {/* Bottom fade gradient */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-sky-100 via-sky-100/80 to-transparent z-30 pointer-events-none rounded-b-[2.5rem]" />

                {/* Quick Infinite Navigation Chevrons */}
                <div className="absolute right-3.5 top-3.5 z-40 flex flex-col gap-1.5">
                  <button
                    type="button"
                    onClick={prevStep}
                    aria-label="Especialidad anterior"
                    className="w-8 h-8 rounded-full bg-white/95 hover:bg-[#005A9C] text-[#005A9C] hover:text-white border border-sky-200 shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    aria-label="Siguiente especialidad"
                    className="w-8 h-8 rounded-full bg-white/95 hover:bg-[#005A9C] text-[#005A9C] hover:text-white border border-sky-200 shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* Loop Scroll Hint */}
                <div className="absolute bottom-3 left-6 z-40 flex items-center gap-1.5 text-[10.5px] font-semibold text-[#005A9C]/75 tracking-tight pointer-events-none">
                  <Activity className="w-3 h-3 text-[#0084DE] animate-pulse" />
                  <span>Rueda infinita 3D · Gira o haz clic para explorar</span>
                </div>

                {/* Infinite Continuous Virtual Track */}
                <motion.div
                  animate={{ y: 196 - step * ITEM_HEIGHT }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 26,
                    mass: 0.8,
                  }}
                  className="relative w-full h-full z-20"
                >
                  {VIRTUAL_OFFSETS.map((offset) => {
                    const absIndex = step + offset;
                    const specIndex = ((absIndex % totalItems) + totalItems) % totalItems;
                    const spec = SPECIALTIES_DATA[specIndex];
                    const isActive = offset === 0;
                    const distance = Math.abs(offset);

                    return (
                      <div
                        key={absIndex}
                        style={{
                          position: 'absolute',
                          top: absIndex * ITEM_HEIGHT,
                          left: 0,
                          right: 0,
                          height: ITEM_HEIGHT,
                        }}
                        className="flex items-center justify-start w-full py-1 pr-14 pl-1"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            if (offset !== 0) {
                              setStep((s) => s + offset);
                            }
                          }}
                          className={cn(
                            'relative flex items-center gap-3.5 w-full h-full px-4 sm:px-5 py-3 rounded-2xl transition-all duration-300 text-left group border cursor-pointer select-none',
                            isActive
                              ? 'bg-gradient-to-r from-[#005A9C] via-[#0070BA] to-[#0A2540] text-white shadow-xl shadow-[#005A9C]/35 border-cyan-300 ring-2 ring-[#00BFFF]/50 scale-[1.02] z-20'
                              : 'bg-gradient-to-r from-sky-100/95 via-blue-100/80 to-cyan-50/90 hover:from-sky-200 hover:via-blue-100 hover:to-cyan-100 text-[#005A9C] border-sky-300/90 hover:border-[#0084DE] shadow-xs hover:shadow-md hover:shadow-[#005A9C]/15'
                          )}
                          style={{
                            opacity: isActive ? 1 : Math.max(0.35, 1 - distance * 0.18),
                            transform: isActive ? 'scale(1.02)' : `scale(${Math.max(0.92, 1 - distance * 0.025)})`,
                          }}
                        >
                          <div
                            className={cn(
                              'w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 shadow-xs',
                              isActive
                                ? 'bg-white/20 text-white border border-white/35 backdrop-blur-sm'
                                : 'bg-white text-[#005A9C] border border-sky-300 group-hover:bg-[#005A9C] group-hover:text-white group-hover:border-[#005A9C]'
                            )}
                          >
                            {getSpecialtyIcon(spec.iconName, isActive ? 'w-5 h-5 text-white' : 'w-5 h-5 text-[#005A9C] group-hover:text-white transition-colors')}
                          </div>

                          <div className="flex flex-col min-w-0">
                            <span
                              className={cn(
                                'font-extrabold text-sm tracking-tight truncate transition-colors',
                                isActive ? 'text-white' : 'text-[#004B87] group-hover:text-[#002D54]'
                              )}
                            >
                              {spec.title}
                            </span>
                            <span
                              className={cn(
                                'text-[11px] truncate font-semibold transition-colors',
                                isActive ? 'text-cyan-200' : 'text-[#0070BA]'
                              )}
                            >
                              {spec.estimatedTime || 'Evaluación 3D'}
                            </span>
                          </div>

                          {isActive ? (
                            <span className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-400/20 border border-cyan-300/40 shrink-0">
                              <span className="w-2 h-2 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF] animate-pulse" />
                              <span className="text-[10px] font-bold text-cyan-100 uppercase tracking-wider">Activo</span>
                            </span>
                          ) : (
                            <span className="ml-auto opacity-0 group-hover:opacity-100 text-[#0084DE] transition-opacity shrink-0">
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>

            {/* Right Column: 3D Stack / Card Perspective Showcase sobre el lienzo */}
            <div className="col-span-7 relative flex flex-col items-center justify-center py-4">
              <div className="relative w-full max-w-[480px] h-[560px] flex items-center justify-center">
                {/* Dynamic Ambient Glow sobre el lienzo */}
                <motion.div
                  key={`glow-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 z-0 pointer-events-none"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-[#00BFFF]/12 rounded-full blur-[90px]" />
                </motion.div>

                {SPECIALTIES_DATA.map((spec, index) => {
                  const status = getCardStatus(index);
                  const isActive = status === 'active';
                  const isPrev = status === 'prev';
                  const isNext = status === 'next';
                  const sideOffset = 85;

                  return (
                    <motion.div
                      key={spec.id}
                      initial={false}
                      animate={{
                        x: isActive ? 0 : isPrev ? -sideOffset : isNext ? sideOffset : 0,
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
                      {/* Full-bleed clinical image */}
                      <img
                        src={spec.image || 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop'}
                        alt={spec.title}
                        referrerPolicy="no-referrer"
                        className={cn(
                          'absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none',
                          isActive ? 'scale-100 brightness-100' : 'scale-105 brightness-75 blur-[1px]'
                        )}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 via-55% to-slate-950/35 pointer-events-none" />

                      {/* Top Bar inside Card */}
                      <div className="relative z-20 p-6 flex items-center">
                        <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-cyan-300 shadow-md">
                          {getSpecialtyIcon(spec.iconName, 'w-5 h-5 text-cyan-300')}
                        </div>
                      </div>

                      {/* Bottom Content inside Card */}
                      <div className="relative z-20 p-6 pt-0 flex flex-col justify-end">
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.35 }}
                            >
                              <h3 className="text-2xl font-black text-white leading-tight mb-2">
                                {spec.title}
                              </h3>

                              <p className="text-[13px] text-slate-200 mb-3.5 line-clamp-2 leading-relaxed text-justify">
                                {spec.shortDesc}
                              </p>

                              <div className="space-y-1.5 mb-4">
                                {spec.features.slice(0, 3).map((feat, fIdx) => (
                                  <motion.div
                                    key={fIdx}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 + fIdx * 0.1, duration: 0.3 }}
                                    className="flex items-center gap-2 text-xs text-slate-100 font-medium"
                                  >
                                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 border border-cyan-400/50 text-cyan-300 flex items-center justify-center shrink-0 shadow-2xs">
                                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                                    </div>
                                    <span className="truncate">{feat}</span>
                                  </motion.div>
                                ))}
                              </div>

                              {spec.suitableFor && (
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.45, duration: 0.3 }}
                                  className="text-[11px] text-cyan-200/70 italic mb-4 line-clamp-1"
                                >
                                  Ideal para: {spec.suitableFor}
                                </motion.p>
                              )}

                              <motion.a
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.3 }}
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

              {/* Dot Position Indicators */}
              <div className="flex items-center gap-1.5 mt-6 justify-center">
                {SPECIALTIES_DATA.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => handleChipClick(dotIdx)}
                    aria-label={`Ir a especialidad ${dotIdx + 1}`}
                    className={cn(
                      'rounded-full transition-all duration-400 cursor-pointer',
                      dotIdx === currentIndex
                        ? 'w-6 h-2 bg-gradient-to-r from-[#005A9C] to-[#00BFFF] shadow-[0_0_8px_rgba(0,90,156,0.3)]'
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* MOBILE EXPERIENCE (lg:hidden) — ERGONOMIC, CLEAN, NO JUMP */}
          {/* ========================================================= */}
          <div className="lg:hidden flex flex-col gap-3.5">
            {/* 1. Horizontal Category Pill Navigation with Full Readable Names */}
            <div
              ref={mobilePillsRef}
              className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 px-1 scrollbar-none scroll-smooth"
            >
              {SPECIALTIES_DATA.map((spec, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={spec.id}
                    data-pill-index={index}
                    onClick={() => handleChipClick(index)}
                    className={cn(
                      'flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold shrink-0 transition-all duration-300 border cursor-pointer select-none active:scale-95',
                      isActive
                        ? 'bg-gradient-to-r from-[#005A9C] via-[#0066B3] to-[#0A2540] text-white border-cyan-400/60 shadow-md shadow-[#005A9C]/25 ring-2 ring-cyan-400/25'
                        : 'bg-sky-100/80 text-[#005A9C] border-sky-200 hover:bg-sky-200/90 shadow-2xs'
                    )}
                  >
                    <span className={cn(
                      'w-4 h-4 flex items-center justify-center shrink-0',
                      isActive ? 'text-cyan-300' : 'text-[#005A9C]'
                    )}>
                      {getSpecialtyIcon(spec.iconName, 'w-3.5 h-3.5')}
                    </span>
                    <span className="whitespace-nowrap font-semibold">
                      {SPECIALTY_SHORT_TITLES[spec.id] || spec.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 2. Interactive Card with Full Touch Gestures and Floating Chevrons */}
            <div
              className="relative w-full max-w-[440px] mx-auto min-h-[500px] sm:min-h-[540px] flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Floating Ergonomic Navigation Chevrons on Mobile Edges */}
              <button
                onClick={prevStep}
                aria-label="Especialidad anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg shadow-black/30 active:scale-90 transition-transform cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStep}
                aria-label="Especialidad siguiente"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg shadow-black/30 active:scale-90 transition-transform cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Active Card with Smooth Motion Transition */}
              <AnimatePresence mode="wait">
                {(() => {
                  const spec = SPECIALTIES_DATA[currentIndex];
                  return (
                    <motion.div
                      key={spec.id}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.26, ease: 'easeOut' }}
                      className="w-full min-h-[500px] sm:min-h-[540px] rounded-[2.2rem] overflow-hidden border-2 border-cyan-400/40 shadow-2xl shadow-cyan-950/20 bg-slate-950 flex flex-col justify-between select-none relative"
                    >
                      {/* Full-bleed photo with zero padding */}
                      <img
                        src={spec.image || 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop'}
                        alt={spec.title}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      />

                      {/* Contrast Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 via-50% to-slate-950/40 pointer-events-none" />

                      {/* Card Top Bar */}
                      <div className="relative z-20 p-4 sm:p-5 flex items-center">
                        <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-cyan-300 shadow-md">
                          {getSpecialtyIcon(spec.iconName, 'w-4 h-4 text-cyan-300')}
                        </div>
                      </div>

                      {/* Card Bottom Content */}
                      <div className="relative z-20 p-4 sm:p-5 pt-0 flex flex-col justify-end">
                        <h3 className="text-lg sm:text-xl font-black text-white leading-snug mb-1.5">
                          {spec.title}
                        </h3>

                        <p className="text-[11.5px] sm:text-xs text-slate-200 mb-2.5 line-clamp-2 leading-relaxed text-justify">
                          {spec.shortDesc}
                        </p>

                        {/* Highlights Bullet Points */}
                        <div className="space-y-1 mb-2.5">
                          {spec.features.slice(0, 3).map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center gap-2 text-[11px] text-slate-100 font-medium"
                            >
                              <div className="w-3.5 h-3.5 rounded-full bg-cyan-400/20 border border-cyan-400/50 text-cyan-300 flex items-center justify-center shrink-0">
                                <Check className="w-2 h-2 stroke-[3]" />
                              </div>
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {spec.suitableFor && (
                          <p className="text-[10px] text-cyan-200/80 italic mb-3 line-clamp-1">
                            Ideal para: {spec.suitableFor}
                          </p>
                        )}

                        {/* Direct WhatsApp CTA Button */}
                        <a
                          href={createWhatsAppLink(spec.waMessage || `Hola ${DOCTOR_NAME}, deseo información y solicitar una cita sobre el tratamiento de ${spec.title}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] active:brightness-95 text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40 cursor-pointer"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-white" />
                          <span>Consultar por WhatsApp</span>
                          <ArrowRight className="w-3.5 h-3.5 text-white/80" />
                        </a>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

            {/* 3. Bottom Controls & Progress (Mobile) */}
            <div className="flex flex-col items-center gap-2 max-w-[440px] mx-auto w-full px-2 pt-1">
              <div className="flex items-center justify-between w-full text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5 font-mono">
                  <span className="text-[#005A9C] font-black text-sm">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="text-slate-400">/</span>
                  <span className="text-slate-400">{String(totalItems).padStart(2, '0')}</span>
                </div>

                {/* Dots */}
                <div className="flex items-center gap-1.5">
                  {SPECIALTIES_DATA.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => handleChipClick(dotIdx)}
                      aria-label={`Ir a especialidad ${dotIdx + 1}`}
                      className={cn(
                        'rounded-full transition-all duration-300 cursor-pointer',
                        dotIdx === currentIndex
                          ? 'w-5 h-1.5 bg-[#005A9C]'
                          : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
                      )}
                    />
                  ))}
                </div>

                <div className="text-[11px] text-slate-400">
                  Desliza para explorar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Curved Wave Transition into Urgencias 24/7 */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CurvedSectionDivider position="bottom" fillColor="#07192C" variant="wave1" />
      </div>
    </section>
  );
};