import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  ArrowRight,
  RotateCw
} from 'lucide-react';
import { WhatsAppIcon } from '../components/OfficialSocialLogos';
import { CLINICAL_SPECIALTIES } from '../data/clinicalSpecialtiesData';
import { createWhatsAppLink } from '../data/clinicData';

interface MobileSpecialtiesProps {
  onSelectSpecialty?: (specialtyId: string) => void;
}

export const MobileSpecialties: React.FC<MobileSpecialtiesProps> = ({ onSelectSpecialty }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navTimerRef = useRef<NodeJS.Timeout | null>(null);

  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const hasSwipedRef = useRef(false);

  const totalCards = CLINICAL_SPECIALTIES.length;

  const showNavTemporarily = () => {
    setIsNavVisible(true);
    if (navTimerRef.current) clearTimeout(navTimerRef.current);
    navTimerRef.current = setTimeout(() => {
      setIsNavVisible(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (navTimerRef.current) clearTimeout(navTimerRef.current);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const targetIndex = ((index % totalCards) + totalCards) % totalCards;
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: targetIndex * cardWidth,
      behavior: 'smooth',
    });
    setActiveIndex(targetIndex);
    setFlippedCardId(null);
  };

  const handlePrev = () => {
    showNavTemporarily();
    const prevIndex = activeIndex === 0 ? totalCards - 1 : activeIndex - 1;
    scrollToIndex(prevIndex);
  };

  const handleNext = () => {
    showNavTemporarily();
    const nextIndex = (activeIndex + 1) % totalCards;
    scrollToIndex(nextIndex);
  };

  const handleScroll = () => {
    showNavTemporarily();
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth;
    if (cardWidth > 0) {
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < totalCards) {
        setActiveIndex(newIndex);
      }
    }
  };

  const toggleCardFlip = (specId: string, e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setFlippedCardId((prev) => (prev === specId ? null : specId));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    hasSwipedRef.current = false;
    showNavTemporarily();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaX = Math.abs(e.touches[0].clientX - touchStartXRef.current);
    const deltaY = Math.abs(e.touches[0].clientY - touchStartYRef.current);
    if (deltaX > 10 || deltaY > 10) {
      hasSwipedRef.current = true;
    }
    showNavTemporarily();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (deltaX < -50 && activeIndex === totalCards - 1) {
      // Swiped left at the end -> wrap to first
      scrollToIndex(0);
    } else if (deltaX > 50 && activeIndex === 0) {
      // Swiped right at the first -> wrap to last
      scrollToIndex(totalCards - 1);
    }
    showNavTemporarily();
  };

  return (
    <section id="especialidades" className="pt-3 pb-6 px-4 bg-white relative">
      {/* Header */}
      <div className="max-w-sm mx-auto text-center mb-3.5">
        <h2 className="text-2xl xs:text-3xl font-black tracking-tight leading-tight text-stone-900">
          Especialidades{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#84631E]">
            Odontológicas
          </span>
        </h2>
        <p className="text-xs text-stone-500 mt-1">
          Formación internacional, biomimética y tecnología 3D de alta gama.
        </p>
      </div>

      {/* Carousel Container with Flanking Buttons */}
      <div className="relative w-full max-w-sm mx-auto">
        {/* Left Arrow Button (Bucle Infinito + Translúcido) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Especialidad anterior"
          className={`absolute -left-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 border border-[#D4AF37]/45 text-[#84631E] flex items-center justify-center cursor-pointer active:scale-90 transition-all duration-500 backdrop-blur-xs ${
            isNavVisible
              ? 'opacity-95 shadow-lg scale-100'
              : 'opacity-25 hover:opacity-95 active:opacity-100 shadow-none scale-95'
          }`}
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Right Arrow Button (Bucle Infinito + Translúcido) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Siguiente especialidad"
          className={`absolute -right-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 border border-[#D4AF37]/45 text-[#84631E] flex items-center justify-center cursor-pointer active:scale-90 transition-all duration-500 backdrop-blur-xs ${
            isNavVisible
              ? 'opacity-95 shadow-lg scale-100'
              : 'opacity-25 hover:opacity-95 active:opacity-100 shadow-none scale-95'
          }`}
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Horizontal Carousel (1-by-1 Snap) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex overflow-x-auto snap-x snap-mandatory rounded-[2rem] [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CLINICAL_SPECIALTIES.map((spec) => {
            const isFlipped = flippedCardId === spec.id;

            return (
              <div
                key={spec.id}
                className="w-full min-w-full snap-center shrink-0 h-[470px] xs:h-[490px] px-0.5"
                style={{ perspective: 1200 }}
              >
                {/* 3D Flip Card Container */}
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative w-full h-full rounded-[2rem]"
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
                    className={`absolute inset-0 w-full h-full rounded-[2rem] transition-opacity duration-300 ${
                      isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
                    }`}
                    onClick={(e) => {
                      if (!hasSwipedRef.current) toggleCardFlip(spec.id, e);
                    }}
                  >
                    <div className="w-full h-full rounded-[2rem] overflow-hidden bg-stone-900 border border-[#D4AF37]/40 shadow-xl shadow-amber-950/15 flex flex-col justify-end group cursor-pointer relative select-none">
                      {/* Full-Bleed Image */}
                      <img
                        src={spec.image}
                        alt={spec.title}
                        width={400}
                        height={490}
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                      />

                      {/* Degradado Inferior */}
                      <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/85 via-45% to-transparent pointer-events-none" />

                      {/* Información Frontal */}
                      <div className="relative z-10 p-5 flex flex-col justify-end shrink-0">
                        <h3 className="text-xl xs:text-2xl font-black text-white leading-tight drop-shadow-md line-clamp-2 mb-1.5">
                          {spec.title}
                        </h3>
                        <p className="text-xs text-stone-200/95 line-clamp-2 leading-relaxed font-medium mb-3.5">
                          {spec.tagline}
                        </p>

                        <button
                          type="button"
                          onClick={(e) => toggleCardFlip(spec.id, e)}
                          className="w-full py-3 px-4 rounded-xl bg-white/95 text-[#0B0B0B] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:bg-gradient-to-r active:from-[#D4AF37] active:via-[#F3E5AB] active:to-[#C5A059] border border-white/60 cursor-pointer"
                        >
                          <RotateCw className="w-3.5 h-3.5 text-[#84631E]" />
                          <span>Ver Detalles Clínicos</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* ========================================================= */}
                  {/* CARA TRASERA: INFORMACIÓN CLÍNICA Y CONSULTA WHATSAPP      */}
                  {/* ========================================================= */}
                  <div
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                    className={`absolute inset-0 w-full h-full rounded-[2rem] transition-opacity duration-300 cursor-pointer ${
                      isFlipped ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={(e) => {
                      if (!hasSwipedRef.current) toggleCardFlip(spec.id, e);
                    }}
                  >
                    <div className="w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-white via-[#FAF9F6] to-[#F7F4EA] border-2 border-[#D4AF37]/50 shadow-2xl shadow-amber-950/15 p-5 xs:p-6 flex flex-col justify-between relative select-none">
                      {/* Textura de Fondo Enriquecida: Fotografía clínica como marca de agua + trama sutil de lujo */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
                        <img
                          src={spec.image}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.09] filter grayscale contrast-125 select-none"
                        />
                        <div className="absolute inset-0 opacity-[0.045] bg-[radial-gradient(#84631E_1.2px,transparent_1.2px)] [background-size:18px_18px]" />
                        <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-[#D4AF37]/25 to-transparent rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-[#C5A059]/20 to-transparent rounded-full blur-xl" />
                      </div>

                      {/* Cabecera con Título Protagónico y Botón Girar */}
                      <div className="shrink-0 flex items-start justify-between gap-3 pt-0.5 relative z-10">
                        <h3 className="text-2xl xs:text-[1.65rem] font-black tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#0D0D0D] via-[#74541B] to-[#C5A059]">
                          {spec.title}
                        </h3>
                        <button
                          type="button"
                          onClick={(e) => toggleCardFlip(spec.id, e)}
                          aria-label="Volver al frente"
                          className="shrink-0 w-9 h-9 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/45 text-[#84631E] flex items-center justify-center shadow-xs active:scale-90 transition-transform cursor-pointer mt-0.5"
                        >
                          <RotateCw className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Contenido Clínico con Tipografía en Color Negro para Máxima Legibilidad */}
                      <div className="flex-1 flex flex-col justify-evenly py-2 min-h-0 space-y-3 relative z-10">
                        {/* Resumen Clínico Directo y Legible en Negro */}
                        <p className="text-sm xs:text-[15px] text-[#0D0D0D] font-medium leading-relaxed">
                          {spec.summary}
                        </p>

                        {/* Qué incluye el tratamiento en Negro */}
                        <div className="space-y-2">
                          <span className="text-xs font-black uppercase tracking-wider text-[#0D0D0D] block">
                            Qué incluye el tratamiento:
                          </span>
                          <ul className="space-y-2">
                            {spec.features.slice(0, 3).map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-2.5 text-[13px] xs:text-sm text-[#0D0D0D] font-bold">
                                <div className="w-5 h-5 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/60 text-[#84631E] flex items-center justify-center shrink-0 shadow-xs">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </div>
                                <span className="leading-snug">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tiempo Clínico Estimado en Negro */}
                        <div className="flex items-center gap-2 text-xs xs:text-[13px] text-[#0D0D0D] font-medium px-3 py-2 rounded-xl bg-amber-50/50 border border-[#D4AF37]/30">
                          <Clock className="w-4 h-4 text-[#84631E] shrink-0" />
                          <span><strong className="text-[#0D0D0D] font-bold">Tiempo estimado:</strong> {spec.estimatedDuration}</span>
                        </div>
                      </div>

                      {/* Botón WhatsApp CTA */}
                      <div className="pt-2 shrink-0 relative z-10">
                        <a
                          href={createWhatsAppLink(spec.waMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onSelectSpecialty) onSelectSpecialty(spec.id);
                          }}
                          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] text-white font-black text-xs xs:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-950/20 active:scale-98 cursor-pointer"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                          <span>Consultar por WhatsApp</span>
                          <ArrowRight className="w-3.5 h-3.5 text-white/80 shrink-0" />
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

      {/* Bottom Carousel Controls: Counter + Dots */}
      <div className="flex items-center justify-between max-w-sm mx-auto px-2 mt-2.5">
        <div className="flex items-center gap-1 font-mono text-[11px] font-bold text-[#84631E]">
          <span>{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="text-stone-400">/</span>
          <span className="text-stone-500 font-normal">{String(totalCards).padStart(2, '0')}</span>
        </div>

        <div className="flex items-center gap-1.5">
          {CLINICAL_SPECIALTIES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir a especialidad ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? 'w-6 h-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#84631E]'
                  : 'w-1.5 h-1.5 rounded-full bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

        <div className="text-[10px] font-semibold text-stone-400">
          <span>Toca para voltear</span>
        </div>
      </div>
    </section>
  );
};
