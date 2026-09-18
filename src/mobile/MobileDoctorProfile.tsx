import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Cpu,
  Calendar,
  Award
} from 'lucide-react';
import {
  DOCTOR_PROFILE,
  DOCTOR_NAME,
  createWhatsAppLink,
  BOOKING_WA_MESSAGE
} from '../data/clinicData';

interface MobileDoctorProfileProps {
  onOpenBooking?: () => void;
}

export const MobileDoctorProfile: React.FC<MobileDoctorProfileProps> = ({ onOpenBooking }) => {
  const [showCredentials, setShowCredentials] = useState(false);

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
    <section id="nosotros" className="py-14 px-4 bg-white relative">
      <div className="max-w-md mx-auto">
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/35 shadow-2xs mb-2">
            <Award className="w-3.5 h-3.5 text-[#84631E]" />
            <span className="text-[10.5px] font-black uppercase tracking-wider text-[#84631E]">
              Dirección Médica
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl font-black text-[#0D0D0D] tracking-tight leading-tight">
            {DOCTOR_NAME}
          </h2>
          <p className="text-xs text-[#84631E] font-bold mt-0.5">
            {DOCTOR_PROFILE.title}
          </p>
        </div>

        {/* Doctor Photo with Golden Halos */}
        <div className="relative w-44 h-44 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/30 to-[#FAF7EE] blur-xl -z-10" />
          <img
            src="/dr-gabriel-miranda.webp"
            alt={DOCTOR_NAME}
            loading="lazy"
            className="w-full h-full rounded-full object-cover object-top ring-4 ring-[#D4AF37]/40 ring-offset-4 ring-offset-white shadow-lg"
          />
        </div>

        {/* Philosophy Quote */}
        <div className="bg-[#FAF9F5] rounded-2xl p-4 border border-[#D4AF37]/25 mb-5 relative">
          <span className="absolute -top-3 left-4 text-3xl text-[#D4AF37] font-serif leading-none bg-[#FAF9F5] px-1">
            “
          </span>
          <p className="text-xs italic text-stone-700 leading-relaxed mt-1 text-center">
            {DOCTOR_PROFILE.philosophy}
          </p>
        </div>

        {/* Short Bio */}
        <p className="text-xs text-stone-600 leading-relaxed text-center mb-5">
          {DOCTOR_PROFILE.bio}
        </p>

        {/* Credentials Accordion */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => setShowCredentials(!showCredentials)}
            className="w-full bg-[#FAF7EE] rounded-2xl p-3.5 flex items-center justify-between border border-[#D4AF37]/35 active:scale-[0.98] transition-transform cursor-pointer shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white border border-[#D4AF37]/30 flex items-center justify-center text-[#84631E]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-xs font-black text-stone-800">
                Formación Académica y Certificaciones
              </span>
            </div>
            <motion.div
              animate={{ rotate: showCredentials ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4 text-[#84631E]" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showCredentials && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-3.5 space-y-2.5 bg-white border border-[#D4AF37]/20 rounded-b-2xl -mt-1 pt-4 text-xs">
                  {DOCTOR_PROFILE.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-stone-700 leading-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1 shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Infrastructure & Biosecurity Showcase */}
        <div className="pt-2">
          <h3 className="text-lg font-black text-[#0D0D0D] tracking-tight mb-3 text-center">
            Instalaciones y Bioseguridad
          </h3>

          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/25 aspect-square bg-stone-100 shadow-2xs">
              <img
                src="/clinic/consultorio.webp"
                alt="Consultorio Odontológico"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/25 aspect-square bg-stone-100 shadow-2xs">
              <img
                src="/clinic/bioseguridad.webp"
                alt="Bioseguridad Certificada"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-[#FAF9F5] rounded-xl p-3 flex items-start gap-2.5 border border-stone-100">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7EE] border border-[#D4AF37]/35 flex items-center justify-center shrink-0">
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

            <div className="bg-[#FAF9F5] rounded-xl p-3 flex items-start gap-2.5 border border-stone-100">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7EE] border border-[#D4AF37]/35 flex items-center justify-center shrink-0">
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

            <div className="bg-[#FAF9F5] rounded-xl p-3 flex items-start gap-2.5 border border-stone-100">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7EE] border border-[#D4AF37]/35 flex items-center justify-center shrink-0">
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

        {/* CTA Button */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleBooking}
          className="w-full mt-6 py-4 px-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-[#0D0D0D] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer border border-[#D4AF37]/45"
        >
          <Calendar className="w-4 h-4 text-[#0D0D0D]" />
          <span>Agendar Consulta con Dr. Miranda</span>
        </motion.button>
      </div>
    </section>
  );
};
