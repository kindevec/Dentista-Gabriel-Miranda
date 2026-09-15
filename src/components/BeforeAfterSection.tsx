import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BEFORE_AFTER_CASES, createWhatsAppLink, DOCTOR_NAME } from '../data/clinicData';
import {
  Star,
  Sparkles,
  MoveHorizontal,
  Quote,
  CheckCircle2,
  Info,
  ShieldCheck,
  Activity,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { CurvedSectionDivider } from './CurvedSectionDivider';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

const InteractiveBeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0) return;
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(Math.round(percentage));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // pointer capture fallback
    }
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="relative w-full h-[280px] sm:h-[340px] rounded-[2rem] overflow-hidden select-none cursor-ew-resize shadow-2xl bg-slate-900 touch-none group"
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
    >
      {/* Background After Image */}
      <img
        src={afterImage}
        alt={`${title} - Después`}
        referrerPolicy="no-referrer"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* After Badge */}
      <div className="absolute top-3 right-3 bg-[#005A9C]/90 text-white text-[10px] sm:text-[11px] font-extrabold px-3.5 py-1 rounded-full backdrop-blur-md shadow-md z-10 flex items-center gap-1 border border-white/20 pointer-events-none">
        <Sparkles className="w-3 h-3 text-[#00BFFF]" />
        <span>DESPUÉS</span>
      </div>

      {/* Foreground Clipped Before Image */}
      <div
        className="absolute inset-0 h-full overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`${title} - Antes`}
          referrerPolicy="no-referrer"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none select-none"
          style={{
            width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
            height: '100%'
          }}
        />

        {/* Before Badge */}
        <div className="absolute top-3 left-3 bg-slate-900/90 text-slate-200 text-[10px] sm:text-[11px] font-extrabold px-3.5 py-1 rounded-full backdrop-blur-md shadow-md z-10 border border-white/10 pointer-events-none">
          <span>ANTES</span>
        </div>
      </div>

      {/* Slider Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-cyan-300 shadow-[0_0_12px_rgba(0,191,255,0.8)] pointer-events-none z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Knob with Pulsing Light */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#005A9C] shadow-2xl flex items-center justify-center border-2 border-[#00BFFF] cursor-ew-resize">
          <MoveHorizontal className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Touch drag helper prompt */}
      <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none z-10">
        <span className="text-[10px] bg-black/60 backdrop-blur-md text-cyan-200 px-3.5 py-1 rounded-full border border-white/10">
          Arrastra para comparar
        </span>
      </div>
    </div>
  );
};

