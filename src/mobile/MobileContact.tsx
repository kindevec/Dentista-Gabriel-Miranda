import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  ExternalLink
} from 'lucide-react';
import {
  CLINIC_ADDRESS,
  CLINIC_HOURS,
  CLINIC_PHONE_DISPLAY,
  CLINIC_EMAIL,
  SOCIAL_NETWORKS,
  createWhatsAppLink,
  DOCTOR_NAME,
  VALUATION_PRICE
} from '../data/clinicData';
import {
  LuxuryTreatmentSelect,
  LuxuryDatePicker,
  LuxuryTimeSelect
} from '../components/ui/LuxuryFormControls';
import {
  OfficialWhatsAppLogo,
  OfficialInstagramLogo,
  OfficialFacebookLogo,
  WhatsAppIcon
} from '../components/OfficialSocialLogos';
import { cn } from '../lib/utils';

interface MobileContactProps {
  preselectedSpecialty?: string;
}

export const MobileContact: React.FC<MobileContactProps> = ({
  preselectedSpecialty = 'consulta-valoracion',
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialty, setSpecialty] = useState(preselectedSpecialty);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Mañana (09:00 - 12:00)');
  const [notes, setNotes] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedSpecialty) {
      setSpecialty(preselectedSpecialty);
    }
  }, [preselectedSpecialty]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !phone.trim()) return;

    const emergencyHeader = isEmergency ? '🚨 *URGENCIA DENTAL PRIORITARIA* 🚨\n\n' : '';
    const dateText = date ? `\n📅 *Fecha deseada:* ${date}` : '';
    const timeText = time ? `\n⏰ *Horario preferido:* ${time}` : '';
    const notesText = notes.trim() ? `\n📝 *Detalles o síntomas:* ${notes.trim()}` : '';

    const message = `${emergencyHeader}Hola ${DOCTOR_NAME}, mi nombre es *${patientName.trim()}*. Deseo agendar una consulta de valoración integral de $${VALUATION_PRICE} en Miranda Dental Studio.\n\n🦷 *Motivo de consulta:* ${specialty}${dateText}${timeText}\n📞 *Teléfono de contacto:* ${phone.trim()}${notesText}`;

    setIsSubmitted(true);
    window.open(createWhatsAppLink(message), '_blank');

    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <section id="contacto" className="py-14 px-4 bg-[#FAF9F5] relative">
      <div className="max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7EE] border border-[#D4AF37]/35 shadow-2xs mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#84631E]" />
            <span className="text-[10.5px] font-black uppercase tracking-wider text-[#84631E]">
              Agendamiento & Ubicación
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl font-black text-[#0D0D0D] tracking-tight leading-tight">
            Agenda tu Consulta
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Valoración clínica integral con fotos HD y rayos X por solo <strong>${VALUATION_PRICE}</strong>.
          </p>
        </div>

        {/* Main Booking Form Card */}
        <div className="bg-white rounded-3xl p-5 border border-[#D4AF37]/30 shadow-md mb-8">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-black text-base text-stone-900">
                ¡Solicitud Lista para WhatsApp!
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-xs">
                Se ha abierto tu chat con el Dr. Gabriel Miranda para coordinar la cita de inmediato.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Patient Name */}
              <div>
                <label htmlFor="patientName" className="block text-[11px] font-bold text-stone-700 mb-1">
                  Nombre Completo *
                </label>
                <input
                  id="patientName"
                  type="text"
                  required
                  placeholder="Ej. María Pérez"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl border border-stone-200 text-xs bg-stone-50/40 text-stone-800 focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                />
              </div>

              {/* WhatsApp Phone */}
              <div>
                <label htmlFor="phone" className="block text-[11px] font-bold text-stone-700 mb-1">
                  Teléfono WhatsApp *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="099 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl border border-stone-200 text-xs bg-stone-50/40 text-stone-800 focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                />
              </div>

              {/* Email (optional) */}
              <div>
                <label htmlFor="email" className="block text-[11px] font-bold text-stone-700 mb-1">
                  Correo Electrónico (Opcional)
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu.correo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl border border-stone-200 text-xs bg-stone-50/40 text-stone-800 focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                />
              </div>

              {/* Treatment Dropdown */}
              <div>
                <label className="block text-[11px] font-bold text-stone-700 mb-1">
                  Tratamiento o Motivo
                </label>
                <LuxuryTreatmentSelect
                  value={specialty}
                  onChange={(val) => setSpecialty(val)}
                />
              </div>

              {/* Date & Time Selectors */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    Fecha Deseada
                  </label>
                  <LuxuryDatePicker
                    value={date}
                    onChange={(val) => setDate(val)}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    Horario Preferido
                  </label>
                  <LuxuryTimeSelect
                    value={time}
                    onChange={(val) => setTime(val)}
                  />
                </div>
              </div>

              {/* Emergency Switch */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-red-50/60 border border-red-200/70">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="text-xs font-bold text-red-700">
                    ¿Es una urgencia odontológica?
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEmergency(!isEmergency)}
                  className={cn(
                    'w-10 h-6 rounded-full transition-colors relative flex items-center cursor-pointer',
                    isEmergency ? 'bg-red-500' : 'bg-stone-300'
                  )}
                  aria-label="Alternar urgencia"
                >
                  <div
                    className={cn(
                      'w-4 h-4 rounded-full bg-white absolute top-1 shadow-sm transition-transform duration-200',
                      isEmergency ? 'translate-x-5' : 'translate-x-1'
                    )}
                  />
                </button>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-[11px] font-bold text-stone-700 mb-1">
                  Notas Adicionales
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  placeholder="Describe brevemente lo que sientes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50/40 text-stone-800 focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-[#0D0D0D] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/25 border border-[#D4AF37]/45 cursor-pointer mt-2"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Confirmar y Enviar por WhatsApp</span>
              </motion.button>
            </form>
          )}
        </div>

        {/* Operating & Clinic Details Card */}
        <div className="bg-white rounded-3xl p-4 border border-stone-200/80 shadow-xs mb-6 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/35 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-[#84631E]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-stone-900">Dirección</h4>
              <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                {CLINIC_ADDRESS}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/35 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-[#84631E]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-stone-900">Horario de Atención</h4>
              <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                {CLINIC_HOURS}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/35 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-[#84631E]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-stone-900">Teléfono Directo</h4>
              <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                {CLINIC_PHONE_DISPLAY}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/35 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-[#84631E]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-stone-900">Correo</h4>
              <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                {CLINIC_EMAIL}
              </p>
            </div>
          </div>
        </div>

        {/* Official Social Channels */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {SOCIAL_NETWORKS.map((social) => {
            let IconComponent = OfficialWhatsAppLogo;
            if (social.id === 'instagram') IconComponent = OfficialInstagramLogo;
            if (social.id === 'facebook') IconComponent = OfficialFacebookLogo;

            return (
              <motion.a
                key={social.id}
                whileTap={{ scale: 0.9 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-12 h-12 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-xs flex items-center justify-center cursor-pointer hover:bg-[#FAF7EE] transition-colors"
              >
                <IconComponent size={24} />
              </motion.a>
            );
          })}
        </div>

        {/* Location Map Preview */}
        <a
          href="https://maps.google.com/?q=-0.170669,-78.472535"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xs group"
        >
          <img
            src="/clinic/ubicacion-mapa.webp"
            alt="Ubicación de la clínica en Google Maps"
            loading="lazy"
            className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-stone-900/30 flex items-center justify-center">
            <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-xs font-bold flex items-center gap-1.5 shadow-sm">
              <ExternalLink className="w-3.5 h-3.5 text-[#84631E]" />
              <span>Abrir en Google Maps</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
