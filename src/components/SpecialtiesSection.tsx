import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'motion/react';
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
} from 'lucide-react';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { SPECIALTIES_DATA, createWhatsAppLink, DOCTOR_NAME } from '../data/clinicData';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { cn } from '../lib/utils';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking?: (specialtyId: string) => void;
}

const ITEM_HEIGHT = 68;
const VIRTUAL_OFFSETS = [-3, -2, -1, 0, 1, 2, 3];

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

  const wheelAccumulatorRef = useRef<number>(0);
  const wheelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isWheelLockedRef = useRef<boolean>(false);

  // Deslizamiento fluido, controlado y de alto rendimiento por rueda de ratón
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.stopPropagation();
    wheelAccumulatorRef.current += e.deltaY;

    if (wheelTimerRef.current) {
      clearTimeout(wheelTimerRef.current);
    }

    const threshold = 40;
    if (!isWheelLockedRef.current && Math.abs(wheelAccumulatorRef.current) >= threshold) {
      const direction = wheelAccumulatorRef.current > 0 ? 1 : -1;
      setStep((s) => s + direction);
      wheelAccumulatorRef.current = 0;
      isWheelLockedRef.current = true;
      setTimeout(() => {
        isWheelLockedRef.current = false;
      }, 90);
    }

    wheelTimerRef.current = setTimeout(() => {
      wheelAccumulatorRef.current = 0;
      isWheelLockedRef.current = false;
    }, 140);
  }, []);

  // Arrastre físico táctil interactivo con mouse o touch con inercia optimizada
  const handleTrackDragEnd = useCallback((
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const deltaY = info.offset.y;
    const velocityY = info.velocity.y;
    const projectedDistance = deltaY + velocityY * 0.15;
    const stepsMoved = -Math.round(projectedDistance / ITEM_HEIGHT);
    if (stepsMoved !== 0) {
      setStep((s) => s + stepsMoved);
    }
  }, []);

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
    <section id="servicios" className="py-10 sm:py-14 relative overflow-hidden bg-gradient-to-b from-[#EBF2F9] via-[#E2EDF7] to-[#E2EDF7]">
      {/* Fondo clínico azul cielo suave para máximo contraste de luces especulares y sombras neumórficas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EBF2F9] via-[#E2EDF7] to-[#E2EDF7] pointer-events-none" />

      {/* 2. Floating 3D Curved Ribbon */}
      <OrganicDentalRibbon className="top-12 -right-16 w-96 md:w-[32rem] opacity-40" variant="blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-2 sm:pb-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-5 sm:mb-8 space-y-2.5"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            Servicios <span className="text-[#005A9C]">Digitales</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Selecciona un servicio para ver su tecnología y plan clínico.
          </p>
        </motion.div>

        {/* 3. Luxury 3D Feature Carousel Showcase */}
        <div id="servicios" className="w-full max-w-6xl mx-auto scroll-mt-24">
          {/* ========================================================================= */}
          {/* DESKTOP EXPERIENCE (lg:grid) — SOBRE EL LIENZO DIRECTAMENTE (SIN BOX-IN-BOX) */}
          {/* ========================================================================= */}
          <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-12 items-center min-h-[620px] py-4">
            {/* Left Column: Interactive Wheel of Specialties sobre el lienzo (Sin contenedor box-in-box) */}
            <div className="col-span-5 relative z-20 flex flex-col justify-center my-auto">

              {/* Desktop Infinite Loop Wheel sobre el lienzo (Cero Contenedor, Cero Sombras de Máscara) */}
              <div
                onWheel={handleWheel}
                className="relative w-full h-[470px] flex items-center justify-start overflow-hidden select-none my-auto cursor-grab active:cursor-grabbing contain-paint"
              >
                {/* Infinite Continuous Virtual Track con Arrastre Físico e Inercia */}
                <motion.div
                  drag="y"
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={0.25}
                  onDragEnd={handleTrackDragEnd}
                  animate={{ y: 201 - step * ITEM_HEIGHT }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 28,
                    mass: 0.6,
                  }}
                  className="relative w-full h-full z-20 will-change-transform transform-gpu"
                >
                  {VIRTUAL_OFFSETS.map((offset) => {
                    const absIndex = step + offset;
                    const specIndex = ((absIndex % totalItems) + totalItems) % totalItems;
                    const spec = SPECIALTIES_DATA[specIndex];
                    const isActive = offset === 0;
                    const distance = Math.abs(offset);

                    // Desvanecimiento suave y progresivo en 7 posiciones visibles
                    const opacity = isActive
                      ? 1
                      : distance === 1
                      ? 0.92
                      : distance === 2
                      ? 0.58
                      : 0.18;

                    const scale = isActive
                      ? 1.03
                      : distance === 1
                      ? 0.98
                      : distance === 2
                      ? 0.94
                      : 0.90;

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
                        className="flex items-center justify-start w-full py-1.5 px-4"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            if (offset !== 0) {
                              setStep((s) => s + offset);
                            }
                          }}
                          className={cn(
                            'relative flex items-center gap-3.5 w-full h-full px-5 py-3 rounded-2xl transition-[background-color,box-shadow] duration-200 text-left group cursor-pointer select-none border-0',
                            isActive
                              ? 'bg-gradient-to-br from-[#FFFFFF] via-[#E8F2FA] to-[#D8E7F5] shadow-[-10px_-10px_24px_#FFFFFF,10px_10px_26px_rgba(13,39,80,0.25),inset_2px_2px_4px_#FFFFFF,inset_-2px_-2px_4px_rgba(13,39,80,0.16),inset_0_0_0_2px_rgba(0,191,255,0.65)] scale-[1.03] z-20'
                              : 'bg-gradient-to-br from-[#FFFFFF] via-[#EDF4FA] to-[#DFECF7] hover:from-[#FFFFFF] hover:to-[#D8E7F5] shadow-[-8px_-8px_20px_#FFFFFF,8px_8px_22px_rgba(13,39,80,0.16),inset_1.5px_1.5px_3px_#FFFFFF,inset_-1.5px_-1.5px_3px_rgba(13,39,80,0.08)] hover:shadow-[-10px_-10px_24px_#FFFFFF,10px_10px_26px_rgba(13,39,80,0.22),inset_2px_2px_4px_#FFFFFF,inset_-2px_-2px_4px_rgba(13,39,80,0.12)]'
                          )}
                          style={{
                            opacity,
                            transform: `scale(${scale}) translateZ(0)`,
                            pointerEvents: distance <= 2 ? 'auto' : 'none',
                            willChange: 'transform, opacity',
                          }}
                        >
                          {/* Pozo de Icono Neumórfico Hundido (Exacto a Imágenes de Referencia #0D2750 + #FFFFFF) */}
                          <div
                            className={cn(
                              'w-9 h-9 rounded-xl flex items-center justify-center transition-[background-color,box-shadow,color] duration-200 shrink-0 border-0',
                              isActive
                                ? 'bg-gradient-to-br from-[#005A9C] via-[#0070BA] to-[#0A2540] text-white shadow-[0_4px_12px_rgba(0,90,156,0.45),inset_1.5px_1.5px_3px_rgba(255,255,255,0.4)]'
                                : 'bg-[#E2EDF8] text-[#005A9C] shadow-[inset_3.5px_3.5px_7px_rgba(13,39,80,0.16),inset_-3.5px_-3.5px_7px_#FFFFFF] group-hover:bg-[#005A9C] group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(0,90,156,0.35)]'
                            )}
                          >
                            {getSpecialtyIcon(spec.iconName, isActive ? 'w-5 h-5 text-white' : 'w-5 h-5 text-[#005A9C] group-hover:text-white transition-colors')}
                          </div>

                          <div className="flex flex-col min-w-0">
                            <span
                              className={cn(
                                'font-extrabold text-sm tracking-tight truncate transition-colors',
                                isActive ? 'text-[#003B66] font-black' : 'text-[#0A2540] group-hover:text-[#005A9C]'
                              )}
                            >
                              {spec.title}
                            </span>
                            <span
                              className={cn(
                                'text-[11px] truncate font-semibold transition-colors',
                                isActive ? 'text-[#0070BA] font-bold' : 'text-[#0070BA]'
                              )}
                            >
                              {spec.estimatedTime || 'Evaluación 3D'}
                            </span>
                          </div>

                          {isActive ? (
                            <span className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 shadow-[0_0_8px_rgba(0,191,255,0.25)] shrink-0">
                              <span className="w-2 h-2 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF] animate-pulse" />
                              <span className="text-[10px] font-black text-[#005A9C] uppercase tracking-wider">Activo</span>
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
                {/* Lightweight Static Ambient Glow (Zero Blur Shader Overhead) */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] rounded-full pointer-events-none z-0 transform-gpu"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(0, 191, 255, 0.16) 0%, rgba(0, 90, 156, 0.05) 45%, transparent 70%)',
                    transform: 'translate(-50%, -50%) translateZ(0)',
                  }}
                />

                <AnimatePresence initial={false}>
                  {SPECIALTIES_DATA.filter((_, idx) => getCardStatus(idx) !== 'hidden').map((spec) => {
                    const status = getCardStatus(SPECIALTIES_DATA.findIndex((s) => s.id === spec.id));
                    const isActive = status === 'active';
                    const isPrev = status === 'prev';
                    const isNext = status === 'next';
                    const sideOffset = 85;

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
                          'absolute inset-0 rounded-[2.5rem] overflow-hidden border-2 shadow-2xl transition-[box-shadow,border-color] duration-300 bg-slate-950 flex flex-col justify-between select-none cursor-default transform-gpu will-change-transform',
                          isActive
                            ? 'border-cyan-400/50 shadow-cyan-950/25'
                            : 'border-white/10 hover:border-cyan-300/40 cursor-pointer'
                        )}
                      >
                        {/* Full-bleed clinical image optimized */}
                        <img
                          src={spec.image || 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop'}
                          alt={spec.title}
                          loading="lazy"
                          decoding="async"
                          width={480}
                          height={560}
                          referrerPolicy="no-referrer"
                          className={cn(
                            'absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none transform-gpu',
                            isActive ? 'brightness-100 opacity-100' : 'brightness-75 opacity-80'
                          )}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 via-55% to-slate-950/35 pointer-events-none" />

                        {/* Top Bar inside Card */}
                        <div className="relative z-20 p-6 flex items-center">
                          <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-cyan-300 shadow-md">
                            {getSpecialtyIcon(spec.iconName, 'w-5 h-5 text-cyan-300')}
                          </div>
                        </div>

                        {/* Bottom Content inside Card */}
                        <div className="relative z-20 p-6 pt-0 flex flex-col justify-end">
                          <AnimatePresence mode="wait">
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
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
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.1 + fIdx * 0.08, duration: 0.25 }}
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
                                    transition={{ delay: 0.35, duration: 0.25 }}
                                    className="text-[11px] text-cyan-200/70 italic mb-4 line-clamp-1"
                                  >
                                    Ideal para: {spec.suitableFor}
                                  </motion.p>
                                )}

                                <motion.a
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.4, duration: 0.25 }}
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
                </AnimatePresence>
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
                      'flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-[background-color,box-shadow,color] duration-200 border-0 cursor-pointer select-none active:scale-95',
                      isActive
                        ? 'bg-gradient-to-br from-[#FFFFFF] via-[#E8F2FA] to-[#D8E7F5] text-[#003B66] shadow-[-6px_-6px_16px_#FFFFFF,6px_6px_18px_rgba(13,39,80,0.22),inset_1.5px_1.5px_3px_#FFFFFF,inset_-1.5px_-1.5px_3px_rgba(13,39,80,0.14),inset_0_0_0_1.5px_rgba(0,191,255,0.65)]'
                        : 'bg-gradient-to-br from-[#FFFFFF] via-[#EDF4FA] to-[#DFECF7] text-[#005A9C] shadow-[-4px_-4px_12px_#FFFFFF,4px_4px_14px_rgba(13,39,80,0.14),inset_1px_1px_2px_#FFFFFF,inset_-1px_-1px_2px_rgba(13,39,80,0.06)]'
                    )}
                  >
                    <span className={cn(
                      'w-4 h-4 flex items-center justify-center shrink-0',
                      isActive ? 'text-[#005A9C]' : 'text-[#0070BA]'
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
                      transition={{ duration: 0.24, ease: 'easeOut' }}
                      className="w-full min-h-[500px] sm:min-h-[540px] rounded-[2.2rem] overflow-hidden border-2 border-cyan-400/40 shadow-2xl shadow-cyan-950/20 bg-slate-950 flex flex-col justify-between select-none relative transform-gpu will-change-transform"
                    >
                      {/* Full-bleed photo with zero padding */}
                      <img
                        src={spec.image || 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop'}
                        alt={spec.title}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none transform-gpu"
                      />

                      {/* Contrast Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 via-50% to-slate-950/40 pointer-events-none" />

                      {/* Card Top Bar */}
                      <div className="relative z-20 p-4 sm:p-5 flex items-center">
                        <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-cyan-300 shadow-md">
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
                      aria-label={`Ir al servicio ${dotIdx + 1}`}
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
    </section>
  );
};