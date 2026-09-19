import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA, createWhatsAppLink } from '../data/clinicData';
import { WhatsAppIcon } from '../components/OfficialSocialLogos';

export const MobileFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="preguntas" className="pt-6 pb-6 px-4 bg-[#FAF9F5] relative">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl xs:text-3xl font-black tracking-tight leading-tight text-stone-900">
            Preguntas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#84631E]">
              Frecuentes
            </span>
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Respuestas claras y honestas sobre tus tratamientos y atención odontológica.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-2.5 mb-6">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'border-[#D4AF37]/45 bg-white shadow-xs'
                    : 'border-stone-200/80 bg-white/80'
                } overflow-hidden`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="px-4 py-3.5 flex items-center justify-between gap-3 w-full text-left cursor-pointer active:bg-stone-50 transition-colors"
                >
                  <span className="font-bold text-xs xs:text-sm text-stone-800 leading-snug flex-1">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4.5 h-4.5 text-[#84631E] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 text-xs text-stone-600 leading-relaxed border-t border-stone-100 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support WhatsApp Prompt */}
        <div className="text-center">
          <a
            href={createWhatsAppLink("Hola Dr. Gabriel Miranda, tengo una consulta sobre sus tratamientos odontológicos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-[#84631E] transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current text-[#25D366]" />
            <span>¿Tienes otra consulta? <strong className="text-[#84631E]">Escríbenos por WhatsApp</strong></span>
          </a>
        </div>
      </div>
    </section>
  );
};