export const BeforeAfterSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'ortodoncia' | 'implantes' | 'estetica' | 'blanqueamiento'>('todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const filteredCases =
    activeCategory === 'todos'
      ? BEFORE_AFTER_CASES
      : BEFORE_AFTER_CASES.filter((c) => c.category === activeCategory);

  // Responsive items per view detection
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 1024) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const totalCases = filteredCases.length;
  const effectiveItemsPerView = Math.min(itemsPerView, totalCases);
  const maxIndex = Math.max(0, totalCases - effectiveItemsPerView);

  // Reset index when category filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

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

  return (
    <section id="casos-reales" className="py-24 relative overflow-hidden bg-[#07182B] text-white">
      {/* 1. Intercalated High-Definition Photographic Background (Dental Aesthetic Suite) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1920&auto=format&fit=crop"
          alt="Clínica dental Gabriel Miranda casos estéticos"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-125 scale-105"
        />
        {/* Deep Medical Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07182B] via-[#0A2644]/95 to-[#07182B]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-black/70" />
      </div>

      {/* 2. Floating 3D Curved Dental Ribbon SVGs */}
      <OrganicDentalRibbon className="-top-12 -left-20 w-[32rem] md:w-[44rem] opacity-60" variant="cyan" />
      <OrganicDentalRibbon className="-bottom-16 -right-24 w-[34rem] md:w-[48rem] opacity-50" variant="blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/15 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg shadow-cyan-500/10 border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Resultados Clínicos Verificados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Casos Reales: Transformaciones de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
              Antes y Después
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Descubre transformaciones estéticas y funcionales reales realizadas por el {DOCTOR_NAME}. Arrastra el deslizador interactivo para apreciar cada detalle con precisión microscópica.
          </p>
        </motion.div>

        {/* Clinical Precision Metrics Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10"
        >
          <div className="p-5 rounded-[2rem] bg-white/10 backdrop-blur-xl text-center shadow-lg border border-white/10">
            <div className="flex items-center justify-between text-xs font-bold text-cyan-300 mb-2">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Precisión Oclusal 3D</span>
              <span>99.4%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-[#00BFFF] to-[#005A9C] h-2 rounded-full w-[99.4%]" />
            </div>
          </div>

          <div className="p-5 rounded-[2rem] bg-white/10 backdrop-blur-xl text-center shadow-lg border border-white/10">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-300 mb-2">
              <span className="flex items-center gap-1.5"><Activity className="w-4 h-4" /> Procedimientos Sin Dolor</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2 rounded-full w-full" />
            </div>
          </div>

          <div className="p-5 rounded-[2rem] bg-white/10 backdrop-blur-xl text-center shadow-lg border border-white/10">
            <div className="flex items-center justify-between text-xs font-bold text-amber-300 mb-2">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4" /> Satisfacción del Paciente</span>
              <span>99.8%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-300 to-yellow-500 h-2 rounded-full w-[99.8%]" />
            </div>
          </div>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-10"
        >
          {[
            { id: 'todos', label: 'Todos los Casos' },
            { id: 'ortodoncia', label: 'Ortodoncia Invisible' },
            { id: 'implantes', label: 'Implantes 3D' },
            { id: 'estetica', label: 'Diseño de Sonrisa' },
            { id: 'blanqueamiento', label: 'Blanqueamiento' },
          ].map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#005A9C] to-[#00BFFF] text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* 3. Carousel Container with Flanked Controls (Kindev Standard Ergonomics) */}
        <div className="relative px-2 sm:px-4">
          
          {/* Flanked Navigation Button: Left (Kindev Rule 2) */}
          {maxIndex > 0 && (
            <button
              onClick={handlePrev}
              aria-label="Caso anterior"
              className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white border border-white/25 shadow-2xl flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Flanked Navigation Button: Right (Kindev Rule 2) */}
          {maxIndex > 0 && (
            <button
              onClick={handleNext}
              aria-label="Caso siguiente"
              className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white border border-white/25 shadow-2xl flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

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
              <AnimatePresence mode="popLayout">
                {filteredCases.map((c) => (
                  <div
                    key={c.id}
                    className="shrink-0 p-3 sm:p-4 flex flex-col"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="h-full bg-white/10 backdrop-blur-2xl rounded-[2.5rem] p-7 shadow-2xl transition-all duration-300 flex flex-col justify-between border border-white/10"
                    >
                      <div>
                        {/* Interactive Slider */}
                        <InteractiveBeforeAfterSlider
                          beforeImage={c.beforeImage}
                          afterImage={c.afterImage}
                          title={c.title}
                        />

                        {/* Case Meta Details */}
                        <div className="mt-6 space-y-3.5 text-left">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-200 bg-cyan-500/20 px-3.5 py-1 rounded-full">
                              {c.duration}
                            </span>
                            <div className="flex items-center text-amber-400">
                              {[...Array(c.stars)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                          </div>

                          <h3 className="text-lg font-bold text-white leading-snug">{c.title}</h3>
                          <p className="text-xs text-slate-300 leading-relaxed">{c.description}</p>

                          {/* Testimonial */}
                          <div className="pt-2 pl-2 relative">
                            <Quote className="w-5 h-5 text-cyan-400/30 mb-1" />
                            <p className="text-xs italic text-cyan-100 font-light leading-relaxed">
                              "{c.testimonial}"
                            </p>
                            <div className="flex items-center gap-1.5 mt-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              <p className="text-[11px] font-bold text-cyan-300">{c.patientName} • Paciente Verificado</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Consultation CTA Button */}
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={createWhatsAppLink(`Hola ${DOCTOR_NAME}, vi el caso de ${c.title} en su web y quisiera consultar si mi caso califica para un tratamiento similar.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#005A9C] to-[#0084DE] hover:from-[#004b83] hover:to-[#0070bc] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/40 cursor-pointer"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                          <span>Consultar por este resultado</span>
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          {maxIndex > 0 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Ir al caso ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-8 bg-gradient-to-r from-cyan-400 to-[#00BFFF] shadow-xs'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}

        </div>

        {/* Clinical Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto p-4 rounded-full bg-white/5 flex items-center justify-center gap-3 text-xs text-slate-300 text-center"
        >
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            * Todos los casos clínicos presentados corresponden a pacientes reales tratados por el {DOCTOR_NAME}.
          </span>
        </motion.div>

      </div>

      {/* Organic Curved Wave Transition into Emergency Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CurvedSectionDivider position="bottom" fillColor="#07192C" variant="wave2" />
      </div>
    </section>
  );
};
