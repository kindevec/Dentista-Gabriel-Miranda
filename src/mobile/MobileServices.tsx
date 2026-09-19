import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { SPECIALTIES_DATA, createWhatsAppLink } from '../data/clinicData';
import { WhatsAppIcon } from '../components/OfficialSocialLogos';

interface MobileServicesProps {
  onSelectService?: (serviceId: string) => void;
}

export const MobileServices: React.FC<MobileServicesProps> = ({ onSelectService }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIndex = Math.max(0, activeIndex - 1);
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = Math.min(SPECIALTIES_DATA.length - 1, activeIndex + 1);
    scrollToIndex(nextIndex);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth;
      if (cardWidth > 0) {
        const newIndex = Math.round(scrollLeft / cardWidth);
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < SPECIALTIES_DATA.length) {
          setActiveIndex(newIndex);
        }
      }
    }
  };

  return (
    <section id="servicios" className="pt-6 pb-8 bg-[#FAF9F5] overflow-hidden relative">
      {/* Header Section */}
      <div className="px-4 mb-6 max-w-sm mx-auto text-center">
        <h2 className="text-2xl xs:text-3xl font-black text-[#0D0D0D] tracking-tight leading-tight">
          Servicios Odontológicos
        </h2>
        <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
          Atención preventiva y restauradora sin dolor con tecnología de vanguardia.
        </p>
      </div>

      {/* Carousel Container with Side Navigation Controls */}
      <div className="relative w-full max-w-sm mx-auto px-4">
        {/* Left Arrow Flanking the Carousel */}
        {activeIndex > 0 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Servicio anterior"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-[#D4AF37]/35 text-[#84631E] shadow-md flex items-center justify-center cursor-pointer active:scale-90 transition-transform"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Right Arrow Flanking the Carousel */}
        {activeIndex < SPECIALTIES_DATA.length - 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Siguiente servicio"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-[#D4AF37]/35 text-[#84631E] shadow-md flex items-center justify-center cursor-pointer active:scale-90 transition-transform"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory rounded-3xl pb-2 pt-1 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SPECIALTIES_DATA.map((service) => (
            <div
              key={service.id}
              className="w-full min-w-full snap-center shrink-0"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/25 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                {/* Card Photo Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 group">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-108 active:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black text-[#84631E] border border-[#D4AF37]/30 shadow-xs">
                    {service.badge || 'Servicio Básico'}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#0D0D0D]/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{service.estimatedTime}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 xs:p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-extrabold text-[#0D0D0D] tracking-tight mb-1.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-500 mb-3.5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-1.5 mb-4 flex-1">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/35 text-[#84631E] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-xs text-stone-700 leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Action with PC Button Animation */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    href={createWhatsAppLink(service.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (onSelectService) onSelectService(service.id);
                    }}
                    className="w-full py-3 min-h-[44px] px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:from-[#C5A059] hover:to-[#84631E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-[#D4AF37]/25 border border-[#D4AF37]/40 cursor-pointer transition-all duration-300 group active:opacity-95"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                    <span>Consultar por WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-1 mt-3">
          {SPECIALTIES_DATA.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir al servicio ${idx + 1}`}
              className="min-w-[32px] min-h-[44px] flex items-center justify-center cursor-pointer p-1"
            >
              <span
                className={`transition-all duration-300 block ${
                  activeIndex === idx
                    ? 'w-6 h-1.5 rounded-full bg-[#D4AF37]'
                    : 'w-1.5 h-1.5 rounded-full bg-stone-300 hover:bg-stone-400'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
