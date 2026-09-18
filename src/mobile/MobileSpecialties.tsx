import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Check,
  Users,
  Clock,
  Sparkles,
  Calendar
} from 'lucide-react';
import { CLINICAL_SPECIALTIES } from '../data/clinicalSpecialtiesData';
import { createWhatsAppLink } from '../data/clinicData';

interface MobileSpecialtiesProps {
  onSelectSpecialty?: (specialtyId: string) => void;
}

export const MobileSpecialties: React.FC<MobileSpecialtiesProps> = ({ onSelectSpecialty }) => {
  const [openId, setOpenId] = useState<string | null>('rehabilitacion-oral');

  const toggleSpecialty = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleBooking = (specialtyId: string, waMessage: string) => {
    if (onSelectSpecialty) {
      onSelectSpecialty(specialtyId);
    }
    window.open(createWhatsAppLink(waMessage), '_blank');
  };

  return (
    <section id="especialidades" className="py-14 px-4 bg-white relative">
      {/* Header */}
      <div className="max-w-sm mx-auto text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/35 shadow-2xs mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#84631E]" />
          <span className="text-[10.5px] font-black uppercase tracking-wider text-[#84631E]">
            Especialidades de Autor
          </span>
        </div>
        <h2 className="text-2xl xs:text-3xl font-black text-[#0D0D0D] tracking-tight leading-tight">
          Especialidades Clínicas
        </h2>
        <p className="text-xs text-stone-500 mt-1">
          Formación internacional, biomimética y tecnología 3D de alta gama.
        </p>
      </div>

      {/* Accordion List */}
      <div className="max-w-md mx-auto space-y-3">
        {CLINICAL_SPECIALTIES.map((specialty) => {
          const isOpen = openId === specialty.id;

          return (
            <div
              key={specialty.id}
              className={`rounded-2xl transition-all duration-200 border ${
                isOpen
                  ? 'border-[#D4AF37]/50 bg-[#FAF9F5] shadow-xs'
                  : 'border-stone-200/80 bg-white hover:border-[#D4AF37]/30'
              } overflow-hidden`}
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => toggleSpecialty(specialty.id)}
                className="w-full flex items-center justify-between p-3.5 gap-3 text-left cursor-pointer active:bg-amber-50/30 transition-colors"
              >
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#D4AF37]/25 bg-stone-100">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FAF7EE] text-[#84631E] border border-[#D4AF37]/30">
                      {specialty.category}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-sm xs:text-base text-[#0D0D0D] mt-0.5 truncate">
                    {specialty.title}
                  </h3>
                  <p className="text-[11px] text-stone-500 truncate">
                    {specialty.tagline}
                  </p>
                </div>

                <div className="shrink-0 text-[#84631E] pl-1">
                  <ChevronDown
                    className={`w-4.5 h-4.5 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#84631E]' : 'text-stone-400'
                    }`}
                  />
                </div>
              </button>

              {/* Accordion Expanded Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-1 border-t border-[#D4AF37]/15">
                      {/* Summary */}
                      <p className="text-xs text-stone-600 leading-relaxed my-2.5">
                        {specialty.summary}
                      </p>

                      {/* Features */}
                      <div className="space-y-1.5 my-3">
                        {specialty.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span className="text-xs text-stone-700 font-medium leading-tight">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Info Chips (Duration & Target Patient) */}
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 my-3 p-2.5 rounded-xl bg-white border border-stone-200/70 text-[11px]">
                        <div className="flex items-center gap-1.5 text-stone-600">
                          <Users className="w-3.5 h-3.5 text-[#84631E] shrink-0" />
                          <span className="truncate">{specialty.patientTarget}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-stone-600">
                          <Clock className="w-3.5 h-3.5 text-[#84631E] shrink-0" />
                          <span className="truncate">{specialty.estimatedDuration}</span>
                        </div>
                      </div>

                      {/* CTA Booking Button */}
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        onClick={() => handleBooking(specialty.id, specialty.waMessage)}
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-[#0D0D0D] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer border border-[#D4AF37]/40"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#0D0D0D]" />
                        <span>Agendar Valoración $15</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
