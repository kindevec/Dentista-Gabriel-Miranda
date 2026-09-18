import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  User,
  ArrowRight,
  ArrowDown,
  RotateCw,
  X
} from 'lucide-react';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { createWhatsAppLink } from '../data/clinicData';
import { CLINICAL_SPECIALTIES, DetailedClinicalSpecialty } from '../data/clinicalSpecialtiesData';

interface SpecialtiesCarouselSectionProps {
  onSelectSpecialtyForBooking?: (specialtyId: string) => void;
}

// 3 sets of specialties to support silky-smooth seamless infinite scrolling
const INFINITE_SPECIALTIES = [
  ...CLINICAL_SPECIALTIES.map((s, i) => ({ ...s, uniqueKey: `set-0-${s.id}-${i}` })),
  ...CLINICAL_SPECIALTIES.map((s, i) => ({ ...s, uniqueKey: `set-1-${s.id}-${i}` })),
  ...CLINICAL_SPECIALTIES.map((s, i) => ({ ...s, uniqueKey: `set-2-${s.id}-${i}` })),
];

export const SpecialtiesCarouselSection: React.FC<SpecialtiesCarouselSectionProps> = ({
  onSelectSpecialtyForBooking
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const totalCards = CLINICAL_SPECIALTIES.length;

  const getCardUnit = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return 0;
    const card = el.querySelector<HTMLElement>('[data-card-index]');
    if (!card) return 0;
    return card.offsetWidth + 24; // 24px is gap-6
  }, []);

  // Initialize scroll position in the center set (Set 1) so infinite scroll works both ways immediately
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const initScroll = () => {
      const cardUnit = getCardUnit();
      if (cardUnit > 0) {
        el.scrollLeft = totalCards * cardUnit;
        setActiveCardIndex(0);
      }
    };

    const timer = setTimeout(initScroll, 50);
    return () => clearTimeout(timer);
  }, [totalCards, getCardUnit]);

  // Track scroll position to update dots and silently loop when scrolling finishes
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardUnit = getCardUnit();
    if (cardUnit <= 0) return;

    // Active specialty index (0 to totalCards - 1)
    const rawIndex = Math.round(el.scrollLeft / cardUnit);
    const normalizedIndex = ((rawIndex % totalCards) + totalCards) % totalCards;
    setActiveCardIndex(normalizedIndex);

    // Debounce silent teleport so smooth scrolling or dragging isn't interrupted
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      const setWidth = totalCards * cardUnit;
      // If user scrolled past Set 1 into Set 2
      if (el.scrollLeft >= 2 * setWidth - cardUnit) {
        el.scrollLeft -= setWidth;
      } else if (el.scrollLeft < setWidth) {
        // If user scrolled before Set 1 into Set 0
        el.scrollLeft += setWidth;
      }
    }, 150);
  }, [totalCards, getCardUnit]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  const scrollToCard = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardUnit = getCardUnit();
    if (cardUnit <= 0) return;

    const setWidth = totalCards * cardUnit;
    const targetScroll = setWidth + index * cardUnit;
    el.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  const handleScrollPrev = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardUnit = getCardUnit();
    if (cardUnit <= 0) return;

    const setWidth = totalCards * cardUnit;
    // If at or before the start of Set 1, teleport forward to Set 2 seamlessly first
    if (el.scrollLeft <= setWidth) {
      el.scrollLeft += setWidth;
    }
    el.scrollBy({ left: -cardUnit, behavior: 'smooth' });
  };

  const handleScrollNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardUnit = getCardUnit();
    if (cardUnit <= 0) return;

    const setWidth = totalCards * cardUnit;
    // If near the end of Set 2, teleport back to Set 1 seamlessly first
    if (el.scrollLeft >= 2 * setWidth - cardUnit) {
      el.scrollLeft -= setWidth;
    }
    el.scrollBy({ left: cardUnit, behavior: 'smooth' });
  };

  // Drag-to-scroll functionality for mouse/desktop con umbral de arrastre estricto
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Solo clic izquierdo principal
    const el = scrollContainerRef.current;
    if (!el) return;
    isMouseDownRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current) return;
    const el = scrollContainerRef.current;
    if (!el) return;
    const currentX = e.pageX - el.offsetLeft;
    const diff = currentX - startXRef.current;

    // Solo activar arrastre si supera 7px para permitir clicks y hovers normales
    if (Math.abs(diff) > 7) {
      hasDraggedRef.current = true;
      setIsDragging(true);
      el.scrollLeft = scrollLeftRef.current - diff * 1.2;
    }
  };

  const handleMouseUpOrLeave = () => {
    isMouseDownRef.current = false;
    setTimeout(() => {
      setIsDragging(false);
      hasDraggedRef.current = false;
    }, 60);
  };

  const toggleCardFlip = (specId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    // Si se realizó un desplazamiento por arrastre, no voltear la tarjeta
    if (hasDraggedRef.current) return;
    setFlippedCardId((prev) => (prev === specId ? null : specId));
  };

  const handleBooking = (spec: DetailedClinicalSpecialty, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSelectSpecialtyForBooking) {
      onSelectSpecialtyForBooking(spec.id);
    }
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
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
        {/* SECTION HEADER: Editorial, Blanco & Dorado (Sin Etiquetas)                 */}
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
            Haz clic en cualquier tarjeta para descubrir sus detalles clínicos, técnicas aplicadas y beneficios directos sin salir de la página.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* CAROUSEL WRAPPER CON BOTONES FUERA DE LAS CARDS (NO LAS TAPEN)            */}
        {/* ========================================================================= */}
        <div className="relative group/carousel px-0 md:px-14 lg:px-16">
          
          {/* Botón Lateral Izquierdo: Fuera de las cards en el margen exterior izquierdo */}
          <button
            type="button"
            onClick={handleScrollPrev}
            aria-label="Especialidad anterior"
            className="hidden md:flex absolute left-0 lg:left-1 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-13 lg:h-13 rounded-full items-center justify-center backdrop-blur-md shadow-xl transition-all duration-300 opacity-0 pointer-events-none group-hover/carousel:opacity-100 group-hover/carousel:pointer-events-auto bg-white/95 text-[#84631E] border border-[#D4AF37]/60 shadow-amber-950/20 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#84631E] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Botón Lateral Derecho: Fuera de las cards en el margen exterior derecho */}
          <button
            type="button"
            onClick={handleScrollNext}
            aria-label="Siguiente especialidad"
            className="hidden md:flex absolute right-0 lg:right-1 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-13 lg:h-13 rounded-full items-center justify-center backdrop-blur-md shadow-xl transition-all duration-300 opacity-0 pointer-events-none group-hover/carousel:opacity-100 group-hover/carousel:pointer-events-auto bg-white/95 text-[#84631E] border border-[#D4AF37]/60 shadow-amber-950/20 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#84631E] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* ========================================================================= */}
          {/* HORIZONTAL CAROUSEL INFINITO: TARJETAS PROPORCIONALES QUE NUNCA SE CORTAN */}
          {/* ========================================================================= */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar select-none ${
              isDragging ? 'cursor-grabbing' : ''
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {INFINITE_SPECIALTIES.map((spec, index) => {
              const isFlipped = flippedCardId === spec.id;

              return (
                <div
                  key={spec.uniqueKey}
                  data-card-index={index}
                  className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0 snap-start h-[490px] sm:h-[510px] [perspective:1200px]"
                >
                  {/* 3D Flip Card Container */}
                  <div
                    onClick={(e) => {
                      if (!isFlipped) {
                        toggleCardFlip(spec.id, e);
                      }
                    }}
                    className={`relative w-full h-full rounded-[2.5rem] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] cursor-pointer ${
                      isFlipped ? '[transform:rotateY(180deg)]' : ''
                    }`}
                  >
                    {/* ========================================================= */}
                    {/* CARA FRONTAL: FOTO CINEMÁTICA Y TIPOGRAFÍA EDITORIAL       */}
                    {/* ========================================================= */}
                    <div
                      className={`absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-stone-900 border border-[#D4AF37]/40 shadow-xl shadow-amber-950/10 [backface-visibility:hidden] flex flex-col justify-between group transition-all duration-300 ${
                        isFlipped
                          ? 'pointer-events-none opacity-0 z-0'
                          : 'pointer-events-auto opacity-100 z-10'
                      }`}
                    >
                      {/* Full-Bleed Large Cinematic Image */}
                      <img
                        src={spec.image}
                        alt={spec.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85]"
                      />

                      {/* Gradiente Oscuro y Cálido para Legibilidad Total */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/95 via-[#0B0B0B]/40 to-black/20 pointer-events-none" />

                      {/* Espacio Superior Limpio (Sin Etiquetas Estorbando) */}
                      <div className="relative z-10 p-5 sm:p-6" />

                      {/* Información Inferior con Botón Interactivo para Transformar */}
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
                            className="w-full py-3 px-5 rounded-2xl bg-white/95 hover:bg-white text-[#0B0B0B] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:via-[#F3E5AB] group-hover:to-[#C5A059] group-hover:text-[#0B0B0B] border border-white/60 cursor-pointer"
                          >
                            <RotateCw className="w-3.5 h-3.5 text-[#84631E] group-hover:rotate-180 transition-transform duration-500" />
                            <span>Ver Detalles Clínicos</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* ========================================================= */}
                    {/* CARA TRASERA: INFORMACIÓN CLÍNICA DETALLADA                */}
                    {/* ========================================================= */}
                    <div
                      className={`absolute inset-0 w-full h-full rounded-[2.5rem] bg-gradient-to-b from-[#FFFFFF] via-[#FAF9F6] to-[#F7F4EA] border-2 border-[#D4AF37]/50 shadow-2xl shadow-amber-950/15 p-6 sm:p-7 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto no-scrollbar select-text transition-all duration-300 ${
                        isFlipped
                          ? 'pointer-events-auto opacity-100 z-10'
                          : 'pointer-events-none opacity-0 z-0'
                      }`}
                    >
                      <div className="space-y-4">
                        {/* Top Bar with Close/Flip-Back Button */}
                        <div className="flex items-center justify-between pb-2.5 border-b border-stone-200/60">
                          <span className="text-[11px] font-black uppercase tracking-widest text-[#84631E]">
                            Detalles Clínicos
                          </span>
                          <button
                            type="button"
                            onClick={(e) => toggleCardFlip(spec.id, e)}
                            aria-label="Volver a la imagen"
                            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-[#FAF7EE] text-stone-700 hover:text-[#84631E] border border-stone-200/80 flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Title & Concise Summary */}
                        <div className="space-y-1.5">
                          <h4 className="text-xl sm:text-2xl font-black text-[#0D0D0D] leading-tight">
                            {spec.title}
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed text-justify">
                            {spec.summary}
                          </p>
                        </div>

                        {/* Key Highlights / Features */}
                        <div className="space-y-2 pt-1 border-t border-stone-200/60">
                          <span className="text-[10.5px] font-black uppercase tracking-wider text-stone-400 block">
                            Incluye y Técnicas Clínicas:
                          </span>
                          <div className="space-y-1.5">
                            {spec.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                                <div className="w-4 h-4 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/50 text-[#84631E] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </div>
                                <span className="leading-snug">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Candidate & Duration */}
                        <div className="pt-2 border-t border-stone-200/60 space-y-1 text-[11px] text-stone-500">
                          <div className="flex items-start gap-1.5">
                            <User className="w-3.5 h-3.5 text-[#84631E] shrink-0 mt-0.5" />
                            <span><strong>Indicado para:</strong> {spec.patientTarget}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#84631E] shrink-0" />
                            <span><strong>Tiempo clínico:</strong> {spec.estimatedDuration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Actions: WhatsApp CTA + Agendar Cita + Back */}
                      <div className="pt-3 mt-1 border-t border-stone-200/60 flex flex-col gap-2">
                        <a
                          href={createWhatsAppLink(spec.waMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0B0B0B] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-950/15 cursor-pointer border border-[#D4AF37]/50"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-[#0B0B0B]" />
                          <span>Consultar por WhatsApp</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
                        </a>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => handleBooking(spec, e)}
                            className="flex-1 py-2 px-3 rounded-xl bg-[#FAF7EE] hover:bg-[#F5EED8] text-[#84631E] border border-[#D4AF37]/30 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                          >
                            <span>Agendar Cita</span>
                          </button>

                          <button
                            type="button"
                            onClick={(e) => toggleCardFlip(spec.id, e)}
                            className="py-2 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <RotateCw className="w-3 h-3" />
                            <span>Volver</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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

          {/* Interactive Navigation Dots (Gold) */}
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

          {/* Botón para continuar a la siguiente sección (fuera de las cards) */}
          <div className="flex items-center gap-3">
            <div className="text-xs text-stone-400 hidden lg:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Navegación infinita</span>
            </div>

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
