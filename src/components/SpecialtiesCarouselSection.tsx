import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
  Clock,
  User,
  ArrowRight,
  RotateCw,
  X
} from 'lucide-react';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { createWhatsAppLink } from '../data/clinicData';
import { CLINICAL_SPECIALTIES, DetailedClinicalSpecialty } from '../data/clinicalSpecialtiesData';

interface SpecialtiesCarouselSectionProps {
  onSelectSpecialtyForBooking?: (specialtyId: string) => void;
}

export const SpecialtiesCarouselSection: React.FC<SpecialtiesCarouselSectionProps> = ({
  onSelectSpecialtyForBooking
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const totalCards = CLINICAL_SPECIALTIES.length;

  // Track scroll position to update buttons and active index
  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 15);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 15);

    const card = el.querySelector<HTMLElement>('[data-card-index]');
    const cardWidth = card ? card.offsetWidth : 420;
    const gap = 24;
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveCardIndex(Math.min(Math.max(0, index), totalCards - 1));
  }, [totalCards]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToCard = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>('[data-card-index]');
    if (cards[index]) {
      const card = cards[index];
      const targetScroll = card.offsetLeft - el.offsetLeft;
      el.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const handleScrollPrev = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card-index]');
    const cardWidth = card ? card.offsetWidth : 420;
    el.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
  };

  const handleScrollNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card-index]');
    const cardWidth = card ? card.offsetWidth : 420;
    el.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
  };

  // Drag-to-scroll functionality for mouse/desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollContainerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const toggleCardFlip = (specId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
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
      className="relative w-full py-8 sm:py-12 bg-gradient-to-b from-[#FAF9F5] via-[#FFFFFF] to-[#FAF9F5] overflow-hidden scroll-mt-20 selection:bg-amber-500/20 selection:text-[#84631E]"
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
        {/* SECTION HEADER: Editorial, Blanco & Dorado, Controles Ergonómicos         */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-6 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/45 text-[#84631E] text-xs font-black uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Disciplinas Clínicas Oficiales</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
              Especialidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#84631E]">Médicas</span>
            </h2>
            
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Haz clic en cualquier tarjeta para descubrir sus detalles clínicos, técnicas aplicadas y beneficios directos sin salir de la página.
            </p>
          </motion.div>

          {/* Navigation Controls (Dorado & Blanco) */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              type="button"
              onClick={handleScrollPrev}
              disabled={!canScrollLeft}
              aria-label="Especialidad anterior"
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                canScrollLeft
                  ? 'bg-white text-[#84631E] border border-[#D4AF37]/40 shadow-sm hover:bg-[#FAF7EE] hover:border-[#D4AF37] active:scale-95'
                  : 'bg-stone-100 text-stone-300 border border-stone-200/60 cursor-not-allowed opacity-60'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleScrollNext}
              disabled={!canScrollRight}
              aria-label="Siguiente especialidad"
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                canScrollRight
                  ? 'bg-white text-[#84631E] border border-[#D4AF37]/40 shadow-sm hover:bg-[#FAF7EE] hover:border-[#D4AF37] active:scale-95'
                  : 'bg-stone-100 text-stone-300 border border-stone-200/60 cursor-not-allowed opacity-60'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HORIZONTAL CAROUSEL: TARJETAS CON IMÁGENES GRANDES Y TRANSFORMACIÓN 3D FLIP */}
        {/* ========================================================================= */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-6 sm:gap-7 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
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
                className="w-[85vw] sm:w-[350px] md:w-[380px] lg:w-[400px] shrink-0 snap-center h-[460px] sm:h-[480px] [perspective:1200px]"
              >
                {/* 3D Flip Card Container */}
                <div
                  onClick={() => toggleCardFlip(spec.id)}
                  className={`relative w-full h-full rounded-[2.5rem] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] cursor-pointer ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* ========================================================= */}
                  {/* CARA FRONTAL: FOTO GRANDE PROTAGONISTA & MÍNIMO TEXTO     */}
                  {/* ========================================================= */}
                  <div className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-stone-900 border border-[#D4AF37]/40 shadow-xl shadow-amber-950/10 [backface-visibility:hidden] flex flex-col justify-between group">
                    {/* Full-Bleed Large Cinematic Image */}
                    <img
                      src={spec.image}
                      alt={spec.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.88]"
                    />

                    {/* Dark and Warm Gold Vignette Overlay for Crisp Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/95 via-[#0B0B0B]/35 to-transparent pointer-events-none" />

                    {/* Top Floating Badge & Number */}
                    <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-black uppercase tracking-wider text-[#84631E] border border-[#D4AF37]/50 shadow-sm">
                        {spec.badge}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[#0B0B0B]/80 backdrop-blur-md text-[11px] font-mono font-black text-[#F3E5AB] border border-[#D4AF37]/40 flex items-center justify-center shadow-xs">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Bottom Clean Info with Flip Trigger Button */}
                    <div className="relative z-10 p-6 sm:p-7 space-y-3">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
                        {spec.category}
                      </p>
                      <h3 className="text-2xl sm:text-[1.75rem] font-black text-white leading-tight drop-shadow-md">
                        {spec.title}
                      </h3>
                      <p className="text-xs text-stone-200/90 line-clamp-1 italic font-light">
                        {spec.tagline}
                      </p>

                      {/* Interactive Transform Button */}
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
                  {/* CARA TRASERA: TRANSFORMACIÓN IN-SITU CON INFO CLÍNICA      */}
                  {/* ========================================================= */}
                  <div className="absolute inset-0 w-full h-full rounded-[2.5rem] bg-[#FFFFFF] border-2 border-[#D4AF37]/50 shadow-2xl shadow-amber-950/15 p-6 sm:p-7 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto no-scrollbar select-text">
                    <div className="space-y-4">
                      {/* Top Bar with Close/Flip-Back Button */}
                      <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                        <span className="text-[11px] font-black uppercase tracking-widest text-[#84631E]">
                          {spec.category}
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
                      <div className="space-y-2 pt-1 border-t border-stone-100">
                        <span className="text-[10.5px] font-black uppercase tracking-wider text-stone-400 block">
                          Incluye y Características:
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
                      <div className="pt-2 border-t border-stone-100 space-y-1 text-[11px] text-stone-500">
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
                    <div className="pt-3 mt-1 border-t border-stone-100 flex flex-col gap-2">
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
                          <span>Agendar Cita $15</span>
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

        {/* ========================================================================= */}
        {/* BOTTOM CONTROLS & POSITION DOTS                                           */}
        {/* ========================================================================= */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-black text-[#84631E]">
              {String(activeCardIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-xs text-stone-400">/</span>
            <span className="text-xs font-mono text-stone-500">
              {String(totalCards).padStart(2, '0')} Especialidades de Miranda Dental Studio
            </span>
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

          <div className="text-xs text-stone-400 hidden sm:block">
            Haz clic en la tarjeta para transformarla y ver los detalles
          </div>
        </div>
      </div>
    </section>
  );
};
