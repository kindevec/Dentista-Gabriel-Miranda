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
  Clock,
} from 'lucide-react';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { SPECIALTIES_DATA, createWhatsAppLink, DOCTOR_NAME } from '../data/clinicData';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { cn } from '../lib/utils';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking?: (specialtyId: string) => void;
}

const SPECIALTY_SHORT_TITLES: Record<string, string> = {
  'profilaxis-dental': 'Profilaxis Profunda',
  'restauraciones': 'Restauraciones',
  'extracciones': 'Extracciones',
  'blanqueamientos': 'Blanqueamientos',
};

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyForBooking: _onSelectSpecialtyForBooking,
}) => {
  const [step, setStep] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
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
  const handleChipClick = useCallback((index: number) => {
    let diff = index - currentIndex;
    if (diff > totalItems / 2) diff -= totalItems;
    if (diff < -totalItems / 2) diff += totalItems;
    if (diff !== 0) setStep((s) => s + diff);
  }, [currentIndex, totalItems]);

  const getCardStatus = useCallback((index: number) => {
    const diff = index - currentIndex;
    const len = totalItems;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return 'active';
    if (normalizedDiff === -1) return 'prev';
    if (normalizedDiff === 1) return 'next';
    return 'hidden';
  }, [currentIndex, totalItems]);

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

  const getSpecialtyIcon = (iconName: string, className = 'w-5 h-5 text-[#84631E]') => {
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
    <section id="servicios" className="py-8 sm:py-10 relative overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-[#FAF9F5] to-[#FAF9F5]">
      {/* Fondo cálido marfil y perla para máximo contraste de relieves dorados y sombras neumórficas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5] via-[#FAF9F5] to-[#FAF9F5] pointer-events-none" />

      {/* 2. Floating 3D Curved Ribbon */}
      <OrganicDentalRibbon className="absolute top-12 -right-16 w-96 md:w-[32rem] opacity-35" variant="gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-2">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 space-y-2"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Servicios <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#84631E]">Básicos Odontológicos</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
            Tratamientos preventivos y restauradores con mínima invasión, calidez y tecnología de vanguardia.
          </p>
        </motion.div>

        {/* 3. Luxury 3D Feature Carousel Showcase */}
        <div className="w-full max-w-6xl mx-auto scroll-mt-24">
          {/* ========================================================================= */}
          {/* DESKTOP EXPERIENCE (lg:grid) — SOBRE EL LIENZO DIRECTAMENTE (SIN BOX-IN-BOX) */}
          {/* ========================================================================= */}
          <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-12 items-center min-h-[520px] py-2">
            {/* Left Column: Interactive Executive Service Dock + Rich Clinical Dossier */}
            <div className="col-span-5 relative z-20 flex flex-col justify-center space-y-3.5 my-auto">
              {/* Executive 4-Service Interactive Selection Dock */}
              <div className="space-y-2">
                {SPECIALTIES_DATA.map((spec, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={spec.id}
                      type="button"
                      onClick={() => handleChipClick(idx)}
                      className={cn(
                        'relative flex items-center gap-3 w-full px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl transition-all duration-300 text-left group cursor-pointer select-none',
                        isActive
                          ? 'bg-gradient-to-r from-[#FAF7EE] via-white to-[#F8F3E5] border-2 border-[#D4AF37] shadow-[0_8px_25px_-6px_rgba(212,175,55,0.3)] z-10 scale-[1.01]'
                          : 'bg-white/80 hover:bg-white border border-stone-200/80 hover:border-[#D4AF37]/50 shadow-2xs hover:shadow-xs scale-100'
                      )}
                    >
                      {/* Active Left Gold Accent Bar */}
                      {isActive && (
                        <motion.div
                          layoutId="activeServiceBar"
                          className="absolute -left-1 top-2 bottom-2 w-1.5 rounded-full bg-gradient-to-b from-[#D4AF37] to-[#84631E] shadow-[0_0_10px_rgba(212,175,55,0.7)]"
                        />
                      )}

                      {/* 3D Embossed Icon */}
                      <div
                        className={cn(
                          'w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0',
                          isActive
                            ? 'bg-gradient-to-br from-[#D4AF37] via-[#AA7C11] to-[#84631E] text-white shadow-[0_4px_12px_rgba(212,175,55,0.35)]'
                            : 'bg-[#FAF7EE] text-[#84631E] group-hover:bg-[#D4AF37] group-hover:text-white group-hover:shadow-xs'
                        )}
                      >
                        {getSpecialtyIcon(spec.iconName, isActive ? 'w-4 h-4 text-white' : 'w-4 h-4 text-[#84631E] group-hover:text-white transition-colors')}
                      </div>

                      {/* Title & Timing */}
                      <div className="flex flex-col min-w-0 flex-1 justify-center">
                        <span
                          className={cn(
                            'text-[15px] sm:text-base font-black tracking-tight truncate transition-colors leading-snug',
                            isActive ? 'text-[#0D0D0D]' : 'text-stone-800 group-hover:text-[#0D0D0D]'
                          )}
                        >
                          {spec.title}
                        </span>
                        <span
                          className={cn(
                            'text-xs truncate font-medium transition-colors leading-tight',
                            isActive ? 'text-[#AA7C11] font-bold' : 'text-stone-400'
                          )}
                        >
                          {spec.estimatedTime || 'Evaluación personalizada'}
                        </span>
                      </div>

                      {/* Active / Hover Arrow */}
                      <div className="shrink-0">
                        <ArrowRight
                          className={cn(
                            'w-4 h-4 transition-all',
                            isActive
                              ? 'text-[#84631E] translate-x-0 opacity-100'
                              : 'text-stone-300 group-hover:text-[#D4AF37] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0'
                          )}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Service Detailed Clinical Information (Ficha Dossier Enriquecida) */}
              <div className="relative min-h-[200px]">
                <AnimatePresence mode="wait">
                  {(() => {
                    const activeSpec = SPECIALTIES_DATA[currentIndex];
                    return (
                      <motion.div
                        key={activeSpec.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="relative rounded-3xl bg-white/90 backdrop-blur-md border border-[#D4AF37]/35 shadow-[0_10px_30px_-10px_rgba(180,140,50,0.12)] p-6 space-y-3.5 overflow-hidden"
                      >
                        {/* Ambient Gold Sheen */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

                        {/* Header: Title and Time Duration without inner boxes */}
                        <div className="flex items-center justify-between gap-3 border-b border-stone-200/60 pb-3 relative z-10">
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#84631E] block">
                              Detalles del Tratamiento
                            </span>
                            <h4 className="text-base font-black text-[#0D0D0D] tracking-tight">
                              {activeSpec.title}
                            </h4>
                          </div>

                          {activeSpec.estimatedTime && (
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#84631E] bg-[#FAF7EE] border border-[#D4AF37]/30 px-3 py-1 rounded-full shrink-0 shadow-2xs">
                              <Clock className="w-3.5 h-3.5 text-[#84631E]" />
                              <span>{activeSpec.estimatedTime}</span>
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed text-justify relative z-10">
                          {activeSpec.fullDesc || activeSpec.shortDesc}
                        </p>

                        {/* Features List: Pure open typography with gold circle checks, ZERO nested boxes */}
                        <ul className="space-y-2.5 pt-1 relative z-10">
                          {activeSpec.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-[12.5px] text-stone-700 font-medium">
                              <div className="w-4 h-4 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/50 text-[#84631E] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Clinical Indication footnote, ZERO nested boxes */}
                        {activeSpec.suitableFor && (
                          <div className="pt-2.5 border-t border-stone-200/60 flex items-start gap-1.5 text-xs text-stone-500 relative z-10">
                            <span className="font-extrabold text-[#84631E] uppercase tracking-wider text-[10px] shrink-0 mt-0.5">
                              Indicado para:
                            </span>
                            <span className="font-medium text-stone-700 leading-snug">
                              {activeSpec.suitableFor}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: 3D Stack / Card Perspective Showcase (HD Visuals, Sin Contenedor Obstructivo) */}
            <div className="col-span-7 relative flex flex-col items-center justify-center py-2">
              <div className="relative w-full max-w-[480px] xl:max-w-[500px] h-[510px] xl:h-[530px] flex items-center justify-center">
                <AnimatePresence initial={false}>
                  {SPECIALTIES_DATA.filter((_, idx) => getCardStatus(idx) !== 'hidden').map((spec) => {
                    const status = getCardStatus(SPECIALTIES_DATA.findIndex((s) => s.id === spec.id));
                    const isActive = status === 'active';
                    const isPrev = status === 'prev';
                    const isNext = status === 'next';
                    const sideOffset = 90;

                    return (
                      <motion.div
                        key={spec.id}
                        initial={{
                          opacity: 0,
                          scale: 0.82,
                          x: isNext ? sideOffset * 1.2 : isPrev ? -sideOffset * 1.2 : 0,
                        }}
                        animate={{
                          x: isActive ? 0 : isPrev ? -sideOffset : sideOffset,
                          scale: isActive ? 1 : 0.88,
                          opacity: isActive ? 1 : 0.45,
                          rotate: isPrev ? -3 : isNext ? 3 : 0,
                          zIndex: isActive ? 20 : 10,
                          pointerEvents: isActive ? 'auto' : 'auto',
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.78,
                          x: isPrev ? -sideOffset * 1.3 : sideOffset * 1.3,
                          transition: { duration: 0.22, ease: 'easeOut' },
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 260,
                          damping: 26,
                          mass: 0.7,
                        }}
                        onClick={() => {
                          if (isPrev) prevStep();
                          if (isNext) nextStep();
                        }}
                        className={cn(
                          'absolute inset-0 rounded-[2.5rem] overflow-hidden border-2 shadow-2xl transition-[box-shadow,border-color] duration-300 bg-slate-950 flex flex-col justify-end select-none cursor-default transform-gpu will-change-transform',
                          isActive
                            ? 'border-[#D4AF37]/80 shadow-[0_15px_45px_rgba(212,175,55,0.28)]'
                            : 'border-white/10 hover:border-[#D4AF37]/50 cursor-pointer'
                        )}
                      >
                        {/* Imagen Clínica en Alta Definición (Con alejamiento para restauraciones para ver diente dañado y restaurado completos) */}
                        {spec.id === 'restauraciones' ? (
                          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                            {/* Fondo ambiental difuminado para envolver el card de manera orgánica */}
                            <img
                              src={spec.image}
                              alt=""
                              aria-hidden="true"
                              className="absolute inset-0 w-full h-full object-cover object-center blur-2xl opacity-40 scale-110"
                            />
                            {/* Imagen de caso clínico completa y alejada (100% visible sin recorte lateral) */}
                            <div className="absolute inset-x-0 top-0 h-[64%] flex items-center justify-center p-4 sm:p-5">
                              <img
                                src={spec.image}
                                alt={spec.title}
                                loading="eager"
                                decoding="async"
                                className={cn(
                                  'w-full h-full object-contain rounded-2xl shadow-2xl transition-all duration-500 transform-gpu',
                                  isActive ? 'brightness-105 contrast-[1.03] scale-100' : 'brightness-80 opacity-70 scale-95'
                                )}
                              />
                            </div>
                          </div>
                        ) : (
                          <img
                            src={spec.image || '/services/profilaxis.webp'}
                            alt={spec.title}
                            loading="eager"
                            decoding="async"
                            width={600}
                            height={700}
                            className={cn(
                              'absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 pointer-events-none transform-gpu',
                              isActive ? 'brightness-105 contrast-[1.03] opacity-100 scale-100' : 'brightness-80 opacity-70 scale-95'
                            )}
                          />
                        )}

                        {/* Degradado Sutil Únicamente Inferior (El 70% superior queda 100% nítido, claro y HD) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 via-35% to-transparent pointer-events-none" />

                        {/* Contenido Inferior del Card: Únicamente Título y Botón de WhatsApp */}
                        <div className="relative z-20 p-6 sm:p-7 flex flex-col justify-end">
                          <AnimatePresence mode="wait">
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.22 }}
                                className="space-y-3.5"
                              >
                                <h3 className="text-2xl sm:text-[1.7rem] font-black text-white leading-tight drop-shadow-md">
                                  {spec.title}
                                </h3>

                                <motion.a
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.08, duration: 0.2 }}
                                  whileHover={{ scale: 1.02, y: -2 }}
                                  whileTap={{ scale: 0.98 }}
                                  href={createWhatsAppLink(spec.waMessage || `Hola ${DOCTOR_NAME}, deseo información y solicitar una cita sobre el tratamiento de ${spec.title}.`)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0f7a6d] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-emerald-950/60 hover:shadow-emerald-500/30 group/btn cursor-pointer"
                                >
                                  <WhatsAppIcon className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform drop-shadow-xs" />
                                  <span>Consultar por WhatsApp</span>
                                  <ArrowRight className="w-4 h-4 text-white/80 group-hover/btn:translate-x-1 transition-transform" />
                                </motion.a>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* MOBILE EXPERIENCE (lg:hidden) — ERGONOMIC, CLEAN, NO JUMP */}
          {/* ========================================================= */}
          <div className="lg:hidden flex flex-col gap-4">
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
                      'flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all duration-200 border cursor-pointer select-none active:scale-95',
                      isActive
                        ? 'bg-white border-2 border-[#D4AF37] text-[#84631E] shadow-2xs'
                        : 'bg-white/80 hover:bg-white border-stone-200/80 text-stone-700'
                    )}
                  >
                    <span className={cn(
                      'w-4 h-4 flex items-center justify-center shrink-0',
                      isActive ? 'text-[#84631E]' : 'text-[#AA7C11]'
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
              className="relative w-full max-w-[440px] mx-auto min-h-[440px] sm:min-h-[470px] flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Floating Ergonomic Navigation Chevrons on Mobile Edges */}
              <button
                onClick={prevStep}
                aria-label="Servicio anterior"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg shadow-black/40 active:scale-90 transition-transform cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStep}
                aria-label="Servicio siguiente"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg shadow-black/40 active:scale-90 transition-transform cursor-pointer"
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
                      transition={{ duration: 0.24, ease: 'easeOut' }}
                      className="w-full min-h-[440px] sm:min-h-[470px] rounded-[2.2rem] overflow-hidden border-2 border-[#D4AF37]/60 shadow-2xl shadow-black/40 bg-slate-950 flex flex-col justify-end select-none relative transform-gpu will-change-transform"
                    >
                      {/* Full-bleed photo with zero padding (Con alejamiento para restauraciones) */}
                      {spec.id === 'restauraciones' ? (
                        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                          {/* Fondo ambiental difuminado */}
                          <img
                            src={spec.image}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-cover object-center blur-2xl opacity-40 scale-110"
                          />
                          {/* Imagen de caso clínico completa y alejada (100% visible sin recorte lateral) */}
                          <div className="absolute inset-x-0 top-0 h-[62%] sm:h-[65%] flex items-center justify-center p-3 sm:p-4">
                            <img
                              src={spec.image}
                              alt={spec.title}
                              loading="eager"
                              decoding="async"
                              className="w-full h-full object-contain rounded-2xl shadow-xl brightness-105 contrast-[1.03] pointer-events-none transform-gpu"
                            />
                          </div>
                        </div>
                      ) : (
                        <img
                          src={spec.image || '/services/profilaxis.webp'}
                          alt={spec.title}
                          loading="eager"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover object-center brightness-105 contrast-[1.03] pointer-events-none transform-gpu"
                        />
                      )}

                      {/* Subtle bottom-only gradient (Top 70% remains clear and HD) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 via-35% to-transparent pointer-events-none" />

                      {/* Card Bottom Content: Title + WhatsApp CTA only */}
                      <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end space-y-3">
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">
                          {spec.title}
                        </h3>

                        {/* Direct WhatsApp CTA Button */}
                        <a
                          href={createWhatsAppLink(spec.waMessage || `Hola ${DOCTOR_NAME}, deseo información y solicitar una cita sobre el tratamiento de ${spec.title}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] active:brightness-95 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/50 cursor-pointer"
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

            {/* 3. Mobile Detailed Info Card (Ficha Clínica Enriquecida) */}
            <div className="max-w-[440px] mx-auto w-full px-1">
              <AnimatePresence mode="wait">
                {(() => {
                  const activeSpec = SPECIALTIES_DATA[currentIndex];
                  return (
                    <motion.div
                      key={activeSpec.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="relative rounded-3xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/35 shadow-sm p-5 space-y-3.5 overflow-hidden"
                    >
                      {/* Ambient Glow */}
                      <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#D4AF37]/10 rounded-full blur-xl pointer-events-none" />

                      {/* Header: Title and Time Duration without inner boxes */}
                      <div className="flex items-center justify-between gap-2 border-b border-stone-200/60 pb-2.5 relative z-10">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#84631E] block">
                            Detalles del Tratamiento
                          </span>
                          <h4 className="text-sm font-black text-[#0D0D0D] tracking-tight">
                            {activeSpec.title}
                          </h4>
                        </div>
                        {activeSpec.estimatedTime && (
                          <div className="flex items-center gap-1 text-[11px] font-bold text-[#84631E] bg-[#FAF7EE] border border-[#D4AF37]/30 px-2.5 py-0.5 rounded-full shrink-0 shadow-2xs">
                            <Clock className="w-3 h-3 text-[#84631E]" />
                            <span>{activeSpec.estimatedTime}</span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-stone-600 leading-relaxed text-justify relative z-10">
                        {activeSpec.fullDesc || activeSpec.shortDesc}
                      </p>

                      {/* Features List: Pure open typography with gold circle checks, ZERO nested boxes */}
                      <ul className="space-y-2 pt-0.5 relative z-10">
                        {activeSpec.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-stone-700 font-medium">
                            <div className="w-4 h-4 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/50 text-[#84631E] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Clinical Indication footnote, ZERO nested boxes */}
                      {activeSpec.suitableFor && (
                        <div className="pt-2 border-t border-stone-200/60 flex items-start gap-1.5 text-xs text-stone-500 relative z-10">
                          <span className="font-extrabold text-[#84631E] uppercase tracking-wider text-[9.5px] shrink-0 mt-0.5">
                            Indicado para:
                          </span>
                          <span className="font-medium text-stone-700 leading-snug">
                            {activeSpec.suitableFor}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

            {/* 4. Bottom Controls & Progress (Mobile) */}
            <div className="flex flex-col items-center gap-2 max-w-[440px] mx-auto w-full px-2 pt-1">
              <div className="flex items-center justify-between w-full text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5 font-mono">
                  <span className="text-[#84631E] font-black text-sm">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="text-slate-400">/</span>
                  <span className="text-slate-400">{String(totalItems).padStart(2, '0')}</span>
                </div>

                {/* Dots */}
                <div className="flex items-center gap-1.5">
                  {SPECIALTIES_DATA.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => handleChipClick(dotIdx)}
                      aria-label={`Ir al servicio ${dotIdx + 1}`}
                      className={cn(
                        'rounded-full transition-all duration-300 cursor-pointer',
                        dotIdx === currentIndex
                          ? 'w-5 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#84631E]'
                          : 'w-1.5 h-1.5 bg-stone-300 hover:bg-stone-400'
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
    </section>
  );
};