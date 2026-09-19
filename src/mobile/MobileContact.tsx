import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  AlertTriangle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import {
  CLINIC_ADDRESS,
  CLINIC_CITY,
  CLINIC_REFERENCE,
  CLINIC_MAPS_URL,
  CLINIC_WAZE_URL,
  CLINIC_MAP_EMBED_URL,
  CLINIC_HOURS,
  CLINIC_PHONE_DISPLAY,
  CLINIC_EMAIL,
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
  WhatsAppIcon
} from '../components/OfficialSocialLogos';
import { cn } from '../lib/utils';
import { useBookingFormState } from '../hooks/useBookingFormState';

interface MobileContactProps {
  preselectedSpecialty?: string;
}

export const MobileContact: React.FC<MobileContactProps> = ({
  preselectedSpecialty = 'consulta-valoracion',
}) => {
  const { formData, updateField } = useBookingFormState(preselectedSpecialty);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    patientName,
    phone,
    email,
    specialtyId: specialty,
    preferredDate: date,
    preferredTime: time,
    notes,
    isEmergency,
  } = formData;

  const setPatientName = (val: string) => updateField('patientName', val);
  const setPhone = (val: string) => updateField('phone', val);
  const setEmail = (val: string) => updateField('email', val);
  const setSpecialty = (val: string) => updateField('specialtyId', val);
  const setDate = (val: string) => updateField('preferredDate', val);
  const setTime = (val: string) => updateField('preferredTime', val);
  const setNotes = (val: string) => updateField('notes', val);
  const setIsEmergency = (val: boolean) => updateField('isEmergency', val);

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
    <section id="contacto" className="pt-6 pb-12 px-2 xs:px-3 bg-[#FAF9F5] relative">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-5 px-2">
          <h2 className="text-2xl xs:text-3xl font-black tracking-tight leading-tight text-stone-900">
            Agenda tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#84631E]">
              Consulta
            </span>
          </h2>
        </div>

        {/* Main Booking Form Card - Ancho completo de pantalla */}
        <div className="w-full bg-white rounded-2xl xs:rounded-3xl p-4 xs:p-5 sm:p-6 border border-[#D4AF37]/30 shadow-md mb-6">
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
                  className="w-full px-3.5 py-3 min-h-[44px] rounded-xl border border-stone-200 text-xs bg-stone-50/40 text-stone-800 focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
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
                  className="w-full px-3.5 py-3 min-h-[44px] rounded-xl border border-stone-200 text-xs bg-stone-50/40 text-stone-800 focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
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
                  className="w-full px-3.5 py-3 min-h-[44px] rounded-xl border border-stone-200 text-xs bg-stone-50/40 text-stone-800 focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  className="min-w-[44px] min-h-[44px] p-2.5 -mr-2.5 flex items-center justify-center cursor-pointer focus:outline-none"
                  aria-label="Alternar urgencia"
                >
                  <div
                    className={cn(
                      'w-10 h-6 rounded-full transition-colors relative flex items-center',
                      isEmergency ? 'bg-red-500' : 'bg-stone-300'
                    )}
                  >
                    <div
                      className={cn(
                        'w-4 h-4 rounded-full bg-white absolute top-1 shadow-sm transition-transform duration-200',
                        isEmergency ? 'translate-x-5' : 'translate-x-1'
                      )}
                    />
                  </div>
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

              {/* Submit Button with PC Animations */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0D0D0D] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/25 border border-[#D4AF37]/45 cursor-pointer mt-2 transition-all duration-300 group active:opacity-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                <span>Agendar por WhatsApp</span>
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
              <h4 className="text-xs font-bold text-stone-900">Dirección Exacta</h4>
              <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                {CLINIC_ADDRESS}
              </p>
              <p className="text-[10px] font-semibold text-[#84631E] mt-0.5">
                {CLINIC_CITY} • {CLINIC_REFERENCE}
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

        {/* Live Interactive Map Full Container */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden w-full flex flex-col text-left">
          {/* Header Bar */}
          <div className="px-4 py-3 bg-white border-b border-stone-200/80 flex items-center justify-between shrink-0">
            <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#84631E]" />
              <span>Ubicación Exacta • Junto a IntegralMedic</span>
            </span>
            <div className="flex items-center gap-2">
              <a
                href={CLINIC_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#84631E] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span className="text-stone-300">•</span>
              <a
                href={CLINIC_WAZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-stone-600 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Waze</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Full-bleed Map Embed */}
          <div className="w-full h-64 relative bg-stone-100">
            <iframe
              src={CLINIC_MAP_EMBED_URL}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Exacta Google Maps - Miranda Dental Studio La Maná"
              className="w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
