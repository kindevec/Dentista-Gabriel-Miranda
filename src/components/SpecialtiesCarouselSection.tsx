import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowDown,
  RotateCw,
  X
} from 'lucide-react';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { createWhatsAppLink } from '../data/clinicData';
import { CLINICAL_SPECIALTIES } from '../data/clinicalSpecialtiesData';

interface SpecialtiesCarouselSectionProps {
  onSelectSpecialtyForBooking?: (specialtyId: string) => void;
}

export const SpecialtiesCarouselSection: React.FC<SpecialtiesCarouselSectionProps> = ({
  onSelectSpecialtyForBooking: _onSelectSpecialtyForBooking
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  // Drag and touch tracking refs to prevent accidental flips when scrolling
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const dragDistanceRef = useRef(0);
  const touchStartXRef = useRef(0);

  const totalCards = CLINICAL_SPECIALTIES.length;

  // Update active indicator dot smoothly as user scrolls
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>('[data-card-index]');
    if (!cards.length) return;

    const maxScroll = el.scrollWidth - el.clientWidth - 15;

    // Check if scrolled all the way to the end
    if (el.scrollLeft >= maxScroll) {
      setActiveCardIndex(cards.length - 1);
      return;
    }

    // Check if at the very start
    if (el.scrollLeft <= 15) {
      setActiveCardIndex(0);
      return;
    }

    // Find the card closest to the container's left edge
    let closestIndex = 0;
    let minDistance = Infinity;
    const containerLeft = el.getBoundingClientRect().left;

    cards.forEach((card, idx) => {
      const cardLeft = card.getBoundingClientRect().left;
      const distance = Math.abs(cardLeft - containerLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveCardIndex((prev) => (prev === closestIndex ? prev : closestIndex));
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  // Direct smooth navigation to specific card index
  const scrollToCard = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const targetIndex = Math.max(0, Math.min(index, totalCards - 1));
    setActiveCardIndex(targetIndex);

    const cards = el.querySelectorAll<HTMLElement>('[data-card-index]');
    const targetCard = cards[targetIndex];
    if (!targetCard) return;

    // If target is the last card, scroll completely to the end
    if (targetIndex === totalCards - 1) {
      el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: 'smooth' });
      return;
    }

    // If target is first card, scroll to 0
    if (targetIndex === 0) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    // Otherwise scroll to the card's exact position
    const targetLeft = targetCard.offsetLeft - el.offsetLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const finalScroll = Math.max(0, Math.min(targetLeft, maxScroll));

    el.scrollTo({ left: finalScroll, behavior: 'smooth' });
  };

  // Circular previous navigation
  const handleScrollPrev = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft <= 15 || activeCardIndex <= 0;
    if (isAtStart) {
      scrollToCard(totalCards - 1);
    } else {
      scrollToCard(activeCardIndex - 1);
    }
  };

  // Circular next navigation
  const handleScrollNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth - 15;
    const isAtEnd = el.scrollLeft >= maxScroll || activeCardIndex >= totalCards - 1;
    if (isAtEnd) {
      scrollToCard(0);
    } else {
      scrollToCard(activeCardIndex + 1);
    }
  };

  // Touch handlers for mobile: strict drag threshold prevents accidental card flips while swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    hasDraggedRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = Math.abs(e.touches[0].clientX - touchStartXRef.current);
    if (diff > 16) {
      hasDraggedRef.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (hasDraggedRef.current) {
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 150);
    }
  };

  // Mouse drag handlers for desktop with 1:1 tracking
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Solo botón izquierdo principal
    const el = scrollContainerRef.current;
    if (!el) return;

    isMouseDownRef.current = true;
    hasDraggedRef.current = false;
    dragDistanceRef.current = 0;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current) return;
    const el = scrollContainerRef.current;
    if (!el) return;

    const currentX = e.pageX - el.offsetLeft;
    const diff = currentX - startXRef.current;
    dragDistanceRef.current = Math.abs(diff);

    if (Math.abs(diff) > 16) {
      hasDraggedRef.current = true;
      setIsDragging(true);
      el.scrollLeft = scrollLeftRef.current - diff;
    }
  };

  const handleMouseUpOrLeave = () => {
    if (!isMouseDownRef.current) return;
    isMouseDownRef.current = false;
    setIsDragging(false);

    if (dragDistanceRef.current > 16) {
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 150);
    } else {
      hasDraggedRef.current = false;
    }
  };

  // Card Flip Toggle: Works symmetrically on front & back without race conditions
  const toggleCardFlip = (specId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (hasDraggedRef.current) return;
    setFlippedCardId((prev) => (prev === specId ? null : specId));
  };

  return (
    <section
      id="especialidades"
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FAF9F5] via-[#FFFFFF] to-[#FAF9F5] overflow-hidden scroll-mt-20 selection:bg-amber-500/20 selection:text-[#84631E]"
    >
      {/* Ambient Gold Radial Accents */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full pointer-events-none opacity-30 transform-gpu"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(197, 160, 89, 0.04) 55%, transparent 70%)',
          filter: 'blur(70px)'
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25 transform-gpu"
        style={{
          background: 'radial-gradient(circle, rgba(132, 99, 30, 0.10) 0%, rgba(212, 175, 55, 0.03) 60%, transparent 75%)',
          filter: 'blur(70px)'
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: Editorial, Blanco & Dorado                                 */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-8 sm:mb-10 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Especialidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#84631E]">Médicas</span>
          </h2>
          
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Haz clic en cualquier tarjeta para conocer los detalles del tratamiento y realizar tu consulta directa.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* CAROUSEL WRAPPER CON BOTONES FLANQUEADOS ERGONÓMICOS                       */}
        {/* ========================================================================= */}
        <div className="relative group/carousel px-0 md:px-14 lg:px-16">
          
          {/* Botón Lateral Izquierdo: Siempre visible, ergonómico y accesible */}
          <button
            type="button"
            onClick={handleScrollPrev}
            aria-label="Especialidad anterior"
            className="hidden md:flex absolute left-0 lg:left-1 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full items-center justify-center backdrop-blur-md shadow-xl transition-all duration-300 bg-white/95 text-[#84631E] border border-[#D4AF37]/60 shadow-amber-950/20 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#84631E] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Botón Lateral Derecho: Siempre visible, ergonómico y accesible */}
          <button
            type="button"
            onClick={handleScrollNext}
            aria-label="Siguiente especialidad"
            className="hidden md:flex absolute right-0 lg:right-1 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full items-center justify-center backdrop-blur-md shadow-xl transition-all duration-300 bg-white/95 text-[#84631E] border border-[#D4AF37]/60 shadow-amber-950/20 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#84631E] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* ========================================================================= */}
          {/* HORIZONTAL CAROUSEL CONTAINER: FLUIDO, SNAP DIRECTO, CERO TELEPORT        */}
          {/* ========================================================================= */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClickCapture={(e) => {
              if (hasDraggedRef.current) {
                e.stopPropagation();
                e.preventDefault();
              }
            }}
            className={`flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory select-none ${
              isDragging ? 'scroll-auto cursor-grabbing' : 'scroll-smooth'
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {CLINICAL_SPECIALTIES.map((spec, index) => {
              const isFlipped = flippedCardId === spec.id;

              return (
                <div
                  key={spec.id}
                  data-card-index={index}
                  className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0 snap-start h-[500px] sm:h-[520px]"
                  style={{ perspective: 1200 }}
                >
                  {/* 3D Flip Card Motion Container */}
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="relative w-full h-full rounded-[2.5rem]"
                  >
                    {/* ========================================================= */}
                    {/* CARA FRONTAL: FOTO CINEMÁTICA Y ACCESO RÁPIDO              */}
                    {/* ========================================================= */}
                    <div
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg)',
                      }}
                      className={`absolute inset-0 w-full h-full rounded-[2.5rem] transition-opacity duration-300 ${
                        isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
                      }`}
                      onClick={(e) => toggleCardFlip(spec.id, e)}
                    >
                      <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-stone-900 border border-[#D4AF37]/40 shadow-xl shadow-amber-950/10 flex flex-col justify-between group cursor-pointer relative select-none">
                        {/* Full-Bleed Large Cinematic Image (WebP local) */}
                        <img
                          src={spec.image}
                          alt={spec.title}
                          width={500}
                          height={520}
                          draggable={false}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85] pointer-events-none select-none"
                        />

                        {/* Gradiente Oscuro y Cálido para Legibilidad Total */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/95 via-[#0B0B0B]/40 to-black/20 pointer-events-none" />

                        {/* Espacio Superior: Badge de Especialidad */}
                        <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between pointer-events-none">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#F3E5AB] text-[10.5px] font-bold tracking-wider uppercase shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                            {spec.badge || spec.category}
                          </span>
                        </div>

                        {/* Información Inferior con Botón Interactivo */}
                        <div className="relative z-10 p-6 sm:p-7 space-y-3">
                          <h3 className="text-2xl sm:text-[1.65rem] font-black text-white leading-tight drop-shadow-md">
                            {spec.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-stone-200/95 line-clamp-2 leading-relaxed font-medium">
                            {spec.tagline}
                          </p>

                          {/* Botón de Transformación 3D */}
                          <div className="pt-2">
                            <button
                              type="button"
                              onClick={(e) => toggleCardFlip(spec.id, e)}
                              className="w-full py-3 px-5 rounded-2xl bg-white/95 hover:bg-white text-[#0B0B0B] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:bg-gradient-to-r hover:from-[#D4AF37] hover:via-[#F3E5AB] hover:to-[#C5A059] hover:text-[#0B0B0B] border border-white/60 cursor-pointer"
                            >
                              <RotateCw className="w-3.5 h-3.5 text-[#84631E] group-hover:rotate-180 transition-transform duration-500" />
                              <span>Ver Detalles Clínicos</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ========================================================= */}
                    {/* CARA TRASERA: INFORMACIÓN CLÍNICA Y CONSULTA (CERO SCROLL) */}
                    {/* ========================================================= */}
                    <div
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                      className={`absolute inset-0 w-full h-full rounded-[2.5rem] transition-opacity duration-300 ${
                        isFlipped ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-white via-[#FAF9F6] to-[#F7F4EA] border-2 border-[#D4AF37]/50 shadow-2xl shadow-amber-950/15 p-6 sm:p-7 flex flex-col justify-between relative select-none">
                        {/* Contenido Clínico Esencial */}
                        <div className="flex flex-col justify-between flex-1 min-h-0 space-y-3">
                          {/* Barra Superior con Badge y Botón Volver */}
                          <div className="flex items-center justify-between pb-2 border-b border-stone-200/60 shrink-0">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] text-[10px] font-extrabold uppercase tracking-wider">
                              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                              {spec.badge || spec.category}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => toggleCardFlip(spec.id, e)}
                              aria-label="Volver a la portada"
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-[#FAF7EE] text-stone-700 hover:text-[#84631E] border border-stone-200 hover:border-[#D4AF37]/60 text-[11px] font-bold transition-all cursor-pointer active:scale-95 shadow-2xs group/volver"
                            >
                              <RotateCw className="w-3.5 h-3.5 text-[#84631E] group-hover/volver:-rotate-180 transition-transform duration-500" />
                              <span>Volver</span>
                              <X className="w-3 h-3 text-stone-400 group-hover/volver:text-[#84631E]" />
                            </button>
                          </div>

                          {/* Título & Resumen Clínico Directo */}
                          <div className="space-y-1 shrink-0">
                            <h4 className="text-xl sm:text-[1.3rem] font-black text-[#0D0D0D] tracking-tight leading-snug">
                              {spec.title}
                            </h4>
                            <p className="text-xs sm:text-[12.5px] text-stone-600 leading-relaxed">
                              {spec.summary}
                            </p>
                          </div>

                          {/* Puntos Clave Esenciales (3 items concisos) */}
                          <div className="space-y-1.5 pt-2 border-t border-stone-200/60 shrink-0">
                            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">
                              Qué incluye el tratamiento:
                            </span>
                            <ul className="space-y-1.5">
                              {spec.features.slice(0, 3).map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                                  <div className="w-4 h-4 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/50 text-[#84631E] flex items-center justify-center shrink-0 shadow-2xs">
                                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                                  </div>
                                  <span className="leading-tight truncate">{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tiempo Clínico Estimado */}
                          <div className="flex items-center gap-2 text-[11px] text-stone-500 bg-white/80 border border-stone-200/70 rounded-xl px-3 py-2 shrink-0">
                            <Clock className="w-3.5 h-3.5 text-[#84631E] shrink-0" />
                            <span className="truncate"><strong>Tiempo estimado:</strong> {spec.estimatedDuration}</span>
                          </div>
                        </div>

                        {/* Botón de Consulta Único (WhatsApp) */}
                        <div className="pt-3 border-t border-stone-200/60 shrink-0">
                          <a
                            href={createWhatsAppLink(spec.waMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0f7a6d] text-white font-extrabold text-xs sm:text-[13px] uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-950/20 hover:shadow-emerald-600/30 hover:scale-[1.01] active:scale-[0.98] cursor-pointer group/cta"
                          >
                            <WhatsAppIcon className="w-4 h-4 text-white group-hover/cta:scale-110 transition-transform" />
                            <span>Consultar por WhatsApp</span>
                            <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover/cta:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM CONTROLS & POSITION DOTS & OUTSIDE SECTION NAVIGATION              */}
        {/* ========================================================================= */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-stone-200/80">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono font-black text-[#84631E]">
                {String(activeCardIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-xs text-stone-400">/</span>
              <span className="text-xs font-mono text-stone-500">
                {String(totalCards).padStart(2, '0')} Especialidades
              </span>
            </div>

            {/* Mobile Controls for touch screens */}
            <div className="flex md:hidden items-center gap-1.5 pl-2 border-l border-stone-200">
              <button
                type="button"
                onClick={handleScrollPrev}
                aria-label="Anterior"
                className="w-8 h-8 rounded-full bg-white border border-[#D4AF37]/40 text-[#84631E] flex items-center justify-center active:scale-95 shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleScrollNext}
                aria-label="Siguiente"
                className="w-8 h-8 rounded-full bg-white border border-[#D4AF37]/40 text-[#84631E] flex items-center justify-center active:scale-95 shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Navigation Dots (Gold) — 1:1 sincronizado con cada especialidad */}
          <div className="flex items-center gap-2">
            {CLINICAL_SPECIALTIES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => scrollToCard(dotIdx)}
                aria-label={`Ir a especialidad ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  dotIdx === activeCardIndex
                    ? 'w-8 bg-gradient-to-r from-[#D4AF37] to-[#84631E]'
                    : 'w-2 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

          {/* Botón para continuar a la siguiente sección */}
          <div className="flex items-center gap-3">
            <a
              href="#urgencias"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#84631E] hover:text-[#0D0D0D] bg-[#FAF7EE] hover:bg-[#F5EED8] border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-full transition-all duration-200 shadow-2xs cursor-pointer group"
            >
              <span>Continuar a Urgencias 24/7</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#84631E]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
