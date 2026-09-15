import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { FAQ_DATA, DOCTOR_NAME, createWhatsAppLink } from '../data/clinicData';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { CurvedSectionDivider } from './CurvedSectionDivider';

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
    <section id="preguntas" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle organic ribbon accent */}
      <OrganicDentalRibbon className="-top-10 -right-20 w-96 opacity-30" variant="cyan" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-3"
        >
          <span className="px-5 py-2 rounded-full bg-cyan-100/80 text-[#005A9C] text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-md">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            Resolvemos tus Dudas sobre Tratamientos y Consultas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Conoce los aspectos clave sobre el manejo del dolor, facilidades de pago y tiempos de atención en nuestro consultorio.
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
                    ? 'bg-cyan-50/60 shadow-md border border-cyan-200/80'
                    : 'bg-slate-50/80 hover:bg-slate-100/70 shadow-2xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-7 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-[#00BFFF]' : 'text-slate-400'}`} />
                    <span className="text-sm sm:text-base font-bold text-[#0A2540]">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#005A9C] text-white rotate-180' : 'bg-white text-slate-500 shadow-2xs'
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
                      <div className="px-7 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-cyan-100/60 pl-14">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* FAQ WhatsApp Direct Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center p-8 rounded-[2.5rem] bg-slate-50"
        >
          <p className="text-sm font-semibold text-[#0A2540] mb-3">
            ¿Tienes alguna consulta médica adicional que no esté en esta lista?
          </p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={createWhatsAppLink(`Hola ${DOCTOR_NAME}, tengo una pregunta sobre un tratamiento dental que me gustaría consultar.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition-all shadow-xs cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Consultar directamente por WhatsApp</span>
          </motion.a>
        </motion.div>

      </div>

      {/* Organic Curved Wave Transition into Contact Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CurvedSectionDivider position="bottom" fillColor="#F8FAFC" variant="wave1" />
      </div>
    </section>
  );
};
