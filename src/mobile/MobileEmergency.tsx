import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Clock, AlertTriangle } from 'lucide-react';
import { DOCTOR_NAME, createWhatsAppLink, EMERGENCY_WA_MESSAGE } from '../data/clinicData';
import { WhatsAppIcon } from '../components/OfficialSocialLogos';

interface MobileEmergencyProps {
  onOpenEmergency?: () => void;
}

export const MobileEmergency: React.FC<MobileEmergencyProps> = ({ onOpenEmergency }) => {
  const handleEmergencyClick = (e: React.MouseEvent) => {
    if (onOpenEmergency) {
      e.preventDefault();
      onOpenEmergency();
    }
  };

  return (
    <section id="urgencias" className="bg-[#0D0D0D] relative overflow-hidden py-14 px-4 text-white">
      {/* Background Image with Atmospheric Luxury Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/clinica-miranda.webp"
          alt={`${DOCTOR_NAME} Clínica`}
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/70" />
      </div>

      <div className="relative z-10 max-w-sm mx-auto">
        {/* Priority Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 mb-3">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">
            Atención Prioritaria 24/7
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl xs:text-3xl font-black text-white tracking-tight leading-tight mb-2">
          ¿Urgencia Dental<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-[#D4AF37]">
            en Quito?
          </span>
        </h2>
        <p className="text-xs text-stone-300 leading-relaxed mb-6">
          Alivio inmediato del dolor agudo, fracturas dentales e infecciones con atención de máxima prioridad.
        </p>

        {/* Bullet Benefits List */}
        <div className="space-y-2.5 mb-6">
          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <h3 className="text-xs font-black text-white leading-tight">
                Alivio Inmediato del Dolor
              </h3>
              <p className="text-[11px] text-stone-400 leading-tight mt-0.5">
                Diagnóstico integral $15 con fotos clínicas y rayos X.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
              <CreditCard className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-xs font-black text-white leading-tight">
                Crédito Directo Inmediato
              </h3>
              <p className="text-[11px] text-stone-400 leading-tight mt-0.5">
                Financiamiento directo de $400 a $2,000 sin demoras.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-xs font-black text-white leading-tight">
                Horario Extendido & Domingos
              </h3>
              <p className="text-[11px] text-stone-400 leading-tight mt-0.5">
                Lun-Sáb: 09:00 - 19:00 | Domingo: 09:00 - 14:00
              </p>
            </div>
          </div>
        </div>

        {/* High Conversion WhatsApp SOS CTA */}
        <motion.a
          whileTap={{ scale: 0.96 }}
          href={createWhatsAppLink(EMERGENCY_WA_MESSAGE)}
          onClick={handleEmergencyClick}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#1EBE5D] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer"
        >
          <WhatsAppIcon className="w-4.5 h-4.5 fill-current" />
          <span>Contactar Urgencia por WhatsApp</span>
        </motion.a>
      </div>
    </section>
  );
};
