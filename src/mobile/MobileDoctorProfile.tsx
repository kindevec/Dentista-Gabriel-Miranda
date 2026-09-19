import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Cpu,
  Calendar
} from 'lucide-react';
import {
  DOCTOR_PROFILE,
  DOCTOR_NAME,
  createWhatsAppLink,
  BOOKING_WA_MESSAGE
} from '../data/clinicData';
import { OrganicDentalRibbon } from '../components/OrganicDentalRibbon';

interface MobileDoctorProfileProps {
  onOpenBooking?: () => void;
}

export const MobileDoctorProfile: React.FC<MobileDoctorProfileProps> = ({ onOpenBooking }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBooking = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById('contacto');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open(createWhatsAppLink(BOOKING_WA_MESSAGE), '_blank');
      }
    }
  };

  return (
    <section id="nosotros" className="pt-10 pb-6 px-4 bg-white relative overflow-hidden">
      {/* Subtle Floating 3D Curved Ribbon in Gold from PC */}
      <OrganicDentalRibbon className="absolute top-1/4 -left-16 w-80 opacity-25 pointer-events-none" variant="gold" />

      <div className="max-w-md mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl xs:text-3xl font-black tracking-tight leading-tight text-stone-900">
            Conoce al{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#84631E]">
              {DOCTOR_NAME}
            </span>
          </h2>
          <p className="text-xs text-[#84631E] font-bold mt-0.5">
            {DOCTOR_PROFILE.title}
          </p>
        </div>

        {/* Doctor Photo with Golden Halos & Pulsing Ring from PC */}
        <div className="relative w-44 h-44 mx-auto mb-6 flex items-center justify-center">
          {/* Subtle Golden Ring Pulse from PC */}
          <motion.div
            animate={{
              scale: [0.95, 1.08, 0.95],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/40 pointer-events-none"
          />

          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/35 via-[#F3E5AB]/20 to-transparent blur-xl -z-10" />

          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            <img
              src="/dr-gabriel-miranda.webp"
              alt={DOCTOR_NAME}
              loading="lazy"
              className="w-full h-full rounded-full object-cover object-top ring-4 ring-[#D4AF37]/50 ring-offset-4 ring-offset-white shadow-xl transition-transform duration-500 hover:scale-105 active:scale-98"
            />
          </motion.div>
        </div>

        {/* Doctor Bio (Justified text, 3-4 lines clamped initially) */}
        <div className="relative mb-2">
          <p className={`text-xs xs:text-sm text-stone-700 leading-relaxed text-justify ${!isExpanded ? 'line-clamp-4' : ''}`}>
            {DOCTOR_PROFILE.bio}
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden space-y-4 pt-3"
              >
                {/* Philosophy Quote (Desplegado solo al dar Ver más) */}
                <div className="bg-[#FAF9F5] rounded-2xl p-4 border border-[#D4AF37]/30 relative shadow-2xs">
                  <span className="absolute -top-3 left-4 text-3xl text-[#D4AF37] font-serif leading-none bg-[#FAF9F5] px-1">
                    “
                  </span>
                  <p className="text-xs italic text-stone-700 leading-relaxed mt-1 text-justify">
                    {DOCTOR_PROFILE.philosophy}
                  </p>
                </div>

                {/* Formación Académica y Certificaciones (Desplegado) */}
                <div className="bg-[#FAF7EE]/70 rounded-2xl p-4 border border-[#D4AF37]/35 shadow-2xs">
                  <div className="flex items-center gap-2.5 pb-2.5 mb-2.5 border-b border-[#D4AF37]/20">
                    <div className="w-8 h-8 rounded-xl bg-white border border-[#D4AF37]/30 flex items-center justify-center text-[#84631E] shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-black text-stone-900">
                      Formación Académica y Certificaciones
                    </h4>
                  </div>
                  <div className="space-y-2 text-xs">
                    {DOCTOR_PROFILE.credentials.map((cred, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-stone-700 leading-tight">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1 shrink-0" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón Ver más / Ver menos */}
          <div className="text-center mt-3 mb-6">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7EE] hover:bg-[#F3ECCE] border border-[#D4AF37]/45 text-[#84631E] font-bold text-xs uppercase tracking-wider shadow-2xs active:scale-95 transition-all cursor-pointer"
            >
              <span>{isExpanded ? 'Ver menos' : 'Ver más'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Infrastructure & Biosecurity Showcase */}
        <div className="pt-2">
          <h3 className="text-lg xs:text-xl font-black tracking-tight mb-3 text-center text-stone-900">
            Instalaciones y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#84631E]">
              Bioseguridad
            </span>
          </h3>

          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/25 aspect-square bg-stone-100 shadow-2xs group">
              <img
                src="/clinic/consultorio.webp"
                alt="Consultorio Odontológico"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 active:scale-105"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/25 aspect-square bg-stone-100 shadow-2xs group">
              <img
                src="/clinic/bioseguridad.webp"
                alt="Bioseguridad Certificada"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 active:scale-105"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-[#FAF9F5] rounded-xl p-3 flex items-start gap-2.5 border border-stone-100 hover:border-[#D4AF37]/30 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7EE] border border-[#D4AF37]/35 flex items-center justify-center shrink-0 shadow-2xs">
                <MapPin className="w-4 h-4 text-[#84631E]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 leading-tight">
                  Ubicación Privilegiada
                </h4>
                <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                  Av. 19 de Mayo y Velasco Ibarra. Planta Baja con parqueadero privado.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] rounded-xl p-3 flex items-start gap-2.5 border border-stone-100 hover:border-[#D4AF37]/30 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7EE] border border-[#D4AF37]/35 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#84631E]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 leading-tight">
                  Esterilización & Bioseguridad
                </h4>
                <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                  Protocolos clínicos rigurosos con autoclave de grado hospitalario.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] rounded-xl p-3 flex items-start gap-2.5 border border-stone-100 hover:border-[#D4AF37]/30 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7EE] border border-[#D4AF37]/35 flex items-center justify-center shrink-0 shadow-2xs">
                <Cpu className="w-4 h-4 text-[#84631E]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 leading-tight">
                  Diagnóstico 3D & Digital
                </h4>
                <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                  Equipamiento mecanizado de alta precisión para endodoncia y estética.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button with PC Hover / Tap micro-interaction */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBooking}
          className="w-full mt-6 py-4 px-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0D0D0D] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#D4AF37]/25 cursor-pointer border border-[#D4AF37]/45 transition-all group active:opacity-95"
        >
          <Calendar className="w-4 h-4 text-[#0D0D0D] group-hover:scale-110 transition-transform" />
          <span>Agendar Consulta</span>
        </motion.button>
      </div>
    </section>
  );
};
