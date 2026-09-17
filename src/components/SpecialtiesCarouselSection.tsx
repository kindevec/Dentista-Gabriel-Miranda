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
  Cpu,
  Calendar
} from 'lucide-react';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { createWhatsAppLink } from '../data/clinicData';
import { CLINICAL_SPECIALTIES, DetailedClinicalSpecialty } from '../data/clinicalSpecialtiesData';
import { CurvedSectionDivider } from './CurvedSectionDivider';

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

  const totalCards = CLINICAL_SPECIALTIES.length;

  // Check scroll position to enable/disable arrow buttons and update active index
  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 15);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 15);

    // Calculate nearest card
    const cardWidth = el.querySelector<HTMLElement>('[data-card-index]')?.offsetWidth || 480;
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
    const cardWidth = el.querySelector<HTMLElement>('[data-card-index]')?.offsetWidth || 480;
    el.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
  };

  const handleScrollNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>('[data-card-index]')?.offsetWidth || 480;
    el.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
  };

  // Drag-to-scroll functionality for desktop mouse drag
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

  const handleSelectSpecialty = (spec: DetailedClinicalSpecialty) => {
    if (onSelectSpecialtyForBooking) {
      onSelectSpecialtyForBooking(spec.id);
    }
    const bookingEl = document.getElementById('contacto');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="especialidades"
      className="relative w-full py-16 sm:py-24 bg-[#F8FAFD] overflow-hidden scroll-mt-20 selection:bg-cyan-500/20 selection:text-[#005A9C]"
    >
      {/* Organic Medical Background Accent Lights (GPU Accelerated) */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full pointer-events-none opacity-40 transform-gpu"
        style={{
          background: 'radial-gradient(circle, rgba(0, 191, 255, 0.12) 0%, rgba(0, 90, 156, 0.04) 55%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 transform-gpu"
        style={{
          background: 'radial-gradient(circle, rgba(0, 90, 156, 0.10) 0%, rgba(0, 191, 255, 0.03) 60%, transparent 75%)',
          filter: 'blur(70px)'
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER WITH ASYMMETRICAL EDITORIAL CONTROLS (KINDEV WEB STANDARD) */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl space-y-2.5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-300/40 text-[#005A9C] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#00BFFF]" />
              <span>Planes Clínicos y Quirúrgicos Avanzados</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
              Especialidades <span className="text-[#005A9C]">Odontológicas</span>
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
              Abordaje médico integral de alta precisión. Descubre cada especialidad a profundidad: tecnología diagnóstica 3D, flujos de trabajo computarizados y protocolos quirúrgicos diseñados para una salud y estética oral definitiva.
            </p>
          </motion.div>

          {/* Ergonomic Horizontal Carousel Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              type="button"
              onClick={handleScrollPrev}
              disabled={!canScrollLeft}
              aria-label="Especialidad anterior"
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                canScrollLeft
                  ? 'bg-white text-[#005A9C] border border-slate-200 shadow-sm hover:bg-[#005A9C] hover:text-white hover:border-[#005A9C] active:scale-95'
                  : 'bg-slate-100 text-slate-300 border border-slate-200/60 cursor-not-allowed opacity-60'
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
                  ? 'bg-white text-[#005A9C] border border-slate-200 shadow-sm hover:bg-[#005A9C] hover:text-white hover:border-[#005A9C] active:scale-95'
                  : 'bg-slate-100 text-slate-300 border border-slate-200/60 cursor-not-allowed opacity-60'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HORIZONTAL CAROUSEL TRACK DIRECTLY ON CANVAS (ZERO BOX-IN-BOX WRAPPER) */}
        {/* ========================================================================= */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-6 sm:gap-8 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {CLINICAL_SPECIALTIES.map((spec, index) => (
            <motion.article
              key={spec.id}
              data-card-index={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="w-[88vw] sm:w-[460px] md:w-[500px] lg:w-[520px] shrink-0 snap-center rounded-[2.5rem] bg-white border border-slate-200/90 shadow-xl shadow-cyan-950/5 flex flex-col justify-between overflow-hidden p-6 sm:p-7 hover:border-cyan-400/80 transition-all duration-300 group"
            >
              {/* 1. Top Architectural Image Mask with Floating Badges */}
              <div className="space-y-6">
                <div className="relative w-full h-56 sm:h-64 rounded-[2rem] overflow-hidden bg-slate-900 shadow-inner">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.92]"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/25 to-transparent" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[11px] font-extrabold text-[#005A9C] shadow-sm border border-white/60 tracking-tight">
                      {spec.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-xl bg-[#0A2540]/80 backdrop-blur-md text-[11px] font-mono font-bold text-cyan-200 border border-white/20">
                      0{index + 1} / 0{totalCards}
                    </span>
                  </div>

                  {/* Bottom Category Tag & Tagline */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md text-[#0A2540] border border-white/70 shadow-md">
                    <p className="text-[11px] font-black uppercase tracking-wider text-[#0084DE]">
                      {spec.category}
                    </p>
                    <p className="text-xs text-slate-600 font-medium italic mt-0.5 line-clamp-1">
                      {spec.tagline}
                    </p>
                  </div>
                </div>

                {/* 2. Main Title and Deep Clinical Description */}
                <div className="space-y-2.5">
                  <h3 className="text-2xl sm:text-2xl lg:text-[1.65rem] font-extrabold text-[#0A2540] tracking-tight leading-snug">
                    {spec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    {spec.summary}
                  </p>
                </div>

                {/* 3. Applied Digital Technologies (3 Micro-Chips) */}
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                    Tecnología Digital Aplicada:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {spec.technologies.map((tech, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100/90 text-xs"
                      >
                        <div className="w-5 h-5 rounded-lg bg-cyan-500/15 text-[#005A9C] flex items-center justify-center shrink-0 mt-0.5">
                          <Cpu className="w-3 h-3 text-[#005A9C]" />
                        </div>
                        <div>
                          <strong className="font-bold text-[#0A2540] block">{tech.name}</strong>
                          <span className="text-[11px] text-slate-500 leading-snug">{tech.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Clinical Protocol Workflow (4-Phase Roadmap) */}
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                    Protocolo Clínico Paso a Paso:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {spec.workflow.map((step) => (
                      <div
                        key={step.stepNumber}
                        className="p-2.5 rounded-xl bg-cyan-50/60 border border-cyan-100/80"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-5 h-5 rounded-full bg-[#005A9C] text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                            {step.stepNumber}
                          </span>
                          <span className="text-xs font-bold text-[#0A2540] leading-tight truncate">
                            {step.phase}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Key Highlights & Candidate Profile */}
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <div className="space-y-1.5">
                    {spec.clinicalBenefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-500">
                    <div className="flex items-start gap-2">
                      <User className="w-3.5 h-3.5 text-[#0084DE] shrink-0 mt-0.5" />
                      <span className="text-[11px] text-slate-600">
                        <strong>Indicado para:</strong> {spec.patientTarget}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#0084DE] shrink-0" />
                      <span className="text-[11px] text-slate-600">
                        <strong>Tiempo clínico estimado:</strong> {spec.estimatedDuration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Actionable Ergonomic CTA Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={createWhatsAppLink(spec.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:brightness-105 active:scale-[0.98] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Consultar Especialidad por WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/80" />
                </a>

                <button
                  type="button"
                  onClick={() => handleSelectSpecialty(spec)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#005A9C] font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#005A9C]" />
                  <span>Agendar Cita para esta Especialidad</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM PAGINATION CONTROLS & INTERACTIVE PROGRESS (DESKTOP & MOBILE) */}
        {/* ========================================================================= */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#005A9C]">
              {String(activeCardIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-xs text-slate-400">/</span>
            <span className="text-xs font-mono text-slate-400">
              {String(totalCards).padStart(2, '0')} Especialidades Médicas
            </span>
          </div>

          {/* Interactive Navigation Dots */}
          <div className="flex items-center gap-2">
            {CLINICAL_SPECIALTIES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => scrollToCard(dotIdx)}
                aria-label={`Ir a especialidad ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  dotIdx === activeCardIndex
                    ? 'w-8 bg-[#005A9C]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <div className="text-xs text-slate-400 hidden sm:block">
            Desliza o usa las flechas para explorar el catálogo clínico
          </div>
        </div>
      </div>

      {/* Decorative Bottom Curved Divider to match medical aesthetic */}
      <CurvedSectionDivider
        position="bottom"
        fillColor="#FFFFFF"
        variant="smoothCurve"
      />
    </section>
  );
};
