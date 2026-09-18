import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { FAQ_DATA, DOCTOR_NAME, createWhatsAppLink } from '../data/clinicData';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="preguntas" className="py-8 sm:py-10 bg-white relative overflow-hidden">
      {/* Subtle organic ribbon accent in gold */}
      <OrganicDentalRibbon className="absolute -top-10 -right-20 w-96 opacity-25" variant="gold" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-2">
        
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 sm:mb-6 space-y-1.5"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Resolvemos tus Dudas sobre Tratamientos y Consultas
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            Respuestas directas sobre valoraciones, opciones de financiamiento y confort clínico en Miranda Dental Studio.
          </p>
        </motion.div>

        {/* FAQ Accordion List - Ultra-Soft Curves [2rem] */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-4"
        >
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                className={`rounded-[2rem] transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF7EE] shadow-md border border-[#D4AF37]/50'
                    : 'bg-[#FAF9F5] hover:bg-stone-100/70 border border-stone-200/50 shadow-2xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 sm:py-5 px-4 sm:px-7 flex items-center justify-between text-left gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-[#AA7C11]' : 'text-stone-400'}`} />
                    <span className="text-xs sm:text-base font-bold text-[#0D0D0D]">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#D4AF37] text-white shadow-[0_2px_10px_rgba(212,175,55,0.4)] rotate-180' : 'bg-white text-stone-500 shadow-2xs border border-stone-200/60'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-4 sm:px-7 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-[#D4AF37]/20 pl-11 sm:pl-14 text-justify">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* FAQ WhatsApp Direct Link - Direct on canvas (Zero Box-in-Box) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <p className="text-sm font-semibold text-[#0D0D0D] mb-3">
            ¿Tienes alguna consulta médica adicional que no esté en esta lista?
          </p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={createWhatsAppLink(`Hola ${DOCTOR_NAME}, tengo una pregunta sobre un tratamiento dental que me gustaría consultar.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF7EE] hover:bg-[#F5EED8] text-[#84631E] border border-[#D4AF37]/30 font-bold text-xs transition-all shadow-xs cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Consultar directamente por WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
